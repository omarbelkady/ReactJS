"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferTypeFromValues = void 0;
var inflection_1 = __importDefault(require("inflection"));
var getValuesFromRecords_1 = __importDefault(require("./getValuesFromRecords"));
var assertions_1 = require("./assertions");
var types = [
    'array',
    'boolean',
    'date',
    'email',
    'id',
    'number',
    'reference',
    'referenceChild',
    'referenceArray',
    'referenceArrayChild',
    'richText',
    'string',
    'url',
];
/**
 * Guesses an element type based on an array of values
 *
 * @example
 *     inferElementFromValues(
 *         'address',
 *         ['2 Baker Street', '1 Downing street'],
 *     );
 *     // { type: 'string', props: { source: 'address' } }
 *
 * @param {string} name Property name, e.g. 'date_of_birth'
 * @param {any[]} values an array of values from which to determine the type, e.g. [12, 34.4, 43]
 */
exports.inferTypeFromValues = function (name, values) {
    if (values === void 0) { values = []; }
    if (name === 'id') {
        return { type: 'id', props: { source: name } };
    }
    if (name.substr(name.length - 3) === '_id') {
        return {
            type: 'reference',
            props: {
                source: name,
                reference: inflection_1.default.pluralize(name.substr(0, name.length - 3)),
            },
            children: { type: 'referenceChild' },
        };
    }
    if (name.substr(name.length - 2) === 'Id') {
        return {
            type: 'reference',
            props: {
                source: name,
                reference: inflection_1.default.pluralize(name.substr(0, name.length - 2)),
            },
            children: { type: 'referenceChild' },
        };
    }
    if (name.substr(name.length - 4) === '_ids') {
        return {
            type: 'referenceArray',
            props: {
                source: name,
                reference: inflection_1.default.pluralize(name.substr(0, name.length - 4)),
            },
            children: { type: 'referenceArrayChild' },
        };
    }
    if (name.substr(name.length - 3) === 'Ids') {
        return {
            type: 'referenceArray',
            props: {
                source: name,
                reference: inflection_1.default.pluralize(name.substr(0, name.length - 3)),
            },
            children: { type: 'referenceArrayChild' },
        };
    }
    if (values.length === 0) {
        if (name === 'email') {
            return { type: 'email', props: { source: name } };
        }
        if (name === 'url') {
            return { type: 'url', props: { source: name } };
        }
        // FIXME introspect further using name
        return { type: 'string', props: { source: name } };
    }
    if (assertions_1.valuesAreArray(values)) {
        if (assertions_1.isObject(values[0][0])) {
            var leafValues_1 = getValuesFromRecords_1.default(values.reduce(function (acc, vals) { return acc.concat(vals); }, []));
            // FIXME bad visual representation
            return {
                type: 'array',
                props: { source: name },
                children: Object.keys(leafValues_1).map(function (leafName) {
                    return exports.inferTypeFromValues(leafName, leafValues_1[leafName]);
                }),
            };
        }
        // FIXME introspect further
        return { type: 'string', props: { source: name } };
    }
    if (assertions_1.valuesAreBoolean(values)) {
        return { type: 'boolean', props: { source: name } };
    }
    if (assertions_1.valuesAreDate(values)) {
        return { type: 'date', props: { source: name } };
    }
    if (assertions_1.valuesAreString(values)) {
        if (name === 'email') {
            return { type: 'email', props: { source: name } };
        }
        if (name === 'url') {
            return { type: 'url', props: { source: name } };
        }
        if (assertions_1.valuesAreDateString(values)) {
            return { type: 'date', props: { source: name } };
        }
        if (assertions_1.valuesAreHtml(values)) {
            return { type: 'richText', props: { source: name } };
        }
        return { type: 'string', props: { source: name } };
    }
    if (assertions_1.valuesAreInteger(values) || assertions_1.valuesAreNumeric(values)) {
        return { type: 'number', props: { source: name } };
    }
    if (assertions_1.valuesAreObject(values)) {
        // we need to go deeper
        // Arbitrarily, choose the first prop of the first object
        var propName_1 = Object.keys(values[0]).shift();
        var leafValues = values.map(function (v) { return v[propName_1]; });
        return exports.inferTypeFromValues(name + "." + propName_1, leafValues);
    }
    return { type: 'string', props: { source: name } };
};
