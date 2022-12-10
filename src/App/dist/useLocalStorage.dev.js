"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalStorage = useLocalStorage;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useLocalStorage(itemName, initialValue) {
  var _React$useReducer = _react.default.useReducer(reducer, initialState({
    initialValue: initialValue
  })),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var sincronizedItem = state.sincronizedItem,
      error = state.error,
      loading = state.loading,
      item = state.item;

  var onError = function onError(error) {
    return dispatch({
      type: actionTypes.error,
      payload: error
    });
  };

  var onSeccess = function onSeccess(item) {
    return dispatch({
      type: actionTypes.success,
      payload: item
    });
  };

  var onSave = function onSave(item) {
    return dispatch({
      type: actionTypes.save,
      payload: item
    });
  };

  var onSincronize = function onSincronize() {
    return dispatch({
      type: actionTypes.sincronize
    });
  };

  _react.default.useEffect(function () {
    setTimeout(function () {
      try {
        var localStorageItem = localStorage.getItem(itemName);
        var parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSeccess(parsedItem); // setItem(parsedItem);
        // setLoading(false);
        // setSincronizedItem(true);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  var saveItem = function saveItem(newItem) {
    try {
      var stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  var sincronizeItem = function sincronizeItem() {
    onSincronize();
  };

  return {
    item: item,
    saveItem: saveItem,
    loading: loading,
    error: error,
    sincronizeItem: sincronizeItem
  };
}

var initialState = function initialState(_ref) {
  var initialValue = _ref.initialValue;
  return {
    sincronizedItem: true,
    error: false,
    loading: true,
    item: initialValue
  };
};

var actionTypes = {
  error: 'ERORR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE'
};

var reducerOnject = function reducerOnject(state, payload) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, actionTypes.error, _objectSpread({}, state, {
    error: true
  })), _defineProperty(_ref2, actionTypes.success, _objectSpread({}, state, {
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload
  })), _defineProperty(_ref2, actionTypes.save, _objectSpread({}, state, {
    item: payload
  })), _defineProperty(_ref2, actionTypes.sincronize, _objectSpread({}, state, {
    sincronizedItem: false,
    loading: true
  })), _ref2;
};

var reducer = function reducer(state, action) {
  return reducerOnject(state, action.payload)[action.type] || state;
};