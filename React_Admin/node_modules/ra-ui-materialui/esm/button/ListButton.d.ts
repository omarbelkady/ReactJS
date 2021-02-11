import { FC, ReactElement } from 'react';
import { ButtonProps } from './Button';
declare const ListButton: FC<ListButtonProps>;
interface Props {
    basePath?: string;
    icon?: ReactElement;
}
export declare type ListButtonProps = Props & ButtonProps;
export default ListButton;
