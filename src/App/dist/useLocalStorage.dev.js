"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocalStorage = useLocalStorage;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      item = state.item; // const [sincronizedItem, setSincronizedItem ]   = React.useState(true);
  // const [error, setError] = React.useState(false);
  //   const [loading, setLoading] = React.useState(true);
  //   const[item, setItem] = React.useState(initialValue);

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

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  var saveItem = function saveItem(newItem) {
    try {
      var stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  var sincronizeItem = function sincronizeItem() {
    setLoading(true);
    setSincronizedItem(false);
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
  error: 'ERORR'
};

var reducerOnject = function reducerOnject(state, payload) {
  return {};
};

var reducer = function reducer(state, action) {
  reducerOnject(state, action.payload)[action.type] || state;
};