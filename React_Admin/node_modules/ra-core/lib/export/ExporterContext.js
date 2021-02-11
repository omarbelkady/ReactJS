"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var defaultExporter_1 = __importDefault(require("./defaultExporter"));
var ExporterContext = react_1.createContext(defaultExporter_1.default);
ExporterContext.displayName = 'ExporterContext';
exports.default = ExporterContext;
