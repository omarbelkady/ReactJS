"use strict";
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@testing-library/react");
var renderWithRedux_1 = __importDefault(require("./renderWithRedux"));
var TestHook = function (_a) {
    var children = _a.children, hook = _a.hook;
    return children(hook());
};
function renderHook(hook, withRedux, reduxState) {
    if (withRedux === void 0) { withRedux = true; }
    var hookValue = null;
    var children = function (props) {
        hookValue = props;
        return React.createElement("p", null, "child");
    };
    var childrenMock = jest.fn().mockImplementation(children);
    var result = withRedux
        ? renderWithRedux_1.default(React.createElement(TestHook, { children: childrenMock, hook: hook }), reduxState)
        : react_1.render(React.createElement(TestHook, { children: childrenMock, hook: hook }));
    return __assign(__assign({}, result), { hookValue: hookValue,
        childrenMock: childrenMock, rerender: function (newHook) {
            result.rerender(React.createElement(TestHook, { children: childrenMock, hook: newHook }));
        } });
}
exports.default = renderHook;
