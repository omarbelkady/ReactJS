import PropTypes from 'prop-types';
declare const UserMenu: {
    (props: any): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        label: PropTypes.Validator<string>;
        logout: PropTypes.Requireable<PropTypes.ReactElementLike>;
        icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    defaultProps: {
        label: string;
        icon: JSX.Element;
    };
};
export default UserMenu;
