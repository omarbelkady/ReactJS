"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReference = void 0;
var dataProvider_1 = require("../dataProvider");
/**
 * @typedef ReferenceProps
 * @type {Object}
 * @property {boolean} loading: boolean indicating if the reference is loading
 * @property {boolean} loaded: boolean indicating if the reference has loaded
 * @property {Object} referenceRecord: the referenced record.
 */
/**
 * Fetch reference record, and return it when available
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 *
 * const { loading, loaded, referenceRecord } = useReference({
 *     id: 7,
 *     reference: 'users',
 * });
 *
 * @param {Object} option
 * @param {string} option.reference The linked resource name
 * @param {string} option.id The id of the reference
 *
 * @returns {ReferenceProps} The reference record
 */
exports.useReference = function (_a) {
    var reference = _a.reference, id = _a.id;
    var _b = dataProvider_1.useGetMany(reference, [id]), data = _b.data, error = _b.error, loading = _b.loading, loaded = _b.loaded;
    return {
        referenceRecord: error ? undefined : data[0],
        error: error,
        loading: loading,
        loaded: loaded,
    };
};
exports.default = exports.useReference;
