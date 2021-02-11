export default ResettableTextField;
/**
 * An override of the default Material-UI TextField which is resettable
 */
declare function ResettableTextField(props: any): JSX.Element;
declare namespace ResettableTextField {
    namespace propTypes {
        const classes: PropTypes.Requireable<object>;
        const clearAlwaysVisible: PropTypes.Requireable<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const InputProps: PropTypes.Requireable<object>;
        const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        const resettable: PropTypes.Requireable<boolean>;
        const value: PropTypes.Validator<any>;
    }
}
import PropTypes from "prop-types";
