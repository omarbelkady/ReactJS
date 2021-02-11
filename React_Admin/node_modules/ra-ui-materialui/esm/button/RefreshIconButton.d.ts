import { FC, ReactElement } from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
declare const RefreshIconButton: FC<RefreshIconProps>;
interface Props {
    className?: string;
    icon?: ReactElement;
    label?: string;
    onClick?: (e: MouseEvent) => void;
}
export declare type RefreshIconProps = Props & IconButtonProps;
export default RefreshIconButton;
