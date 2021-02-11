import * as React from 'react';
import PropTypes from 'prop-types';
declare function PaginationActions(props: any): JSX.Element;
declare namespace PaginationActions {
    var propTypes: {
        backIconButtonProps: PropTypes.Requireable<object>;
        count: PropTypes.Validator<number>;
        classes: PropTypes.Requireable<object>;
        nextIconButtonProps: PropTypes.Requireable<object>;
        onChangePage: PropTypes.Validator<(...args: any[]) => any>;
        page: PropTypes.Validator<number>;
        rowsPerPage: PropTypes.Validator<number>;
        color: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        theme: PropTypes.Requireable<object>;
    };
    var defaultProps: {
        color: string;
        size: string;
    };
}
declare const _default: React.MemoExoticComponent<typeof PaginationActions>;
export default _default;
