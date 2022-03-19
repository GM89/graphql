import { ApolloClient, HttpLink, ApolloLink,InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
import{getAccessToken, isLoggedIn} from './auth.js'


const endpointURL = 'http://localhost:9000/graphql';


//Link is used forconnecting to the server /http.localhost:9000
//cache 
//this client objecdt has .query method that we use in loadJobs(), at the bottom of this file


//forward is a functon that allows to chain multiples step together. It forward the operation to the next step

const authLink = new ApolloLink((operation, forward) => {
  if (isLoggedIn()) {
    operation.setContext({
      headers: {
        'authorization': 'Bearer ' + getAccessToken()
      }
    });
  }
  return forward(operation);
});
/*We add auth link  before httplink (connection to server),  because the former prepares teh request, that means, setting the authorization header */
const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    new HttpLink({uri: endpointURL})
  ]),
  cache: new InMemoryCache()
});




const jobDetailFragment = gql`
  fragment JobDetail on Job {
    id
    title
    company {
      id
      name
    }
    description
  }
`;

const createJobMutation = gql`
  mutation CreateJob($input: CreateJobInput) {
    job: createJob(input: $input) {
      ...JobDetail
    }
  }
  ${jobDetailFragment}
`;






const companyQuery = gql`
  query CompanyQuery($id: ID!) {
    company(id: $id) {
      id
      name
      description
      jobs {
        id
        title
      }
    }
  }
`;

const jobQuery = gql`
  query JobQuery($id: ID!) {
    job(id: $id) {
      ...JobDetail
    }
  }
  ${jobDetailFragment}
`;

const jobsQuery = gql`
  query JobsQuery {
    jobs {
      id
      title
      company {
        id
        name
      }
    }
  }
`;

export async function createJob(input) {
  const {data: {job}} = await client.mutate({
    mutation: createJobMutation,
    variables: {input},
    update: (cache, {data}) => {
      cache.writeQuery({
        query: jobQuery,
        variables: {id: data.job.id},
        data
      })
    }
  });
  return job;
}

export async function loadCompany(id) {
  const {data: {company}} = await client.query({query: companyQuery, variables: {id}});
  return company;
}

export async function loadJob(id) {
  const {data: {job}} = await client.query({query: jobQuery, variables: {id}});
  return job;
}

/* gql is graph-tag. Here it means that the  gql parses this string
into an object that reprsents the query .
client.query() returns a promise and it results into an response that has several methods. 
So first we extrat the data*/ 


/*
fclient.query -> fetchPolicy: 
-cache first:  significa que intenta conseguir la data primero de la cache, y s
sólo si no la encuentra, busca en el secer
- no-cache: significa que nunca utiliza la cache. 
*/

export async function loadJobs() {
  const {data: {jobs}} = await client.query({query: jobsQuery, fetchPolicy: 'no-cache'});
  return jobs;
}

