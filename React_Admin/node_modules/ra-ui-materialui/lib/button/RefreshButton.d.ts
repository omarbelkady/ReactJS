import { FC, ReactElement, MouseEvent } from 'react';
import { ButtonProps } from './Button';
declare const RefreshButton: FC<RefreshButtonProps>;
interface Props {
    label?: string;
    icon?: ReactElement;
    onClick?: (e: MouseEvent) => void;
}
export declare type RefreshButtonProps = Props & ButtonProps;
export default RefreshButton;
