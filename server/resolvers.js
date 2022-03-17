const db = require("./db");

const Query = {
  company: (root, { id }) => db.companies.get(id),
  job: (root, { id }) => db.jobs.get(id),
  jobs: () => db.jobs.list(),
};

const Mutation = {
  createJob: (root, { input }, {user}) => {
    //check if user is authenticated
    if (!user) {
      throw new Error("Unauthorized user");
    }
 
    console.log("CONTEXT /n const context = ({req}) => ({user: req.user && db.users.get(req.user.sub)})) /n user:-------------------------------------");
    console.log(user);

    //const id = db.jobs.create(input);
    const id = db.jobs.create({ ...input, companyId: user.companyId });
    return db.jobs.get(id);
  },
};

const Company = {
  jobs: (company) =>
    db.jobs.list().filter((job) => job.companyId === company.id),
};

const Job = {
  company: (job) => db.companies.get(job.companyId),
};

module.exports = { Query, Mutation, Company, Job };
