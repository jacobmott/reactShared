"use strict";
// this will be a counter component test
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var centered = {
    justifyContent: 'center',
    alignItems: 'center',
};
var SIZE = react_native_1.Platform.select({ web: 400, default: 100 });
var FONT_SIZE = SIZE / 2;
var styles = react_native_1.StyleSheet.create({
    container: __assign(__assign({}, centered), { flex: 1, flexDirection: 'row', backgroundColor: '#ee7767' }),
    counter: __assign(__assign({}, centered), { height: SIZE, width: SIZE, borderRadius: 5, backgroundColor: 'white' }),
    numberText: {
        color: '#ee7767',
        fontWeight: 'bold',
        fontSize: FONT_SIZE,
    },
    buttonText: {
        color: 'white',
        fontSize: FONT_SIZE,
    },
    button: __assign(__assign({}, centered), { height: SIZE, width: SIZE }),
});
var Counter = function () {
    var _a = react_1.default.useState(0), count = _a[0], setCount = _a[1];
    var increment = function () {
        setCount(count + 1);
    };
    var decrement = function () {
        count > 0 && setCount(count - 1);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Pressable, { style: styles.button, onPress: decrement },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "-")),
        react_1.default.createElement(react_native_1.View, { style: styles.counter },
            react_1.default.createElement(react_native_1.Text, { style: styles.numberText }, count)),
        react_1.default.createElement(react_native_1.Pressable, { style: styles.button, onPress: increment },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "+"))));
};
exports.default = Counter;
