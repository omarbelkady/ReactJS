import { UseChoicesOptions } from './useChoices';
declare const useSuggestions: ({ allowDuplicates, allowEmpty, choices, emptyText, emptyValue, limitChoicesToValue, matchSuggestion, optionText, optionValue, selectedItem, suggestionLimit, translateChoice, }: Options) => {
    getChoiceText: (choice: any) => any;
    getChoiceValue: (choice: any) => any;
    getSuggestions: (filter: any) => any[];
};
export default useSuggestions;
interface Options extends UseChoicesOptions {
    choices: any[];
    allowDuplicates?: boolean;
    allowEmpty?: boolean;
    emptyText?: string;
    emptyValue?: any;
    limitChoicesToValue?: boolean;
    matchSuggestion?: (filter: string, suggestion: any) => boolean;
    suggestionLimit?: number;
    selectedItem?: any | any[];
}
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
export declare const getSuggestionsFactory: ({ choices, allowDuplicates, allowEmpty, emptyText, emptyValue, optionText, optionValue, getChoiceText, getChoiceValue, limitChoicesToValue, matchSuggestion, selectedItem, suggestionLimit, }: {
    choices?: any[];
    allowDuplicates: any;
    allowEmpty: any;
    emptyText: any;
    emptyValue: any;
    optionText: any;
    optionValue: any;
    getChoiceText: any;
    getChoiceValue: any;
    limitChoicesToValue?: boolean;
    matchSuggestion?: (filter: any, suggestion: any) => any;
    selectedItem: any;
    suggestionLimit?: number;
}) => (filter: any) => any[];
