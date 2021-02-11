"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inflection_1 = __importDefault(require("inflection"));
/**
 * Returns an array of arguments to use with the translate function for the label of a field.
 * The label will be the one specified by the label prop or one computed from the resource and source props.
 *
 * Usage:
 *  <span>
 *      {translate(...getFieldLabelTranslationArgs({ label, resource, source }))}
 *  </span>
 */
exports.default = (function (options) {
    if (!options) {
        return [''];
    }
    var label = options.label, resource = options.resource, source = options.source;
    return typeof label !== 'undefined'
        ? [label, { _: label }]
        : typeof source !== 'undefined'
            ? [
                "resources." + resource + ".fields." + source,
                {
                    _: inflection_1.default.transform(source, ['underscore', 'humanize']),
                },
            ]
            : [''];
});
