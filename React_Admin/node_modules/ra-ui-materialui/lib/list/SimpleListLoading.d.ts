import { FC } from 'react';
import { ListProps } from '@material-ui/core/List';
interface Props {
    classes?: Record<'tertiary', string>;
    className?: string;
    hasLeftAvatarOrIcon?: boolean;
    hasRightAvatarOrIcon?: boolean;
    hasSecondaryText?: boolean;
    hasTertiaryText?: boolean;
    nbFakeLines?: number;
}
declare const SimpleListLoading: FC<Props & ListProps>;
export default SimpleListLoading;
