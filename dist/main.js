(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap);"]),i.push([e.id,"body {\n  margin: 0;\n  display: grid;\n  font-family: 'Roboto', sans-serif;\n  grid-template-rows: 70px 1fr;\n  grid-template-columns: 270px 6fr;\n  height: max(100vh, 600px);\n}\n\nh1 {\n  margin: 0;\n}\n\na {\n  color: white;\n}\n\np {\n  margin: 0;\n}\n\n#header {\n  background-color: #506cc9;\n  grid-area: 1 / 1 / 2 / 3;\n  /* box-shadow: 8px 0px 8px 0 rgb(113, 113, 113); */\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 30px;\n}\n\n#sidebar {\n  background-color: #f1f1f1;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  /* justify-content:flex-start; */\n  position: relative;\n}\n\n.side-block-container {\n  display: grid;\n  /* background-color: #f8d6d6; */\n  gap: 10px;\n}\n\n.side-header {\n  padding: 10px;\n  margin: 0;\n  font-weight: 600;\n}\n\n.side-block {\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  transition: 0.1s;\n  font-size: 18px;\n  font-weight: 400;\n  cursor: pointer;\n}\n\n.side-block:hover {\n  background-color: #e8e8e8;\n  /* box-shadow: 0px 2px 8px -2px rgb(167, 167, 167); */\n  transition: 0.1s;\n}\n\n#add-project-button {\n  justify-content: center;\n  position: absolute;\n  bottom: 20px;\n  width: calc(100% - 60px);\n}\n\n#main {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#main-header {\n  font-weight: 600;\n  font-size: 40px;\n  margin: 40px 0;\n  width: 540px;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\n#main-header:disabled {\n  color: black;\n  background-color: #fff;\n}\n\n.task-container {\n  display: grid;\n  grid-auto-rows: fit-content;\n  gap: 10px;\n  justify-content: center;\n}\n\n.task {\n  background-color: #f1f1f1;\n  border-radius: 10px;\n  width: 500px;\n  padding: 20px;\n  transition: 0.1s;\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: 20px 1fr 50px 50px;\n  grid-template-rows: fit-content;\n  column-gap: 20px;\n  row-gap: 4px;\n}\n\n.task:hover {\n  background-color: #e8e8e8;\n  /* box-shadow: 0px 2px 8px -2px rgb(167, 167, 167); */\n  transition: 0.1s;\n}\n\n.task>input {\n  grid-area: 1 / 1 / 4 / 2;\n  margin: 0;\n}\n\n.task-header {\n  margin: 0;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.task-priority {\n  margin: 0;\n  justify-self: right;\n}\n\n.task-due-date {\n  font-size: 14px;\n  color: #838383;\n  align-self: flex-end;\n  margin: 0;\n  grid-area: 2 / 2 / 3 / 5;\n}\n\n.task-description {\n  font-size: 14px;\n  grid-area: 3 / 2 / 4 / 5;\n}\n\n.remove-task-button {\n  align-self: self-start;\n  justify-self: right;\n  background-color: #ee7575;\n  border: 0;\n  border-radius: 1rem;\n  width: 20px;\n  height: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  transition: 0.1s;\n}\n\n.remove-task-button:hover {\n  transform: scale(1.1);\n  transition: 0.1s;\n}\n\n.task-open {\n  padding: 20px;\n  width: 500px;\n  background-color: #f1f1f1;\n  border-radius: 10px;\n}\n\n.task-open:hover {\n  background-color: #e8e8e8;\n}\n\n#add-task-button {\n  border: 0;\n  background-color: #f1f1f1;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 20px;\n  transition: 0.1s;\n}\n\n#add-task-button:hover {\n  background-color: #e8e8e8;\n  transition: 0.1s;\n}\n\n.hide {\n  display: none;\n}\n\nform {\n  width: 500px;\n  padding: 20px;\n  background-color: #f1f1f1;\n  border-radius: 10px;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  grid-auto-rows: fit-content;\n  gap: 20px;\n}\n\nlabel {\n  font-size: 16px;\n}\n\ninput {\n  border-radius: 10px;\n  border: 0;\n  height: 25px;\n  padding: 0 10px;\n}\n\ntextarea {\n  border-radius: 10px;\n  padding: 5px 10px;\n  border: 0;\n  height: 50px;\n  resize: none;\n}\n\nselect {\n  height: 25px;\n  border: 0;\n  border-radius: 10px;\n  padding: 0 5px;\n}\n\n#submit-button {\n  background-color: #fff;\n  font-size: 16px;\n  border: 0;\n  border-radius: 10px;\n  padding: 10px;\n  transition: 0.1s;\n}\n\n#submit-button:hover {\n  background-color: #e8e8e8;\n  transition: 0.1s;\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],l=r.base?d[0]+r.base:d[0],c=a[l]||0,p="".concat(l," ").concat(c);a[l]=c+1;var u=n(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var g=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),l=0;l<a.length;l++){var c=n(a[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),d=n.n(s),l=n(216),c=n.n(l),p=n(589),u=n.n(p),f=n(426),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=c(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(e,t,n,r){this.title=e,this.description=t,this.dueDate=n,this.priority=r}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}set title(e){this._title=e}set description(e){this._description=e}set dueDate(e){this._dueDate=e}set priority(e){this._priority=e}}class m{title="Untitled";tasks=[];constructor(e){this.title=e}addTask(e){this.tasks.push(e)}createTask(e,t,n,r){let o=new h(e,t,n,r);this.tasks.push(o)}getTask(e){return this.tasks[e]}setTitle(e){this.title=e}getTitle(){return this.title}getAllTasks(){return this.tasks}getNumberOfTasks(){return this.tasks.length}removeTask(e){if(this.tasks.indexOf(e)>=0){let t=this.tasks.indexOf(e);this.tasks.splice(t,1)}}}var x=new Map;function v(e){var t=x.get(e);t&&t.destroy()}function b(e){var t=x.get(e);t&&t.update()}var y=null;"undefined"==typeof window?((y=function(e){return e}).destroy=function(e){return e},y.update=function(e){return e}):((y=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!x.has(e)){var t,n=null,r=window.getComputedStyle(e),o=(t=e.value,function(){i({testForHeightReduction:""===t||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),a=function(t){e.removeEventListener("autosize:destroy",a),e.removeEventListener("autosize:update",s),e.removeEventListener("input",o),window.removeEventListener("resize",s),Object.keys(t).forEach((function(n){return e.style[n]=t[n]})),x.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",a),e.addEventListener("autosize:update",s),e.addEventListener("input",o),window.addEventListener("resize",s),e.style.overflowX="hidden",e.style.wordWrap="break-word",x.set(e,{destroy:a,update:s}),s()}function i(t){var o,a,s=t.restoreTextAlign,d=void 0===s?null:s,l=t.testForHeightReduction,c=void 0===l||l,p=r.overflowY;if(0!==e.scrollHeight&&("vertical"===r.resize?e.style.resize="none":"both"===r.resize&&(e.style.resize="horizontal"),c&&(o=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach((function(e){var t=e[0],n=e[1];t.style.scrollBehavior="auto",t.scrollTop=n,t.style.scrollBehavior=null}))}}(e),e.style.height=""),a="content-box"===r.boxSizing?e.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):e.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),"none"!==r.maxHeight&&a>parseFloat(r.maxHeight)?("hidden"===r.overflowY&&(e.style.overflow="scroll"),a=parseFloat(r.maxHeight)):"hidden"!==r.overflowY&&(e.style.overflow="hidden"),e.style.height=a+"px",d&&(e.style.textAlign=d),o&&o(),n!==a&&(e.dispatchEvent(new Event("autosize:resized",{bubbles:!0})),n=a),p!==r.overflow&&!d)){var u=r.textAlign;"hidden"===r.overflow&&(e.style.textAlign="start"===u?"end":"start"),i({restoreTextAlign:u,testForHeightReduction:!0})}}function s(){i({testForHeightReduction:!0,restoreTextAlign:null})}}(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],v),e},y.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],b),e});const k=y,w=function(){let e=document.querySelector(".task-container"),t=document.getElementById("add-task-button"),n=document.getElementById("projects-container");const r=(e,t)=>{let r=document.createElement("div");r.textContent=e.getTitle(),r.classList.add("side-block"),n.append(r),r.addEventListener("click",(()=>{i(e,t)}))},o=(t,n)=>{let r=document.createElement("div"),o=document.createElement("input");o.type="checkbox",r.append(o);let a=document.createElement("h3");a.textContent=t.title,a.classList.add("task-header"),r.append(a);let s=document.createElement("p");s.textContent=t.priority,s.classList.add("task-priority"),r.append(s);let d=document.createElement("p");d.textContent=t.dueDate,d.classList.add("task-due-date"),r.append(d);let l=document.createElement("p");l.textContent=t.description,l.classList.add("task-description"),r.append(l);let c=document.createElement("button");c.classList.add("remove-task-button"),c.textContent="X",r.append(c),c.addEventListener("click",(()=>{n.removeTask(t),i(n)})),r.classList.add("task"),r.addEventListener("click",(e=>{"INPUT"!=e.target.tagName&&e.target.tagName})),e.append(r)},a=(t,o)=>{console.log("Called generateHeader()");let i=document.getElementById("main-header");i.remove(),i=document.createElement("textarea"),i.id="main-header",e.before(i),i.value=t.getTitle(),k(i),i.addEventListener("change",(()=>{console.log(t),t.setTitle(i.value),n.innerHTML="",o.forEach((e=>{r(e,o)})),a(t)})),k.update(i)},i=(n,r)=>{t.removeEventListener("click",(()=>{})),t.classList.remove("hide"),e.innerHTML="",a(n,r),t.addEventListener("click",(()=>{s(n)}));let i=n.getAllTasks();0!=i.length&&i.forEach((e=>o(e,n)))},s=n=>{e.innerHTML="",t.classList.add("hide");let r=document.getElementById("main-header");r.textContent="Adding new task",r.disabled=!0;let o=document.createElement("form"),a=document.createElement("label");a.textContent="Title:";let s=document.createElement("input");s.type="text",s.required=!0;let d=document.createElement("label");d.textContent="Priority:";let l=document.createElement("select");l.insertAdjacentHTML("afterbegin",'<option value="high">High</option><option value="mid">Mid</option><option value="low">Low</option>');let c=document.createElement("label");c.textContent="Due date:";let p=document.createElement("input");p.type="datetime-local";let u=document.createElement("label");u.textContent="Description:";let f=document.createElement("textarea"),g=document.createElement("button");g.id="submit-button",g.textContent="Submit",g.type="button",o.append(a,s,d,l,c,p,u,f,g),e.append(o),g.addEventListener("click",(()=>{n.createTask(s.value,f.value,p.value,l.value),r.disabled=!1,i(n)}))};return{generateProjects:r,generateTask:o,generateHeader:a,generateProjectPage:i,generatePage:(e,t)=>{n.innerHTML="",e.forEach((t=>{r(t,e)})),i(e[t],e)}}}();let E=[],T=new m("home"),L=new h("do chores","Lorem ipsum dolor sit amet. Ut molestias consequatur non veniam iusto eos mollitia doloribus aut molestiae labor","25.02.2023","mid"),z=new h("homework qwe rfghjhgf rtgyhuygtf rd ertgytrertyhuj dnrn","Lorem ipsum dolor sit amet. Ut molest","25.02.2023","high");T.addTask(L),T.addTask(z);let A=new m("work fednrmr yrmne etnet w n etn e wtyetjemry"),C=new h("Write code","wrwlb wlrbk","24.02.2023","high"),H=new h("Fix keyboard","Your keyboard is dead","28.02.2023","low"),j=new h("Send email to boss","He need information from you","24.02.2023","mid");A.addTask(C),A.addTask(H),A.addTask(j),E.push(T),E.push(A),w.generatePage(E,0),document.getElementById("add-project-button").addEventListener("click",(()=>{let e=new m("Untitled");E.push(e),w.generatePage(E,E.length-1)}))})()})();