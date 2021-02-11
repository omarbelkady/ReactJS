import { ReactNode, FunctionComponent } from 'react';
interface Props {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    menuProps: any;
    inputEl: HTMLElement;
    classes?: any;
    suggestionsContainerProps?: any;
}
declare const AutocompleteSuggestionList: FunctionComponent<Props>;
export default AutocompleteSuggestionList;
