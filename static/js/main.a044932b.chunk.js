(this.webpackJsonpprofileapp=this.webpackJsonpprofileapp||[]).push([[0],{19:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(9),c=t(24),o=t.n(c),u=t(25),l=t.n(u),m=t(26),s=t.n(m),d=t(27),f=t.n(d),p=t(13),v=[{text:"",to:"/",type:"route",icon:f.a,className:"mview"},{text:"My Works",to:"/works",type:"route",icon:null,className:"mview"}],g=[{text:"Phone",to:"",type:"link",icon:s.a,link:"tel:+919791129332"},{text:"LinkedIn",to:"",type:"link",icon:l.a,link:"https://www.linkedin.com/in/saravanan-ayyappan-27440016a/"},{text:"Gmail",to:"",type:"link",icon:o.a,link:"mailto:asaravanan248@gmail.com"}];e.a=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between align-items-center f1 bg-light"},r.a.createElement("div",{className:"d-flex"},v.map((function(n){return r.a.createElement(p.b,{to:n.to},r.a.createElement(i.f,{className:n.className?n.className:""},r.a.createElement("span",{className:"menuTxt"},n.text,n.icon&&r.a.createElement("img",{src:n.icon,width:20,height:20})))," ")}))),r.a.createElement("div",{className:"d-flex"},g.map((function(n){return r.a.createElement(i.g,{"data-text":n.value,onClick:function(e){return function(n,e){if("clipboard"===e.type){n.stopPropagation();var t=document.createElement("input");t.value=e.value,t.setSelectionRange(0,99999),document.execCommand("copy"),console.log(n.target,document.execCommand("copy"))}"link"===e.type&&window.open(e.link)}(e,n)}},n.icon&&r.a.createElement("img",{src:n.icon,"data-text":n.value,className:"menuImg"}))})))))}},24:function(n,e,t){n.exports=t.p+"static/media/gmail.deda33ae.svg"},25:function(n,e,t){n.exports=t.p+"static/media/linkedin.8d317898.svg"},26:function(n,e,t){n.exports=t.p+"static/media/smartphone.953e368f.svg"},27:function(n,e,t){n.exports=t.p+"static/media/home.24d267df.svg"},29:function(n,e,t){n.exports=t(42)},34:function(n,e,t){},35:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(20),c=t.n(i),o=(t(34),t(35),t(13)),u=t(7),l=t(19),m=t(9),s=function(){return r.a.createElement("div",{className:"d-flex f1 bg-light justify-content-center p-2"},r.a.createElement("div",{className:"p-2"},r.a.createElement(m.e,null,r.a.createElement("small",null,"Powered By : datandleorg"))))},d=r.a.lazy((function(){return t.e(4).then(t.bind(null,61))})),f=r.a.lazy((function(){return t.e(3).then(t.bind(null,60))}));var p=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"text-center p-5"},"Loading...")},r.a.createElement(l.a,null)),r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"text-center p-5"},"Loading...")},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/works",component:d}),r.a.createElement(u.a,{path:"/",component:f})))),r.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},9:function(n,e,t){"use strict";t.d(e,"d",(function(){return h})),t.d(e,"c",(function(){return b})),t.d(e,"b",(function(){return x})),t.d(e,"e",(function(){return w})),t.d(e,"g",(function(){return y})),t.d(e,"f",(function(){return j})),t.d(e,"a",(function(){return O}));var a=t(3),r=t(4);function i(){var n=Object(a.a)(["\n  filter: grayscale(0100%);\n  transition: filter ease-in 0.2s;\n  width: ","px;\n  height: ","px;\n  ","\n  &:hover {\n    filter: grayscale(0%);\n  }\n  @media (max-width: 768px) {\n    width: ","rem;\n    height: ","rem;\n    padding: 0rem;\n  }\n"]);return i=function(){return n},n}function c(){var n=Object(a.a)(["\n  ","\n  ","  \n  padding: 2rem;\n\n  @media (max-width: 768px) {\n    display: none;\n    &.mview {\n      display: block;\n      padding: 1rem;\n    }\n  }\n"]);return c=function(){return n},n}function o(){var n=Object(a.a)(["\n  ","\n  ","  padding: 2rem;\n\n  > img {\n    width: 15px;\n    height: 15px;\n  }\n"]);return o=function(){return n},n}function u(){var n=Object(a.a)(["\n  transition: all ease-in 0.2s;\n  &:hover {\n    background: #ededed;\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(a.a)(["\n  cursor: pointer;\n"]);return l=function(){return n},n}function m(){var n=Object(a.a)(["\n  color: #ccc;\n"]);return m=function(){return n},n}function s(){var n=Object(a.a)(["\n  font-weight: 200;\n  color: #666;\n  @media (max-width: 768px) {\n    text-align: center;\n  }\n"]);return s=function(){return n},n}function d(){var n=Object(a.a)(["\n  img {\n    width: 12rem;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(a.a)(["\n  font-weight: 600;\n  font-size: ","rem;\n  color: #282828;\n  line-height: ","rem;\n  @media (max-width: 768px) {\n    font-size: ","rem;\n    text-align: center;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(a.a)(["\n  background: #ffffff;\n"]);return p=function(){return n},n}function v(){var n=Object(a.a)(["\n  width: 100vw;\n"]);return v=function(){return n},n}function g(){var n=Object(a.a)(["\n  height: 100vh;\n"]);return g=function(){return n},n}Object(r.a)(g()),Object(r.a)(v());var h=r.b.div(p()),b=r.b.p(f(),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size})),x=r.b.div(d()),w=r.b.p(s()),E=(r.b.p(m()),Object(r.a)(l())),k=Object(r.a)(u()),y=r.b.div(o(),E,k),j=r.b.div(c(),E,k),O=r.b.img(i(),(function(n){return n.w}),(function(n){return n.h}),E,(function(n){return n.w/100*5}),(function(n){return n.h/100*5}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a044932b.chunk.js.map