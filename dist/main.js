!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t){this.id=(+new Date).toString(),this.name=t,this.check=!1}}();e.default=i},function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=new(i(n(2)).default);function r(t){document.getElementById("out").innerHTML="";for(var e,n=function(n){var i=void 0;if(t[n].deathline){var s=(Date.now()-t[n].deathline)/864e5;s<0?i=" ("+Math.trunc(-s)+" days)":(i=" (You died)",e=!0,!1===t[n].check&&(t[n].check=!0))}else i="";var a=!0===t[n].check?"checked":"";if(document.getElementById("out").insertAdjacentHTML("afterbegin",'<div id="div'+t[n].id+'" class="task">  \n                <input type="checkbox"'+a+' id="setActive'+t[n].id+'"></input>\n                <label>'+t[n].name+i+'</label>\n                <a class="little" id="addSubtask'+t[n].id+'">+</a>   \n                <a class="little" id="addDate'+t[n].id+'">D</a>  \n                <a class="little" id="remove'+t[n].id+'">x</a>\n            </div>'),document.getElementById("setActive"+t[n].id).onclick=function(){o.setActive(t[n].id)},document.getElementById("remove"+t[n].id).onclick=function(){document.getElementById("div"+t[n].id).remove(),o.remove(t[n].id)},document.getElementById("addSubtask"+t[n].id).onclick=function(){var e=prompt("Please enter subtask name");e&&(o.addSubtask(t[n].id,e),r(o.tasks))},document.getElementById("addDate"+t[n].id).onclick=function(){var e=prompt("Please enter date.. (YYYY-MM-DD)");Date.parse(e)?(o.addDate(t[n].id,e),r(o.tasks)):alert("Try again.")},t[n].subtask.length>0&&!e)for(var u=function(e){var i=!0===t[n].subtask[e].check?"checked":"";document.getElementById("div"+t[n].id).insertAdjacentHTML("beforeend",'<div id="subdiv'+t[n].subtask[e].id+'" class="subtask"> \n                        <input type="checkbox"'+i+' id="subSetActive'+t[n].subtask[e].id+'"></input>\n                        <label>'+t[n].subtask[e].name+'</label>\n                        <a class="little" id="subRemove'+t[n].subtask[e].id+'">x</a>\n                    </div>'),document.getElementById("subSetActive"+t[n].subtask[e].id).onclick=function(){o.setActiveSubtask(t[n].id,t[n].subtask[e].id)},document.getElementById("subRemove"+t[n].subtask[e].id).onclick=function(){o.removeSubtask(t[n].id,t[n].subtask[e].id),r(t)}},c=0;c<t[n].subtask.length;c++)u(c)},i=0;i<t.length;i++)n(i)}document.onload=new function(){r(o.tasks)},document.getElementById("clearAll").onclick=function(){confirm("Are you sure?")&&(o.checkedList(),r(o.tasks))},document.getElementById("add").onclick=function(){var t=prompt("Please enter task name");t&&(o.add(t),document.getElementById("search").value="",r(o.tasks))},document.getElementById("search").onkeyup=function(){r(o.search(document.getElementById("search").value))}},function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(0)),r=i(n(3)),s=function(){function t(){localStorage.getItem("ItemsList")?this.tasks=Array.from(JSON.parse(localStorage.getItem("ItemsList"))):(localStorage.setItem("ItemsList",JSON.stringify([])),this.tasks=[])}return t.prototype.toLocalStorrage=function(){localStorage.setItem("ItemsList",JSON.stringify(this.tasks))},t.prototype.search=function(t){if(""!==t){var e=[];return this.tasks.forEach(function(n){0===n.name.toLocaleLowerCase().indexOf(t)&&e.push(n)}),e}return this.tasks},t.prototype.checkedList=function(){localStorage.removeItem("ItemsList"),this.tasks=this.tasks.filter(function(t){return!1===t.check}),this.toLocalStorrage()},t.prototype.add=function(t){var e=new r.default(t);this.tasks.push(e),this.toLocalStorrage()},t.prototype.remove=function(t){this.tasks=this.tasks.filter(function(e){return e.id!==t}),this.toLocalStorrage()},t.prototype.setActive=function(t){this.tasks.find(function(e){return e.id===t}).check=!this.tasks.find(function(e){return e.id===t}).check,this.toLocalStorrage()},t.prototype.addSubtask=function(t,e){this.tasks.find(function(e){return e.id===t}).subtask.push(new o.default(e)),this.toLocalStorrage()},t.prototype.removeSubtask=function(t,e){this.tasks.find(function(e){return e.id===t}).subtask=this.tasks.find(function(e){return e.id===t}).subtask.filter(function(t){return t.id!==e}),this.toLocalStorrage()},t.prototype.setActiveSubtask=function(t,e){this.tasks.find(function(e){return e.id===t}).subtask.find(function(t){return t.id===e}).check=!this.tasks.find(function(e){return e.id===t}).subtask.find(function(t){return t.id===e}).check,this.toLocalStorrage()},t.prototype.addDate=function(t,e){this.tasks.find(function(e){return e.id===t}).deathline=Date.parse(e),this.toLocalStorrage()},t}();e.default=s},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e){var n=t.call(this,e)||this;return n.id=(new Date).getTime().toString(),n.name=e,n.check=!1,n.subtask=[],n.deathline=void 0,n}return o(e,t),e}(r(n(0)).default);e.default=s}]);
//# sourceMappingURL=main.js.map