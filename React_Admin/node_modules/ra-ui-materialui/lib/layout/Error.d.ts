import { HtmlHTMLAttributes, ErrorInfo } from 'react';
import PropTypes from 'prop-types';
import { ClassesOverride } from '../types';
declare const useStyles: (props?: any) => Record<"icon" | "toolbar" | "title" | "container" | "panel" | "panelDetails", string>;
declare const Error: {
    (props: ErrorProps): JSX.Element;
    propTypes: {
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        error: PropTypes.Validator<string | object>;
        errorInfo: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
    };
};
export interface ErrorProps extends HtmlHTMLAttributes<HTMLDivElement> {
    classes?: ClassesOverride<typeof useStyles>;
    className?: string;
    error: any;
    errorInfo?: ErrorInfo;
    title?: string;
}
export default Error;
