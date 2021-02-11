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
import * as React from 'react';
import { render } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
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
        ? renderWithRedux(React.createElement(TestHook, { children: childrenMock, hook: hook }), reduxState)
        : render(React.createElement(TestHook, { children: childrenMock, hook: hook }));
    return __assign(__assign({}, result), { hookValue: hookValue,
        childrenMock: childrenMock, rerender: function (newHook) {
            result.rerender(React.createElement(TestHook, { children: childrenMock, hook: newHook }));
        } });
}
export default renderHook;
