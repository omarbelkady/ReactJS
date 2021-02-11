import { FunctionComponent } from 'react';
import { MenuItemProps } from '@material-ui/core/MenuItem';
interface Props {
    suggestion: any;
    index: number;
    highlightedIndex: number;
    isSelected: boolean;
    filterValue: string;
    classes?: any;
    getSuggestionText: (suggestion: any) => string;
}
declare const AutocompleteSuggestionItem: FunctionComponent<Props & MenuItemProps<'li', {
    button?: true;
}>>;
export default AutocompleteSuggestionItem;
