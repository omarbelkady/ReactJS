import React, { ErrorInfo, ReactElement, ReactNode, ComponentType, HtmlHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { ThemeOptions } from '@material-ui/core';
import { CoreLayoutProps } from 'ra-core';
import { MenuProps } from './Menu';
export interface LayoutProps extends CoreLayoutProps, Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
    appBar?: ComponentType<{
        title?: string | ReactElement<any>;
        open?: boolean;
        logout?: ReactNode;
    }>;
    classes?: any;
    className?: string;
    error?: ComponentType<{
        error?: string;
        errorInfo?: React.ErrorInfo;
        title?: string | ReactElement<any>;
    }>;
    menu?: ComponentType<MenuProps>;
    notification?: ComponentType;
    sidebar?: ComponentType<{
        children: JSX.Element;
    }>;
    theme?: ThemeOptions;
}
export interface LayoutState {
    hasError: boolean;
    errorMessage: string;
    errorInfo: ErrorInfo;
}
declare const Layout: {
    ({ theme: themeOverride, ...props }: LayoutProps): JSX.Element;
    propTypes: {
        theme: PropTypes.Requireable<object>;
    };
    defaultProps: {
        theme: {
            palette: {
                secondary: {
                    light: string;
                    main: string;
                    dark: string;
                    contrastText: string;
                };
            };
            typography: {
                h6: {
                    fontWeight: number;
                };
            };
            sidebar: {
                width: number;
                closedWidth: number;
            };
            overrides: {
                MuiFilledInput: {
                    root: {
                        backgroundColor: string;
                        '&$disabled': {
                            backgroundColor: string;
                        };
                    };
                };
                MuiButtonBase: {
                    root: {
                        '&:hover:active::after': {
                            content: string;
                            display: string;
                            width: string;
                            height: string;
                            position: string;
                            top: number;
                            right: number;
                            backgroundColor: string;
                            opacity: number;
                            borderRadius: string;
                        };
                    };
                };
            };
            props: {
                MuiButtonBase: {
                    disableRipple: boolean;
                };
            };
        };
    };
};
export default Layout;
