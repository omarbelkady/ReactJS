import { ReactElement } from 'react';
import { Record } from '../types';
import { InputProps } from '.';
export declare type OptionTextElement = ReactElement<{
    record: Record;
}>;
export declare type OptionText = (choice: object) => string | OptionTextElement;
export interface ChoicesInputProps<T = any> extends Omit<InputProps<T>, 'source'> {
    source?: string;
    choices?: object[];
}
export interface ChoicesProps {
    choices: object[];
    optionValue?: string;
    optionText?: OptionTextElement | OptionText | string;
    translateChoice?: boolean;
}
export interface UseChoicesOptions {
    optionValue?: string;
    optionText?: OptionTextElement | OptionText | string;
    translateChoice?: boolean;
}
declare const useChoices: ({ optionText, optionValue, translateChoice, }: UseChoicesOptions) => {
    getChoiceText: (choice: any) => any;
    getChoiceValue: (choice: any) => any;
};
export default useChoices;
