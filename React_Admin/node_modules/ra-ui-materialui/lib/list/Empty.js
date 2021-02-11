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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var Inbox_1 = __importDefault(require("@material-ui/icons/Inbox"));
var ra_core_1 = require("ra-core");
var inflection_1 = __importDefault(require("inflection"));
var button_1 = require("../button");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    message: {
        textAlign: 'center',
        opacity: theme.palette.type === 'light' ? 0.5 : 0.8,
        margin: '0 1em',
        color: theme.palette.type === 'light'
            ? 'inherit'
            : theme.palette.text.primary,
    },
    icon: {
        width: '9em',
        height: '9em',
    },
    toolbar: {
        textAlign: 'center',
        marginTop: '2em',
    },
}); }, { name: 'RaEmpty' });
var Empty = function (props) {
    var _a = ra_core_1.useListContext(props), basePath = _a.basePath, hasCreate = _a.hasCreate;
    var resource = ra_core_1.useResourceContext(props);
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    var resourceName = translate("resources." + resource + ".forcedCaseName", {
        smart_count: 0,
        _: inflection_1.default.humanize(translate("resources." + resource + ".name", {
            smart_count: 0,
            _: inflection_1.default.pluralize(resource),
        }), true),
    });
    var emptyMessage = translate('ra.page.empty', { name: resourceName });
    var inviteMessage = translate('ra.page.invite');
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.message },
            React.createElement(Inbox_1.default, { className: classes.icon }),
            React.createElement(core_1.Typography, { variant: "h4", paragraph: true }, translate("resources." + resource + ".empty", {
                _: emptyMessage,
            })),
            hasCreate && (React.createElement(core_1.Typography, { variant: "body1" }, translate("resources." + resource + ".invite", {
                _: inviteMessage,
            })))),
        hasCreate && (React.createElement("div", { className: classes.toolbar },
            React.createElement(button_1.CreateButton, { variant: "contained", basePath: basePath })))));
};
exports.default = Empty;
