(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(55)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),c=n.n(l),r=(n(43),n(11)),u=n(5);var i=o.a.createContext();function m(e){var t=function(e,t){var n=o.a.useState(!1),a=Object(u.a)(n,2),l=a[0],c=a[1],r=o.a.useState(!0),i=Object(u.a)(r,2),m=i[0],s=i[1],d=o.a.useState(t),f=Object(u.a)(d,2),p=f[0],E=f[1];return o.a.useEffect(function(){setTimeout(function(){try{var n,a=localStorage.getItem(e);a?n=JSON.parse(a):(localStorage.setItem(e,JSON.stringify(t)),n=t),E(n),s(!1)}catch(l){c(l)}},1e3)}),{item:p,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),E(t)}catch(l){c(l)}},loading:m,error:l}}("TODOS_V1",[]),n=t.item,a=t.saveItem,l=t.loading,c=t.error,m=o.a.useState(""),s=Object(u.a)(m,2),d=s[0],f=s[1],p=o.a.useState(!1),E=Object(u.a)(p,2),v=E[0],T=E[1],g=n.filter(function(e){return!!e.completed}).length,h=n.length,b=[];b=!d.length>=1?n:n.filter(function(e){var t=e.text.toLowerCase(),n=d.toLowerCase();return t.includes(n)});return o.a.createElement(i.Provider,{value:{loading:l,error:c,totalTodos:h,completedTodos:g,searchValue:d,setSearchValue:f,searchedTodos:b,addTodo:function(e){var t=Object(r.a)(n);t.push({completed:!1,text:e}),a(t)},completeTodo:function(e){var t=n.findIndex(function(t){return t.text===e}),o=Object(r.a)(n);o[t].completed=!0,a(o)},deleteTodo:function(e){var t=n.findIndex(function(t){return t.text===e}),o=Object(r.a)(n);o.splice(t,1),a(o)},openModal:v,setOpenModal:T}},e.children)}n(44);function s(e){return o.a.createElement("div",{className:"TodoButtomMain"},o.a.createElement("button",{className:"TodoButtom",onClick:function(){e.setOpenModal(function(e){return!e})}},"+"))}n(45);function d(){var e=o.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return o.a.createElement("h2",{className:"TodoCounter-Title"},"Has Completado ",n," a de ",t," ToDos")}n(46);function f(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete},"c"),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--completed")},e.text),o.a.createElement("span",{className:"Icon Icon-delete",onClick:e.onDelete},"X"))}n(47);function p(e){return o.a.createElement("section",{className:"TodoListMain"},o.a.createElement("ul",{className:"TodoList"},e.children))}n(48);function E(){var e=o.a.useContext(i),t=e.searchValue,n=e.setSearchValue;return o.a.createElement("div",{className:"TodoSearchMain"},o.a.createElement("input",{className:"TodoSearchInput",placeholder:"Ejemplo",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}}))}n(49);function v(e){var t=e.children;return c.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}var T=n(77);function g(){var e=o.a.useState(""),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(new Date),r=Object(u.a)(c,2),m=r[0],s=r[1];console.log(m);var d=o.a.useContext(i),f=d.addTodo,p=d.setOpenModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(n),p(!1)}},o.a.createElement("label",null,"fecha"),o.a.createElement(T.a,{value:m,onChange:s}),o.a.createElement("label",null,"..."),o.a.createElement("textarea",{value:n,onChange:function(e){l(e.target.value)},placeholder:"Escribe tu tarea"}),o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){p(!1)}},"Cancelar"),o.a.createElement("button",{type:"submit"},"Anadit ToDo")))}var h=n(4),b=n(21);function x(){var e=o.a.useContext(i),t=e.error,n=e.loading,a=e.searchedTodos,l=e.completeTodo,c=e.deleteTodo,r=e.openModal,m=e.setOpenModal,T=o.a.useState(!0),x=Object(u.a)(T,2),C=x[0],O=x[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(E,null),o.a.createElement("button",{onClick:function(){O(function(){return!C})}},C?"mostrar completados":"Mostrar Todos"),o.a.createElement(p,null,t&&o.a.createElement("p",null,"Hubo un error..."),n&&o.a.createElement("p",null,"Loading, Plase weit..."),!n&&!a.length&&o.a.createElement("p",null,"!Crea un Todo"),a.filter(function(e){if(!0===C)return!1===e.completed}).map(function(e){return o.a.createElement(f,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return l(e.text)},onDelete:function(){return c(e.text)}})})),o.a.createElement(p,null,t&&o.a.createElement("p",null,"Hubo un error..."),n&&o.a.createElement("p",null,"Loading, Plase weit..."),!n&&!a.length&&o.a.createElement("p",null,"!Crea un Todo"),a.filter(function(e){if(!0===C)return!0===e.completed}).map(function(e){return o.a.createElement(f,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return l(e.text)},onDelete:function(){return c(e.text)}})})),!!r&&o.a.createElement(v,null,o.a.createElement(h.a,{utils:b.a},o.a.createElement(g,null))),o.a.createElement(s,{setOpenModal:m}))}var C=function(e){return o.a.createElement(m,null,o.a.createElement(x,null))};c.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.927a57ff.chunk.js.map