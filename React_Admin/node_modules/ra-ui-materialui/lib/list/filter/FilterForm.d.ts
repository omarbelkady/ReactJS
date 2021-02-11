import { HtmlHTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { FormRenderProps } from 'react-final-form';
import { ClassesOverride } from '../../types';
declare const useStyles: (props?: any) => Record<"form" | "clearFix", string>;
export interface FilterFormProps extends Omit<FormRenderProps, 'initialValues'>, Omit<HtmlHTMLAttributes<HTMLFormElement>, 'children'> {
    classes?: ClassesOverride<typeof useStyles>;
    className?: string;
    resource?: string;
    filterValues: any;
    hideFilter: (filterName: string) => void;
    setFilters: (filters: any, displayedFilters: any) => void;
    displayedFilters: any;
    filters: ReactNode[];
    initialValues?: any;
    margin?: 'none' | 'normal' | 'dense';
    variant?: 'standard' | 'outlined' | 'filled';
}
export declare const FilterForm: {
    ({ classes, className, resource, margin, variant, filters, displayedFilters, hideFilter, initialValues, ...rest }: FilterFormProps): JSX.Element;
    propTypes: {
        resource: PropTypes.Validator<string>;
        filters: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        displayedFilters: PropTypes.Requireable<object>;
        hideFilter: PropTypes.Validator<(...args: any[]) => any>;
        initialValues: PropTypes.Requireable<object>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
    };
};
export declare const mergeInitialValuesWithDefaultValues: ({ initialValues, filters, }: {
    initialValues: any;
    filters: any;
}) => any;
declare const EnhancedFilterForm: (props: any) => JSX.Element;
export default EnhancedFilterForm;
