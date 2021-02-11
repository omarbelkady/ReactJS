import { ReactNode, HtmlHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ClassesOverride } from '../../types';
declare const useStyles: (props?: any) => Record<"root", string>;
declare const FilterButton: {
    (props: FilterButtonProps): JSX.Element;
    propTypes: {
        resource: PropTypes.Validator<string>;
        filters: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        displayedFilters: PropTypes.Requireable<object>;
        filterValues: PropTypes.Validator<object>;
        showFilter: PropTypes.Validator<(...args: any[]) => any>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
    };
};
export interface FilterButtonProps extends HtmlHTMLAttributes<HTMLDivElement> {
    classes?: ClassesOverride<typeof useStyles>;
    className?: string;
    resource?: string;
    filterValues: any;
    showFilter: (filterName: string, defaultValue: any) => void;
    displayedFilters: any;
    filters: ReactNode[];
}
export default FilterButton;
