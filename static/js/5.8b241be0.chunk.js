(this.webpackJsonpprofileapp=this.webpackJsonpprofileapp||[]).push([[5],{230:function(e,t,a){"use strict";a.r(t);var n=a(228),r=a(0),c=a.n(r),o=a(229),l=a(147),i=a.n(l),s=a(227);t.default=function(){var e=Object(r.useRef)(),t=Object(r.useState)("3"),a=Object(n.a)(t,2),l=a[0],u=a[1];var p=function(){var t=function(e,t){for(var a=atob(e.split(",")[1]),n=(e.split(",")[0].split(":")[1].split(";")[0],new ArrayBuffer(a.length)),r=new Uint8Array(n),c=0;c<a.length;c++)r[c]=a.charCodeAt(c);return new Blob([n],{type:t})}(document.getElementsByTagName("canvas")[1].toDataURL("image/png",.1),"image/png"),a=document.createElement("a");document.body.appendChild(a),a.style="display: none",a.href=URL.createObjectURL(t),a.download="image".concat((new Date).getSeconds(),".png"),a.click(),e.current.clear(),d(t)},d=function(e){var t=new FormData;t.append("file",e),i()({method:"post",url:"http://asaravanan248.pythonanywhere.com/uploader",data:t,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.output?u(e.data.output):u("")}))};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row",style:{height:"80vh"}},c.a.createElement("div",{className:"col text-center"},c.a.createElement("p",{className:"p-2"},"DigitRecogonizer"),c.a.createElement("button",{name:"",id:"",class:"btn btn-primary",role:"button",onClick:function(){u("")}},"Clear"),""===l?c.a.createElement(s.a,null,(function(t){var a=t.height,n=t.width;return c.a.createElement(o.a,{ref:e,id:"ddd",brushColor:"#333333",brushRadius:12,canvasWidth:n,canvasHeight:a,onChange:function(e){p()},catenaryColor:"#0a0302"})})):c.a.createElement("h1",{className:"mt-5",style:{fontSize:"20rem"}},l))))}}}]);
//# sourceMappingURL=5.8b241be0.chunk.js.map