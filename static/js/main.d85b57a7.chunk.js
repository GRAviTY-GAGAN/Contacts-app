/*! For license information please see main.d85b57a7.chunk.js.LICENSE.txt */
(this["webpackJsonpeleven-realtime-database-app"]=this["webpackJsonpeleven-realtime-database-app"]||[]).push([[0],{301:function(t,e,r){"use strict";r.r(e);var n=r(2),a=r.n(n),o=r(18),c=r.n(o),i=(r(78),r(26)),l=r(13),u=r(306),s=r(21),f=r(8),p=r(14),h=(r(79),r(80),r(81),{quality:.2,maxWidth:800,maxHeight:600,autoRotate:!0}),m=r(11),d=r.n(m),y=(r(85),r(302),r(307)),v=r(308),g=r(309),b=r(310),E=r(311),w=r(312),x=r(313),O=r(314),N=r(69),j=r(324),L=Object(n.createContext)();function T(){T=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(L){i=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),c=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,c),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var s={};function f(){}function p(){}function h(){}var m={};i(m,a,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(N([])));y&&y!==e&&r.call(y,a)&&(m=y);var v=h.prototype=f.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function c(){return new e((function(n,c){!function n(a,o,c,i){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,i)}))}i(l.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,i(v,"constructor",h),i(h,"constructor",p),p.displayName=i(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),i(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new b(l(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(v),i(v,c,"Generator"),i(v,a,(function(){return this})),i(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var k=function(){var t=Object(n.useContext)(L),e=t.state,r=t.dispatch,o=e.contactToUpdate,c=e.contactToUpdateKey,s=Object(f.f)(),m=Object(n.useState)(""),k=Object(l.a)(m,2),_=k[0],C=k[1],S=Object(n.useState)(""),A=Object(l.a)(S,2),G=A[0],I=A[1],P=Object(n.useState)(""),U=Object(l.a)(P,2),D=U[0],F=U[1],K=Object(n.useState)(""),H=Object(l.a)(K,2),R=H[0],B=H[1],Y=Object(n.useState)(!1),M=Object(l.a)(Y,2),Q=M[0],z=M[1],J=Object(n.useState)(null),W=Object(l.a)(J,2),q=W[0],Z=W[1],V=Object(n.useState)(!1),X=Object(l.a)(V,2),$=X[0],tt=X[1],et=Object(n.useState)(!1),rt=Object(l.a)(et,2),nt=rt[0],at=rt[1];Object(n.useEffect)((function(){o&&(C(o.name),I(o.email),F(o.phoneNumber),B(o.address),tt(o.star),Z(o.picture),at(!0))}),[o]);var ot=function(){var t=Object(i.a)(T().mark((function t(e){var r,n,a,o,c;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.target.files[0],n={contentType:r.type},t.next=5,Object(N.readAndCompressImage)(r,h);case 5:return a=t.sent,t.next=8,d.a.storage().ref();case 8:o=t.sent,(c=o.child("images/"+r.name).put(a,n)).on(d.a.storage.TaskEvent.STATE_CHANGED,(function(t){z(!0);var e=t.bytesTransferred/t.totalBytes*100;switch(t.state){case d.a.storage.TaskState.PAUSED:z(!1),console.log("UPloading is paused");break;case d.a.storage.TaskState.RUNNING:console.log("UPloading is in progress...")}100==e&&(z(!1),Object(p.b)("uploaded",{type:"success"}))}),(function(t){Object(p.b)("something is wrong in state change",{type:"error"})}),(function(){c.snapshot.ref.getDownloadURL().then((function(t){Z(t)})).catch((function(t){return console.log(t)}))})),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0),Object(p.b)("Something went wrong",{type:"error"});case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),ct=function(){var t=Object(i.a)(T().mark((function t(){return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{d.a.database().ref("contacts/"+Object(j.a)()).set({name:_,email:G,phoneNumber:D,address:R,picture:q,star:$})}catch(e){console.log(e)}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),it=function(){var t=Object(i.a)(T().mark((function t(){return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{d.a.database().ref("contacts/"+c).set({name:_,email:G,phoneNumber:D,address:R,picture:q,star:$})}catch(e){console.log(e),Object(p.b)("Oppss..",{type:"error"})}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a.a.createElement(u.a,{fluid:!0,className:"mt-5"},a.a.createElement(y.a,null,a.a.createElement(v.a,{md:"6",className:"offset-md-3 p-2"},a.a.createElement(g.a,{onSubmit:function(t){t.preventDefault(),nt?it():ct(),Object(p.b)("Success",{type:"success"}),r({type:"CONTACT_TO_UPDATE",payload:null,key:null}),s.push("/contacts-app/")}},a.a.createElement("div",{className:"text-center"},Q?a.a.createElement(b.a,{type:"grow",color:"primary"}):a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"imagepicker",className:""},a.a.createElement("img",{src:q,alt:"",className:"profile"})),a.a.createElement("input",{type:"file",name:"image",id:"imagepicker",accept:"image/*",multiple:!1,onChange:function(t){return ot(t)},className:"hidden"}))),a.a.createElement(E.a,null,a.a.createElement(w.a,{type:"text",name:"name",id:"name",placeholder:"Name",value:_,onChange:function(t){return C(t.target.value)}})),a.a.createElement(E.a,null,a.a.createElement(w.a,{type:"email",name:"email",id:"email",value:G,onChange:function(t){return I(t.target.value)},placeholder:"Email"})),a.a.createElement(E.a,null,a.a.createElement(w.a,{type:"number",name:"number",id:"phonenumber",value:D,onChange:function(t){return F(t.target.value)},placeholder:"phone number"})),a.a.createElement(E.a,null,a.a.createElement(w.a,{type:"textarea",name:"area",id:"area",value:R,onChange:function(t){return B(t.target.value)},placeholder:"address"})),a.a.createElement(E.a,{check:!0},a.a.createElement(x.a,{check:!0},a.a.createElement(w.a,{type:"checkbox",onChange:function(){tt(!$)},checked:$})," ",a.a.createElement("span",{className:"text-right"},"Mark as Star"))),a.a.createElement(O.a,{type:"submit",color:"primary",block:!0,className:"text-uppercase"},nt?"Update Contact":"Add Contact")))))},_=r(315),C=r(316),S=r(22),A=r(25),G=(r(95),function(t){var e=t.contact,r=t.contactKey,o=Object(n.useContext)(L).dispatch,c=Object(f.f)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(y.a,null,a.a.createElement(v.a,{md:"1",className:"d-flex justify-content-center align-items-center"},a.a.createElement("div",{className:"icon",onClick:function(){d.a.database().ref("/contacts/".concat(r)).update({star:!e.star},(function(t){console.log(t)})).then((function(){Object(p.b)("contact updated",{type:"info"})})).catch((function(t){return console.log(t)}))}},e.star?a.a.createElement(S.e,{className:" text-primary"}):a.a.createElement(S.d,{className:" text-info"}))),a.a.createElement(v.a,{md:"2",className:"d-flex justify-content-center align-items-center"},a.a.createElement("img",{src:e.picture,alt:"",className:"img-circle profile"})),a.a.createElement(v.a,{md:"8",onClick:function(){return function(t){o({type:"SET_SINGLE_CONTACT",payload:t}),c.push("/contact/view")}(e)}},a.a.createElement("div",{className:"text-primary"},e.name),a.a.createElement("div",{className:"text-secondary"},e.phoneNumber),a.a.createElement("div",{className:"text-secondary"},e.email),a.a.createElement("div",{className:"text-info"},e.address)),a.a.createElement(v.a,{md:"1",className:"d-flex justify-content-center align-items-center"},a.a.createElement(A.b,{onClick:function(){d.a.database().ref("/contacts/".concat(r)).remove().then((function(){Object(p.b)("Deleted successfully",{type:"warning"})})).catch((function(t){return console.log(t)}))},color:"danger",className:"text-danger icon"}),a.a.createElement(A.c,{className:"icon text-info ml-2",onClick:function(){return o({type:"CONTACT_TO_UPDATE",payload:e,key:r}),void c.push("/contact/add")}}))))}),I=function(){var t=Object(n.useContext)(L),e=t.state,r=t.dispatch,o=e.contacts,c=e.isLoading,i=Object(f.f)();return c?a.a.createElement("div",{className:"Center"},a.a.createElement(b.a,{color:"primary"}),a.a.createElement("div",{className:"text-primary"},"Loading...")):a.a.createElement(u.a,{className:"mt-4"},0!==o.length||c?a.a.createElement(_.a,null,Object.entries(o).map((function(t){var e=Object(l.a)(t,2),r=e[0],n=e[1];return a.a.createElement(C.a,{key:r},a.a.createElement(G,{contact:n,contactKey:r}))}))):a.a.createElement("div",{className:"Center text-large text-primary"},"NO Contacts found in firebase"),a.a.createElement(A.a,{className:"fab icon ",onClick:function(){r({type:"CONTACT_TO_UPDATE",payload:null,key:null}),i.push("/contact/add")}}))},P=r(317),U=r(318),D=r(319),F=function(){return a.a.createElement(P.a,{color:"info",light:!0},a.a.createElement(U.a,{tag:s.b,to:"/",className:"text-white"},"Contact App"),a.a.createElement(D.a,{className:"text-white float-right"},"A simple Contact app"))},K=function(){return a.a.createElement("footer",{className:"bg-info text-center pt-3 pb-2 mt-5 sticky-bottom"},"A simple Contact App")},H=r(320),R=r(321),B=r(322),Y=r(323),M=function(){var t=Object(n.useContext)(L).state.contact;return a.a.createElement(u.a,null,a.a.createElement(y.a,{className:"mt-5 mb-5"},a.a.createElement(v.a,{md:"5",className:"offset-md-3"},a.a.createElement(H.a,{className:"pt-3 pb-5"},a.a.createElement(R.a,{className:"text-center "},a.a.createElement("img",{height:"150",width:"150",className:"cardImg profile border-danger",src:null===t||void 0===t?void 0:t.picture}),a.a.createElement(B.a,{className:"text-primary mt-3"},a.a.createElement("h1",null,null===t||void 0===t?void 0:t.name)),a.a.createElement(Y.a,null,a.a.createElement("h3",null,a.a.createElement(S.c,{className:"mr-2"}),null===t||void 0===t?void 0:t.phoneNumber)),a.a.createElement("a",{className:"btn btn-primary btn-block",target:"_blank",href:"mailto:{contact?.email}"},a.a.createElement(S.a,{className:"icon mr-2"}),null===t||void 0===t?void 0:t.email),a.a.createElement("a",{className:"btn btn-primary btn-block",target:"_blank",href:"https://www.google.com/maps/place/".concat(null===t||void 0===t?void 0:t.address)},a.a.createElement(S.b,{className:"icon mr-2"}),null===t||void 0===t?void 0:t.address))))))},Q=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"404 page not found"))},z=r(15),J=function(t,e){switch(e.type){case"SET_CONTACT":return null==e.payload?Object(z.a)(Object(z.a)({},t),{},{contacts:[]}):Object(z.a)(Object(z.a)({},t),{},{contacts:e.payload});case"SET_LOADING":return Object(z.a)(Object(z.a)({},t),{},{isLoading:e.payload});case"CONTACT_TO_UPDATE":return Object(z.a)(Object(z.a)({},t),{},{contactToUpdate:e.payload,contactToUpdateKey:e.key});case"SET_SINGLE_CONTACT":return Object(z.a)(Object(z.a)({},t),{},{contact:e.payload});default:return t}};function W(){W=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(L){i=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),c=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,c),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var s={};function f(){}function p(){}function h(){}var m={};i(m,a,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(N([])));y&&y!==e&&r.call(y,a)&&(m=y);var v=h.prototype=f.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function c(){return new e((function(n,c){!function n(a,o,c,i){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,i)}))}i(l.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,i(v,"constructor",h),i(h,"constructor",p),p.displayName=i(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,i(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),i(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new b(l(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(v),i(v,c,"Generator"),i(v,a,(function(){return this})),i(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}d.a.initializeApp({apiKey:"AIzaSyBwIC4OMH4m1gaGr0b5-QQ1N56jCZHgy1Q",authDomain:"mygitapp-299ee.firebaseapp.com",databaseURL:"https://mygitapp-299ee-default-rtdb.firebaseio.com",projectId:"mygitapp-299ee",storageBucket:"mygitapp-299ee.appspot.com",messagingSenderId:"206213713014",appId:"1:206213713014:web:358734131c38d0d8a42357",measurementId:"G-7HC8W5K1LL"});var q={contacts:[],contact:{},contactToUpdate:null,contactToUpdateKey:null,isLoading:!1},Z=function(){var t=Object(n.useReducer)(J,q),e=Object(l.a)(t,2),r=e[0],o=e[1],c=function(){var t=Object(i.a)(W().mark((function t(){return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o({type:"SET_LOADING",payload:!0}),t.next=3,d.a.database().ref("/contacts");case 3:t.sent.on("value",(function(t){o({type:"SET_CONTACT",payload:t.val()}),o({type:"SET_LOADING",payload:!1})}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),a.a.createElement(s.a,null,a.a.createElement(L.Provider,{value:{state:r,dispatch:o}},a.a.createElement(p.a,null),a.a.createElement(F,null),a.a.createElement(u.a,null,a.a.createElement(f.c,null,a.a.createElement(f.a,{exact:!0,path:"/contact/add",component:k}),a.a.createElement(f.a,{exact:!0,path:"/contact/view",component:M}),a.a.createElement(f.a,{exact:!0,path:"/contacts-app",component:I}),a.a.createElement(f.a,{exact:!0,path:"*",component:Q}))),a.a.createElement(K,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Z,null)),document.getElementById("root"))},73:function(t,e,r){t.exports=r(301)},78:function(t,e,r){},81:function(t,e,r){}},[[73,1,2]]]);
//# sourceMappingURL=main.d85b57a7.chunk.js.map