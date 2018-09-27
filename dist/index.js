(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Accordion/Accordion.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Accordion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Collapse = __webpack_require__("./components/Collapse/index.js");

var _Collapse2 = _interopRequireDefault(_Collapse);

__webpack_require__("./components/Accordion/Accordion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = exports.Accordion = function (_Component) {
	_inherits(Accordion, _Component);

	function Accordion() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Accordion);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			items: _this.props.items
		}, _this.openItem = function (index) {
			var items = _this.state.items.map(function (item, itemIndex) {
				if (itemIndex === index) {
					item.open = true;
				}
				item.open = itemIndex === index ? true : false;
				return item;
			});

			// console.log(items);

			_this.setState({
				items: items
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Accordion, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'ul',
				{ className: 'accordian' },
				this.state.items.map(function (item, index) {
					// console.log(item.open);
					return _react2.default.createElement(
						_Collapse2.default,
						{
							hasArrow: _this2.props.hasArrow,
							ellipsis: _this2.props.ellipsis,
							id: index + 1,
							closeable: false,
							key: index,
							title: item.title,
							open: item.open,
							onOpen: _this2.openItem.bind(_this2, index)
						},
						item.content
					);
				})
			);
		}
	}]);

	return Accordion;
}(_react.Component);

exports.default = Accordion;

/***/ }),

/***/ "./components/Accordion/Accordion.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Accordion.scss";

/***/ }),

/***/ "./components/Accordion/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Accordion = __webpack_require__("./components/Accordion/Accordion.js");

var _Accordion2 = _interopRequireDefault(_Accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Accordion2.default;

/***/ }),

/***/ "./components/AddContentBetween/AddContentBetween.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__("./components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__("./components/Input/index.js");

var _Input2 = _interopRequireDefault(_Input);

var _FileUpload = __webpack_require__("./components/FileUpload/index.js");

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _reactClickOutside = __webpack_require__("react-click-outside");

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

__webpack_require__("./components/AddContentBetween/AddContentBetween.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddContentBetween = function (_Component) {
	_inherits(AddContentBetween, _Component);

	function AddContentBetween() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, AddContentBetween);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddContentBetween.__proto__ || Object.getPrototypeOf(AddContentBetween)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			addingContent: false,
			content: null,
			options: []
		}, _this.handleContentAdding = function (event) {
			var options = _this.state.options;


			if (event && event.value) {

				_this.setState({
					addingContent: false
				});

				if (event.value === 'custom') {
					// Throw up appropriate Modal
					if (_this.props.addCustomFunc === undefined) {
						console.warn('AddContentBetween: Tried to call addCustomFunc, but no prop exists for it');
					} else {
						_this.props.addCustomFunc();
					}
				}
				// should else be a no op
				// else if(event.value !== this.state.content){
				// }
				else {
						_this.props.addFunc(event.value);
					}
			} else if (options[0].value) {
				_this.setState({
					addingContent: false
				});;
				_this.props.addFunc(event.value);
			} else {
				console.log('nothing selected');
			}
		}, _this.handleContentAddingImmediate = function () {
			var options = _this.state.options;

			_this.props.addFunc(options[0]);
		}, _this.addContent = function () {
			_this.setState({ addingContent: true });
		}, _this.handleClickOutside = function () {
			_this.setState({ addingContent: false });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(AddContentBetween, [{
		key: 'setOptions',
		value: function setOptions(options) {
			if (options) {
				options.push({ label: 'Other', value: 'custom' });
			} else {
				// No options? Is that cool?
				console.warn('AddContentBetween : created without options for ', this.props.label);
			}

			this.setState({ options: options });
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var options = this.props.options;

			this.setOptions(options);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options && this.state.options.length !== nextProps.options.length) {
				this.setOptions(nextProps.options);
			}
		}
	}, {
		key: 'className',
		value: function className() {
			var className = 'add-content-between';
			if (this.props.className) {
				className += ' ' + this.props.className;
			}
			if (this.props.iconLeft) {
				className += ' has-left-icon';
			}
			if (this.state.addingContent) {
				className += ' adding-content';
			}
			return className;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    label = _props.label,
			    reportId = _props.reportId,
			    vulnerabilityId = _props.vulnerabilityId,
			    debug = _props.debug;
			var options = this.state.options;


			if (label === "Add Images" && !vulnerabilityId && debug) {
				console.warn('AddContentBetween : for Images required vulnerabilityId');
			}

			if (label === "Add Images" && !reportId && debug) {
				console.warn('AddContentBetween : for Images required reportId');
			}

			return _react2.default.createElement(
				'div',
				{ className: this.className() },
				this.state.addingContent ? options ? this.props.iconLeft ? _react2.default.createElement(
					'div',
					{ className: 'grid-flex gutter-none no-break top' },
					_react2.default.createElement(
						'div',
						{ className: 'col no-grow' },
						_react2.default.createElement(
							'span',
							{ className: 'material-icons icon left' },
							this.props.iconLeft
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col grow' },
						_react2.default.createElement(_Input2.default, {
							type: 'typeahead',
							name: 'add-content',
							className: 'minimal',
							placeholder: this.props.label,
							autoFocus: this.state.addingContent ? true : false,
							options: options,
							openOnFocus: true,
							onChange: this.handleContentAdding,
							value: this.state.content
						})
					)
				) : _react2.default.createElement(_Input2.default, {
					type: 'typeahead',
					name: 'add-content',
					className: 'minimal',
					placeholder: this.props.label,
					autoFocus: this.state.addingContent ? true : false,
					options: options,
					openOnFocus: true,
					onChange: this.handleContentAdding,
					value: this.state.content
				}) : _react2.default.createElement(_FileUpload2.default, {
					multiple: true,
					autoOpen: true,
					reportId: reportId,
					vulnerabilityId: vulnerabilityId,
					accept: 'image/*',
					component: _react2.default.createElement(
						'div',
						{ className: 'add-line' },
						this.props.label ? this.props.label : false
					),
					visibleActions: false
				}) : _react2.default.createElement(
					'div',
					{
						className: 'add-line'
						//onClick={options && options.length <= 2 ? this.handleContentAddingImmediate : this.addContent.bind(this)}
						, onClick: this.props.addContentImmediate ? this.handleContentAddingImmediate : this.addContent
					},
					this.props.label && !this.state.addingContent ? _react2.default.createElement(
						'div',
						{ className: 'label' },
						this.props.iconLeft ? _react2.default.createElement(
							'div',
							{ className: 'grid-flex gutter-none no-break top' },
							_react2.default.createElement(
								'div',
								{ className: 'col no-grow' },
								_react2.default.createElement(
									'span',
									{ className: 'material-icons icon left' },
									this.props.iconLeft
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col grow' },
								_react2.default.createElement(
									'span',
									{ className: 'label-text' },
									this.props.label
								)
							)
						) : this.props.label
					) : false,
					_react2.default.createElement('div', { className: 'line' }),
					_react2.default.createElement(
						'div',
						{ className: 'button-wrap' },
						_react2.default.createElement(_Button2.default, { icon: 'add', className: 'circle tiny', tabIndex: '-1' })
					)
				)
			);
		}
	}]);

	return AddContentBetween;
}(_react.Component);

exports.default = (0, _reactClickOutside2.default)(AddContentBetween);

/***/ }),

/***/ "./components/AddContentBetween/AddContentBetween.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "AddContentBetween.scss";

/***/ }),

/***/ "./components/AddContentBetween/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _AddContentBetween = __webpack_require__("./components/AddContentBetween/AddContentBetween.js");

var _AddContentBetween2 = _interopRequireDefault(_AddContentBetween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AddContentBetween2.default;

/***/ }),

/***/ "./components/Avatar/Avatar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Avatar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Avatar/Avatar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = exports.Avatar = function (_Component) {
	_inherits(Avatar, _Component);

	function Avatar() {
		_classCallCheck(this, Avatar);

		return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
	}

	_createClass(Avatar, [{
		key: 'randomColor',
		value: function randomColor() {
			var color = '';
			var colors = ['#e1d9f2', '#817f97', '#795C9B'];
			if (this.props.randomColor) {
				color = colors[Math.floor(Math.random() * colors.length)];
			};
			return color;
		}
	}, {
		key: 'render',
		value: function render() {

			var backgroundColor = {
				backgroundColor: this.props.color ? this.props.color : this.randomColor()
			};

			return _react2.default.createElement(
				'div',
				{ style: backgroundColor, className: this.props.className ? "avatar " + this.props.className : "avatar" },
				this.props.image ? _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement('img', { src: this.props.image }),
					this.props.editable ? _react2.default.createElement(
						'a',
						{ className: 'overlay' },
						_react2.default.createElement('input', { type: 'file', name: 'avatar-image', id: 'avatar-image', className: 'avatar-input' }),
						_react2.default.createElement(
							'label',
							{ htmlFor: 'avatar-image' },
							_react2.default.createElement(
								'span',
								null,
								'Update',
								_react2.default.createElement('br', null),
								'Image'
							)
						)
					) : false
				) : _react2.default.createElement(
					'div',
					{ className: 'empty-avatar' },
					this.props.initial ? this.props.initial : _react2.default.createElement(
						'i',
						{ className: 'material-icons' },
						'person'
					),
					this.props.editable ? _react2.default.createElement(
						'a',
						{ className: 'overlay' },
						_react2.default.createElement('input', { type: 'file', name: 'avatar-image', id: 'avatar-image', className: 'avatar-input' }),
						_react2.default.createElement(
							'label',
							{ htmlFor: 'avatar-image' },
							_react2.default.createElement(
								'span',
								null,
								'Add ',
								_react2.default.createElement('br', null),
								'Image'
							)
						)
					) : false
				)
			);
		}
	}]);

	return Avatar;
}(_react.Component);

Avatar.defaultProps = {
	editable: false
};
exports.default = Avatar;

/***/ }),

/***/ "./components/Avatar/Avatar.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Avatar.scss";

/***/ }),

/***/ "./components/Avatar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Avatar = __webpack_require__("./components/Avatar/Avatar.js");

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Avatar2.default;

/***/ }),

/***/ "./components/Button/Button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__("./components/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

__webpack_require__("./components/Button/Button.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_Component) {
	_inherits(Button, _Component);

	function Button(props) {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

		_this.state = {
			state: _this.props.state ? _this.props.state : null
		};

		_this.linkTo = _this.linkTo.bind(_this);
		_this.state = {
			link: false
		};
		return _this;
	}

	_createClass(Button, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// if (this.props.debug) {
			// 	console.log(this.props.state)
			// }
		}
	}, {
		key: 'buttonClass',
		value: function buttonClass() {
			var buttonClass = 'button';
			if (this.props.className) {
				buttonClass += ' ' + this.props.className;
			}
			if (this.props.cursor) {
				buttonClass += ' ' + this.props.cursor;
			}
			if (this.props.disabled) {
				buttonClass += ' disabled';
			}
			if (this.props.state) {
				buttonClass += ' ' + this.props.state;
			}
			return buttonClass;
		}
	}, {
		key: 'buttonLabel',
		value: function buttonLabel() {
			var label = '';

			if (this.props.label) {

				if (this.props.className && (this.props.className.includes('circle') || this.props.className.includes('square'))) {
					label = '';
				} else {
					label = _react2.default.createElement(
						'span',
						{ className: 'label' },
						this.props.label
					);
				}
			}

			return label;
		}
	}, {
		key: 'buttonIcon',
		value: function buttonIcon(showIcon) {
			var icon = '';
			if (this.props.icon) {
				if (this.props.icon == "loader" || this.props.state == "loading") {
					icon = _react2.default.createElement(_Loader2.default, { className: 'normal icon' });
				} else if (this.props.state == 'success') {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'check'
					);
				} else if (this.props.state == 'error') {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'error_outline'
					);
				} else {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						this.props.icon
					);
				}
				if (this.props.state == "loading" && this.props.icon) {
					icon = _react2.default.createElement(_Loader2.default, { className: 'normal icon' });
				}
				if (this.props.state == "error") {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'error_outline'
					);
				}
				if (this.props.state == "success") {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'check'
					);
				}
			}
			if (showIcon) {
				if (this.props.state == "loading") {
					icon = _react2.default.createElement(_Loader2.default, { className: 'normal icon' });
				}
				if (this.props.state == "error") {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'error_outline'
					);
				}
				if (this.props.state == "success") {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'check'
					);
				}
			}
			return icon;
		}
	}, {
		key: 'buttonRightIcon',
		value: function buttonRightIcon() {
			var icon = '';
			if (this.props.rightIcon) {
				if (this.props.rightIcon == "loader" || this.props.state == 'loading') {
					icon = _react2.default.createElement(_Loader2.default, { className: 'normal icon' });
				} else if (this.props.state == 'success') {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'check'
					);
				} else if (this.props.state == 'error') {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'error_outline'
					);
				} else {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						this.props.rightIcon
					);
				}
				if (this.props.state == "loading" && this.props.rightIcon) {
					icon = _react2.default.createElement(_Loader2.default, { className: 'normal icon' });
				}
				if (this.props.state == "error") {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'error_outline'
					);
				}
				if (this.props.state == "success") {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						'check'
					);
				}
			}
			return icon;
		}
	}, {
		key: 'handleClick',
		value: function handleClick(event) {
			if (this.props.onClick) {
				this.props.onClick(event);
			} else if (this.props.href) {
				var target = this.props.target ? this.props.target : '_self';
				window.open(this.props.href, target);
			}
		}
	}, {
		key: 'linkTo',
		value: function linkTo() {
			if (this.props.history) {
				this.props.history.push(this.props.link);
			} else {
				console.log('tried to link with no history');
			}
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'button',
				_extends({
					onClick: this.props.link ? this.linkTo : this.handleClick.bind(this),
					className: this.buttonClass(),
					focus: this.props.focus,
					autoFocus: this.props.autoFocus,
					disabled: this.props.disabled,
					'data-tooltip-text': this.props.state != "loading" ? this.props.tooltipText : null,
					'data-tooltip-position': this.props.tooltipPosition,
					tabIndex: this.props.tabIndex
				}, this.props.extraProps),
				!this.props.icon && !this.props.rightIcon ? this.props.state == "loading" || this.props.state == "error" || this.props.state == "success" ? _react2.default.createElement(
					'div',
					{ className: 'button-content' },
					_react2.default.createElement(
						'div',
						{ className: 'state-icon' },
						this.buttonIcon(true)
					)
				) : _react2.default.createElement(
					'div',
					{ className: 'button-content' },
					this.buttonLabel()
				) : _react2.default.createElement(
					'div',
					{ className: 'button-content' },
					this.buttonIcon(),
					this.buttonLabel(),
					this.buttonRightIcon()
				)
			);
		}
	}]);

	return Button;
}(_react.Component);

exports.default = Button;

/***/ }),

/***/ "./components/Button/Button.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Button.scss";

/***/ }),

/***/ "./components/Button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Button = __webpack_require__("./components/Button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;

/***/ }),

/***/ "./components/Card/Card.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Card = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__("./components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

__webpack_require__("./components/Card/Card.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = exports.Card = function (_Component) {
	_inherits(Card, _Component);

	function Card() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Card);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Card, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.props.className ? "card padded " + this.props.className : "card padded" },
				_react2.default.createElement(
					'div',
					{ className: 'card-image' },
					_react2.default.createElement('img', { src: 'https://unsplash.it/640/360' }),
					_react2.default.createElement(_Button2.default, {
						icon: PlayIcon,
						className: 'circle play-button'
					}),
					_react2.default.createElement(
						'div',
						{ className: 'actions' },
						_react2.default.createElement(_Button2.default, {
							icon: 'equalizer',
							tooltipText: 'View Metrics',
							tooltipPosition: 'top',
							className: 'circle small transparent white'
						}),
						_react2.default.createElement(_Button2.default, {
							icon: 'history',
							tooltipText: 'View Scheduling',
							tooltipPosition: 'top',
							className: 'circle small transparent white'
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'card-row general-info' },
					_react2.default.createElement(
						'span',
						{ className: 'title bold' },
						this.props.title
					),
					_react2.default.createElement(
						'span',
						{ className: 'description' },
						this.props.description
					),
					_react2.default.createElement(
						'div',
						{ className: 'card-actions' },
						_react2.default.createElement(
							'div',
							{ className: 'float-grid no-break' },
							_react2.default.createElement(
								'div',
								{ className: 'col-8' },
								_react2.default.createElement(_Button2.default, {
									disabled: 'true',
									className: 'transparent circle main-color-2'
								}),
								_react2.default.createElement(_Button2.default, {
									disabled: 'true',
									className: 'transparent circle main-color-2'
								}),
								_react2.default.createElement(_Button2.default, {
									disabled: 'true',
									className: 'transparent circle main-color-2'
								})
							)
						)
					)
				)
			);
		}
	}]);

	return Card;
}(_react.Component);

exports.default = Card;

/***/ }),

/***/ "./components/Card/Card.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Card.scss";

/***/ }),

/***/ "./components/Card/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Card = __webpack_require__("./components/Card/Card.js");

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Card2.default;

/***/ }),

/***/ "./components/CenteredForm/CenteredForm.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CenteredForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/CenteredForm/CenteredForm.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CenteredForm = exports.CenteredForm = function (_Component) {
	_inherits(CenteredForm, _Component);

	function CenteredForm() {
		_classCallCheck(this, CenteredForm);

		return _possibleConstructorReturn(this, (CenteredForm.__proto__ || Object.getPrototypeOf(CenteredForm)).apply(this, arguments));
	}

	_createClass(CenteredForm, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.props.className ? 'centered-form ' + this.props.className : 'centered-form' },
				this.props.fixedHeader ? _react2.default.createElement(
					'div',
					{ className: 'fixed-header' },
					this.props.fixedHeader
				) : false,
				this.props.formSteps ? _react2.default.createElement(
					'div',
					{ className: 'fixed-header' },
					this.props.formSteps
				) : false,
				_react2.default.createElement(
					'div',
					{ className: 'main-content' },
					this.props.header ? _react2.default.createElement(
						'div',
						{ className: 'header' },
						this.props.header
					) : false,
					_react2.default.createElement(
						'div',
						{ className: 'content' },
						this.props.children
					),
					this.props.footer ? _react2.default.createElement(
						'div',
						{ className: 'footer' },
						this.props.footer
					) : false
				),
				this.props.fixedFooter ? _react2.default.createElement(
					'div',
					{ className: 'fixed-footer' },
					this.props.fixedFooter
				) : false
			);
		}
	}]);

	return CenteredForm;
}(_react.Component);

exports.default = CenteredForm;

/***/ }),

/***/ "./components/CenteredForm/CenteredForm.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "CenteredForm.scss";

/***/ }),

/***/ "./components/CenteredForm/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _CenteredForm = __webpack_require__("./components/CenteredForm/CenteredForm.js");

var _CenteredForm2 = _interopRequireDefault(_CenteredForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CenteredForm2.default;

/***/ }),

/***/ "./components/Checkbox/Checkbox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Checkbox/Checkbox.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
	_inherits(Checkbox, _Component);

	function Checkbox() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Checkbox);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			className: _this.props.className
		}, _this.handleChange = function (event) {
			if (_this.props.onChange) {
				_this.props.onChange(event);
			}
		}, _this.checkbox = function () {
			return _react2.default.createElement(
				'div',
				{ className: 'gw-checkbox' },
				_react2.default.createElement('input', _extends({
					disabled: _this.props.disabled,
					type: 'checkbox',
					placeholder: _this.props.placeholder,
					value: _this.props.value,
					id: _this.props.id ? _this.props.id : _this.props.value,
					name: _this.props.name,
					onChange: _this.handleChange,
					checked: _this.props.checked,
					autoComplete: _this.props.autoComplete,
					readOnly: _this.props.readOnly
				}, _this.props.checkboxProps)),
				_this.props.label ? _react2.default.createElement(
					'label',
					{ htmlFor: _this.props.id ? _this.props.id : _this.props.value },
					_react2.default.createElement(
						'div',
						{ className: 'grid-flex no-break gutter-none left middle' },
						_react2.default.createElement(
							'div',
							{ className: 'col' },
							_react2.default.createElement('div', { className: 'checkbox' })
						),
						_this.props.label ? _react2.default.createElement(
							'div',
							{ className: 'col' },
							_react2.default.createElement(
								'span',
								{ className: 'pl-1' },
								_this.props.label
							)
						) : false
					)
				) : false
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Checkbox, [{
		key: 'className',
		value: function className() {
			var className = this.state.className + ' ' + 'input-wrap';
			if (this.state.error) {
				className += ' ' + 'error';
			}
			if (this.state.validated) {
				className += ' ' + 'validated';
			}
			if (this.state.hasValue) {
				className += ' has-value';
			}
			return className;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.className() },
				this.checkbox()
			);
		}
	}]);

	return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
	className: ''
};
exports.default = Checkbox;

/***/ }),

/***/ "./components/Checkbox/Checkbox.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Checkbox.scss";

/***/ }),

/***/ "./components/Checkbox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Checkbox = __webpack_require__("./components/Checkbox/Checkbox.js");

Object.keys(_Checkbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Checkbox[key];
    }
  });
});

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Checkbox2.default;

/***/ }),

/***/ "./components/Collapse/Collapse.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Collapse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Collapse/Collapse.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapse = exports.Collapse = function (_Component) {
	_inherits(Collapse, _Component);

	function Collapse() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Collapse);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			open: _this.props.open
		}, _this.open = function (event) {
			if (_this.props.onOpen && _this.props.id) {
				_this.props.onOpen(event);
			} else {
				_this.setState({ open: true });
			}
		}, _this.close = function (event) {
			if (_this.props.closable) {
				if (_this.props.onClose && _this.props.id) {
					_this.props.onClose(event);
				} else {
					_this.setState({ open: false });
				}
			}
		}, _this.toggle = function (event) {
			var open = _this.state.open;
			if (open) {
				_this.close(event);
			} else {
				_this.open(event);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Collapse, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.state.open && !nextProps.open) {
				this.setState({ open: false });
			}
			if (!this.state.open && nextProps.open) {
				this.setState({ open: true });
			}
		}
	}, {
		key: 'icon',
		value: function icon() {
			var icon = '';
			if (this.props.icon) {
				if (typeof this.props.icon === 'string') {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						this.props.icon
					);
				} else {
					icon = this.props.icon;
				}
			}
			return icon;
		}
	}, {
		key: 'iconOpen',
		value: function iconOpen() {
			var icon = '';
			if (this.props.iconOpen) {
				if (typeof this.props.iconOpen === 'string') {
					icon = _react2.default.createElement(
						'i',
						{ className: 'material-icons icon' },
						this.props.iconOpen
					);
				} else {
					icon = this.props.iconOpen;
				}
			}
			return icon;
		}
	}, {
		key: 'render',
		value: function render() {

			var className = this.props.className || '';

			return _react2.default.createElement(
				'div',
				{ className: this.state.open ? "collapse open " + className : "collapse " + className },
				_react2.default.createElement(
					'div',
					{ onClick: this.toggle, className: 'collapse-header' },
					_react2.default.createElement(
						'div',
						{ className: 'grid-flex no-break gutter-tight' },
						this.props.iconOpen ? this.state.open ? this.iconOpen() : this.icon() : this.icon(),
						_react2.default.createElement(
							'div',
							{ className: 'col grow' },
							_react2.default.createElement(
								'div',
								{ className: this.props.ellipsis != false ? "title ellipsis" : "title" },
								this.state.open && this.props.openTitle ? this.props.openTitle : this.props.title
							)
						),
						this.props.hasArrow != false ? this.state.open ? _react2.default.createElement(
							'div',
							{ className: 'col no-grow' },
							_react2.default.createElement(
								'i',
								{ className: 'material-icons icon right upside-down' },
								'keyboard_arrow_down'
							)
						) : _react2.default.createElement(
							'div',
							{ className: 'col no-grow' },
							_react2.default.createElement(
								'i',
								{ className: 'material-icons icon right' },
								'keyboard_arrow_down'
							)
						) : false
					)
				),
				this.state.open ? _react2.default.createElement(
					'div',
					{ key: 'collapse-content', className: 'collapse-content' },
					this.props.children
				) : false
			);
		}
	}]);

	return Collapse;
}(_react.Component);

Collapse.defaultProps = {
	open: false,
	openTitle: '',
	closable: true,
	onOpen: function onOpen() {},
	onClose: function onClose() {}
};
exports.default = Collapse;

/***/ }),

/***/ "./components/Collapse/Collapse.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Collapse.scss";

/***/ }),

/***/ "./components/Collapse/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Collapse = __webpack_require__("./components/Collapse/Collapse.js");

var _Collapse2 = _interopRequireDefault(_Collapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Collapse2.default;

/***/ }),

/***/ "./components/ContentEditable/ContentEditable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentEditable = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/ContentEditable/ContentEditable.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentEditable = exports.ContentEditable = function (_Component) {
  _inherits(ContentEditable, _Component);

  function ContentEditable(props) {
    _classCallCheck(this, ContentEditable);

    var _this = _possibleConstructorReturn(this, (ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call(this, props));

    _this.emitChange = _this.emitChange.bind(_this);
    return _this;
  }

  _createClass(ContentEditable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        this.htmlEl.focus();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.focus) {
        this.htmlEl.focus();
      }
    }
  }, {
    key: 'pasteWithoutStyles',
    value: function pasteWithoutStyles(e) {
      // cancel paste
      e.preventDefault();
      // get text representation of clipboard
      var text = e.clipboardData.getData("text/plain");
      // insert text manually
      document.execCommand("insertHTML", false, text);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tagName = _props.tagName,
          html = _props.html,
          onChange = _props.onChange,
          props = _objectWithoutProperties(_props, ['tagName', 'html', 'onChange']);

      //onKeyPress: this.props.handleKeyPress,


      return _react2.default.createElement(tagName || 'div', _extends({}, props, {
        ref: function ref(e) {
          return _this2.htmlEl = e;
        },
        onInput: this.emitChange,
        onPaste: this.pasteWithoutStyles,
        style: this.props.style,
        onFocus: this.props.onFocus || this.emitChange,
        onBlur: this.props.onBlur || this.emitChange,
        className: this.props.className,
        contentEditable: !this.props.disabled,
        dangerouslySetInnerHTML: { __html: html },
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: this.props.spellCheck ? this.props.spellCheck : false
      }), this.props.children);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var shouldStyleUpdate = false;
      if (nextProps.style) {
        //TODO Better deep comparison here
        shouldStyleUpdate = JSON.stringify(this.props.style) !== JSON.stringify(nextProps.style);
      }
      // We need not rerender if the change of props simply reflects the user's
      // edits. Rerendering in this case would make the cursor/caret jump.
      return (
        // Rerender if there is no element yet... (somehow?)
        !this.htmlEl
        // ...or if html really changed... (programmatically, not by user edit)
        || nextProps.html !== this.htmlEl.innerHTML && nextProps.html !== this.props.html
        // ...or if editing is enabled or disabled.
        || this.props.disabled !== nextProps.disabled
        //|| this.props.stlye !== nextProps.style
        || shouldStyleUpdate
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
        // Perhaps React (whose VDOM gets outdated because we often prevent
        // rerendering) did not update the DOM. So we update it manually now.
        this.htmlEl.innerHTML = this.props.html;
      }
    }
  }, {
    key: 'emitChange',
    value: function emitChange(evt) {
      if (!this.htmlEl) return;
      var html = this.htmlEl.innerHTML;
      if (this.props.onChange || this.props.onBlur && html !== this.lastHtml) {
        evt.target = { value: html };
        this.props.onChange(evt);
      }
      this.lastHtml = html;
    }
  }]);

  return ContentEditable;
}(_react.Component);

exports.default = ContentEditable;

/***/ }),

/***/ "./components/ContentEditable/ContentEditable.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ContentEditable.scss";

/***/ }),

/***/ "./components/ContentEditable/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ContentEditable = __webpack_require__("./components/ContentEditable/ContentEditable.js");

var _ContentEditable2 = _interopRequireDefault(_ContentEditable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ContentEditable2.default;

/***/ }),

/***/ "./components/DatePicker/DatePicker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InlineDatePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__("moment");

var _moment2 = _interopRequireDefault(_moment);

var _reactDatepicker = __webpack_require__("react-datepicker");

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

__webpack_require__("react-datepicker/dist/react-datepicker.css");

__webpack_require__("./components/DatePicker/DatePicker.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineDatePicker = exports.InlineDatePicker = function (_Component) {
	_inherits(InlineDatePicker, _Component);

	function InlineDatePicker() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InlineDatePicker);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InlineDatePicker.__proto__ || Object.getPrototypeOf(InlineDatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			startDate: _this.props.startDate ? _this.props.startDate : null
		}, _this.handleSelect = function (date) {
			console.log(date);
			_this.setState({ startDate: date });
			// this.props.scheduleActions.setDate(date);
			// this.props.scheduleActions.setView('day');
		}, _this.handleChange = function (date) {
			console.log(date);
			_this.setState({ startDate: date });
			// this.props.scheduleActions.setDate(date);
			// this.props.scheduleActions.setView('day');
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(InlineDatePicker, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.autofocus) {
				this.datePicker.focus();
			}
		}
	}, {
		key: 'className',
		value: function (_className) {
			function className() {
				return _className.apply(this, arguments);
			}

			className.toString = function () {
				return _className.toString();
			};

			return className;
		}(function () {
			className = '';
			if (this.props.error) {
				className += 'error';
			}
			return className;
		})
	}, {
		key: 'customClassNames',
		value: function customClassNames() {
			return "";
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: this.props.wrapperClassName },
				_react2.default.createElement(_reactDatepicker2.default, _extends({
					inline: true,
					readOnly: true,
					autofocus: this.props.autofocus,
					selected: this.state.startDate,
					onChange: this.handleChange,
					onSelect: this.props.setDate,
					customClassNames: this.customClassNames(),
					calendarClassName: 'inline-datepicker',
					ref: function ref(thisDatePicker) {
						_this2.datePicker = thisDatePicker;
					}
				}, this.props))
			);
		}
	}]);

	return InlineDatePicker;
}(_react.Component);

exports.default = InlineDatePicker;

/***/ }),

/***/ "./components/DatePicker/DatePicker.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "DatePicker.scss";

/***/ }),

/***/ "./components/DatePicker/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _DatePicker = __webpack_require__("./components/DatePicker/DatePicker.js");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DatePicker2.default;

/***/ }),

/***/ "./components/EditableItem/EditableItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _numeral = __webpack_require__("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _reactClickOutside = __webpack_require__("react-click-outside");

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _ContentEditable = __webpack_require__("./components/ContentEditable/index.js");

var _ContentEditable2 = _interopRequireDefault(_ContentEditable);

__webpack_require__("./components/EditableItem/EditableItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableItem = function (_Component) {
	_inherits(EditableItem, _Component);

	function EditableItem() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, EditableItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditableItem.__proto__ || Object.getPrototypeOf(EditableItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			focused: false,
			value: _this.props.value
		}, _this.cleanValue = function () {
			//TODO Strip out html;
		}, _this.formatValue = function (value) {
			var format = _this.props.format;

			if (!value) {
				return '';
			}
			if (_this.props.format) {
				return (0, _numeral2.default)(value).format(format);
			}
			return value;
		}, _this.parseValue = function (value) {
			var type = _this.props.type;

			if (_this.props.format) {
				var parsed = (0, _numeral2.default)(value).value();
				return parsed;
			}
			return value;
		}, _this.onFocus = function (event) {
			_this.setState({ focused: true });
		}, _this.onBlur = function (event) {
			_this.contentEditable.htmlEl.blur();
			_this.setState({ focused: false });
		}, _this.handleClickOutside = function () {
			_this.onBlur();
		}, _this.handleKeyPress = function (event) {
			if (event.key == 'Enter') {
				event.preventDefault();
				_this.onSave(event);
			}
		}, _this.onChange = function (event) {
			var value = _this.parseValue(event.target.value);

			var type = _this.props.type;


			if (type && type === 'Number') {
				value = Number(value);
			}

			if (type && type === 'String') {
				value = String(value);
			}

			_this.setState({ value: value });
			if (_this.props.onChange) {
				_this.props.onChange(value);
			}
		}, _this.onCancel = function (event) {
			//TODO
		}, _this.onSave = function (event) {
			_this.onBlur();
			var value = _this.state.value;

			if (_this.props.onSave) {
				_this.props.onSave(value);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(EditableItem, [{
		key: 'value',
		value: function value() {
			var focused = this.state.focused;

			return this.formatValue(this.props.value) || this.props.value || '';
			return this.props.value || '';
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'editable-item grid-flex left no-break gutter-tight' },
				this.props.label ? _react2.default.createElement(
					'div',
					{ className: 'col no-grow' },
					_react2.default.createElement(
						'p',
						{ className: 'medium-weight light-text-color' },
						this.props.label
					)
				) : false,
				_react2.default.createElement(
					'div',
					{ onKeyPress: this.handleKeyPress, className: 'col no-grow' },
					this.props.editable ? _react2.default.createElement(_ContentEditable2.default, {
						ref: function ref(el) {
							return _this2.contentEditable = el;
						},
						onFocus: this.onFocus,
						onChange: this.onChange,
						tagName: 'p',
						className: 'medium-weight',
						html: this.value()
					}) : _react2.default.createElement(
						'p',
						{ className: 'medium-weight' },
						this.props.value
					),
					this.state.focused ? _react2.default.createElement(
						'span',
						{
							onClick: this.onSave,
							className: 'material-icons icon main-color md-18' },
						'check'
					) : false
				)
			);
		}
	}]);

	return EditableItem;
}(_react.Component);

EditableItem.defaultProps = {
	editable: true,
	type: 'String'
};
exports.default = (0, _reactClickOutside2.default)(EditableItem);

/***/ }),

/***/ "./components/EditableItem/EditableItem.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "EditableItem.scss";

/***/ }),

/***/ "./components/EditableItem/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _EditableItem = __webpack_require__("./components/EditableItem/EditableItem.js");

Object.keys(_EditableItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _EditableItem[key];
    }
  });
});

var _EditableItem2 = _interopRequireDefault(_EditableItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EditableItem2.default;

/***/ }),

/***/ "./components/FileUpload/FileUpload.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FileUpload = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = __webpack_require__("react-dropzone");

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _Button = __webpack_require__("./components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

__webpack_require__("./components/FileUpload/FileUpload.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = exports.FileUpload = function (_Component) {
	_inherits(FileUpload, _Component);

	function FileUpload() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, FileUpload);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			files: []
		}, _this.onDrop = function (files) {
			_this.setState({ files: files });
			if (_this.props.onDrop) {
				_this.props.onDrop(files);
			}
		}, _this.onClick = function () {
			_this.fileUploader.open();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(FileUpload, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.autoOpen == true) {
				this.fileUploader.open();
			}
		}
	}, {
		key: 'removeFile',
		value: function removeFile() {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'file-uploader' },
				_react2.default.createElement(
					_reactDropzone2.default,
					_extends({
						multiple: this.props.multiple ? true : false,
						accept: this.props.accept,
						className: 'empty-area',
						activeClassName: this.props.activeClassName,
						acceptClassName: this.props.acceptClassName,
						rejectClassName: this.props.rejectClassName,
						disabledClassName: this.props.disabledClassName,
						ref: function ref(thisUploader) {
							_this2.fileUploader = thisUploader;
						},
						onDrop: this.onDrop
					}, this.props.dropzone),
					this.props.component ? this.props.component : _react2.default.createElement(
						'div',
						{ className: 'uploader-area' },
						_react2.default.createElement(
							'div',
							{ className: 'image-wrap' },
							_react2.default.createElement(
								'span',
								{ className: 'material-icons icon md-36' },
								this.props.icon
							)
						)
					)
				),
				this.props.button ? _react2.default.createElement(
					'div',
					{ className: 'button-actions' },
					_react2.default.createElement(_Button2.default, {
						label: this.props.buttonLabel,
						className: this.props.buttonClassName,
						onClick: this.onClick
					})
				) : false
			);
		}
	}]);

	return FileUpload;
}(_react.Component);

FileUpload.defaultProps = {
	accept: 'audio/*,video/*,image/*',
	autoOpen: false,
	multiple: false,
	icon: 'image',
	button: true,
	buttonLabel: 'Upload File',
	buttonClassName: 'secondary',
	activeClassName: 'empty-area-active',
	acceptClassName: 'empty-area-accepted',
	rejectClassName: 'empty-area-rejected',
	disabledClassName: 'empty-area-disabled',
	dropzone: {}
};
exports.default = FileUpload;

/***/ }),

/***/ "./components/FileUpload/FileUpload.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "FileUpload.scss";

/***/ }),

/***/ "./components/FileUpload/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FileUpload = __webpack_require__("./components/FileUpload/FileUpload.js");

var _FileUpload2 = _interopRequireDefault(_FileUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FileUpload2.default;

/***/ }),

/***/ "./components/ImageList/ImageList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ImageList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/ImageList/ImageList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageList = exports.ImageList = function (_Component) {
	_inherits(ImageList, _Component);

	function ImageList() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, ImageList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageList.__proto__ || Object.getPrototypeOf(ImageList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			selectedImage: null
		}, _this.selectImage = function (id, event) {
			var image = _this.props.images.find(function (image) {
				return image.id === id;
			});
			_this.setState({
				selectedImage: id
			});
		}, _this.deleteImage = function (id, event) {
			event.preventDefault();
			event.stopPropagation();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ImageList, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'container space-before space-after' },
				_react2.default.createElement(
					'div',
					{ className: 'sponsorship-uploads' },
					this.props.images.map(function (image, index) {
						return _react2.default.createElement(
							'div',
							{ key: index, className: 'inline-grid gutter-tight v-spaced-normal' },
							_react2.default.createElement(
								'div',
								{
									onClick: _this2.selectImage.bind(_this2, image.id),
									className: _this2.state.selected === image.id ? "col-1 grow align-left image-name selected" : "col-6 align-left image-name"
								},
								_react2.default.createElement(
									'p',
									{ className: 'tiny-caps ellipsis' },
									image.attributes.name
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'col no-grow' },
								_react2.default.createElement(
									'p',
									{ className: 'light-text-color small' },
									_react2.default.createElement(
										'a',
										{ onClick: _this2.deleteImage.bind(_this2, image.id), className: 'hover-alert' },
										'Delete'
									)
								)
							)
						);
					})
				),
				_react2.default.createElement(Modal, {
					title: 'Delete Image',
					id: 'delete-image'
				})
			);
		}
	}]);

	return ImageList;
}(_react.Component);

exports.default = ImageList;

/***/ }),

/***/ "./components/ImageList/ImageList.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ImageList.scss";

/***/ }),

/***/ "./components/ImageList/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _ImageList = __webpack_require__("./components/ImageList/ImageList.js");

var _ImageList2 = _interopRequireDefault(_ImageList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ImageList2.default;

/***/ }),

/***/ "./components/Input/Input.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Input = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _numeral = __webpack_require__("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _Loader = __webpack_require__("./components/Loader/index.js");

var _Loader2 = _interopRequireDefault(_Loader);

__webpack_require__("./components/Input/Input.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = exports.Input = function (_Component) {
	_inherits(Input, _Component);

	function Input() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Input);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			type: _this.props.type,
			className: _this.props.className,
			hasValue: _this.props.value ? true : false,
			focused: false
		}, _this.formatValue = function (value) {
			var format = _this.props.format;

			if (!value) {
				return '';
			}
			if (_this.props.format) {
				return (0, _numeral2.default)(value).format(format);
			}
			return value;
		}, _this.parseValue = function (value) {
			var type = _this.props.type;

			if (_this.props.format) {
				var parsed = (0, _numeral2.default)(value).value();
				return parsed;
			}
			return value;
		}, _this.handleChange = function (event) {
			var value = _this.parseValue(event.target.value);

			_this.setState({
				hasValue: event.target.value && event.target.value.length > 0 ? true : false
			});

			if (_this.props.maxLength) {
				value = value.substring(0, _this.props.maxLength);
			}

			if (_this.props.onChange) {
				_this.props.onChange(event);
			}
		}, _this.handleFocus = function (event) {
			_this.setState({ focused: true });
			if (_this.props.onFocus) {
				_this.props.onFocus(event);
			}
		}, _this.handleBlur = function (event) {
			_this.setState({ focused: false });
			if (_this.props.onBlur) {
				_this.props.onBlur(event);
			}
		}, _this.handleKeyPress = function (event) {
			if (_this.props.onKeyPress) {
				_this.props.onKeyPress(event);
			}
		}, _this.label = function () {
			return _react2.default.createElement(
				'label',
				{ key: 'label', htmlFor: _this.props.id },
				_this.props.label
			);
		}, _this.input = function () {
			return _react2.default.createElement('input', _extends({
				key: 'input',
				type: _this.state.type,
				value: _this.value(),
				placeholder: _this.props.placeholder || '',
				disabled: _this.props.disabled || _this.props.loading,
				autoFocus: _this.props.autoFocus,
				autoComplete: _this.props.autoComplete,
				name: _this.props.name,
				onChange: _this.handleChange,
				onFocus: _this.handleFocus,
				onBlur: _this.handleBlur,
				onKeyPress: _this.handleKeyPress,
				readOnly: _this.props.readOnly
			}, _this.props.inputProps));
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Input, [{
		key: 'className',
		value: function className() {
			var className = this.props.type + ' ' + this.state.className + ' ' + 'input-wrap';
			if (this.state.error) {
				className += ' ' + 'error';
			}
			if (this.state.validated) {
				className += ' ' + 'validated';
			}
			if (this.state.hasValue) {
				className += ' has-value';
			}

			if (this.props.icon || this.props.loading || this.props.type === 'password') {
				className += ' has-icon-' + this.props.iconPosition;
			}

			return className;
		}
	}, {
		key: 'value',
		value: function value() {
			var focused = this.state.focused;

			if (!focused) {
				return this.formatValue(this.props.value);
			}
			return this.props.value || '';
		}
	}, {
		key: 'icon',
		value: function icon() {
			var _this2 = this;

			if (this.props.loading) {
				return _react2.default.createElement(
					'i',
					{ key: 'icon', className: "icon " + this.props.iconPosition },
					_react2.default.createElement(_Loader2.default, { key: 'loader', className: 'normal' })
				);
			} else if (this.props.secondary && this.props.iconPosition === 'after') {
				return false;
			} else if (this.props.icon) {
				return _react2.default.createElement(
					'i',
					{ key: 'icon', className: "material-icons icon " + this.props.iconPosition },
					this.props.icon
				);
			} else if (this.props.type == 'password') {
				return _react2.default.createElement(
					'i',
					{ key: 'icon', className: "material-icons icon " + this.props.iconPosition,
						onClick: function onClick() {
							return _this2.setState({ type: _this2.state.type === 'password' ? 'text' : _this2.props.type });
						}
					},
					'remove_red_eye'
				);
			}
			return false;
		}
	}, {
		key: 'secondary',
		value: function secondary() {
			if (this.props.loading) {
				return false;
			} else if (this.props.error && typeof this.props.error === 'string') {
				return _react2.default.createElement(
					'span',
					{ key: 'error', className: 'error-message' },
					this.props.error
				);
			} else if (this.props.secondary) {
				return _react2.default.createElement(
					'span',
					{ key: 'secondary', className: 'secondary' },
					this.props.secondary
				);
			}
			return false;
		}
	}, {
		key: 'wrap',
		value: function wrap(inputElements) {
			if (this.props.label) {
				return _react2.default.createElement(
					'div',
					{ className: 'input-with-label' },
					inputElements
				);
			}
			return inputElements;
		}
	}, {
		key: 'render',
		value: function render() {
			var inputElements = [this.input(), this.icon(), this.label(), this.secondary()];

			return _react2.default.createElement(
				'div',
				{ className: this.className() },
				this.wrap(inputElements)
			);
		}
	}]);

	return Input;
}(_react.Component);

Input.defaultProps = {
	type: 'text',
	hasValue: false,
	iconPosition: 'after'
};
exports.default = Input;

/***/ }),

/***/ "./components/Input/Input.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Input.scss";

/***/ }),

/***/ "./components/Input/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Input = __webpack_require__("./components/Input/Input.js");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Input2.default;

/***/ }),

/***/ "./components/Loader/Loader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LinearLoader = exports.DotLoader = exports.TextLoader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Loader/Loader.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextLoader = exports.TextLoader = function (_Component) {
	_inherits(TextLoader, _Component);

	function TextLoader() {
		_classCallCheck(this, TextLoader);

		return _possibleConstructorReturn(this, (TextLoader.__proto__ || Object.getPrototypeOf(TextLoader)).apply(this, arguments));
	}

	_createClass(TextLoader, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.className !== nextProps.className;
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.lines) {
				var lines = Array(this.props.lines).fill().map(Math.random);
			}
			return _react2.default.createElement(
				'span',
				{ className: this.props.className ? 'text-loader ' + this.props.className : 'text-loader' },
				this.props.lines ? _react2.default.createElement(
					'span',
					{ className: 'p-wrap' },
					lines.map(function (option, index) {
						return _react2.default.createElement('span', { key: 'text-loader-' + index });
					})
				) : _react2.default.createElement('span', null)
			);
		}
	}]);

	return TextLoader;
}(_react.Component);

var DotLoader = exports.DotLoader = function (_Component2) {
	_inherits(DotLoader, _Component2);

	function DotLoader() {
		_classCallCheck(this, DotLoader);

		return _possibleConstructorReturn(this, (DotLoader.__proto__ || Object.getPrototypeOf(DotLoader)).apply(this, arguments));
	}

	_createClass(DotLoader, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.className !== nextProps.className;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'span',
				{ className: this.props.className ? 'dot-loader ' + this.props.className : 'dot-loader' },
				_react2.default.createElement('span', { className: 'dot' }),
				_react2.default.createElement('span', { className: 'dot' }),
				_react2.default.createElement('span', { className: 'dot' })
			);
		}
	}]);

	return DotLoader;
}(_react.Component);

var LinearLoader = exports.LinearLoader = function (_Component3) {
	_inherits(LinearLoader, _Component3);

	function LinearLoader() {
		_classCallCheck(this, LinearLoader);

		return _possibleConstructorReturn(this, (LinearLoader.__proto__ || Object.getPrototypeOf(LinearLoader)).apply(this, arguments));
	}

	_createClass(LinearLoader, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.className !== nextProps.className;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.props.className ? 'linear-loader ' + this.props.className : 'linear-loader' },
				_react2.default.createElement('span', { className: 'first' }),
				_react2.default.createElement('span', { className: 'second' }),
				_react2.default.createElement('span', { className: 'third' })
			);
		}
	}]);

	return LinearLoader;
}(_react.Component);

var Loader = function (_Component4) {
	_inherits(Loader, _Component4);

	function Loader() {
		_classCallCheck(this, Loader);

		return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
	}

	_createClass(Loader, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return this.props.className !== nextProps.className;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.props.className ? 'spinner ' + this.props.className : 'spinner' },
				_react2.default.createElement(
					'svg',
					{ viewBox: '0 0 20 20' },
					_react2.default.createElement('circle', { fill: 'transparent', cx: '10', cy: '10', r: '10' })
				)
			);
		}
	}]);

	return Loader;
}(_react.Component);

exports.default = Loader;

/***/ }),

/***/ "./components/Loader/Loader.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Loader.scss";

/***/ }),

/***/ "./components/Loader/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Loader = __webpack_require__("./components/Loader/Loader.js");

Object.keys(_Loader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Loader[key];
    }
  });
});

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),

/***/ "./components/Radio/Radio.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Radio/Radio.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
	_inherits(Checkbox, _Component);

	function Checkbox() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Checkbox);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			className: _this.props.className
		}, _this.handleChange = function (event) {
			if (_this.props.onChange) {
				_this.props.onChange(event);
			}
		}, _this.checkbox = function () {
			return _react2.default.createElement(
				'div',
				{ className: 'gw-radio' },
				_react2.default.createElement('input', _extends({
					disabled: _this.props.disabled,
					type: 'radio',
					placeholder: _this.props.placeholder,
					value: _this.props.value,
					id: _this.props.id ? _this.props.id : _this.props.value,
					name: _this.props.name,
					onChange: _this.handleChange,
					checked: _this.props.checked,
					autoComplete: _this.props.autoComplete,
					readOnly: _this.props.readOnly
				}, _this.props.radioProps)),
				_this.props.label ? _react2.default.createElement(
					'label',
					{ htmlFor: _this.props.id ? _this.props.id : _this.props.value },
					_react2.default.createElement(
						'div',
						{ className: 'grid-flex no-break gutter-none left middle' },
						_react2.default.createElement(
							'div',
							{ className: 'col' },
							_react2.default.createElement('div', { className: 'radio' })
						),
						_this.props.label ? _react2.default.createElement(
							'div',
							{ className: 'col' },
							_react2.default.createElement(
								'span',
								{ className: 'pl-1' },
								_this.props.label
							)
						) : false
					)
				) : false
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Checkbox, [{
		key: 'className',
		value: function className() {
			var className = this.state.className + ' ' + 'input-wrap';
			if (this.state.error) {
				className += ' ' + 'error';
			}
			if (this.state.validated) {
				className += ' ' + 'validated';
			}
			if (this.state.hasValue) {
				className += ' has-value';
			}
			return className;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.className() },
				this.checkbox()
			);
		}
	}]);

	return Checkbox;
}(_react.Component);

Checkbox.defaultProps = {
	className: ''
};
exports.default = Checkbox;

/***/ }),

/***/ "./components/Radio/Radio.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Radio.scss";

/***/ }),

/***/ "./components/Radio/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Radio = __webpack_require__("./components/Radio/Radio.js");

Object.keys(_Radio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Radio[key];
    }
  });
});

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Radio2.default;

/***/ }),

/***/ "./components/Select/Select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Select/Select.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
	_inherits(Select, _Component);

	function Select() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Select);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			className: _this.props.className
		}, _this.handleChange = function (event) {
			if (_this.props.onChange) {
				_this.props.onChange(event);
			}
		}, _this.handleFocus = function (event) {
			_this.setState({ focused: true });
			if (_this.props.onFocus) {
				_this.props.onFocus(event);
			}
		}, _this.handleBlur = function (event) {
			_this.setState({ focused: false });
			if (_this.props.onBlur) {
				_this.props.onBlur(event);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Select, [{
		key: 'className',
		value: function className() {
			var className = this.state.className + ' ' + 'input-wrap';
			if (this.state.error) {
				className += ' ' + 'error';
			}
			if (this.state.validated) {
				className += ' ' + 'validated';
			}
			if (this.state.hasValue) {
				className += ' has-value';
			}
			return className;
		}
	}, {
		key: 'select',
		value: function select() {
			var options = this.props.options;

			return _react2.default.createElement(
				'div',
				{ className: 'select-wrap' },
				_react2.default.createElement(
					'select',
					_extends({
						disabled: this.props.disabled,
						placeholder: this.props.placeholder,
						defaultValue: this.props.value,
						name: this.props.name,
						onChange: this.handleChange
					}, this.props.selectProps),
					options.map(function (option, index) {
						return _react2.default.createElement(
							'option',
							{
								key: index,
								disabled: option.disabled,
								value: option.value,
								selected: option.selected
							},
							option.label
						);
					})
				),
				_react2.default.createElement(
					'i',
					{ className: 'material-icons icon select-icon' },
					'keyboard_arrow_down'
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.className() },
				this.select()
			);
		}
	}]);

	return Select;
}(_react.Component);

Select.defaultProps = {
	options: [],
	placeholder: ''
};
exports.default = Select;

/***/ }),

/***/ "./components/Select/Select.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Select.scss";

/***/ }),

/***/ "./components/Select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Select = __webpack_require__("./components/Select/Select.js");

Object.keys(_Select).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Select[key];
    }
  });
});

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Select2.default;

/***/ }),

/***/ "./components/Table/Table.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Column = exports.Row = exports.Cell = exports.ButtonCell = exports.DateCell = exports.SelectCell = exports.NestedCell = exports.AvatarCell = exports.ActionCell = exports.ImageCell = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__("moment");

var _moment2 = _interopRequireDefault(_moment);

var _Button = __webpack_require__("./components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

__webpack_require__("./components/Table/Table.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageCell = exports.ImageCell = function (_Component) {
	_inherits(ImageCell, _Component);

	function ImageCell() {
		_classCallCheck(this, ImageCell);

		return _possibleConstructorReturn(this, (ImageCell.__proto__ || Object.getPrototypeOf(ImageCell)).apply(this, arguments));
	}

	_createClass(ImageCell, [{
		key: 'render',
		value: function render() {

			var style = {
				width: this.props.width || 50,
				height: this.props.height || 50,
				background: this.props.background || 'transparent'
			};

			return _react2.default.createElement(
				Cell,
				this.props,
				_react2.default.createElement(
					'div',
					{ style: style },
					_react2.default.createElement('img', { src: this.props.src })
				)
			);
		}
	}]);

	return ImageCell;
}(_react.Component);

var ActionCell = exports.ActionCell = function (_Component2) {
	_inherits(ActionCell, _Component2);

	function ActionCell() {
		_classCallCheck(this, ActionCell);

		return _possibleConstructorReturn(this, (ActionCell.__proto__ || Object.getPrototypeOf(ActionCell)).apply(this, arguments));
	}

	_createClass(ActionCell, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				Cell,
				this.props,
				this.props.edit ? _react2.default.createElement(_Button2.default, {
					className: 'small transparent circle',
					tooltipText: 'Edit',
					tooltipPosition: 'top',
					materialIcon: 'edit',
					onClick: this.props.edit.bind(this, this.props.item)
				}) : false,
				this.props.delete ? _react2.default.createElement(_Button2.default, {
					className: 'small transparent circle hover-alert',
					tooltipText: 'Delete',
					tooltipPosition: 'top',
					materialIcon: 'delete',
					onClick: this.props.delete.bind(this, this.props.item)
				}) : false
			);
		}
	}]);

	return ActionCell;
}(_react.Component);

var AvatarCell = exports.AvatarCell = function (_Component3) {
	_inherits(AvatarCell, _Component3);

	function AvatarCell() {
		_classCallCheck(this, AvatarCell);

		return _possibleConstructorReturn(this, (AvatarCell.__proto__ || Object.getPrototypeOf(AvatarCell)).apply(this, arguments));
	}

	_createClass(AvatarCell, [{
		key: 'render',
		value: function render() {
			var value = this.props.children ? this.props.children : this.props.data[this.props.index][this.props.col];
			var avatarClass = "avatar " + value;

			var name = this.props.item.name ? this.props.item.name.split(' ').map(function (word) {
				return word.toUpperCase().charAt(0);
			}).join('').substring(0, 1) : '';

			return _react2.default.createElement(
				Cell,
				this.props,
				_react2.default.createElement(
					'div',
					{ className: "avatar " + value },
					name !== '' ? name : 'C'
				)
			);
		}
	}]);

	return AvatarCell;
}(_react.Component);

var NestedCell = exports.NestedCell = function (_Component4) {
	_inherits(NestedCell, _Component4);

	function NestedCell() {
		_classCallCheck(this, NestedCell);

		return _possibleConstructorReturn(this, (NestedCell.__proto__ || Object.getPrototypeOf(NestedCell)).apply(this, arguments));
	}

	_createClass(NestedCell, [{
		key: 'render',
		value: function render() {
			var value = this.props.data[this.props.index][this.props.parent][this.props.col];

			return _react2.default.createElement(
				Cell,
				this.props,
				_react2.default.createElement(
					'span',
					{ className: 'truncate' },
					value
				)
			);
		}
	}]);

	return NestedCell;
}(_react.Component);

var SelectCell = exports.SelectCell = function (_Component5) {
	_inherits(SelectCell, _Component5);

	function SelectCell() {
		_classCallCheck(this, SelectCell);

		return _possibleConstructorReturn(this, (SelectCell.__proto__ || Object.getPrototypeOf(SelectCell)).apply(this, arguments));
	}

	_createClass(SelectCell, [{
		key: 'render',
		value: function render() {
			var value = this.props.data[this.props.index][this.props.col];

			return _react2.default.createElement(
				Cell,
				this.props,
				_react2.default.createElement(
					'select',
					{
						value: value,
						name: this.props.col
					},
					this.props.options.map(function (option, index) {
						return _react2.default.createElement(
							'option',
							{
								key: index,
								value: option.value
							},
							option.label
						);
					})
				)
			);
		}
	}]);

	return SelectCell;
}(_react.Component);

var DateCell = exports.DateCell = function (_Component6) {
	_inherits(DateCell, _Component6);

	function DateCell() {
		_classCallCheck(this, DateCell);

		return _possibleConstructorReturn(this, (DateCell.__proto__ || Object.getPrototypeOf(DateCell)).apply(this, arguments));
	}

	_createClass(DateCell, [{
		key: 'render',
		value: function render() {

			var format = this.props.format || 'MM/dd/YYYY';

			return _react2.default.createElement(
				Cell,
				this.props,
				_react2.default.createElement(
					'span',
					null,
					(0, _moment2.default)(this.props.data[this.props.index][this.props.col]).format(format)
				)
			);
		}
	}]);

	return DateCell;
}(_react.Component);

var ButtonCell = exports.ButtonCell = function (_Component7) {
	_inherits(ButtonCell, _Component7);

	function ButtonCell() {
		_classCallCheck(this, ButtonCell);

		return _possibleConstructorReturn(this, (ButtonCell.__proto__ || Object.getPrototypeOf(ButtonCell)).apply(this, arguments));
	}

	_createClass(ButtonCell, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				Cell,
				this.props,
				_react2.default.createElement(_Button2.default, {
					className: this.props.buttonClass,
					label: this.props.label,
					tooltipText: this.props.tooltipText,
					tooltipPosition: this.props.tooltipPosition,
					materialIcon: this.props.materialIcon,
					icon: this.props.icon,
					onClick: this.props.onClick.bind(this, this.props.item)
				})
			);
		}
	}]);

	return ButtonCell;
}(_react.Component);

var Cell = exports.Cell = function (_Component8) {
	_inherits(Cell, _Component8);

	function Cell() {
		_classCallCheck(this, Cell);

		return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
	}

	_createClass(Cell, [{
		key: 'className',
		value: function className() {

			var className = "list-cell";
			if (this.props.className) {
				className += " " + this.props.className;
			}
			if (this.props.overflow) {
				className += " " + 'overflow-cell';
			}
			return className;
		}
	}, {
		key: 'style',
		value: function style() {
			return this.props.style ? this.props.style : {};
		}
	}, {
		key: 'render',
		value: function render() {
			var value;
			if (this.props.children) {
				value = this.props.children;
			} else if (this.props.value && typeof this.props.value === "function" && !this.props.col) {
				value = this.props.value(this.props.data[this.props.index]);
			} else if (this.props.value && typeof this.props.value === "function") {
				value = this.props.value(this.props.data[this.props.index][this.props.col]);
			} else if (this.props.value) {
				value = this.props.value;
			} else if (this.props.data[this.props.index][this.props.col]) {
				value = this.props.data[this.props.index][this.props.col];
			} else {
				value = _react2.default.createElement('span', { className: 'empty-cell' });
			}
			//var value = this.props.children ? this.props.children : this.props.data[this.props.index][this.props.col];
			//shouldn't nest ternary
			//is value passed as a prop?
			//do we have children?
			//or formatter function to run the value through?

			//var value = this.props.children ? this.props.children : this.props.data[this.props.index][this.props.col] ? this.props.data[this.props.index][this.props.col] : (<span className="empty-cell"/>);
			return _react2.default.createElement(
				'td',
				{
					style: this.style(),
					key: this.props.index,
					className: this.className()
				},
				_react2.default.createElement(
					'span',
					{ className: 'data' },
					value
				)
			);
		}
	}]);

	return Cell;
}(_react.Component);

var Row = exports.Row = function (_Component9) {
	_inherits(Row, _Component9);

	function Row() {
		_classCallCheck(this, Row);

		return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
	}

	_createClass(Row, [{
		key: 'className',
		value: function className() {
			var className = "list-row";
			if (this.props.className) {
				className += " " + this.props.className;
			}
			if (this.props.trClass && typeof this.props.trClass === 'function') {
				className += " " + this.props.trClass(this.props.data[this.props.index]);
			} else if (this.props.trClass && typeof this.props.trClass === 'string') {
				className += " " + this.props.trClass;
			}
			return className;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this10 = this;

			return _react2.default.createElement(
				'tr',
				{ onClick: this.props.rowOnClick ? function () {
						_this10.props.rowOnClick(_this10.props.data[_this10.props.index]);
					} : function () {}, className: this.className() },
				this.props.children
			);
		}
	}]);

	return Row;
}(_react.Component);

var Column = exports.Column = function (_Component10) {
	_inherits(Column, _Component10);

	function Column() {
		_classCallCheck(this, Column);

		return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
	}

	_createClass(Column, [{
		key: 'render',
		value: function render() {
			// Columns don't render
			// They just get looped through to create Table Rows
			// and pass props down to cell
			return null;
		}
	}]);

	return Column;
}(_react.Component);

var Table = function (_Component11) {
	_inherits(Table, _Component11);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'listClass',
		value: function listClass() {
			var listClass = 'gw-table';
			if (this.props.listClass) {
				listClass += ' ' + this.props.listClass;
			}
			if (this.props.alignment) {
				listClass += ' align-' + this.props.alignment;
			}
			return listClass;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this13 = this;

			//omit certain keys from being passed down
			//customize table class, table style

			if (this.props.children.constructor !== Array) {
				console.error('Table, needs at least 2 columns');
			}

			//Table Header
			//TODO, do we need to pass more props down?
			var headerCells = this.props.children.filter(function (column) {
				return column;
			}).map(function (column, colIndex) {
				//TODO make it ok to pass a string
				//TODO let header cells inherit the same classes that body cells do
				var cell;
				var props = Object.assign({ key: colIndex, header: true }, column.props);

				if (_react2.default.isValidElement(column.props.header)) {
					cell = _react2.default.cloneElement(column.props.header, props);
				} else if (typeof column.props.header === 'string') {
					cell = _react2.default.createElement(
						Cell,
						_extends({ className: column.props.className }, props),
						column.props.header
					);
				} else {
					cell = _react2.default.createElement(
						Cell,
						_extends({ className: column.props.className }, props),
						_react2.default.createElement('span', null)
					);
				}
				return cell;
			});

			var header = _react2.default.createElement(
				'thead',
				{ className: 'header-container' },
				_react2.default.createElement(
					Row,
					{ className: 'header', key: 'header' },
					headerCells
				)
			);

			//Table Body
			var body = this.props.data.map(function (item, rowIndex) {
				var cells = _this13.props.children.filter(function (column) {
					return column;
				}).map(function (column, colIndex) {

					//Here we compose all the props for each of cells,
					//Maybe a better way to do this

					var props = Object.assign({}, column.props, _this13.props, { index: rowIndex, key: colIndex, item: item });
					delete props.children;
					delete props.header;
					delete props.cell;

					var cell;

					if (_react2.default.isValidElement(column.props.cell)) {
						cell = _react2.default.cloneElement(column.props.cell, props);
					} else if (typeof column.props.cell === 'function') {
						cell = column.props.cell(props);
					} else if (!column.props.cell) {
						cell = Cell;
					}
					return cell;
				});
				return _react2.default.createElement(
					Row,
					_extends({ key: rowIndex, index: rowIndex }, _this13.props),
					cells
				);
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'table',
					{ className: this.listClass() },
					header,
					_react2.default.createElement(
						'tbody',
						{ className: this.props.tbodyClass },
						body
					)
				)
			);
		}
	}]);

	return Table;
}(_react.Component);

exports.default = Table;

/***/ }),

/***/ "./components/Table/Table.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Table.scss";

/***/ }),

/***/ "./components/Table/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Table = __webpack_require__("./components/Table/Table.js");

Object.keys(_Table).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Table[key];
    }
  });
});

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Table2.default;

/***/ }),

/***/ "./components/Tabs/Tabs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Tabs/Tabs.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
	_inherits(Tabs, _Component);

	function Tabs() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Tabs);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			activeTabId: _this.props.activeTabId ? _this.props.activeTabId : _this.props.tabs[0].id
		}, _this.onChange = function (event) {
			_this.props.onChange(event.target.value);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Tabs, [{
		key: 'getActiveTab',
		value: function getActiveTab(tab) {
			if (tab.active) {
				return true;
			} else if (tab.id === this.props.activeTabId) {
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: 'className',
		value: function (_className) {
			function className() {
				return _className.apply(this, arguments);
			}

			className.toString = function () {
				return _className.toString();
			};

			return className;
		}(function () {
			this.props.className ? this.props.className : '';
			var tabClass = false;
			if (this.props.className) {
				tabClass += ' ' + this.props.className;
			}
			if (this.props.readOnly) {
				className += ' ' + 'read-only';
			}
			return tabClass;
		})
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: this.className() },
				_react2.default.createElement(
					'form',
					{ name: this.props.name, className: 'ui-tabs' },
					this.props.tabs.map(function (tab, index) {
						return _react2.default.createElement('input', {
							readOnly: _this2.props.readOnly || tab.readOnly,
							onChange: !_this2.props.readOnly && !tab.readOnly ? _this2.onChange : function () {},
							type: 'radio',
							checked: _this2.getActiveTab(tab),
							name: _this2.props.name,
							id: tab.id,
							value: tab.id,
							key: tab.id
						});
					}),
					this.props.tabs.map(function (tab, index) {
						return _react2.default.createElement(
							'label',
							{
								key: tab.id,
								className: 'tab',
								htmlFor: tab.id
							},
							tab.label
						);
					}),
					_react2.default.createElement('span', { className: 'underline' })
				)
			);
		}
	}]);

	return Tabs;
}(_react.Component);

Tabs.defaultProps = {
	readOnly: false,
	onChange: function onChange() {}
};
exports.default = Tabs;

/***/ }),

/***/ "./components/Tabs/Tabs.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Tabs.scss";

/***/ }),

/***/ "./components/Tabs/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Tabs = __webpack_require__("./components/Tabs/Tabs.js");

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Tabs2.default;

/***/ }),

/***/ "./components/TermsOfService/TermsOfService.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TermsOfService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__("./components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

__webpack_require__("./components/TermsOfService/TermsOfService.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TermsOfService = exports.TermsOfService = function (_Component) {
	_inherits(TermsOfService, _Component);

	function TermsOfService() {
		_classCallCheck(this, TermsOfService);

		return _possibleConstructorReturn(this, (TermsOfService.__proto__ || Object.getPrototypeOf(TermsOfService)).apply(this, arguments));
	}

	_createClass(TermsOfService, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'terms-of-service rich-text small' },
				_react2.default.createElement(
					'h1',
					null,
					'Non enim, si omnia non sequebatur, idcirco non erat ortus illinc.'
				),
				_react2.default.createElement(
					'p',
					null,
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Honesta oratio, Socratica, Platonis etiam. Sapiens autem semper beatus est et est aliquando in dolore; Si longus, levis. Duo Reges: constructio interrete. Istam voluptatem perpetuam quis potest praestare sapienti? Sed quid attinet de rebus tam apertis plura requirere? Qua tu etiam inprudens utebare non numquam. Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. '
				),
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						null,
						'Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam.'
					),
					_react2.default.createElement(
						'li',
						null,
						'At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit;'
					),
					_react2.default.createElement(
						'li',
						null,
						'De quibus etsi a Chrysippo maxime est elaboratum, tamen a Zenone minus multo quam ab antiquis;'
					),
					_react2.default.createElement(
						'li',
						null,
						'Quod autem ratione actum est, id officium appellamus.'
					),
					_react2.default.createElement(
						'li',
						null,
						'Non potes, nisi retexueris illa.'
					)
				),
				_react2.default.createElement(
					'p',
					null,
					'Vidit Homerus probari fabulam non posse, si cantiunculis tantus irretitus vir teneretur; Ita enim vivunt quidam, ut eorum vita refellatur oratio. ',
					_react2.default.createElement(
						'a',
						{ href: 'http://loripsum.net/', target: '_blank' },
						'Id Sextilius factum negabat.'
					),
					' Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; Quae ista amicitia est? Omnes enim iucundum motum, quo sensus hilaretur. Quid censes in Latino fore? Primum quid tu dicis breve? '
				),
				_react2.default.createElement(
					'ol',
					null,
					_react2.default.createElement(
						'li',
						null,
						'Cur fortior sit, si illud, quod tute concedis, asperum et vix ferendum putabit?'
					),
					_react2.default.createElement(
						'li',
						null,
						'Mihi enim satis est, ipsis non satis.'
					),
					_react2.default.createElement(
						'li',
						null,
						'Sed ad haec, nisi molestum est, habeo quae velim.'
					),
					_react2.default.createElement(
						'li',
						null,
						'Tu enim ista lenius, hic Stoicorum more nos vexat.'
					),
					_react2.default.createElement(
						'li',
						null,
						'Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus.'
					)
				),
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'b',
						null,
						'Sin aliud quid voles, postea.'
					),
					' Quid turpius quam sapientis vitam ex insipientium sermone pendere? Quid, quod homines infima fortuna, nulla spe rerum gerendarum, opifices denique delectantur historia? Teneo, inquit, finem illi videri nihil dolere. '
				),
				_react2.default.createElement(
					'p',
					null,
					'Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius. Sed plane dicit quod intellegit. Sed ad haec, nisi molestum est, habeo quae velim. Itaque contra est, ac dicitis; ',
					_react2.default.createElement(
						'a',
						{ href: 'http://loripsum.net/', target: '_blank' },
						'Sed nimis multa.'
					),
					' ',
					_react2.default.createElement(
						'a',
						{ href: 'http://loripsum.net/', target: '_blank' },
						'Quid me istud rogas?'
					),
					' Inde sermone vario sex illa a Dipylo stadia confecimus. '
				),
				_react2.default.createElement(
					'p',
					null,
					'Videsne quam sit magna dissensio? Expressa vero in iis aetatibus, quae iam confirmatae sunt. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Ita graviter et severe voluptatem secrevit a bono. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Nunc omni virtuti vitium contrario nomine opponitur. Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. Quis istud, quaeso, nesciebat? Quam ob rem tandem, inquit, non satisfacit? Illud dico, ea, quae dicat, praeclare inter se cohaerere. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Unum est sine dolore esse, alterum cum voluptate. '
				),
				_react2.default.createElement(
					'div',
					{ className: 'button-actions align-center mt-margin' },
					_react2.default.createElement(_Button2.default, { icon: 'check', label: 'I Accept', className: 'large', onClick: this.props.acceptTos })
				)
			);
		}
	}]);

	return TermsOfService;
}(_react.Component);

exports.default = TermsOfService;

/***/ }),

/***/ "./components/TermsOfService/TermsOfService.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TermsOfService.scss";

/***/ }),

/***/ "./components/TermsOfService/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TermsOfService = __webpack_require__("./components/TermsOfService/TermsOfService.js");

var _TermsOfService2 = _interopRequireDefault(_TermsOfService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TermsOfService2.default;

/***/ }),

/***/ "./components/TextArea/TextArea.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/TextArea/TextArea.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_Component) {
	_inherits(TextArea, _Component);

	function TextArea() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TextArea);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			focused: _this.props.autoFocus,
			className: _this.props.className
		}, _this.handleChange = function (event) {
			if (_this.props.onChange) {
				_this.props.onChange(event);
			}
		}, _this.handleKeypress = function (event) {
			if (_this.props.onKeyPress) {
				_this.props.onKeyPress(event);
			}
		}, _this.handleFocus = function (event) {
			_this.setState({ focused: true });
			if (_this.props.onFocus) {
				_this.props.onFocus(event);
			}
		}, _this.handleBlur = function (event) {
			_this.setState({ focused: false });
			if (_this.props.onBlur) {
				_this.props.onBlur(event);
			}
		}, _this.resize = function (event) {
			var _this2 = _this,
			    textArea = _this2.textArea;
			var maxHeight = _this.props.maxHeight;

			textArea.style.height = "";
			textArea.style.height = Math.min(textArea.scrollHeight, maxHeight) + "px";
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TextArea, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.resize();
		}
	}, {
		key: 'className',
		value: function className() {
			var className = this.state.className + ' ' + 'input-wrap';
			if (this.state.error) {
				className += ' ' + 'error';
			}
			if (this.state.validated) {
				className += ' ' + 'validated';
			}
			if (this.state.hasValue) {
				className += ' has-value';
			}
			return className;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				{ className: this.className() },
				_react2.default.createElement('textarea', _extends({
					ref: function ref(el) {
						return _this3.textArea = el;
					},
					disabled: this.props.disabled,
					autoFocus: this.props.autoFocus,
					placeholder: this.props.placeholder,
					value: this.props.value,
					name: this.props.name,
					rows: this.props.rows,
					onInput: this.resize,
					onChange: this.handleChange,
					onKeyPress: this.handleKeypress,
					onFocus: this.handleFocus,
					onBlur: this.handleBlur,
					autoComplete: this.props.autoComplete,
					readOnly: this.props.readOnly
				}, this.props.textareaProps))
			);
		}
	}]);

	return TextArea;
}(_react.Component);

TextArea.defaultProps = {
	rows: 4,
	maxHeight: 1000,
	autoComplete: "off",
	autoFocus: false
};
exports.default = TextArea;

/***/ }),

/***/ "./components/TextArea/TextArea.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "TextArea.scss";

/***/ }),

/***/ "./components/TextArea/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TextArea = __webpack_require__("./components/TextArea/TextArea.js");

Object.keys(_TextArea).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextArea[key];
    }
  });
});

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextArea2.default;

/***/ }),

/***/ "./components/Toggle/Toggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Toggle/Toggle.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_Component) {
	_inherits(Toggle, _Component);

	function Toggle() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Toggle);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			className: _this.props.className
		}, _this.handleChange = function (event) {
			if (_this.props.onChange) {
				_this.props.onChange(event);
			}
		}, _this.label = function () {

			if (_this.props.hideLabel) {
				return false;
			} else if (_this.props.onLabel && _this.props.offLabel) {
				return _react2.default.createElement(
					'div',
					{ className: 'text' },
					_react2.default.createElement(
						'span',
						{ className: 'off-label' },
						_this.props.offLabel
					),
					_react2.default.createElement(
						'span',
						{ className: 'on-label' },
						_this.props.onLabel
					)
				);
			} else if (_this.props.label) {
				return _react2.default.createElement(
					'div',
					{ className: 'text' },
					_react2.default.createElement(
						'span',
						{ className: 'label-text' },
						_this.props.label
					)
				);
			}
			return false;
		}, _this.toggle = function () {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('input', _extends({
					className: 'toggle',
					type: 'checkbox',
					checked: _this.props.checked,
					value: _this.props.value,
					id: _this.props.id ? _this.props.id : _this.props.name,
					name: _this.props.name,
					onChange: _this.handleChange
				}, _this.props.toggleProps)),
				_react2.default.createElement(
					'label',
					{ htmlFor: _this.props.id ? _this.props.id : _this.props.name },
					_react2.default.createElement(
						'div',
						{ className: 'grid-flex no-break gutter-none left' },
						_react2.default.createElement(
							'div',
							{ className: 'col' },
							_react2.default.createElement('div', { className: 'switch mr-1' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'col' },
							_this.label()
						)
					)
				)
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Toggle, [{
		key: 'className',
		value: function className() {
			var className = this.state.className + ' ' + 'toggle-wrap';
			if (this.state.error) {
				className += ' ' + 'error';
			}
			if (this.state.validated) {
				className += ' ' + 'validated';
			}
			if (this.state.hasValue) {
				className += ' has-value';
			}
			return className;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: this.className() },
				this.toggle()
			);
		}
	}]);

	return Toggle;
}(_react.Component);

Toggle.defaultProps = {
	hideLabel: false,
	onLabel: '',
	offLabel: '',
	className: ''
};
exports.default = Toggle;

/***/ }),

/***/ "./components/Toggle/Toggle.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Toggle.scss";

/***/ }),

/***/ "./components/Toggle/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Toggle = __webpack_require__("./components/Toggle/Toggle.js");

Object.keys(_Toggle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Toggle[key];
    }
  });
});

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Toggle2.default;

/***/ }),

/***/ "./components/Typeahead/Typeahead.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactSelect = __webpack_require__("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Button = __webpack_require__("./components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

__webpack_require__("./components/Typeahead/Typeahead.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//https://github.com/JedWatson/react-select/issues/1661


var Typeahead = function (_Component) {
	_inherits(Typeahead, _Component);

	function Typeahead() {
		_classCallCheck(this, Typeahead);

		return _possibleConstructorReturn(this, (Typeahead.__proto__ || Object.getPrototypeOf(Typeahead)).apply(this, arguments));
	}

	_createClass(Typeahead, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.autoFocus) {
				this.select.focus();
			}
		}
	}, {
		key: 'button',
		value: function button() {
			if (this.props.button) {
				return _react2.default.createElement(_Button2.default, _extends({
					label: this.props.button,
					icon: this.props.buttonIcon,
					className: 'fixed-typeahead-btn'
				}, this.props.buttonProps));
			}
			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_reactSelect2.default, {
					ref: function ref(el) {
						_this2.select = el;
					},
					name: this.props.name,
					value: this.props.value,
					options: this.props.options,
					placeholder: this.props.placeholder,
					onChange: this.props.onChange,
					autoFocus: this.props.autoFocus,
					autosize: true,
					openOnFocus: this.props.openOnFocus
				}),
				this.button()
			);
		}
	}]);

	return Typeahead;
}(_react.Component);

Typeahead.defaultProps = {
	options: [],
	button: false,
	buttonIcon: ''
};
exports.default = Typeahead;

/***/ }),

/***/ "./components/Typeahead/Typeahead.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Typeahead.scss";

/***/ }),

/***/ "./components/Typeahead/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Typeahead = __webpack_require__("./components/Typeahead/Typeahead.js");

var _Typeahead2 = _interopRequireDefault(_Typeahead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Typeahead2.default;

/***/ }),

/***/ "./components/Video/Video.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Video = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./components/Video/Video.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Video JS
//Doesn't play well with Webpack;
//import videojs from 'video.js/dist/video.js';
//import 'video.js/dist/video-js.css';

var Video = exports.Video = function (_Component) {
	_inherits(Video, _Component);

	function Video() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Video);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Video, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
				//console.log('onPlayerReady', this);
			});
		}
	}, {
		key: 'setVideoSource',
		value: function setVideoSource() {
			var _this2 = this;

			//rtmp/mp4 or rtmp/flv

			this.player.src({ type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" });

			this.player.ready(function () {
				_this2.player.play();
			});
		}
	}, {
		key: 'hideVideoControls',
		value: function hideVideoControls() {}
	}, {
		key: 'showVideoControls',
		value: function showVideoControls() {}
	}, {
		key: 'setVideoPoster',
		value: function setVideoPoster() {
			this.player.poster('.../myImage.jpg');
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.player) {
				this.player.dispose();
			}
		}
	}, {
		key: 'videoStatus',
		value: function videoStatus() {
			if (this.props.streamStatus.loading) {
				return false;
			}

			if (this.props.hideStatus !== "true") {
				var active = this.props.streamStatus && this.props.streamStatus.data.length > 0 ? this.props.streamStatus.data[0].attributes.up : false;

				return _react2.default.createElement(
					'div',
					{ className: active ? 'video-status connected' : 'video-status' },
					_react2.default.createElement('span', { className: 'indicator' }),
					_react2.default.createElement(
						'span',
						{ className: 'status-text' },
						active ? 'Live' : 'Not Connected'
					)
				);
			}
		}
	}, {
		key: 'liveAd',
		value: function liveAd() {
			if (this.props[this.props.context].artwork) {
				console.log(this.props.liveAds.artwork.attributes.url);
				return _react2.default.createElement(
					'div',
					{ className: 'live-ad-overlay' },
					_react2.default.createElement('img', { src: this.props[this.props.context].artwork.attributes.url })
				);
			}
		}
	}, {
		key: 'videoClassName',
		value: function videoClassName() {
			var className = "vjs-transmit video-js vjs-big-play-centered";
			if (!this.props.active) {
				className += " vjs-inactive";
			}
			return className;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				{ 'data-vjs-player': true },
				this.videoStatus(),
				this.liveAd(),
				_react2.default.createElement('video', { ref: function ref(node) {
						return _this3.videoNode = node;
					}, className: this.videoClassName() })
			);
		}
	}]);

	return Video;
}(_react.Component);

exports.default = Video;

/***/ }),

/***/ "./components/Video/Video.scss":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Video.scss";

/***/ }),

/***/ "./components/Video/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Video = __webpack_require__("./components/Video/Video.js");

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Video2.default;

/***/ }),

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DatePicker = exports.Video = exports.TermsOfService = exports.Card = exports.Avatar = exports.ImageList = exports.CenteredForm = exports.Accordion = exports.Collapse = exports.Tabs = exports.TextLoader = exports.LinearLoader = exports.DotLoader = exports.Loader = exports.ButtonCell = exports.DateCell = exports.SelectCell = exports.NestedCell = exports.AvatarCell = exports.ActionCell = exports.ImageCell = exports.Cell = exports.Row = exports.Column = exports.Table = exports.AddContentBetween = exports.FileUpload = exports.Typeahead = exports.EditableItem = exports.ContentEditable = exports.Toggle = exports.Radio = exports.Checkbox = exports.Select = exports.TextArea = exports.Input = exports.Button = exports.storage = undefined;

var _Table2 = __webpack_require__("./components/Table/index.js");

Object.defineProperty(exports, 'Column', {
	enumerable: true,
	get: function get() {
		return _Table2.Column;
	}
});
Object.defineProperty(exports, 'Row', {
	enumerable: true,
	get: function get() {
		return _Table2.Row;
	}
});
Object.defineProperty(exports, 'Cell', {
	enumerable: true,
	get: function get() {
		return _Table2.Cell;
	}
});
Object.defineProperty(exports, 'ImageCell', {
	enumerable: true,
	get: function get() {
		return _Table2.ImageCell;
	}
});
Object.defineProperty(exports, 'ActionCell', {
	enumerable: true,
	get: function get() {
		return _Table2.ActionCell;
	}
});
Object.defineProperty(exports, 'AvatarCell', {
	enumerable: true,
	get: function get() {
		return _Table2.AvatarCell;
	}
});
Object.defineProperty(exports, 'NestedCell', {
	enumerable: true,
	get: function get() {
		return _Table2.NestedCell;
	}
});
Object.defineProperty(exports, 'SelectCell', {
	enumerable: true,
	get: function get() {
		return _Table2.SelectCell;
	}
});
Object.defineProperty(exports, 'DateCell', {
	enumerable: true,
	get: function get() {
		return _Table2.DateCell;
	}
});
Object.defineProperty(exports, 'ButtonCell', {
	enumerable: true,
	get: function get() {
		return _Table2.ButtonCell;
	}
});

var _Loader2 = __webpack_require__("./components/Loader/index.js");

Object.defineProperty(exports, 'DotLoader', {
	enumerable: true,
	get: function get() {
		return _Loader2.DotLoader;
	}
});
Object.defineProperty(exports, 'LinearLoader', {
	enumerable: true,
	get: function get() {
		return _Loader2.LinearLoader;
	}
});
Object.defineProperty(exports, 'TextLoader', {
	enumerable: true,
	get: function get() {
		return _Loader2.TextLoader;
	}
});

var _storage2 = __webpack_require__("./util/storage.js");

var _storage = _interopRequireWildcard(_storage2);

var _Button2 = __webpack_require__("./components/Button/index.js");

var _Button3 = _interopRequireDefault(_Button2);

var _Input2 = __webpack_require__("./components/Input/index.js");

var _Input3 = _interopRequireDefault(_Input2);

var _TextArea2 = __webpack_require__("./components/TextArea/index.js");

var _TextArea3 = _interopRequireDefault(_TextArea2);

var _Select2 = __webpack_require__("./components/Select/index.js");

var _Select3 = _interopRequireDefault(_Select2);

var _Checkbox2 = __webpack_require__("./components/Checkbox/index.js");

var _Checkbox3 = _interopRequireDefault(_Checkbox2);

var _Radio2 = __webpack_require__("./components/Radio/index.js");

var _Radio3 = _interopRequireDefault(_Radio2);

var _Toggle2 = __webpack_require__("./components/Toggle/index.js");

var _Toggle3 = _interopRequireDefault(_Toggle2);

var _ContentEditable2 = __webpack_require__("./components/ContentEditable/index.js");

var _ContentEditable3 = _interopRequireDefault(_ContentEditable2);

var _EditableItem2 = __webpack_require__("./components/EditableItem/index.js");

var _EditableItem3 = _interopRequireDefault(_EditableItem2);

var _Typeahead2 = __webpack_require__("./components/Typeahead/index.js");

var _Typeahead3 = _interopRequireDefault(_Typeahead2);

var _FileUpload2 = __webpack_require__("./components/FileUpload/index.js");

var _FileUpload3 = _interopRequireDefault(_FileUpload2);

var _AddContentBetween2 = __webpack_require__("./components/AddContentBetween/index.js");

var _AddContentBetween3 = _interopRequireDefault(_AddContentBetween2);

var _Table3 = _interopRequireDefault(_Table2);

var _Loader3 = _interopRequireDefault(_Loader2);

var _Tabs2 = __webpack_require__("./components/Tabs/index.js");

var _Tabs3 = _interopRequireDefault(_Tabs2);

var _Collapse2 = __webpack_require__("./components/Collapse/index.js");

var _Collapse3 = _interopRequireDefault(_Collapse2);

var _Accordion2 = __webpack_require__("./components/Accordion/index.js");

var _Accordion3 = _interopRequireDefault(_Accordion2);

var _CenteredForm2 = __webpack_require__("./components/CenteredForm/index.js");

var _CenteredForm3 = _interopRequireDefault(_CenteredForm2);

var _ImageList2 = __webpack_require__("./components/ImageList/index.js");

var _ImageList3 = _interopRequireDefault(_ImageList2);

var _Avatar2 = __webpack_require__("./components/Avatar/index.js");

var _Avatar3 = _interopRequireDefault(_Avatar2);

var _Card2 = __webpack_require__("./components/Card/index.js");

var _Card3 = _interopRequireDefault(_Card2);

var _TermsOfService2 = __webpack_require__("./components/TermsOfService/index.js");

var _TermsOfService3 = _interopRequireDefault(_TermsOfService2);

var _Video2 = __webpack_require__("./components/Video/index.js");

var _Video3 = _interopRequireDefault(_Video2);

var _DatePicker2 = __webpack_require__("./components/DatePicker/index.js");

var _DatePicker3 = _interopRequireDefault(_DatePicker2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.storage = _storage;

// Inputs

//util

exports.Button = _Button3.default;
exports.Input = _Input3.default; // rewrite styles

exports.TextArea = _TextArea3.default;
exports.Select = _Select3.default;
exports.Checkbox = _Checkbox3.default;
exports.Radio = _Radio3.default;

// Custom Inputs

exports.Toggle = _Toggle3.default;
exports.ContentEditable = _ContentEditable3.default;
exports.EditableItem = _EditableItem3.default;
exports.Typeahead = _Typeahead3.default;
exports.FileUpload = _FileUpload3.default;
exports.AddContentBetween = _AddContentBetween3.default;

// Table REPLACE WITH UNIVERS COMPNOENT

exports.Table = _Table3.default;

// Loaders

exports.Loader = _Loader3.default;

// ========================================
// EVERYTHING BELOW HERE IS EXPERIMENTAL
// ========================================


// Layout

exports.Tabs = _Tabs3.default;
exports.Collapse = _Collapse3.default;
exports.Accordion = _Accordion3.default;
exports.CenteredForm = _CenteredForm3.default;

// Per App
// export Header from './components/Header';
// export Sidebar from './components/Sidebar';

// Lists

exports.ImageList = _ImageList3.default;

// Misc

exports.Avatar = _Avatar3.default;
exports.Card = _Card3.default;
exports.TermsOfService = _TermsOfService3.default;
exports.Video = _Video3.default;

// ========================================
// TODO
// These components have dependencies that we are not sure we want to commit to yet
// ========================================

exports.DatePicker = _DatePicker3.default;
//export Calendar from 'components/Calendar';
//export CalendarKey from 'components/CalendarKey';

//Popper Dependant
//export Popup from './components/Popup';

// Redux Dependant
//export Modal from './components/Modal';
// export Drawer from './components/Drawer';
//export Notifications from './components/Notifications';


// ——————— Seperate into another package?

//Stripe Dependant — gw-ui-stripe
//export StripeCard from './components/StripeCard';

//D3 Dependant — gw-ui-graphs
//export Graph from './components/Graph';

//React Highlight Dependant — gw-ui-code
//export CodeBlock from './components/CodeBlock';

/***/ }),

/***/ "./util/storage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var get = exports.get = function get(key) {
	if (!localStorage) {
		console.warn('localStorage not supported');
	}
	if (localStorage && !localStorage.getItem(key)) {
		console.warn('tried to get a item in localStorage, but no value is set for ' + key);
	}
	return localStorage.getItem(key);
};

var set = exports.set = function set(key, value) {
	if (!localStorage) {
		console.warn('localStorage not supported');
	}
	if (localStorage && localStorage.getItem(key)) {
		console.warn('tried to set a token, but a ' + key + ' is already set, overwriting');
	}
	localStorage.setItem(key, value);
};

var del = exports.del = function del(key) {
	if (!localStorage) {
		console.warn('localStorage not supported');
	}
	localStorage.removeItem(key);
};

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "numeral":
/***/ (function(module, exports) {

module.exports = require("numeral");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-click-outside":
/***/ (function(module, exports) {

module.exports = require("react-click-outside");

/***/ }),

/***/ "react-datepicker":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-datepicker/dist/react-datepicker.css":
/***/ (function(module, exports) {

module.exports = require("react-datepicker/dist/react-datepicker.css");

/***/ }),

/***/ "react-dropzone":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "react-select":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ })

/******/ })));