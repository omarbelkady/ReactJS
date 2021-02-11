"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuggestionsFactory = void 0;
var react_1 = require("react");
var set_1 = __importDefault(require("lodash/set"));
var useChoices_1 = __importDefault(require("./useChoices"));
var i18n_1 = require("../i18n");
/*
 * Returns helper functions for suggestions handling.
 *
 * @param allowDuplicates A boolean indicating whether a suggestion can be added several times
 * @param allowEmpty A boolean indicating whether an empty suggestion should be added
 * @param choices An array of available choices
 * @param emptyText The text to use for the empty suggestion. Defaults to an empty string
 * @param emptyValue The value to use for the empty suggestion. Defaults to `null`
 * @param limitChoicesToValue A boolean indicating whether the initial suggestions should be limited to the currently selected one(s)
 * @param matchSuggestion Optional unless `optionText` is a React element. Function which check whether a choice matches a filter. Must return a boolean.
 * @param optionText Either a string defining the property to use to get the choice text, a function or a React element
 * @param optionValue The property to use to get the choice value
 * @param selectedItem The currently selected item. May be an array of selected items
 * @param suggestionLimit The maximum number of suggestions returned, excluding the empty one if `allowEmpty` is `true`
 * @param translateChoice A boolean indicating whether to option text should be translated
 *
 * @returns An object with helper functions:
 * - getChoiceText: Returns the choice text or a React element
 * - getChoiceValue: Returns the choice value
 * - getSuggestions: A function taking a filter value (string) and returning the matching suggestions
 */
var useSuggestions = function (_a) {
    var allowDuplicates = _a.allowDuplicates, allowEmpty = _a.allowEmpty, choices = _a.choices, _b = _a.emptyText, emptyText = _b === void 0 ? '' : _b, _c = _a.emptyValue, emptyValue = _c === void 0 ? null : _c, limitChoicesToValue = _a.limitChoicesToValue, matchSuggestion = _a.matchSuggestion, optionText = _a.optionText, optionValue = _a.optionValue, selectedItem = _a.selectedItem, _d = _a.suggestionLimit, suggestionLimit = _d === void 0 ? 0 : _d, translateChoice = _a.translateChoice;
    var translate = i18n_1.useTranslate();
    var _e = useChoices_1.default({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _e.getChoiceText, getChoiceValue = _e.getChoiceValue;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var getSuggestions = react_1.useCallback(exports.getSuggestionsFactory({
        allowDuplicates: allowDuplicates,
        allowEmpty: allowEmpty,
        choices: choices,
        emptyText: translate(emptyText, { _: emptyText }),
        emptyValue: emptyValue,
        getChoiceText: getChoiceText,
        getChoiceValue: getChoiceValue,
        limitChoicesToValue: limitChoicesToValue,
        matchSuggestion: matchSuggestion,
        optionText: optionText,
        optionValue: optionValue,
        selectedItem: selectedItem,
        suggestionLimit: suggestionLimit,
    }), [
        allowDuplicates,
        allowEmpty,
        choices,
        emptyText,
        emptyValue,
        getChoiceText,
        getChoiceValue,
        limitChoicesToValue,
        matchSuggestion,
        optionText,
        optionValue,
        selectedItem,
        suggestionLimit,
        translate,
    ]);
    return {
        getChoiceText: getChoiceText,
        getChoiceValue: getChoiceValue,
        getSuggestions: getSuggestions,
    };
};
exports.default = useSuggestions;
var escapeRegExp = function (value) {
    return value ? value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
}; // $& means the whole matched string
/**
 * Default matcher implementation which check whether the suggestion text matches the filter.
 */
var defaultMatchSuggestion = function (getChoiceText) { return function (filter, suggestion) {
    var suggestionText = getChoiceText(suggestion);
    var isReactElement = react_1.isValidElement(suggestionText);
    return isReactElement
        ? false
        : suggestionText &&
            suggestionText.match(
            // We must escape any RegExp reserved characters to avoid errors
            // For example, the filter might contains * which must be escaped as \*
            new RegExp(escapeRegExp(filter), 'i'));
}; };
/**
 * Get the suggestions to display after applying a fuzzy search on the available choices
 *
 * @example
 *
 * getSuggestions({
 *   choices: [{ id: 1, name: 'admin' }, { id: 2, name: 'publisher' }],
 *   optionText: 'name',
 *   optionValue: 'id',
 *   getSuggestionText: choice => choice[optionText],
 * })('pub')
 *
 * // Will return [{ id: 2, name: 'publisher' }]
 * getSuggestions({
 *   choices: [{ id: 1, name: 'admin' }, { id: 2, name: 'publisher' }],
 *   optionText: 'name',
 *   optionValue: 'id',
 *   getSuggestionText: choice => choice[optionText],
 * })('pub')
 *
 * // Will return [{ id: 2, name: 'publisher' }]
 */
exports.getSuggestionsFactory = function (_a) {
    var _b = _a.choices, choices = _b === void 0 ? [] : _b, allowDuplicates = _a.allowDuplicates, allowEmpty = _a.allowEmpty, emptyText = _a.emptyText, emptyValue = _a.emptyValue, optionText = _a.optionText, optionValue = _a.optionValue, getChoiceText = _a.getChoiceText, getChoiceValue = _a.getChoiceValue, _c = _a.limitChoicesToValue, limitChoicesToValue = _c === void 0 ? false : _c, _d = _a.matchSuggestion, matchSuggestion = _d === void 0 ? defaultMatchSuggestion(getChoiceText) : _d, selectedItem = _a.selectedItem, _e = _a.suggestionLimit, suggestionLimit = _e === void 0 ? 0 : _e;
    return function (filter) {
        var suggestions = [];
        // if an item is selected and matches the filter
        if (selectedItem &&
            !Array.isArray(selectedItem) &&
            matchSuggestion(filter, selectedItem)) {
            if (limitChoicesToValue) {
                // display only the selected item
                suggestions = choices.filter(function (choice) {
                    return getChoiceValue(choice) === getChoiceValue(selectedItem);
                });
            }
            else if (!allowDuplicates) {
                // ignore the filter to show more choices
                suggestions = removeAlreadySelectedSuggestions(choices, selectedItem, getChoiceValue);
            }
            else {
                suggestions = choices;
            }
        }
        else {
            suggestions = choices.filter(function (choice) { return matchSuggestion(filter, choice); });
            if (!allowDuplicates) {
                suggestions = removeAlreadySelectedSuggestions(suggestions, selectedItem, getChoiceValue);
            }
        }
        suggestions = limitSuggestions(suggestions, suggestionLimit);
        if (allowEmpty) {
            suggestions = addEmptySuggestion(suggestions, {
                optionText: optionText,
                optionValue: optionValue,
                emptyText: emptyText,
                emptyValue: emptyValue,
            });
        }
        return suggestions;
    };
};
/**
 * @example
 *
 * removeAlreadySelectedSuggestions(
 *  [{ id: 1, name: 'foo'}, { id: 2, name: 'bar' }],
 *  [{ id: 1, name: 'foo'}]
 * );
 *
 * // Will return [{ id: 2, name: 'bar' }]
 *
 * @param suggestions List of suggestions
 * @param selectedItems List of selection
 * @param getChoiceValue Converter function from suggestion to value
 */
var removeAlreadySelectedSuggestions = function (suggestions, selectedItems, getChoiceValue) {
    if (!selectedItems) {
        return suggestions;
    }
    var selectedValues = Array.isArray(selectedItems)
        ? selectedItems.map(getChoiceValue)
        : [getChoiceValue(selectedItems)];
    return suggestions.filter(function (suggestion) { return !selectedValues.includes(getChoiceValue(suggestion)); });
};
/**
 * @example
 *
 * limitSuggestions(
 *  [{ id: 1, name: 'foo'}, { id: 2, name: 'bar' }],
 *  1
 * );
 *
 * // Will return [{ id: 1, name: 'foo' }]
 *
 * @param suggestions List of suggestions
 * @param limit
 */
var limitSuggestions = function (suggestions, limit) {
    if (limit === void 0) { limit = 0; }
    return Number.isInteger(limit) && limit > 0
        ? suggestions.slice(0, limit)
        : suggestions;
};
/**
 * addEmptySuggestion(
 *  [{ id: 1, name: 'foo'}, { id: 2, name: 'bar' }],
 * );
 *
 * // Will return [{ id: null, name: '' }, { id: 1, name: 'foo' }, , { id: 2, name: 'bar' }]
 *
 * @param suggestions List of suggestions
 * @param options
 */
var addEmptySuggestion = function (suggestions, _a) {
    var _b = _a.optionText, optionText = _b === void 0 ? 'name' : _b, _c = _a.optionValue, optionValue = _c === void 0 ? 'id' : _c, _d = _a.emptyText, emptyText = _d === void 0 ? '' : _d, _e = _a.emptyValue, emptyValue = _e === void 0 ? null : _e;
    var newSuggestions = suggestions;
    var emptySuggestion = {};
    set_1.default(emptySuggestion, optionValue, emptyValue);
    if (typeof optionText === 'string') {
        set_1.default(emptySuggestion, optionText, emptyText);
    }
    return [].concat(emptySuggestion, newSuggestions);
};
