"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLetterIndex = void 0;
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
exports.ListLetterIndex = function (_a) {
    var sectionData = _a.sectionData, onPressLetter = _a.onPressLetter, indexContainerStyle = _a.indexContainerStyle, indexLetterStyle = _a.indexLetterStyle, indexLetterContainerStyle = _a.indexLetterContainerStyle, renderCustomIndexLetter = _a.renderCustomIndexLetter, letterListContainerStyle = _a.letterListContainerStyle;
    var onRenderCustomIndexLetter = function (_a) {
        var item = _a.item, index = _a.index;
        var onPress = function () { return onPressLetter(index); };
        if (renderCustomIndexLetter) {
            return renderCustomIndexLetter({
                item: item,
                index: index,
                onPress: onPress,
            });
        }
        return (<react_native_1.TouchableOpacity testID="indexItem" onPress={onPress}>
        <react_native_1.View testID="indexItem__title-container" style={[styles_1.styles.letterIndexItem, indexLetterContainerStyle]}>
          <react_native_1.Text testID="indexItem__title" style={[styles_1.styles.letterIndexLabel, indexLetterStyle]}>{item.title}</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.TouchableOpacity>);
    };
    return (<react_native_1.View style={[styles_1.styles.letterIndexContainer, indexContainerStyle]}>
      <react_native_1.FlatList testID="flatList" contentContainerStyle={[styles_1.styles.letterIndexList, letterListContainerStyle]} data={sectionData} keyExtractor={function (i) { return i.title; }} renderItem={onRenderCustomIndexLetter}/>
    </react_native_1.View>);
};
