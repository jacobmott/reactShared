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
import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
var centered = {
    justifyContent: 'center',
    alignItems: 'center',
};
var SIZE = Platform.select({ web: 400, default: 100 });
var FONT_SIZE = SIZE / 2;
var styles = StyleSheet.create({
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
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    var increment = function () {
        setCount(count + 1);
    };
    var decrement = function () {
        count > 0 && setCount(count - 1);
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(Pressable, { style: styles.button, onPress: decrement },
            React.createElement(Text, { style: styles.buttonText }, "-")),
        React.createElement(View, { style: styles.counter },
            React.createElement(Text, { style: styles.numberText }, count)),
        React.createElement(Pressable, { style: styles.button, onPress: increment },
            React.createElement(Text, { style: styles.buttonText }, "+"))));
};
export default Counter;
