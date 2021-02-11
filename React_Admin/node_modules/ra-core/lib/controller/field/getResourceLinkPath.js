"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var util_1 = require("../../util");
/**
 * Get the link toward the referenced resource
 *
 * @example
 *
 * const linkPath = getResourceLinkPath({
 *      basePath: '/comments',
 *      link: 'edit',
 *      reference: 'users',
 *      record: {
 *          userId: 7
 *      },
 *      resource: 'comments',
 *      source: 'userId',
 * });
 *
 * @param {Object} option
 * @param {string} option.basePath basepath to current resource
 * @param {string | false | LinkToFunctionType} option.link="edit" The link toward the referenced record. 'edit', 'show' or false for no link (default to edit). Alternatively a function that returns a string
 * @param {string | false | LinkToFunctionType} [option.linkType] DEPRECATED : old name for link
 * @param {string} option.reference The linked resource name
 * @param {Object} option.record The current resource record
 * @param {string} option.resource The current resource name
 * @param {string} option.source The key of the linked resource identifier
 *
 * @returns {string | false} The reference props
 */
var getResourceLinkPath = function (_a) {
    var basePath = _a.basePath, _b = _a.link, link = _b === void 0 ? 'edit' : _b, linkType = _a.linkType, reference = _a.reference, _c = _a.record, record = _c === void 0 ? { id: '' } : _c, resource = _a.resource, source = _a.source;
    var sourceId = get_1.default(record, source);
    var rootPath = basePath.replace(resource, reference);
    // Backward compatibility: keep linkType but with warning
    var getResourceLinkPath = function (linkTo) {
        return !linkTo
            ? false
            : typeof linkTo === 'function'
                ? linkTo(record, reference)
                : util_1.linkToRecord(rootPath, sourceId, linkTo);
    };
    if (linkType !== undefined) {
        console.warn("The 'linkType' prop is deprecated and should be named to 'link' in <ReferenceField />");
    }
    var resourceLinkPath = getResourceLinkPath(linkType !== undefined ? linkType : link);
    return resourceLinkPath;
};
exports.default = getResourceLinkPath;
