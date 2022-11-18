"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTodos = useTodos;

var _react = _interopRequireDefault(require("react"));

var _useLocalStorage2 = require("./useLocalStorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useTodos() {
  var _useLocalStorage = (0, _useLocalStorage2.useLocalStorage)('TODOS_V1', []),
      todos = _useLocalStorage.item,
      saveTodos = _useLocalStorage.saveItem,
      sincronizeTodos = _useLocalStorage.sincronizeItem,
      loading = _useLocalStorage.loading,
      error = _useLocalStorage.error;

  var _React$useState = _react.default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      searchValue = _React$useState2[0],
      setSearchValue = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openModal = _React$useState4[0],
      setOpenModal = _React$useState4[1];

  var completedTodos = todos.filter(function (todo) {
    return !!todo.completed;
  }).length;
  var totalTodos = todos.length;
  var searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(function (todo) {
      var todoText = todo.text.toLowerCase();
      var searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  var addTodo = function addTodo(fecha, text) {
    var newTodos = _toConsumableArray(todos);

    newTodos.push({
      completed: false,
      date: fecha,
      text: text
    });
    saveTodos(newTodos);
  };

  var completeTodo = function completeTodo(text) {
    var todoIndex = todos.findIndex(function (todo) {
      return todo.text === text;
    });

    var newTodos = _toConsumableArray(todos);

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  var deleteTodo = function deleteTodo(text) {
    var todoIndex = todos.findIndex(function (todo) {
      return todo.text === text;
    });

    var newTodos = _toConsumableArray(todos);

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }; // console.log('render antes del useEffect');
  // React.useEffect(()=>{
  //   console.log('====================================');
  //   console.log('useEffect luego del useEffect');
  //   console.log('====================================');
  // },[totalTodos]);


  return {
    loading: loading,
    error: error,
    totalTodos: totalTodos,
    completedTodos: completedTodos,
    searchValue: searchValue,
    setSearchValue: setSearchValue,
    searchedTodos: searchedTodos,
    addTodo: addTodo,
    completeTodo: completeTodo,
    deleteTodo: deleteTodo,
    openModal: openModal,
    setOpenModal: setOpenModal,
    sincronizeTodos: sincronizeTodos
  };
}