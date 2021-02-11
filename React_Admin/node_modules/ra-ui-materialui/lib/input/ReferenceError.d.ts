import PropTypes from 'prop-types';
declare const ReferenceError: {
    ({ label, error }: {
        label: any;
        error: any;
    }): JSX.Element;
    propTypes: {
        error: PropTypes.Validator<string>;
        label: PropTypes.Validator<string>;
    };
};
export default ReferenceError;
