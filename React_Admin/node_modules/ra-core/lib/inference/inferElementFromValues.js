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
var inflection_1 = __importDefault(require("inflection"));
var getValuesFromRecords_1 = __importDefault(require("./getValuesFromRecords"));
var InferredElement_1 = __importDefault(require("./InferredElement"));
var assertions_1 = require("./assertions");
var DefaultComponent = function () { return React.createElement("span", null, ";"); };
var defaultType = {
    type: DefaultComponent,
    representation: function () { return '<DefaultComponent />'; },
};
var defaultTypes = {
    array: defaultType,
    boolean: defaultType,
    date: defaultType,
    email: defaultType,
    id: defaultType,
    number: defaultType,
    reference: defaultType,
    referenceArray: defaultType,
    richText: defaultType,
    string: defaultType,
    url: defaultType,
};
var hasType = function (type, types) { return typeof types[type] !== 'undefined'; };
/**
 * Guesses an element based on an array of values
 *
 * @example
 *     inferElementFromValues(
 *         'address',
 *         ['2 Baker Street', '1 Downing street'],
 *         { number: NumberField, string: StringField }
 *     );
 *     // new InferredElement(<StringField source="address" />)
 *
 * Types are optional: if a type isn't provided, the function falls back
 * to the nearest type.
 *
 * @example
 *     inferElementFromValues(
 *         'content',
 *         ['<h1>Hello</h1>'],
 *         { string: StringField } // no richText type
 *     );
 *     // new InferredElement(<StringField source="content" />)
 *
 * Types can be disabled by passing a falsy value.
 *
 * @example
 *     inferElementFromValues(
 *         'content',
 *         ['<h1>Hello</h1>'],
 *         { string: StringField, richText: false }
 *     );
 *     // null
 *
 * @param {string} name Property name, e.g. 'date_of_birth'
 * @param {any[]} values an array of values from which to determine the type, e.g. [12, 34.4, 43]
 * @param {Object} types A set of components indexed by type. The string type is the only required one
 *
 * @return InferredElement
 */
var inferElementFromValues = function (name, values, types) {
    if (values === void 0) { values = []; }
    if (types === void 0) { types = defaultTypes; }
    if (name === 'id' && hasType('id', types)) {
        return new InferredElement_1.default(types.id, { source: name });
    }
    if (name.substr(name.length - 3) === '_id' && hasType('reference', types)) {
        var reference = inflection_1.default.pluralize(name.substr(0, name.length - 3));
        return (types.reference &&
            new InferredElement_1.default(types.reference, {
                source: name,
                reference: reference,
            }, new InferredElement_1.default(types.referenceChild)));
    }
    if (name.substr(name.length - 2) === 'Id' && hasType('reference', types)) {
        var reference = inflection_1.default.pluralize(name.substr(0, name.length - 2));
        return (types.reference &&
            new InferredElement_1.default(types.reference, {
                source: name,
                reference: reference,
            }, new InferredElement_1.default(types.referenceChild)));
    }
    if (name.substr(name.length - 4) === '_ids' &&
        hasType('referenceArray', types)) {
        var reference = inflection_1.default.pluralize(name.substr(0, name.length - 4));
        return (types.referenceArray &&
            new InferredElement_1.default(types.referenceArray, {
                source: name,
                reference: reference,
            }, new InferredElement_1.default(types.referenceArrayChild)));
    }
    if (name.substr(name.length - 3) === 'Ids' &&
        hasType('referenceArray', types)) {
        var reference = inflection_1.default.pluralize(name.substr(0, name.length - 3));
        return (types.referenceArray &&
            new InferredElement_1.default(types.referenceArray, {
                source: name,
                reference: reference,
            }, new InferredElement_1.default(types.referenceArrayChild)));
    }
    if (values.length === 0) {
        // FIXME introspect further using name
        return new InferredElement_1.default(types.string, { source: name });
    }
    if (assertions_1.valuesAreArray(values)) {
        if (assertions_1.isObject(values[0][0]) && hasType('array', types)) {
            var leafValues_1 = getValuesFromRecords_1.default(values.reduce(function (acc, vals) { return acc.concat(vals); }, []));
            // FIXME bad visual representation
            return (types.array &&
                new InferredElement_1.default(types.array, {
                    source: name,
                }, Object.keys(leafValues_1).map(function (leafName) {
                    return inferElementFromValues(leafName, leafValues_1[leafName], types);
                })));
        }
        // FIXME introspect further
        return new InferredElement_1.default(types.string, { source: name });
    }
    if (assertions_1.valuesAreBoolean(values) && hasType('boolean', types)) {
        return new InferredElement_1.default(types.boolean, { source: name });
    }
    if (assertions_1.valuesAreDate(values) && hasType('date', types)) {
        return new InferredElement_1.default(types.date, { source: name });
    }
    if (assertions_1.valuesAreString(values)) {
        if (name === 'email' && hasType('email', types)) {
            return new InferredElement_1.default(types.email, { source: name });
        }
        if (name === 'url' && hasType('url', types)) {
            return new InferredElement_1.default(types.url, { source: name });
        }
        if (assertions_1.valuesAreDateString(values) && hasType('date', types)) {
            return new InferredElement_1.default(types.date, { source: name });
        }
        if (assertions_1.valuesAreHtml(values) && hasType('richText', types)) {
            return new InferredElement_1.default(types.richText, { source: name });
        }
        return new InferredElement_1.default(types.string, { source: name });
    }
    if ((assertions_1.valuesAreInteger(values) || assertions_1.valuesAreNumeric(values)) &&
        hasType('number', types)) {
        return new InferredElement_1.default(types.number, { source: name });
    }
    if (assertions_1.valuesAreObject(values)) {
        // we need to go deeper
        // Arbitrarily, choose the first prop of the first object
        var propName_1 = Object.keys(values[0]).shift();
        var leafValues = values.map(function (v) { return v[propName_1]; });
        return inferElementFromValues(name + "." + propName_1, leafValues, types);
    }
    return new InferredElement_1.default(types.string, { source: name });
};
exports.default = inferElementFromValues;
