(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(62)},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(3),c=a.n(l),r=(a(43),a(11)),u=a(5);var i=o.a.createContext();function m(e){var t=function(e,t){var a=o.a.useState(!1),n=Object(u.a)(a,2),l=n[0],c=n[1],r=o.a.useState(!0),i=Object(u.a)(r,2),m=i[0],s=i[1],d=o.a.useState(t),f=Object(u.a)(d,2),p=f[0],E=f[1];return o.a.useEffect(function(){setTimeout(function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=t),E(a),s(!1)}catch(l){c(l)}},1e3)}),{item:p,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),E(t)}catch(l){c(l)}},loading:m,error:l}}("TODOS_V1",[]),a=t.item,n=t.saveItem,l=t.loading,c=t.error,m=o.a.useState(""),s=Object(u.a)(m,2),d=s[0],f=s[1],p=o.a.useState(!1),E=Object(u.a)(p,2),v=E[0],h=E[1],T=a.filter(function(e){return!!e.completed}).length,g=a.length,b=[];b=!d.length>=1?a:a.filter(function(e){var t=e.text.toLowerCase(),a=d.toLowerCase();return t.includes(a)});return o.a.createElement(i.Provider,{value:{loading:l,error:c,totalTodos:g,completedTodos:T,searchValue:d,setSearchValue:f,searchedTodos:b,addTodo:function(e){var t=Object(r.a)(a);t.push({completed:!1,text:e}),n(t)},completeTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(r.a)(a);o[t].completed=!0,n(o)},deleteTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(r.a)(a);o.splice(t,1),n(o)},openModal:v,setOpenModal:h}},e.children)}a(45);function s(e){return o.a.createElement("div",{className:"TodoButtomMain"},o.a.createElement("button",{className:"TodoButtom",onClick:function(){e.setOpenModal(function(e){return!e})}},"+"))}a(47);function d(){var e=o.a.useContext(i),t=e.totalTodos,a=e.completedTodos;return o.a.createElement("h2",{className:"TodoCounter-Title"},"Has Completado ",a," a de ",t," ToDos")}a(49);function f(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete},"c"),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--completed")},e.text),o.a.createElement("span",{className:"Icon Icon-delete",onClick:e.onDelete},"X"))}a(51);function p(e){return o.a.createElement("section",{className:"TodoListMain"},o.a.createElement("ul",{className:"TodoList"},e.children))}a(53);function E(){var e=o.a.useContext(i),t=e.searchValue,a=e.setSearchValue;return o.a.createElement("div",{className:"TodoSearchMain"},o.a.createElement("input",{className:"TodoSearchInput",placeholder:"Ejemplo",value:t,onChange:function(e){console.log(e.target.value),a(e.target.value)}}))}a(55);function v(e){var t=e.children;return c.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}var h=a(84);function T(){var e=o.a.useState(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(new Date),r=Object(u.a)(c,2),m=r[0],s=r[1];console.log(m);var d=o.a.useContext(i),f=d.addTodo,p=d.setOpenModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(a),p(!1)}},o.a.createElement("label",null,"fecha"),o.a.createElement(h.a,{value:m,onChange:s}),o.a.createElement("label",null,"..."),o.a.createElement("textarea",{value:a,onChange:function(e){l(e.target.value)},placeholder:"Escribe tu tarea"}),o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){p(!1)}},"Cancelar"),o.a.createElement("button",{type:"submit"},"Anadit ToDo")))}var g=a(4),b=a(21);function O(){var e=o.a.useContext(i),t=e.error,a=e.loading,n=e.searchedTodos,l=e.completeTodo,c=e.deleteTodo,r=e.openModal,u=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(E,null),o.a.createElement(p,null,t&&o.a.createElement("p",null,"Hubo un error..."),a&&o.a.createElement("p",null,"Loading, Plase weit..."),!a&&!n.length&&o.a.createElement("p",null,"!Crea un Todo"),n.map(function(e){return o.a.createElement(f,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return l(e.text)},onDelete:function(){return c(e.text)}})})),!!r&&o.a.createElement(v,null,o.a.createElement(g.a,{utils:b.a},o.a.createElement(T,null))),o.a.createElement(s,{setOpenModal:u}))}var C=function(e){return o.a.createElement(m,null,o.a.createElement(O,null))};c.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[38,2,1]]]);
//# sourceMappingURL=main.70e9919e.chunk.js.map