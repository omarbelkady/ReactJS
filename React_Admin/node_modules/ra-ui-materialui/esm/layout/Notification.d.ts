import * as React from 'react';
import { SnackbarProps } from '@material-ui/core/Snackbar';
interface Props {
    type?: string;
}
declare const Notification: React.FunctionComponent<Props & Omit<SnackbarProps, 'open'>>;
export default Notification;
