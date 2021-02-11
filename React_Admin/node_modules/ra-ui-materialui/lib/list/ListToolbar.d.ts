import * as React from 'react';
import { ReactElement } from 'react';
import { ToolbarProps } from '@material-ui/core';
import { Exporter } from 'ra-core';
import { ClassesOverride } from '../types';
declare const useStyles: (props?: any) => Record<"toolbar" | "actions", string>;
export interface ListToolbarProps extends Omit<ToolbarProps, 'classes' | 'onSelect'> {
    actions?: ReactElement | false;
    classes?: ClassesOverride<typeof useStyles>;
    filters?: ReactElement;
    exporter?: Exporter | false;
}
declare const _default: React.NamedExoticComponent<ListToolbarProps>;
export default _default;
