(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(19),t(2)),l=t(3),i=t.n(l),m="/api/persons",d=function(){return i.a.get(m).then((function(e){return e.data}))},f=function(e){return i.a.post(m,e).then((function(e){return e.data}))},s=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},h=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){var n=e.message,t=e.status;if(null===n)return null;var a={color:t?"green":"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return r.a.createElement("div",{style:a},n)},p=function(e){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:e.addNumber},"add"))))},v=function(e){return r.a.createElement("div",null,e.personsToShow.map((function(n){return r.a.createElement("div",{key:n.name},n.name," ",n.number,r.a.createElement("button",{onClick:function(){return e.handleClick(n.id,n.name)}},"Delete"))})))},E=function(e){return r.a.createElement("div",null," filter shown with ",r.a.createElement("input",{value:e.filterValue,onChange:e.handleNewFilter})," ")},g=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),i=l[0],m=l[1],g=Object(a.useState)(""),w=Object(o.a)(g,2),C=w[0],j=w[1],N=Object(a.useState)(""),O=Object(o.a)(N,2),S=O[0],k=O[1],y=Object(a.useState)(null),T=Object(o.a)(y,2),x=T[0],D=T[1],A=Object(a.useState)(!0),B=Object(o.a)(A,2),F=B[0],I=B[1];Object(a.useEffect)((function(){d().then((function(e){u(e)}))}),[]);var J=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(b,{message:x,status:F}),r.a.createElement(E,{filterValue:S,handleNewFilter:function(e){return k(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(p,{newName:i,handleNameChange:function(e){return m(e.target.value)},newNumber:C,handleNumberChange:function(e){return j(e.target.value)},addNumber:function(e){e.preventDefault();var n={name:i,number:C};if(-1===t.findIndex((function(e){return e.name===i})))f(n).then((function(e){u(t.concat(e));var n="Added ".concat(i);I(!0),D(n),setTimeout((function(){return D(null)}),5e3)})).catch((function(e){I(!1),D(e.response.data.error),setTimeout((function(){return D(null)}),5e3)}));else if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var a=t.filter((function(e){return e.name===i})).map((function(e){return e.id})).toString();h(a,n).then((function(e){var n=t.filter((function(e){return e.id!==a})).concat(e);u(n);var r="Changed ".concat(i,"'s number");I(!0),D(r),setTimeout((function(){return D(null)}),5e3)})).catch((function(e){I(!1),D(e.toString()),setTimeout((function(){return D(null)}),5e3)}))}m(""),j("")}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{personsToShow:J,handleClick:function(e,n){if(window.confirm("Delete ".concat(n))){s(e).then((function(){u(t.filter((function(n){return n.id!==e})))}));var a="Deleted ".concat(n);I(!0),D(a),setTimeout((function(){return D(null)}),5e3)}}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7a2b2b38.chunk.js.map