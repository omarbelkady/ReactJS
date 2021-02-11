import { FC } from 'react';
import { LinkProps as RRLinkProps } from 'react-router-dom';
import { ClassNameMap } from '@material-ui/styles';
declare type LinkClassKey = 'link';
export interface LinkProps extends RRLinkProps {
    classes?: Partial<ClassNameMap<LinkClassKey>>;
    className?: string;
}
declare const Link: FC<LinkProps>;
export default Link;
