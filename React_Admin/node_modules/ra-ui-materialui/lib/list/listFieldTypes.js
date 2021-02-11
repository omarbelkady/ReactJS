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
var React = __importStar(require("react"));
var Datagrid_1 = __importDefault(require("./datagrid/Datagrid"));
var SingleFieldList_1 = __importDefault(require("./SingleFieldList"));
var ArrayField_1 = __importDefault(require("../field/ArrayField"));
var BooleanField_1 = __importDefault(require("../field/BooleanField"));
var ChipField_1 = __importDefault(require("../field/ChipField"));
var DateField_1 = __importDefault(require("../field/DateField"));
var EmailField_1 = __importDefault(require("../field/EmailField"));
var NumberField_1 = __importDefault(require("../field/NumberField"));
var ReferenceField_1 = __importDefault(require("../field/ReferenceField"));
var ReferenceArrayField_1 = __importDefault(require("../field/ReferenceArrayField"));
var TextField_1 = __importDefault(require("../field/TextField"));
var UrlField_1 = __importDefault(require("../field/UrlField"));
exports.default = {
    table: {
        component: function (props) { return React.createElement(Datagrid_1.default, __assign({ rowClick: "edit" }, props)); },
        representation: function (_, children) { return "        <Datagrid rowClick=\"edit\">\n" + children.map(function (child) { return "            " + child.getRepresentation(); }).join('\n') + "\n        </Datagrid>"; },
    },
    array: {
        // eslint-disable-next-line react/display-name
        component: function (_a) {
            var children = _a.children, props = __rest(_a, ["children"]);
            return (React.createElement(ArrayField_1.default, __assign({}, props),
                React.createElement(SingleFieldList_1.default, null,
                    React.createElement(ChipField_1.default, { source: children.length > 0 && children[0].props.source }))));
        },
        representation: function (props, children) {
            return "<ArrayField source=\"" + props.source + "\"><SingleFieldList><ChipField source=\"" + (children.length > 0 && children[0].getProps().source) + "\" /></SingleFieldList></ArrayField>";
        },
    },
    boolean: {
        component: BooleanField_1.default,
        representation: function (props) { return "<BooleanField source=\"" + props.source + "\" />"; },
    },
    date: {
        component: DateField_1.default,
        representation: function (props) { return "<DateField source=\"" + props.source + "\" />"; },
    },
    email: {
        component: EmailField_1.default,
        representation: function (props) { return "<EmailField source=\"" + props.source + "\" />"; },
    },
    id: {
        component: TextField_1.default,
        representation: function (props) { return "<TextField source=\"" + props.source + "\" />"; },
    },
    number: {
        component: NumberField_1.default,
        representation: function (props) { return "<NumberField source=\"" + props.source + "\" />"; },
    },
    reference: {
        component: ReferenceField_1.default,
        representation: function (props) {
            return "<ReferenceField source=\"" + props.source + "\" reference=\"" + props.reference + "\"><TextField source=\"id\" /></ReferenceField>";
        },
    },
    referenceChild: {
        component: function (props) { return React.createElement(TextField_1.default, __assign({ source: "id" }, props)); },
        representation: function () { return "<TextField source=\"id\" />"; },
    },
    referenceArray: {
        component: ReferenceArrayField_1.default,
        representation: function (props) {
            return "<ReferenceArrayField source=\"" + props.source + "\" reference=\"" + props.reference + "\"><TextField source=\"id\" /></ReferenceArrayField>";
        },
    },
    referenceArrayChild: {
        component: function (props) { return React.createElement(TextField_1.default, __assign({ source: "id" }, props)); },
        representation: function () { return "<TextField source=\"id\" />"; },
    },
    richText: undefined,
    string: {
        component: TextField_1.default,
        representation: function (props) { return "<TextField source=\"" + props.source + "\" />"; },
    },
    url: {
        component: UrlField_1.default,
        representation: function (props) { return "<UrlField source=\"" + props.source + "\" />"; },
    },
};
