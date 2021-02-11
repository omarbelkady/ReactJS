import { ReactElement, FC } from 'react';
import { Record } from 'ra-core';
import { FieldArrayRenderProps } from 'react-final-form-arrays';
declare const SimpleFormIterator: FC<SimpleFormIteratorProps>;
declare type DisableRemoveFunction = (record: Record) => boolean;
export interface SimpleFormIteratorProps extends Partial<Omit<FieldArrayRenderProps<any, HTMLElement>, 'meta'>> {
    addButton?: ReactElement;
    basePath?: string;
    className?: string;
    defaultValue?: any;
    disabled?: boolean;
    disableAdd?: boolean;
    disableRemove?: boolean | DisableRemoveFunction;
    margin?: 'none' | 'normal' | 'dense';
    meta?: {
        error?: any;
        submitFailed?: boolean;
    };
    record?: Record;
    removeButton?: ReactElement;
    resource?: string;
    source?: string;
    TransitionProps?: any;
    variant?: 'standard' | 'outlined' | 'filled';
}
export default SimpleFormIterator;
