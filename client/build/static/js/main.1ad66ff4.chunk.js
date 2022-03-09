(this["webpackJsonpjob-board-client"]=this["webpackJsonpjob-board-client"]||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);n(25);var a=n(1),s=n(23),c=n.n(s),r=n(4),i=n(5),o=n(6),l=n(7),d=n(12),j=n(2),u=n(13),b=n(8),h=n.n(b),p="accessToken";function m(){return(m=Object(u.a)(h.a.mark((function e(t,n){var a,s,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:9000/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:t,password:n})});case 2:if(!(a=e.sent).ok){e.next=9;break}return e.next=6,a.json();case 6:s=e.sent,c=s.token,localStorage.setItem(p,c);case 9:return e.abrupt("return",a.ok);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=[{id:"company1",name:"Company A",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:"company2",name:"Company B",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],v=(O[0],O[1],n(0)),x=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(r.a)(this,n);var s=(a=t.call(this,e)).props.match.params.companyId;return a.state={company:O.find((function(e){return e.id===s}))},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.company;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"title",children:e.name}),Object(v.jsx)("div",{className:"box",children:e.description})]})}}]),n}(a.Component),f=n(17),y=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",error:!1},a}return Object(i.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(f.a)({},n,a))}},{key:"handleClick",value:function(e){var t=this;e.preventDefault();var n=this.state;(function(e,t){return m.apply(this,arguments)})(n.email,n.password).then((function(e){e?t.props.onLogin():t.setState({error:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error;return Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Email"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",type:"text",name:"email",value:t,onChange:this.handleChange.bind(this)})})]}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Password"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",type:"password",name:"password",value:n,onChange:this.handleChange.bind(this)})})]}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("p",{className:"help is-danger",children:a&&"Invalid credentials"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("button",{className:"button is-link",onClick:this.handleClick.bind(this),children:"Login"})})]})]})}}]),n}(a.Component),g=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.jobs;return Object(v.jsx)("ul",{className:"box",children:e.map(this.renderJob.bind(this))})}},{key:"renderJob",value:function(e){var t=e.company?"".concat(e.title," at ").concat(e.company.name):e.title;return Object(v.jsx)("li",{className:"media",children:Object(v.jsx)("div",{className:"media-content",children:Object(v.jsx)(d.b,{to:"/jobs/".concat(e.id),children:t})})},e.id)}}]),n}(a.Component),N="http://localhost:9000/graphql";function k(){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:"\n            {\n                jobs{\n                  id\n                  title\n                  company{\n                    id\n                    name \n                  }\n                }\n              }\n            \n            "})});case 2:return t=e.sent,console.log("request.js is downloading from server"),e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.data.jobs);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:"\n          query JobQuery($id: ID!) {\n            job(id: $id){\n              id\n              title\n              company{\n                id\n                name\n              }\n              description\n              }\n          }",variables:{id:t}})});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,console.log("load single job ",a),e.abrupt("return",a.data.jobs);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={jobs:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,this.setState({jobs:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.jobs;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"title",children:"Job Board"}),Object(v.jsx)(g,{jobs:e})]})}}]),n}(a.Component),L=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={job:null},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.jobId,console.log("el job Id:",t),e.next=4,w({jobId:t});case 4:n=e.sent,this.setState({job:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.job;return e?Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"title",children:e.title}),Object(v.jsx)("h2",{className:"subtitle",children:Object(v.jsx)(d.b,{to:"/companies/".concat(e.company.id),children:e.company.name})}),Object(v.jsx)("div",{className:"box",children:e.description})]}):null}}]),n}(a.Component),J=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={title:"",description:""},a}return Object(i.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(f.a)({},n,a))}},{key:"handleClick",value:function(e){e.preventDefault(),console.log("should post a new job:",this.state)}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.description;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"title",children:"New Job"}),Object(v.jsx)("div",{className:"box",children:Object(v.jsxs)("form",{children:[Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Title"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",type:"text",name:"title",value:t,onChange:this.handleChange.bind(this)})})]}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Description"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("textarea",{className:"input",style:{height:"10em"},name:"description",value:n,onChange:this.handleChange.bind(this)})})]}),Object(v.jsx)("div",{className:"field",children:Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("button",{className:"button is-link",onClick:this.handleClick.bind(this),children:"Submit"})})})]})})]})}}]),n}(a.Component),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.loggedIn,n=e.onLogout;return t?Object(v.jsx)("nav",{className:"navbar",children:Object(v.jsxs)("div",{className:"navbar-start",children:[Object(v.jsx)(d.b,{className:"navbar-item",to:"/",children:"Home"}),Object(v.jsx)(d.b,{className:"navbar-item",to:"/jobs/new",children:"Post Job"}),Object(v.jsx)("a",{className:"navbar-item",onClick:n,children:"Logout"})]})}):Object(v.jsx)("nav",{className:"navbar",children:Object(v.jsxs)("div",{className:"navbar-start",children:[Object(v.jsx)(d.b,{className:"navbar-item",to:"/",children:"Home"}),Object(v.jsx)(d.b,{className:"navbar-item",to:"/login",children:"Login"})]})})}}]),n}(a.Component),D=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={loggedIn:!!localStorage.getItem(p)},a}return Object(i.a)(n,[{key:"handleLogin",value:function(){this.setState({loggedIn:!0}),this.router.history.push("/")}},{key:"handleLogout",value:function(){localStorage.removeItem(p),this.setState({loggedIn:!1}),this.router.history.push("/")}},{key:"render",value:function(){var e=this,t=this.state.loggedIn;return Object(v.jsx)(d.a,{ref:function(t){return e.router=t},children:Object(v.jsxs)("div",{children:[Object(v.jsx)(q,{loggedIn:t,onLogout:this.handleLogout.bind(this)}),Object(v.jsx)("section",{className:"section",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{exact:!0,path:"/",component:S}),Object(v.jsx)(j.a,{path:"/companies/:companyId",component:x}),Object(v.jsx)(j.a,{exact:!0,path:"/jobs/new",component:J}),Object(v.jsx)(j.a,{path:"/jobs/:jobId",component:L}),Object(v.jsx)(j.a,{exact:!0,path:"/login",render:function(){return Object(v.jsx)(y,{onLogin:e.handleLogin.bind(e)})}})]})})})]})})}}]),n}(a.Component);c.a.render(Object(v.jsx)(D,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1ad66ff4.chunk.js.map