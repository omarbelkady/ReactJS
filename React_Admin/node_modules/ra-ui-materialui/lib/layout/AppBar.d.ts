import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBarProps as MuiAppBarProps } from '@material-ui/core/AppBar';
import { ClassesOverride } from '../types';
declare const useStyles: (props?: any) => Record<"toolbar" | "title" | "menuButton" | "menuButtonIconClosed" | "menuButtonIconOpen", string>;
export interface AppBarProps extends Omit<MuiAppBarProps, 'title' | 'classes'> {
    classes?: ClassesOverride<typeof useStyles>;
    logout?: JSX.Element;
    open?: boolean;
    title?: string | JSX.Element;
    userMenu?: JSX.Element | boolean;
}
declare const _default: React.MemoExoticComponent<{
    (props: AppBarProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        logout: PropTypes.Requireable<PropTypes.ReactElementLike>;
        open: PropTypes.Requireable<boolean>;
        userMenu: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
    };
    defaultProps: {
        userMenu: JSX.Element;
    };
}>;
export default _default;
