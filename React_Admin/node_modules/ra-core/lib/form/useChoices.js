"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var i18n_1 = require("../i18n");
/*
 * Returns helper functions for choices handling.
 *
 * @param optionText Either a string defining the property to use to get the choice text, a function or a React element
 * @param optionValue The property to use to get the choice value
 * @param translateChoice A boolean indicating whether to option text should be translated
 *
 * @returns An object with helper functions:
 * - getChoiceText: Returns the choice text or a React element
 * - getChoiceValue: Returns the choice value
 */
var useChoices = function (_a) {
    var _b = _a.optionText, optionText = _b === void 0 ? 'name' : _b, _c = _a.optionValue, optionValue = _c === void 0 ? 'id' : _c, _d = _a.translateChoice, translateChoice = _d === void 0 ? true : _d;
    var translate = i18n_1.useTranslate();
    var getChoiceText = react_1.useCallback(function (choice) {
        if (react_1.isValidElement(optionText)) {
            return react_1.cloneElement(optionText, {
                record: choice,
            });
        }
        var choiceName = typeof optionText === 'function'
            ? optionText(choice)
            : get_1.default(choice, optionText);
        return translateChoice
            ? translate(choiceName, { _: choiceName })
            : choiceName;
    }, [optionText, translate, translateChoice]);
    var getChoiceValue = react_1.useCallback(function (choice) { return get_1.default(choice, optionValue); }, [
        optionValue,
    ]);
    return {
        getChoiceText: getChoiceText,
        getChoiceValue: getChoiceValue,
    };
};
exports.default = useChoices;
