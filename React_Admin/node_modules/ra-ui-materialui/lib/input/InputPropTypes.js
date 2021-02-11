"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prop_types_1 = __importDefault(require("prop-types"));
/**
 * Common PropTypes for all react-admin inputs
 */
var InputPropTypes = {
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
exports.default = InputPropTypes;
