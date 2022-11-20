(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,a){e.exports=a(74)},50:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),l=(a(50),a(17)),s=a(5);function d(){var e=function(e,t){var a=o.a.useState(!0),n=Object(s.a)(a,2),c=n[0],r=n[1],l=o.a.useState(!1),d=Object(s.a)(l,2),i=d[0],u=d[1],m=o.a.useState(!0),p=Object(s.a)(m,2),E=p[0],T=p[1],f=o.a.useState(t),g=Object(s.a)(f,2),h=g[0],v=g[1];return o.a.useEffect(function(){setTimeout(function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=t),v(a),T(!1),r(!0)}catch(i){u(i)}},3e3)},[c]),{item:h,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),v(t)}catch(i){u(i)}},loading:E,error:i,sincronizeItem:function(){T(!0),r(!1)}}}("TODOS_V1",[]),t=e.item,a=e.saveItem,n=e.sincronizeItem,c=e.loading,r=e.error,d=o.a.useState(""),i=Object(s.a)(d,2),u=i[0],m=i[1],p=o.a.useState(!1),E=Object(s.a)(p,2),T=E[0],f=E[1],g=t.filter(function(e){return!!e.completed}).length,h=t.length,v=[];v=!u.length>=1?t:t.filter(function(e){var t=e.text.toLowerCase(),a=u.toLowerCase();return t.includes(a)});return{loading:c,error:r,totalTodos:h,completedTodos:g,searchValue:u,setSearchValue:m,searchedTodos:v,addTodo:function(e,n){var o=Object(l.a)(t);o.push({completed:!1,date:e,text:n}),a(o)},completeTodo:function(e){var n=t.findIndex(function(t){return t.text===e}),o=Object(l.a)(t);o[n].completed=!0,a(o)},deleteTodo:function(e){var n=t.findIndex(function(t){return t.text===e}),o=Object(l.a)(t);o.splice(n,1),a(o)},openModal:T,setOpenModal:f,sincronizeTodos:n}}a(53);function i(e){return o.a.createElement("div",{className:"TodoButtomMain"},o.a.createElement("button",{className:"TodoButtom",onClick:function(){e.setOpenModal(function(e){return!e})}},"+"))}a(55);function u(e){var t=e.children,a=e.loading;return o.a.createElement("header",{className:"header"},o.a.Children.toArray(t).map(function(e){return o.a.cloneElement(e,{loading:a})}))}a(57);function m(e){var t=e.totalTodos,a=e.completedTodos,n=e.loading;return o.a.createElement("h2",{className:"TodoCounter-Title ".concat(!!n&&"TodoCounter--loading"," ")},"Has Completado ",a," a de ",t," ToDos")}a(59);function p(){return o.a.createElement("div",null,o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs..."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"})),o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs..."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"})),o.a.createElement("div",{className:"LoadingTodo-container"},o.a.createElement("span",{className:"LoadingTodo-completeIcon"}),o.a.createElement("p",{className:"LoadingTodo-text"},"Cargando TODOs..."),o.a.createElement("span",{className:"LoadingTodo-deleteIcon"})))}function E(){return o.a.createElement("p",null,"Desesp\xe9rate, hubo un error...")}function T(){return o.a.createElement("p",null,"\xa1Crea tu primer TODO!")}a(61);var f=a(9);function g(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete},!e.completed&&o.a.createElement(f.c,null),e.completed&&o.a.createElement(f.a,null)),o.a.createElement("div",{className:"TodoItem--content"},o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--completed")},e.text),o.a.createElement("p",{className:"TodoItem-date"},e.date)),o.a.createElement("span",{className:"  Icon Icon-delete",onClick:e.onDelete},o.a.createElement(f.e,null)))}a(63);function h(e){var t=e.children||e.render,a=o.a.useState(!0),n=Object(s.a)(a,2);n[0],n[1];return o.a.createElement("section",{className:"TodoListMain"},o.a.createElement("div",{className:"TodoList"},e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResult(e.searchText),!e.loading&&!e.error&&e.searchedTodos.map(t),o.a.createElement("ul",{className:"TodoList"},e.children)))}a(65);function v(e){var t=e.searchValue,a=e.setSearchValue,n=e.loading;return o.a.createElement("div",{className:"TodoSearchMain"},o.a.createElement(f.d,null),o.a.createElement("input",{className:"TodoSearchInput",placeholder:"Ejemplo",value:t,onChange:function(e){console.log(e.target.value),a(e.target.value)},disabled:n}))}a(67);var N=a(97);function O(e){var t=e.addTodo,a=e.setOpenModal,c=o.a.useState(""),r=Object(s.a)(c,2),l=r[0],d=r[1],i=Object(n.useState)(new Date),u=Object(s.a)(i,2),m=u[0],p=u[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(m.toLocaleDateString(),l),a(!1)},className:"form-container"},o.a.createElement("div",{className:"textArea-container"},o.a.createElement("label",null,o.a.createElement(f.c,null)),o.a.createElement("textarea",{className:"form-textArea",value:l,onChange:function(e){d(e.target.value)},placeholder:"Escribe tu tarea"})),o.a.createElement("div",{className:"calender-container"},o.a.createElement(f.b,null),o.a.createElement(N.a,{className:"Datepicker",value:m,onChange:p}),o.a.createElement("div",null,o.a.createElement("button",{className:"submit-button",type:"submit"},"Add"))))}function b(e){var t=function(e){var t=o.a.useState(!1),a=Object(s.a)(t,2),n=a[0],c=a[1];return window.addEventListener("storage",function(e){"TODOS_V1"===e.key&&(console.log("hubo combios"),c(!0))}),{show:n,toggleShow:function(){e(),c(!1)}}}(e.sincronize),a=t.show,n=t.toggleShow;return a?o.a.createElement("div",null,o.a.createElement("p",null,"Hubo cambio"),o.a.createElement("button",{onClick:n},"Recargar pagina")):null}var S=a(4),I=a(27),x=a(28),L=a(6);var C=function(e){var t=d(),a=t.error,n=t.loading,c=t.searchedTodos,r=t.completeTodo,l=t.deleteTodo,s=t.openModal,f=t.setOpenModal,N=t.totalTodos,C=t.completedTodos,j=t.searchValue,w=t.setSearchValue,y=t.addTodo,D=t.sincronizeTodos;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{loading:n},o.a.createElement(m,{totalTodos:N,completedTodos:C}),o.a.createElement(v,{searchValue:j,setSearchValue:w}),!!s&&o.a.createElement(S.a,{utils:I.a,locale:x.a,style:L.a},o.a.createElement(O,{addTodo:y,setOpenModal:f}))),o.a.createElement(h,{error:a,loading:n,searchedTodos:c,totalTodos:N,searchText:j,onError:function(){return o.a.createElement(E,null)},onLoading:function(){return o.a.createElement(p,null)},onEmptyTodos:function(){return o.a.createElement(T,null)},onEmptySearchResult:function(e){return o.a.createElement("p",null,"no hay resultados para ",e)}},function(e){return o.a.createElement(g,{key:e.text,text:e.text,date:e.date,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return l(e.text)}})}),o.a.createElement(i,{setOpenModal:f}),o.a.createElement(b,{sincronize:D}))};r.a.render(o.a.createElement(C,null),document.getElementById("root"))}},[[45,2,1]]]);
//# sourceMappingURL=main.9a3b691f.chunk.js.map