(this["webpackJsonpgithub-api"]=this["webpackJsonpgithub-api"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(13),s=n.n(i),a=(n(19),n(4)),r=(n(20),n(14)),u=n.n(r),j=n(0);var o=function(){function e(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([{name:""}]),r=Object(a.a)(s,2),o=r[0],l=r[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"List Github public repos for a user"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("input",{placeholder:"username",onChange:function(e){e.preventDefault(),i(e.target.value)}}),Object(j.jsx)("button",{onClick:function(e){u.a.get("https://api.github.com/users/".concat(n,"/repos")).then((function(e){var t=e.data;console.log(t),l(t)}))},children:"Search"})]}),o?Object(j.jsx)("ul",{children:o.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("a",{href:e.html_url,children:e.name})," developed in ",Object(j.jsx)("span",{children:e.language})]},t)}))}):Object(j.jsx)("div",{})]})}return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(e,{})})};s.a.render(Object(j.jsx)(o,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.6163a749.chunk.js.map