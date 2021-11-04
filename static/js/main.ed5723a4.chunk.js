(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{222:function(e,a,s){},223:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s.n(t),n=s(85),r=s.n(n),i=(s(96),s(7)),o=s.n(i),l=s(12),m=s(6),d=s(2),j=s(5),b=s(13),u=s.n(b),p=s(3),h=s(14),x=s(0),O=function(){var e=Object(p.g)(),a=Object(t.useState)({email:"",password:""}),s=Object(m.a)(a,2),c=s[0],n=s[1],r=j.a().shape({password:j.c().required("Please Enter your password").matches("^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$","Must Contain 8 Characters, One Uppercase, One Lowercase and one special case Character"),email:j.c().matches("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$","At least five alphanumeric characters and Must contain @gmail.com").email("Email is invalid").required("Email is required")});return Object(x.jsx)(d.d,{initialValues:c,validationSchema:r,onSubmit:function(){var a=Object(l.a)(o.a.mark((function a(s){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.post("https://nodejs-task-5.herokuapp.com/singin",s);case 2:t=a.sent,n(t),e.push("/for");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:function(e){var a=e.errors,s=e.touched;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"container text-center",children:Object(x.jsx)("h1",{className:"font-weight-bold text-dark",children:"LogIn"})}),Object(x.jsxs)(d.c,{className:"ml-5",children:[Object(x.jsx)("div",{className:"form-row",children:Object(x.jsxs)("div",{className:"form-group col-10",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)(d.b,{name:"email",type:"text",className:"form-control"+(a.email&&s.email?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"email",component:"div",className:"invalid-feedback"})]})}),Object(x.jsx)("div",{className:"form-row",children:Object(x.jsxs)("div",{className:"form-group col-10",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)(d.b,{name:"password",type:"text",className:"form-control"+(a.password&&s.password?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"password",component:"div",className:"invalid-feedback"})]})}),Object(x.jsx)("button",{className:"btn btn-primary mr-2",type:"submit",children:"Submit"}),Object(x.jsxs)("span",{children:[" Don't have accound please  ",Object(x.jsx)(h.b,{to:"/reg",children:"SingUp"})]}),Object(x.jsxs)("p",{className:"foreget_password_link",children:["Foreget Password ",Object(x.jsx)(h.b,{to:"/password",children:"ForgetPassword"})]})]})]})}})},f=function(){var e=Object(p.g)(),a=Object(t.useState)({first_name:"",last_name:"",email:"",password:"",confirm_password:""}),s=Object(m.a)(a,2),c=s[0],n=s[1],r=j.a().shape({first_name:j.c().min(3,"Too Short!").max(30,"Too Long!").required("First Name is required"),last_name:j.c().min(3,"Too Short!").max(30,"Too Long!").required("Last Name is required"),password:j.c().required("Please Enter your password").matches("^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$","Must Contain 8 Characters, One Uppercase, One Lowercase and one special case Character"),email:j.c().matches("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$","At least five alphanumeric characters and Must contain @gmail.com").email("Email is invalid").required("Email is required"),confirm_password:j.c().required("Please Enter your password").oneOf([j.b("password"),null],"Passwords must match")});return Object(x.jsx)(d.d,{initialValues:c,validationSchema:r,onSubmit:function(){var a=Object(l.a)(o.a.mark((function a(s){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.post("https://nodejs-task-5.herokuapp.com/register",s);case 2:t=a.sent,n(t),e.push("/");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:function(e){var a=e.errors,s=e.touched;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"container text-center",children:Object(x.jsx)("h1",{className:"font-weight-bold text-dark",children:"Please Register"})}),Object(x.jsxs)(d.c,{className:"ml-5",children:[Object(x.jsxs)("div",{className:"form-row",children:[Object(x.jsxs)("div",{className:"form-group col-5",children:[Object(x.jsx)("label",{children:"First Name"}),Object(x.jsx)(d.b,{name:"first_name",type:"text",className:"form-control"+(a.first_name&&s.first_name?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"first_name",component:"div",className:"invalid-feedback"})]}),Object(x.jsxs)("div",{className:"form-group col-5",children:[Object(x.jsx)("label",{children:"Last Name"}),Object(x.jsx)(d.b,{name:"last_name",type:"text",className:"form-control"+(a.last_name&&s.last_name?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"last_name",component:"div",className:"invalid-feedback"})]})]}),Object(x.jsx)("div",{className:"form-row",children:Object(x.jsxs)("div",{className:"form-group col-10",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)(d.b,{name:"email",type:"text",className:"form-control"+(a.email&&s.email?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"email",component:"div",className:"invalid-feedback"})]})}),Object(x.jsx)("div",{className:"form-row",children:Object(x.jsxs)("div",{className:"form-group col-10",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)(d.b,{name:"password",type:"text",className:"form-control"+(a.password&&s.password?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"password",component:"div",className:"invalid-feedback"})]})}),Object(x.jsx)("div",{className:"form-row",children:Object(x.jsxs)("div",{className:"form-group col-10",children:[Object(x.jsx)("label",{children:"Confirm Password"}),Object(x.jsx)(d.b,{name:"confirm_password",type:"text",className:"form-control"+(a.confirm_password&&s.confirm_password?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"confirm_password",component:"div",className:"invalid-feedback"})]})}),Object(x.jsx)("button",{className:"btn btn-primary mr-2",type:"submit",children:"Submit"}),Object(x.jsx)("button",{className:"btn btn-success mr-2",type:"reset",children:"Reset"}),Object(x.jsxs)("span",{children:["Already SingUp please",Object(x.jsx)(h.b,{to:"/",children:"LogIn"})]})]})]})}})},v=s(40),w=s(54),g=function(){var e=Object(p.g)(),a=Object(t.useState)("email already"),s=Object(m.a)(a,2),c=s[0],n=s[1],r=Object(t.useState)({first_name:"",last_name:"",email:"",password:"",confirm_password:""}),i=Object(m.a)(r,2),d=i[0],j=i[1],b=function(){var a=Object(l.a)(o.a.mark((function a(s){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),a.next=3,u.a.post("/register",d).then((function(a){j(t),e.push("/")})).catch((function(e){console.log(e.response.data),n(e.response.data.errors)}));case 3:t=a.sent;case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),h=function(e){var a=e.target.id;j(Object(w.a)(Object(w.a)({},d),{},Object(v.a)({},a,e.target.value)))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"container text-center",children:Object(x.jsx)("h1",{className:"font-weight-bold text-dark",children:"Add User"})}),Object(x.jsx)("div",{children:c}),Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{class:"mb-3",children:[Object(x.jsx)("lable",{children:"first name"}),Object(x.jsx)("input",{type:"text",id:"first_name",class:"form-control",name:"fname",value:d.first_name,onChange:h})]}),Object(x.jsxs)("div",{class:"mb-3",children:[Object(x.jsx)("lable",{children:"last name"}),Object(x.jsx)("input",{type:"text",id:"last_name",class:"form-control",value:d.last_name,onChange:h})]}),Object(x.jsxs)("div",{class:"mb-3",children:[Object(x.jsx)("lable",{children:"email"}),Object(x.jsx)("input",{type:"email",id:"email",class:"form-control",value:d.email,onChange:h})]}),Object(x.jsxs)("div",{class:"mb-3",children:[Object(x.jsx)("lable",{children:"password"}),Object(x.jsx)("input",{type:"text",id:"password",class:"form-control",name:"email",value:d.password,onChange:h})]}),Object(x.jsxs)("div",{class:"mb-3",children:[Object(x.jsx)("lable",{children:"confirm password"}),Object(x.jsx)("input",{id:"confirm_password",type:"text",class:"form-control",name:"email",value:d.confirm_password,onChange:h})]}),Object(x.jsx)("button",{type:"submit",class:"btn btn-primary",onClick:function(e){return b(e)},children:"Submit"})]})]})},N=function(){var e=Object(p.g)(),a=Object(t.useState)({email:""}),s=Object(m.a)(a,2),c=s[0],n=s[1],r=j.a().shape({email:j.c().matches("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$","At least five alphanumeric characters and Must contain @gmail.com").email("Email is invalid").required("Email is required")});return Object(x.jsx)(d.d,{initialValues:c,validationSchema:r,onSubmit:function(){var a=Object(l.a)(o.a.mark((function a(s){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.put("https://nodejs-task-5.herokuapp.com/forget_password",s);case 2:t=a.sent,n(t),e.push("/");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:function(e){var a=e.errors,s=e.touched;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"container text-center",children:Object(x.jsx)("h1",{className:"font-weight-bold text-dark",children:"LogIn"})}),Object(x.jsxs)(d.c,{className:"ml-5",children:[Object(x.jsx)("div",{className:"form-row",children:Object(x.jsxs)("div",{className:"form-group col-10",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)(d.b,{name:"email",type:"text",className:"form-control"+(a.email&&s.email?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"email",component:"div",className:"invalid-feedback"})]})}),Object(x.jsx)("button",{className:"btn btn-primary mr-2",type:"submit",children:"Submit"}),Object(x.jsxs)("span",{children:["Back to Login ",Object(x.jsx)(h.b,{to:"/",children:"LogIn"})]})]})]})}})},y=function(){var e=Object(p.g)(),a=Object(t.useState)({password:""}),s=Object(m.a)(a,2),c=s[0],n=s[1],r=j.a().shape({password:j.c().required("Please Enter your password").matches("^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$","Must Contain 8 Characters, One Uppercase, One Lowercase and one special case Character"),confirm_password:j.c().required("Please Enter your password").oneOf([j.b("password"),null],"Passwords must match")});return Object(x.jsx)(d.d,{initialValues:c,validationSchema:r,onSubmit:function(){var a=Object(l.a)(o.a.mark((function a(s){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.put("https://nodejs-task-5.herokuapp.com/:token/:email",s);case 2:t=a.sent,n(t),e.push("/");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),children:function(e){var a=e.errors,s=e.touched;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"container text-center",children:Object(x.jsx)("h1",{className:"font-weight-bold text-dark",children:"AddUser"})}),Object(x.jsxs)(d.c,{className:"ml-5",children:[Object(x.jsx)("div",{className:"form-row",children:Object(x.jsxs)("div",{className:"form-group col-10",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)(d.b,{name:"password",type:"text",className:"form-control"+(a.password&&s.password?" is-invalid":"")}),Object(x.jsx)(d.a,{name:"password",component:"div",className:"invalid-feedback"})]})}),Object(x.jsx)("button",{className:"btn btn-primary mr-2",type:"submit",children:"Submit"}),Object(x.jsx)("button",{className:"btn btn-success mr-2",type:"reset",children:"Reset"})]})]})}})},k=(s(222),function(){return Object(x.jsx)("div",{children:Object(x.jsx)(h.a,{children:Object(x.jsxs)(p.d,{children:[Object(x.jsx)(p.b,{path:"/reg",component:f}),Object(x.jsx)(p.b,{exact:!0,path:"/",component:O}),Object(x.jsx)(p.b,{path:"/for",component:g}),Object(x.jsx)(p.b,{exact:!0,path:"/password",component:N}),Object(x.jsx)(p.b,{exact:!0,path:"/reset/:token/:email",component:y}),Object(x.jsx)(p.a,{to:"/"})]})})})}),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,224)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;s(e),t(e),c(e),n(e),r(e)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),_()},96:function(e,a,s){}},[[223,1,2]]]);
//# sourceMappingURL=main.ed5723a4.chunk.js.map