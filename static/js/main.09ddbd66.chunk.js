(this["webpackJsonprouter-1"]=this["webpackJsonprouter-1"]||[]).push([[0],Array(45).concat([function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),r=a(6),i=a(12),o=a(4),l=a(8),j=a(11),b=a(13),d=function(e,t,a){var c="";if(a){var s=new Date;s.setTime(s.getTime()+24*a*60*60*1e3),c="; expires="+s.toUTCString()}document.cookie=e+"="+(t||"")+c+"; path=/"},u=function(e){for(var t=e+"=",a=document.cookie.split(";"),c=0;c<a.length;c++){for(var s=a[c];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return null},m=a(0),O=Object(c.createContext)(),h=function(e){var t=Object(c.useState)(u("c_user")),a=Object(o.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(u("auth")),i=Object(o.a)(r,2),l=i[0],j=i[1],b=Object(c.useState)(u("r_user")),h=Object(o.a)(b,2),x=h[0],_=h[1];return Object(m.jsx)(O.Provider,{value:{userId:s,auth:l,role:x,signIn:function(e,t){d("auth",e,15),d("c_user",t.user.id,15),d("r_user",null,15),"admin"===t.user.role&&d("r_user","CRlYh4nbPiZNU",15),j(e),n(t.user.id),_(t.user.role)},signOut:function(){d("auth","",0),d("c_user","",0),d("r_user","",0),j(""),n(""),_("")}},children:e.children})};a(45);var x=function(){var e=Object(c.useContext)(O).signOut,t=Object(c.useState)("dark"===localStorage.getItem("theme")),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme"))}),[s]),Object(m.jsx)("div",{className:"container__tools",children:Object(m.jsxs)("div",{className:"container__tools__icon",children:[Object(m.jsx)(b.b,{to:"/",className:"link",children:Object(m.jsx)(j.a,{icon:l.i})}),Object(m.jsx)(j.a,{onClick:e,icon:l.n}),Object(m.jsxs)("div",{className:"container-switch",children:[Object(m.jsx)("div",{className:"icon",children:s?Object(m.jsx)(j.a,{icon:l.s}):Object(m.jsx)(j.a,{icon:l.l})}),Object(m.jsx)("input",{className:"switch",type:"checkbox",defaultChecked:s,onChange:function(){!1===s?(localStorage.setItem("theme","dark"),n(!0)):(localStorage.setItem("theme","light"),n(!1))}})]})]})})},_=a(7),p=a(29),f=a(15),g=(a(24),a(46),["isLoader","title","url","to"]);var v=function(e){var t=e.isLoader,a=e.title,c=e.url,s=e.to,r=Object(p.a)(e,g),i=Object(n.m)();return Object(m.jsxs)("div",{className:"container__user",children:[Object(m.jsx)(b.b,Object(_.a)(Object(_.a)({to:s+i.search},r),{},{children:t?Object(m.jsx)(f.a,{height:50,width:50,circle:!0}):Object(m.jsx)("img",{src:c,alt:"",className:"container__user__img"})})),Object(m.jsx)(b.b,Object(_.a)(Object(_.a)({to:s+i.search},r),{},{children:t?Object(m.jsx)("p",{className:"container__user__name",children:Object(m.jsx)(f.a,{count:1,width:150,height:10})}):Object(m.jsx)("p",{className:"container__user__name",children:a})}))]})};a(47);var N=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){fetch("https://tavopaz12.ml/api/v1/users/".concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}))}),[e]),s};var y=function(){var e=u("c_user"),t=N(e),a=Object(c.useContext)(O).signOut,s=Array.isArray(t)&&!t.length;return t?Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)(v,{to:"/user/".concat(t.userName),isLoader:s,title:t.name,url:t.avatar},t.userName),Object(m.jsx)(x,{})]}):(a(),Object(m.jsx)(n.a,{to:"/login"}))};a(48);var w=function(e){var t=e.title,a=e.description,s=e.image,n=e.to,r=Object(c.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1];return Object(m.jsxs)("div",{className:"container__card",children:[Object(m.jsxs)("div",{className:"wrapper__card",children:[Object(m.jsx)("img",{src:s,alt:"Imagen de curso",loading:"lazy",onClick:function(){j(!1===l)},className:!0===l?"active":""}),Object(m.jsx)("div",{className:"title__cardSection",children:Object(m.jsx)("p",{children:t})})]}),Object(m.jsxs)("div",{className:"content__cardSection",children:[Object(m.jsx)("p",{children:a}),Object(m.jsx)("div",{className:"buttons__cardSection",children:Object(m.jsx)("div",{className:"btn__cardSection",children:Object(m.jsx)(b.b,{to:n,className:"link",children:Object(m.jsx)("button",{children:"Ir al curso"})})})})]})]})};a(49),a(50);function C(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"loader"}),Object(m.jsx)("div",{className:"loader"})]})}var P=a(79),S="https://tavopaz12.ml/api/v1/cursos";function E(){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(P.a)({url:S,method:"GET"});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var A=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),l=Object(o.a)(n,2),j=l[0],b=l[1];return Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:200===(t=e.sent).status&&(b(t.data),s(!1));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)(m.Fragment,{children:[a&&Object(m.jsx)(C,{}),Object(m.jsx)("div",{className:"bg__home"}),Object(m.jsxs)("div",{className:"home__container",children:[Object(m.jsx)(y,{}),Object(m.jsx)("div",{className:"cards__container",children:j.map((function(e){return Object(m.jsx)(w,{image:"".concat(e.image),title:e.title,description:"",to:"/".concat(e.description)},e.id)}))})]})]})};var F=function(e){var t=e.errors,a=e.titleBtn;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{type:"submit",className:"button__login",style:{pointerEvents:t.password.err||t.email.err?"none":"visible",backgroundColor:t.password.err||t.email.err?"#7a9f6c":""},children:a})})};var D=function(e){var t=e.formData,a=e.setFormData,c=e.errors,s=e.setErrors,n=new RegExp(/[a-zA-Z0-9!#$%&'*_+-]([.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$/()=?\xbf!.,:;]|d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?/);return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("p",{className:"field__title",style:{color:c.email.err?"#fefe00":""},children:c.email.err?c.email.msgErr:"Correo Electronico*"}),Object(m.jsx)(j.a,{icon:l.e}),Object(m.jsx)("input",{className:"field__input",type:"email",placeholder:"Correo Electronico",value:t.email,onChange:function(e){return a(Object(_.a)(Object(_.a)({},t),{},{email:e.target.value}))},onBlur:function(){var e=!n.test(t.email);s(Object(_.a)(Object(_.a)({},c),{},{email:{err:e,msgErr:"Introduza un correo valido"}}))},style:{borderBottom:c.email.err?"2px solid #fefe00":""},required:!0})]})};var z=function(e){var t=e.formData,a=e.setFormData,s=e.errors,n=e.setErrors,r=e.pattern,i=e.title,b=e.maxlength,d=Object(c.useState)(!1),u=Object(o.a)(d,2),O=u[0],h=u[1],x=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/);function p(){var e=!x.test(t.password);n(Object(_.a)(Object(_.a)({},s),{},{password:{err:e,msgErr:"Minimo 6 caracteres, m\xe1ximo 12, incluir una letra may\xfascula, un n\xfamero y no debe contener caracteres especiales."}}))}return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("p",{className:"field__title",style:{color:s.password.err?"#fefe00":""},children:s.password.err?s.password.msgErr:"Contrase\xf1a*"}),Object(m.jsx)(j.a,{icon:O?l.g:l.f,onClick:function(){return h(!O)}}),Object(m.jsx)("input",{className:"field__input",type:O?"text":"password",placeholder:"De 6 a 12 caracteres, una mayuscula y un numero",value:t.password,onChange:function(e){return a(Object(_.a)(Object(_.a)({},t),{},{password:e.target.value}))},onKeyUp:p,onBlur:p,pattern:r,title:i,maxLength:b,required:!0,style:{borderBottom:s.password.err?"2px solid #fefe00":""}})]})};a(55),a(56);function T(e){var t=e.show,a=e.success,c=e.error,s=e.info,n=e.warning,r=e.text;return Object(m.jsx)("ul",{className:t?"notifications":"hide",children:Object(m.jsx)("li",{className:a?"success toast":c?"error toast":s?"info toast":n?"warning toast":"toast",children:Object(m.jsxs)("div",{className:"column",children:[Object(m.jsx)(j.a,{className:"icon__alert",icon:a?l.a:c?l.c:s?l.b:n?l.t:l.a}),Object(m.jsx)("span",{children:r})]})})})}var L=a.p+"static/media/login.58d756e4.jpg";var Z=function(){var e=Object(c.useContext)(O).signIn,t=Object(c.useState)([]),a=Object(o.a)(t,2),s=a[0],l=a[1],j=Object(c.useState)(!1),d=Object(o.a)(j,2),u=d[0],h=d[1],x=Object(c.useState)(!1),_=Object(o.a)(x,2),p=_[0],f=_[1],g=Object(c.useState)({email:{err:!1,msgErr:""},password:{err:!1,msgErr:""},input:{err:!1,msgErr:""}}),v=Object(o.a)(g,2),N=v[0],y=v[1],w=Object(c.useState)({email:"",password:""}),C=Object(o.a)(w,2),P=C[0],S=C[1],E=function(){var t=Object(i.a)(Object(r.a)().mark((function t(a){var c,s,n,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=new AbortController,s=c.signal,a.preventDefault(),t.prev=3,t.next=6,fetch("https://tavopaz12.ml/api/v1/auth/login",{method:"POST",signal:s,body:JSON.stringify(P),headers:{"Content-type":"application/json; charset=UTF-8"}});case 6:return n=t.sent,t.next=9,n.json();case 9:i=t.sent,n.ok&&(l({data:i,message:"Inicio de sesion exitoso",status:200}),h(!0),e(i.token,i),setTimeout((function(){f(!0)}),0)),n.ok||(l(i),h(!0)),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),l({message:"Error durante la solicitud",statusCode:500}),h(!0);case 18:setTimeout((function(){h(!1)}),5e3);case 19:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(e){return t.apply(this,arguments)}}();return p?Object(m.jsx)(n.a,{to:"/inicio"}):Object(m.jsxs)("div",{className:"login",children:[401===s.statusCode||500===s.statusCode?Object(m.jsx)(T,{show:u,error:!0,text:s.message}):"",Object(m.jsx)("div",{className:"image__login",children:Object(m.jsx)("img",{src:L,alt:"",width:"150%"})}),Object(m.jsxs)("div",{className:"form__login",children:[Object(m.jsx)("h2",{className:"form__login__title",children:"Bienvenido"}),Object(m.jsx)("div",{className:"bird-container bird-container--one",children:Object(m.jsx)("div",{className:"bird bird--one"})}),Object(m.jsx)("br",{}),Object(m.jsxs)("form",{action:"",onSubmit:E,children:[Object(m.jsx)(D,{formData:P,setFormData:S,errors:N,setErrors:y,pattern:"[a-zA-Z0-9!#$%&'*_+-]([.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$/()=?\xbf!.,:;]|d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?",title:"Introduce un correo valido"}),Object(m.jsx)("br",{}),Object(m.jsx)(z,{formData:P,setFormData:S,errors:N,setErrors:y,maxlength:"12"}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)(b.c,{className:"forgot__password",to:"/recovery",children:"He olvidado mi contrase\xf1a"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("center",{children:Object(m.jsx)(F,{formData:P,errors:N,titleBtn:"Acceder"})})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsxs)("h3",{href:"",className:"create__account",children:["\xbfAun no tienes una cuenta? ",Object(m.jsx)("pre",{}),Object(m.jsx)(b.c,{to:"/registro",className:"register",children:"Crear una nueva cuenta"})]})})]})]})};function I(){return Object(m.jsx)("div",{})}a(57);var q=function(e){var t=e.title,a=e.to;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"flex-container",children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{className:"fade-in",id:"digit1",children:"4"}),Object(m.jsx)("span",{className:"fade-in",id:"digit2",children:"0"}),Object(m.jsx)("span",{className:"fade-in",id:"digit3",children:"4"})]}),Object(m.jsx)("h3",{className:"fadeIn",children:t}),Object(m.jsx)(b.b,{to:a,children:Object(m.jsx)("button",{type:"button",name:"button",children:"Regresar"})})]})})})};a(58);function U(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("main",{children:[Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"70",viewBox:"0 0 100 68",children:[Object(m.jsxs)("g",{id:"large",children:[Object(m.jsx)("path",{fill:"none",stroke:"#F44",d:"M55.8 38.5l6.2-1.2c0-1.8-.1-3.5-.4-5.3l-6.3-.2c-.5-2-1.2-4-2.1-6l4.8-4c-.9-1.6-1.9-3-3-4.4l-5.6 3c-1.3-1.6-3-3-4.7-4.1l2-6A30 30 0 0 0 42 8l-3.3 5.4c-2-.7-4.2-1-6.2-1.2L31.3 6c-1.8 0-3.5.1-5.3.4l-.2 6.3c-2 .5-4 1.2-6 2.1l-4-4.8c-1.6.9-3 1.9-4.4 3l3 5.6c-1.6 1.3-3 3-4.1 4.7l-6-2A32.5 32.5 0 0 0 2 26l5.4 3.3c-.7 2-1 4.2-1.2 6.2L0 36.7c0 1.8.1 3.5.4 5.3l6.3.2c.5 2 1.2 4 2.1 6l-4.8 4c.9 1.6 1.9 3 3 4.4l5.6-3c1.4 1.6 3 3 4.7 4.1l-2 6A30.5 30.5 0 0 0 20 66l3.4-5.4c2 .7 4 1 6.1 1.2l1.2 6.2c1.8 0 3.5-.1 5.3-.4l.2-6.3c2-.5 4-1.2 6-2.1l4 4.8c1.6-.9 3-1.9 4.4-3l-3-5.6c1.6-1.3 3-3 4.1-4.7l6 2A32 32 0 0 0 60 48l-5.4-3.3c.7-2 1-4.2 1.2-6.2zm-13.5 4a12.5 12.5 0 1 1-22.6-11 12.5 12.5 0 0 1 22.6 11z"}),Object(m.jsx)("animateTransform",{attributeName:"transform",begin:"0s",dur:"3s",from:"0 31 37",repeatCount:"indefinite",to:"360 31 37",type:"rotate"})]}),Object(m.jsxs)("g",{id:"small",children:[Object(m.jsx)("path",{fill:"none",stroke:"#F44",d:"M93 19.3l6-3c-.4-1.6-1-3.2-1.7-4.8L90.8 13c-.9-1.4-2-2.7-3.4-3.8l2.1-6.3A21.8 21.8 0 0 0 85 .7l-3.6 5.5c-1.7-.4-3.4-.5-5.1-.3l-3-5.9c-1.6.4-3.2 1-4.7 1.7L70 8c-1.5 1-2.8 2-3.9 3.5L60 9.4a20.6 20.6 0 0 0-2.2 4.6l5.5 3.6a15 15 0 0 0-.3 5.1l-5.9 3c.4 1.6 1 3.2 1.7 4.7L65 29c1 1.5 2.1 2.8 3.5 3.9l-2.1 6.3a21 21 0 0 0 4.5 2.2l3.6-5.6c1.7.4 3.5.5 5.2.3l2.9 5.9c1.6-.4 3.2-1 4.8-1.7L86 34c1.4-1 2.7-2.1 3.8-3.5l6.3 2.1a21.5 21.5 0 0 0 2.2-4.5l-5.6-3.6c.4-1.7.5-3.5.3-5.1zM84.5 24a7 7 0 1 1-12.8-6.2 7 7 0 0 1 12.8 6.2z"}),Object(m.jsx)("animateTransform",{attributeName:"transform",begin:"0s",dur:"2s",from:"0 78 21",repeatCount:"indefinite",to:"-360 78 21",type:"rotate"})]})]}),Object(m.jsx)("h1",{children:"P\xe1gina en Mantenimiento"}),Object(m.jsx)("h2",{children:"Perdon por los incovenientes."}),Object(m.jsx)("h3",{children:"Agradecemos su espera..."}),Object(m.jsx)("a",{href:"https://tucanteach.ml/",children:"tucanteach.ml"})]}),Object(m.jsx)("footer",{children:"@tavopaz_12"})]})}var B=a(80);a(59),a(60),a(61);var $=function(e){var t=e.titleLabel,a=e.icon,c=e.inputType,s=e.placeholder,n=e.value,r=e.onChange,i=e.onBlur,o=e.pattern,l=e.minlength,j=e.maxlength,b=e.title;return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("p",{className:"field__title",children:[t,":"]}),a,Object(m.jsx)("input",{className:"field__input",type:c,placeholder:s,value:n,onChange:r,onBlur:i,pattern:o,minLength:l,maxLength:j,title:b,required:!0})]})};var M=function(e){var t=e.page,a=e.setPage,c=e.formData,s=c.userName,n=c.name,r=c.lastName;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:"button__login",onKeyUp:function(){return s.length<=2||n.length<=2||r.length<=2?"":a(t+1)},onClick:function(){return""===n.trim()||""===r.trim()||""===s.trim()||s.length<=2||n.length<=2||r.length<=2?"":a(t+1)},style:{pointerEvents:s.length<=2||n.length<=2||r.length<=2?"none":"visible",backgroundColor:s.length<=2||n.length<=2||r.length<=2?"#7a9f6c":""},children:"Next"})})};var R=function(e){var t=e.page,a=e.setPage,c=e.formData,s=e.setFormData;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("br",{}),Object(m.jsx)($,{inputType:"text",titleLabel:"Nombre (s)*",placeholder:"Nombre completo",value:c.name,onChange:function(e){return s(Object(_.a)(Object(_.a)({},c),{},{name:e.target.value}))},icon:Object(m.jsx)(j.a,{icon:l.u}),title:"El campo no puede estar vacio",maxlength:"20"}),Object(m.jsx)("br",{}),Object(m.jsx)($,{inputType:"text",titleLabel:"Apellidos*",placeholder:"Apellidos",value:c.lastName,onChange:function(e){return s(Object(_.a)(Object(_.a)({},c),{},{lastName:e.target.value}))},icon:Object(m.jsx)(j.a,{icon:l.v}),title:"El campo no puede estar vacio",maxlength:"20"}),Object(m.jsx)("br",{}),Object(m.jsx)($,{inputType:"text",titleLabel:"Nombre de usuario*",placeholder:"Escribe tu nombre de usuario",value:c.userName,onChange:function(e){return s(Object(_.a)(Object(_.a)({},c),{},{userName:e.target.value}))},icon:Object(m.jsx)(j.a,{icon:l.w}),title:"El campo no puede estar vacio",maxlength:"10"}),Object(m.jsx)("br",{}),Object(m.jsx)("center",{children:Object(m.jsx)(M,{formData:c,setPage:a,page:t})})]})};var J=function(e){var t=e.setPage,a=e.page;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:"button__login",onClick:function(){t(a-1)},children:"Previo"})})};a(62);var G=function(e){var t=e.titleLabel,a=e.options,c=e.icon,s=e.onChange,n=e.nameValue;return Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("p",{className:"field__title",children:[t,":"]}),Object(m.jsxs)("div",{className:"content-select",children:[c,Object(m.jsxs)("select",{defaultValue:""===n?"-- Selecciona una opci\xf3n --":n,required:!0,onChange:s,style:{borderBottom:""===n?"2px solid #fefe00":""},children:[Object(m.jsx)("option",{disabled:!0,children:"-- Selecciona una opci\xf3n --"}),a.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))]})]})]})};var V=function(e){var t=e.page,a=e.setPage,c=e.formData,s=c.nivelSchool,n=c.nameSchool,r=c.gradeSchool,i=c.ubicacionSchool;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:"button__login",onClick:function(){return""===s.trim()||""===n.trim()||""===r.trim()||""===i.trim()?"":a(t+1)},style:{pointerEvents:""===s||n.length<=5||i.length<=5||""===r?"none":"visible",backgroundColor:""===s||""===r||n.length<=5||i.length<=5?"#7a9f6c":""},children:"next"})})};var K=function(e){var t=e.page,a=e.setPage,c=e.formData,s=e.setFormData;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(G,{titleLabel:""===c.nivelSchool?"Seleccione una opcion*":"Nivel de estudio",icon:Object(m.jsx)(j.a,{icon:l.p,className:"icon-select"}),options:["Primaria","Secundaria"],nameValue:c.nivelSchool,onChange:function(e){return s(Object(_.a)(Object(_.a)({},c),{},{nivelSchool:e.target.value}))}}),Object(m.jsx)($,{inputType:"text",titleLabel:"Nombre de la escuela*",placeholder:"Nombre de la escuela",maxlength:"50",value:c.nameSchool,onChange:function(e){return s(Object(_.a)(Object(_.a)({},c),{},{nameSchool:e.target.value}))},icon:Object(m.jsx)(j.a,{icon:l.o})}),Object(m.jsx)(G,{titleLabel:""===c.gradeSchool?"Seleccione una opcion*":"Grado de estudios",icon:Object(m.jsx)(j.a,{icon:l.q,className:"icon-select"}),options:["Primero","Segundo","Tercero","Cuarto","Quinto","Sexto"],nameValue:c.gradeSchool,onChange:function(e){return s(Object(_.a)(Object(_.a)({},c),{},{gradeSchool:e.target.value}))}}),Object(m.jsx)($,{inputType:"text",titleLabel:"Ubicacion*",placeholder:"Direccion de la escuela",maxlength:"50",value:c.ubicacionSchool,onChange:function(e){return s(Object(_.a)(Object(_.a)({},c),{},{ubicacionSchool:e.target.value}))},icon:Object(m.jsx)(j.a,{icon:l.k})}),Object(m.jsx)(J,{setPage:a,page:t}),Object(m.jsx)(V,{setPage:a,page:t,formData:c})]})};var H=function(e){var t=e.page,a=e.setPage,c=e.formData,s=e.setFormData,n=e.errors,r=e.setErrors;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("br",{}),Object(m.jsx)(D,{formData:c,setFormData:s,errors:n,setErrors:r,pattern:"[a-zA-Z0-9!#$%&'*_+-]([.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$/()=?\xbf!.,:;]|d)+[a-zA-Z0-9][.][a-zA-Z]{2,4}([.][a-zA-Z]{2})?",title:"Introduce un correo valido"}),Object(m.jsx)("br",{}),Object(m.jsx)(z,{formData:c,setFormData:s,errors:n,setErrors:r,maxlength:"12"}),Object(m.jsx)("br",{}),Object(m.jsx)($,{inputType:"tel",titleLabel:"Numero de telefono",placeholder:"xxx xxx xxxx",value:c.cellPhone,onChange:function(e){return s(Object(_.a)(Object(_.a)({},c),{},{cellPhone:e.target.value}))},icon:Object(m.jsx)(j.a,{icon:l.m}),maxlength:"10"}),Object(m.jsx)(J,{page:t,setPage:a}),Object(m.jsx)(F,{formData:c,errors:n,titleBtn:"Registrar"})]})};var Y=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)([]),j=Object(o.a)(l,2),d=j[0],u=j[1],O=Object(c.useState)(!1),h=Object(o.a)(O,2),x=h[0],_=h[1],p=Object(c.useState)(!1),f=Object(o.a)(p,2),g=f[0],v=f[1],N=Object(c.useState)({email:{err:!1,msgErr:""},password:{err:!1,msgErr:""},input:{err:!1,msgErr:""}}),y=Object(o.a)(N,2),w=y[0],C=y[1],P=Object(c.useState)(!1),S=Object(o.a)(P,2),E=S[0],k=S[1],A=Object(B.a)(),F=Object(c.useState)({id:A,name:"",lastName:"",userName:"",nivelSchool:"",nameSchool:"",gradeSchool:"",ubicacionSchool:"",email:"",password:"",cellPhone:""}),D=Object(o.a)(F,2),z=D[0],Z=D[1],I=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,c,s,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new AbortController,c=a.signal,t.preventDefault(),e.prev=3,e.next=6,fetch("https://tavopaz12.ml/api/v1/users",{method:"POST",signal:c,body:JSON.stringify(z),headers:{"Content-type":"application/json; charset=UTF-8"}});case 6:return s=e.sent,e.next=9,s.json();case 9:n=e.sent,s.ok&&(u({data:n,message:"Registro exitoso",statusCode:200}),k(!0),_(!0),setTimeout((function(){v(!0)}),5e3)),s.ok||(u(n),k(!0)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),u({message:"Error durante la solicitud",statusCode:500}),k(!0);case 18:setTimeout((function(){k(!1)}),5e3);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();console.log(d.errors);var q=[Object(m.jsx)(R,{page:a,setPage:s,formData:z,setFormData:Z}),Object(m.jsx)(K,{page:a,setPage:s,formData:z,setFormData:Z}),Object(m.jsx)(H,{page:a,setPage:s,formData:z,setFormData:Z,setErrors:C,errors:w})];return g?Object(m.jsx)(n.a,{to:"/login"}):Object(m.jsxs)("div",{className:"login",children:[200===d.statusCode?Object(m.jsx)(T,{show:E,success:!0,text:"Registro exitoso"}):400===d.statusCode?Object(m.jsx)(T,{show:E,error:!0,text:d.message}):409===d.statusCode?Object(m.jsx)(T,{show:E,error:!0,text:"".concat("user_name"===d.errors[0].path?"Este nombre de usuario ya se encuentra registrado!!!":"El email ya se encuentra registrado!!!")}):500===d.statusCode?Object(m.jsx)(T,{show:E,error:!0,text:d.message}):"",Object(m.jsx)("div",{className:"image__login",children:Object(m.jsx)("img",{src:L,alt:"",width:"150%"})}),Object(m.jsxs)("div",{className:"form__login",children:[Object(m.jsx)("h2",{className:"form__login__title",children:"Formulario de registro"}),Object(m.jsx)("div",{className:"bird-container bird-container--one",children:Object(m.jsx)("div",{className:"bird bird--one"})}),Object(m.jsxs)("div",{className:"steps",children:[Object(m.jsx)("p",{style:{textDecoration:0===a?"none":1===a||2===a?"line-through #1c3d36 3px":"none"},children:"Personal"}),Object(m.jsx)("p",{style:{textDecoration:0===a||1===a?"none":2===a?"line-through #1c3d36 3px":"none"},children:"Escolar"}),Object(m.jsx)("p",{children:"Contacto"})]}),Object(m.jsx)("div",{className:"progress-bar",children:Object(m.jsx)("div",{style:{width:0===a?"33%":1===a?"66%":"100%"}})}),Object(m.jsx)("form",{action:"",onSubmit:I,className:x?"hide__inputs":"",children:Object(m.jsx)("div",{children:q[a]})}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{href:"",className:"create__account",children:["Ya tengo una cuenta!!"," ",Object(m.jsx)(b.c,{to:"/login",className:"register",children:"Iniciar Sesi\xf3n"})]})})]})]})};a(63),a(64);function Q(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],b=Object(n.m)(),d=Object(c.useState)(!1),u=Object(o.a)(d,2),O=u[0],h=u[1],x=b.search.split("=").at(1),p=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{8,20}$/),f=Object(c.useState)({newPassword:"",token:x}),g=Object(o.a)(f,2),v=g[0],N=g[1],y=Object(c.useState)(!0),w=Object(o.a)(y,2),C=w[0],P=w[1],S=Object(c.useState)(!0),E=Object(o.a)(S,2),k=E[0],A=E[1],F=Object(c.useState)({password:"",repeatPassword:""}),D=Object(o.a)(F,2),z=D[0],L=D[1],Z=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var a,c,n,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new AbortController,c=a.signal,e.prev=3,e.next=6,fetch("https://tavopaz12.ml/api/v1/auth/change-password",{method:"POST",signal:c,body:JSON.stringify(v),headers:{"Content-type":"application/json; charset=UTF-8"}});case 6:return n=e.sent,e.next=9,n.json();case 9:i=e.sent,n.ok&&(s({data:i,message:"Contrase\xf1a cambiada",statusCode:200}),h(!0)),n.ok||(s(i),h(!0)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),s({message:"Error durante la solicitud",statusCode:500}),h(!0);case 18:setTimeout((function(){h(!1)}),5e3);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();return console.log(a),Object(m.jsxs)("div",{children:[401===a.statusCode?Object(m.jsx)(T,{show:O,error:!0,text:"Ups!! El token no es valido"}):200===a.statusCode?Object(m.jsx)(W,{show:!0,changePassword:!0}):500===a.statusCode?Object(m.jsx)(T,{show:O,error:!0,text:a.message}):"",Object(m.jsxs)("div",{className:"changePassword__container",children:[Object(m.jsx)("div",{className:"changePassword__imageContainer"}),Object(m.jsx)("div",{className:"recovery__inputContainer",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h2",{className:"content__title",children:"Crear nueva contrase\xf1a"}),Object(m.jsxs)("span",{className:"content__subtitule",children:["Ingresa tu nueva contrase\xf1a, incluye una mayucula ",Object(m.jsx)("pre",{}),"un numero y un minimo de 8 caracteres"]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("form",{onSubmit:Z,children:[Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("input",{type:"password",name:"name",required:"required",autoComplete:"off",onChange:function(e){L(Object(_.a)(Object(_.a)({},z),{},{password:e.target.value})),function(){var e=p.test(z.password);P(!!e)}()}}),Object(m.jsx)("label",{htmlFor:"name",className:"label-name",children:Object(m.jsx)("div",{children:Object(m.jsxs)("span",{className:"content-name",children:[Object(m.jsx)(j.a,{className:"icon",icon:l.j}),"Nueva contrase\xf1a"]})})})]}),C?"":Object(m.jsx)("p",{className:"text-err",children:"Ingresa una contrase\xf1a valida"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("input",{type:"password",name:"name",required:"required",autoComplete:"off",onChange:function(e){L(Object(_.a)(Object(_.a)({},z),{},{repeatPassword:e.target.value}))},onKeyUp:function(){z.password===z.repeatPassword?(A(!0),N(Object(_.a)(Object(_.a)({},v),{},{newPassword:z.repeatPassword}))):A(!1)}}),Object(m.jsx)("label",{htmlFor:"name",className:"label-name",children:Object(m.jsx)("div",{children:Object(m.jsxs)("span",{className:"content-name",children:[Object(m.jsx)(j.a,{className:"icon",icon:l.j}),"Repite la contrase\xf1a"]})})})]}),k?"":Object(m.jsx)("p",{className:"text-err",children:"Las contrase\xf1as no coinciden"}),Object(m.jsx)("br",{}),Object(m.jsx)("center",{children:Object(m.jsx)("button",{className:C&&k?"content__btn":"content__btn content__btn-hide",children:"Cambiar contrase\xf1a"})})]})]})})]})]})}function W(e){var t=e.show,a=e.recovery,c=e.changePassword;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:t?"show":"hide",children:Object(m.jsxs)("div",{className:"cookie__box",children:[Object(m.jsx)("img",{src:a?"https://cdn-icons-png.flaticon.com/512/2494/2494291.png":c?"https://static.vecteezy.com/system/resources/previews/017/197/461/original/green-check-mark-icon-on-transparent-background-free-png.png":"",alt:"cookie"}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h2",{children:a?"Correo enviado":c?"Contrase\xf1a Cambiada":""}),Object(m.jsx)("p",{children:a?"Revisa tu bandeja de entrada o de Spam e ingresa al link que has recibido":Q?"No olvides anotar tu nueva contrase\xf1a, recuerdala siempre":""}),Object(m.jsx)("div",{className:"btn__group",children:Object(m.jsx)(b.c,{to:"/login",children:Object(m.jsx)("button",{className:"accept__btn",children:"Aceptar"})})})]})]})})})}a(65);function X(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),b=Object(o.a)(n,2),d=b[0],u=b[1],O=Object(c.useState)(!1),h=Object(o.a)(O,2),x=h[0],_=h[1],p=Object(c.useState)(!1),f=Object(o.a)(p,2),g=f[0],v=f[1],N=Object(c.useState)({email:""}),y=Object(o.a)(N,2),w=y[0],C=y[1],P=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,a,c,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),v(!1),t=new AbortController,a=t.signal,e.prev=4,e.next=7,fetch("https://tavopaz12.ml/api/v1/auth/recovery",{method:"POST",signal:a,body:JSON.stringify(w),headers:{"Content-type":"application/json; charset=UTF-8"}});case 7:return c=e.sent,e.next=10,c.json();case 10:n=e.sent,c.ok&&(u(!1),s({data:n,message:"Registro exitoso",statusCode:200}),_(!0)),c.ok||(s(n),u(!1),_(!0)),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(4),u(!1),s({message:"Error durante la solicitud",statusCode:500}),_(!0);case 20:setTimeout((function(){_(!1),v(!0)}),5e3);case 21:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"recovery__container",children:[401===a.statusCode?Object(m.jsx)(T,{show:x,error:!0,text:"No existe coincidencias de este email"}):200===a.statusCode?Object(m.jsx)(W,{show:!0,recovery:!0}):500===a.statusCode?Object(m.jsx)(T,{show:x,error:!0,text:a.message}):"",Object(m.jsx)("div",{className:"recovery__imageContainer"}),Object(m.jsx)("div",{className:"recovery__inputContainer",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h2",{className:"content__title",children:"\xbfOlvidaste tu contrase\xf1a?"}),Object(m.jsx)("p",{className:"content__subtitule",children:"Proporciona tu email para que podamos recuperar tu contrase\xf1a"}),Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("input",{type:"text",name:"name",required:"required",autoComplete:"off",onChange:function(e){C({email:e.target.value});/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(w.email)?v(!0):v(!1)}}),Object(m.jsx)("label",{htmlFor:"name",className:"label-name",children:Object(m.jsx)("div",{children:Object(m.jsxs)("span",{className:"content-name",children:[Object(m.jsx)(j.a,{className:"icon",icon:l.e}),"Email"]})})})]}),Object(m.jsx)("center",{children:Object(m.jsxs)("button",{onClick:P,className:g?"content__btn":"content__btn content__btn-hide",children:[d?"Enviando":"Recuperar contrase\xf1a",Object(m.jsx)(j.a,{icon:l.r,className:d?"show__loading":"hide"})]})})]})})]})})}var ee=function(e){var t=e.children,a=Object(c.useContext)(O),s=a.auth,r=a.userId,i=a.signOut;return s&&r?t:(i(),Object(m.jsx)(n.a,{to:"/login"}))};a(66),a(67);function te(e){var t=e.title,a=e.type,c=e.value;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"inputBox",children:[Object(m.jsx)("input",{type:a,required:"required",value:c}),Object(m.jsxs)("span",{children:[t,":"]})]})})}a(68);function ae(e){var t=e.myPerfil,a=e.loader;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("aside",{className:"myPerfil__container__aside",children:[a?Object(m.jsx)(f.a,{duration:.5}):Object(m.jsx)("img",{className:"myPerfil__container__aside__img",src:t.avatar,alt:""}),Object(m.jsx)("p",{className:"myPerfil__container__aside__name",children:a?Object(m.jsx)(f.a,{duration:.5,width:200}):t.name}),Object(m.jsx)("p",{className:"myPerfil__container__aside__subitutle",children:a?Object(m.jsx)(f.a,{duration:.5,width:200}):t.nameSchool}),Object(m.jsxs)("div",{className:"myPerfil__container__aside__infos",children:[Object(m.jsx)(j.a,{className:"myPerfil__container__aside__infos__icon",icon:l.p}),a?Object(m.jsx)(f.a,{duration:.5,width:200}):Object(m.jsx)("p",{children:t.nivelSchool})]}),Object(m.jsxs)("div",{className:"myPerfil__container__aside__infos",children:[Object(m.jsx)(j.a,{className:"myPerfil__container__aside__infos__icon",icon:l.m}),a?Object(m.jsx)(f.a,{duration:.5,width:200}):Object(m.jsx)("p",{children:t.cellPhone})]})]})})}a(69);function ce(e){var t=e.myPerfil,a=e.loader;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"myPerfil__container",children:[Object(m.jsx)(ae,{myPerfil:t,loader:a}),Object(m.jsx)("section",{className:"myPerfil__container__section",children:Object(m.jsxs)("div",{className:"myPerfil__container__section__form",children:[Object(m.jsx)("form",{children:Object(m.jsxs)("label",{htmlFor:"",children:[Object(m.jsx)("p",{children:"Escribe algo sobre ti para que las demas personas puedan verlo"}),Object(m.jsx)("textarea",{className:"myPerfil__container__section__form__textarea",placeholder:"".concat(t.about)}),Object(m.jsx)("div",{className:"myPerfil__container__section__form__btnAboutMe",children:Object(m.jsx)("button",{className:"btn__update",children:"Actualizar"})})]})}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("p",{className:"myPerfil__container__section__form__title",children:["Editar Informacion:"," "]}),Object(m.jsxs)("div",{className:"myPerfil__container__section__form__colFlex",children:[Object(m.jsx)(te,{type:"text",title:"Nombre"}),Object(m.jsx)(te,{type:"text",title:"Apellidos"})]}),Object(m.jsxs)("div",{className:"myPerfil__container__section__form__colFlex",children:[Object(m.jsx)(te,{type:"email",title:"Email"}),Object(m.jsx)(te,{type:"tel",title:"Telefono"})]}),Object(m.jsxs)("div",{className:"myPerfil__container__section__form__colFlex",children:[Object(m.jsx)(te,{type:"text",title:"Escuela"}),Object(m.jsx)(te,{type:"text",title:"Grado escolar"})]}),Object(m.jsx)("div",{className:"myPerfil__container__section__form__btnAboutMe",children:Object(m.jsx)("button",{className:"btn__update",children:"Guardar Cambios"})})]})]})})]})})}function se(e){var t=e.dataUser,a=e.loader;return Object(m.jsxs)("aside",{className:"myPerfil__container__aside",children:[a?Object(m.jsx)(f.a,{duration:.5,className:"myPerfil__container__aside__img"}):Object(m.jsx)("img",{className:"myPerfil__container__aside__img",src:t.avatar,alt:""}),Object(m.jsx)("p",{className:"myPerfil__container__aside__name",children:a?Object(m.jsx)(f.a,{duration:.5,width:200}):t.name}),Object(m.jsx)("p",{className:"myPerfil__container__aside__subitutle",children:a?Object(m.jsx)(f.a,{duration:.5,width:200}):t.nameSchool}),Object(m.jsxs)("div",{className:"myPerfil__container__aside__infos",children:[Object(m.jsx)(j.a,{className:"myPerfil__container__aside__infos__icon",icon:l.d}),a?Object(m.jsx)(f.a,{duration:.5,width:150}):Object(m.jsx)("p",{children:t.status})]}),Object(m.jsxs)("div",{className:"myPerfil__container__aside__infos",children:[Object(m.jsx)(j.a,{className:"myPerfil__container__aside__infos__icon",icon:l.p}),a?Object(m.jsx)(f.a,{duration:.5,width:150}):Object(m.jsx)("p",{children:t.nivelSchool})]}),Object(m.jsxs)("div",{className:"myPerfil__container__aside__infos",children:[Object(m.jsx)(j.a,{className:"myPerfil__container__aside__infos__icon",icon:l.h}),a?Object(m.jsx)(f.a,{duration:.5,width:150}):Object(m.jsx)("p",{children:t.gradeSchool})]})]})}a(70);function ne(e){var t=e.dataUser,a=e.loader,s=Object(c.useState)("Cargando..."),n=Object(o.a)(s,2),r=n[0],i=n[1],l=r.split(",");return Object(c.useEffect)((function(){a||i(t.interest)}),[a,t.interest]),Object(m.jsxs)("div",{className:"myPerfil__container",children:[Object(m.jsx)(se,{dataUser:t,loader:a}),Object(m.jsxs)("section",{className:"myPerfil__container__section",children:[Object(m.jsx)("div",{className:"myPerfil__container__section__form",children:a?Object(m.jsx)(f.a,{className:"myPerfil__container__section__form__textarea",duration:.5,height:150}):Object(m.jsx)("label",{htmlFor:"",children:Object(m.jsx)("textarea",{disabled:!0,className:"myPerfil__container__section__form__textarea",placeholder:"".concat(t.about)})})}),Object(m.jsx)("h2",{className:"myPerfil__container__section__hobbies__title",children:a?Object(m.jsx)(f.a,{duration:.5,width:200}):"Mis intereses"}),Object(m.jsx)("div",{className:"myPerfil__container__section__hobbies",children:a?Object(m.jsx)("div",{className:"flex",children:Object(m.jsx)(f.a,{containerClassName:"flex-skeleton",duration:.5,height:30})}):l.slice(0,4).map((function(e){return Object(m.jsx)("button",{className:"myPerfil__container__section__hobbies__btn",children:e},e)}))}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{className:"myPerfil__container__section__hobbies__title",children:a?Object(m.jsx)(f.a,{duration:.5,width:200}):"Mis Materias Favoritas"}),Object(m.jsx)("div",{className:"myPerfil__container__section__hobbies",children:a?Object(m.jsx)("div",{className:"flex",children:Object(m.jsx)(f.a,{containerClassName:"flex-skeleton",duration:.5,height:30})}):l.slice(0,4).map((function(e){return Object(m.jsx)("button",{className:"myPerfil__container__section__hobbies__btn",children:e},e)}))})]})]})}function re(e){var t=e.myPerfil,a=e.loader,s=Object(c.useState)(!1),n=Object(o.a)(s,2),r=n[0],i=n[1],l=u("c_user")===t.id;return Object(c.useEffect)((function(){i(l)}),[l]),Object(m.jsx)(m.Fragment,{children:l?Object(m.jsx)(ce,{loader:a,isMyPerfil:l,myPerfil:t,disabled:r}):Object(m.jsx)(ne,{dataUser:t,loader:a})})}a(71);var ie=function(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){fetch("https://tavopaz12.ml/api/v1/profile/".concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}))}),[e]),s};function oe(){var e=Object(n.q)(),t=ie(e.userName),a=Array.isArray(t)&&!t.length;return t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"header__perfilUser",children:Object(m.jsx)(y,{})}),Object(m.jsx)("section",{className:"container__perfilUser",children:Object(m.jsx)(re,{myPerfil:t,loader:a})})]}):Object(m.jsx)(q,{title:"Este usuario no existe en nuestra aplicaci\xf3n",to:"/"})}a(72);function le(){return Object(m.jsx)("div",{children:Object(m.jsx)(n.b,{})})}var je=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(h,{children:Object(m.jsx)(n.e,{children:Object(m.jsxs)(n.c,{path:"/",element:Object(m.jsx)(le,{}),children:[Object(m.jsx)(n.c,{path:"inicio",element:Object(m.jsx)(ee,{children:Object(m.jsx)(A,{})})}),Object(m.jsx)(n.c,{index:!0,element:Object(m.jsx)(ee,{children:Object(m.jsx)(A,{})})}),Object(m.jsx)(n.c,{path:"dashboard",element:Object(m.jsx)(I,{})}),Object(m.jsx)(n.c,{path:"maintenance",element:Object(m.jsx)(U,{})}),Object(m.jsx)(n.c,{path:"registro",element:Object(m.jsx)(Y,{})}),Object(m.jsx)(n.c,{path:"login",element:Object(m.jsx)(Z,{})}),Object(m.jsx)(n.c,{path:"recovery",element:Object(m.jsx)(X,{})}),Object(m.jsx)(n.c,{path:"change-password",element:Object(m.jsx)(Q,{})}),Object(m.jsx)(n.c,{exact:!0,path:"user",element:Object(m.jsx)(ee,{children:Object(m.jsx)(oe,{})}),children:Object(m.jsx)(n.c,{exact:!0,path:":userName",element:Object(m.jsx)(oe,{})})}),Object(m.jsx)(n.c,{path:"*",element:Object(m.jsx)(q,{title:"Pagina no encontrada",to:"/"})})]})})})})},be=a(40);a.n(be).a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b.a,{children:Object(m.jsx)(je,{})})}),document.getElementById("root"))}]),[[76,1,2]]]);
//# sourceMappingURL=main.09ddbd66.chunk.js.map