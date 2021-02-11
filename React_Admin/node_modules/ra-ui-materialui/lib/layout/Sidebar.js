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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOSED_DRAWER_WIDTH = exports.DRAWER_WIDTH = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var get_1 = __importDefault(require("lodash/get"));
var ra_core_1 = require("ra-core");
exports.DRAWER_WIDTH = 240;
exports.CLOSED_DRAWER_WIDTH = 55;
var Sidebar = function (props) {
    var children = props.children, closedSize = props.closedSize, size = props.size, classesOverride = props.classes, rest = __rest(props, ["children", "closedSize", "size", "classes"]);
    var dispatch = react_redux_1.useDispatch();
    var isXSmall = core_1.useMediaQuery(function (theme) {
        return theme.breakpoints.down('xs');
    });
    var isSmall = core_1.useMediaQuery(function (theme) { return theme.breakpoints.down('sm'); });
    var open = react_redux_1.useSelector(function (state) { return state.admin.ui.sidebarOpen; });
    ra_core_1.useLocale(); // force redraw on locale change
    var handleClose = function () { return dispatch(ra_core_1.setSidebarVisibility(false)); };
    var toggleSidebar = function () { return dispatch(ra_core_1.setSidebarVisibility(!open)); };
    var _a = useStyles(__assign(__assign({}, props), { open: open })), drawerPaper = _a.drawerPaper, classes = __rest(_a, ["drawerPaper"]);
    return isXSmall ? (React.createElement(core_1.Drawer, __assign({ variant: "temporary", open: open, PaperProps: {
            className: drawerPaper,
        }, onClose: toggleSidebar, classes: classes }, rest), react_1.cloneElement(react_1.Children.only(children), {
        onMenuClick: handleClose,
    }))) : isSmall ? (React.createElement(core_1.Drawer, __assign({ variant: "permanent", open: open, PaperProps: {
            className: drawerPaper,
        }, onClose: toggleSidebar, classes: classes }, rest), react_1.cloneElement(react_1.Children.only(children), {
        onMenuClick: handleClose,
    }))) : (React.createElement(core_1.Drawer, __assign({ variant: "permanent", open: open, PaperProps: {
            className: drawerPaper,
        }, onClose: toggleSidebar, classes: classes }, rest), react_1.cloneElement(react_1.Children.only(children), {
        onMenuClick: defaultOnMenuClick,
    })));
};
Sidebar.propTypes = {
    children: prop_types_1.default.node.isRequired,
};
var defaultOnMenuClick = function () { return null; };
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        docked: {},
        paper: {},
        paperAnchorLeft: {},
        paperAnchorRight: {},
        paperAnchorTop: {},
        paperAnchorBottom: {},
        paperAnchorDockedLeft: {},
        paperAnchorDockedTop: {},
        paperAnchorDockedRight: {},
        paperAnchorDockedBottom: {},
        modal: {},
        drawerPaper: (_a = {
                position: 'relative',
                height: '100%',
                overflowX: 'hidden',
                width: function (props) {
                    return props.open
                        ? get_1.default(theme, 'sidebar.width', exports.DRAWER_WIDTH)
                        : get_1.default(theme, 'sidebar.closedWidth', exports.CLOSED_DRAWER_WIDTH);
                },
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                backgroundColor: 'transparent',
                borderRight: 'none'
            },
            _a[theme.breakpoints.only('xs')] = {
                marginTop: 0,
                height: '100vh',
                position: 'inherit',
                backgroundColor: theme.palette.background.default,
            },
            _a[theme.breakpoints.up('md')] = {
                border: 'none',
            },
            _a.zIndex = 'inherit',
            _a),
    });
}, { name: 'RaSidebar' });
exports.default = Sidebar;
