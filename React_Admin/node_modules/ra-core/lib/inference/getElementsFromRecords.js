"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inferElementFromValues_1 = __importDefault(require("./inferElementFromValues"));
var getValuesFromRecords_1 = __importDefault(require("./getValuesFromRecords"));
/**
 * Get a list of React-admin field components from a list of records
 *
 * @example
 * const records = [
 *     {
 *         "id": 1,
 *         "title": "Lorem Ipsum",
 *         "views": 254,
 *         "user_id": 123,
 *     },
 *     {
 *         "id": 2,
 *         "title": "Sic Dolor amet",
 *         "user_id": 456,
 *     },
 * ];
 * const types = {
 *     id: NumberField,
 *     string: TextField,
 *     number: NumberField,
 *     reference: ReferenceField
 * };
 * const components = getElementsFromRecords(records, types);
 * // [
 * //    <NumberField source="id" />,
 * //    <TextField source="title" />,
 * //    <NumberField source="views" />,
 * //    <ReferenceField source="user_id" reference="users"><NumberField source="id" /></ReferenceField>,
 * // ];
 */
exports.default = (function (records, types) {
    var fieldValues = getValuesFromRecords_1.default(records);
    return Object.keys(fieldValues)
        .reduce(function (fields, fieldName) {
        return fields.concat(inferElementFromValues_1.default(fieldName, fieldValues[fieldName], types));
    }, [])
        .filter(function (inferredElement) { return inferredElement.isDefined(); });
});
