export default CreateActions;
/**
 * Action Toolbar for the Create view
 *
 * Internal component. If you want to add or remove actions for a Create view,
 * write your own CreateActions Component. Then, in the <Create> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@material-ui/core/Button';
 *     import { TopToolbar, Create, ListButton } from 'react-admin';
 *
 *     const PostCreateActions = ({ basePath }) => (
 *         <TopToolbar>
 *             <ListButton basePath={basePath} />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostCreate = (props) => (
 *         <Create actions={<PostCreateActions />} {...props}>
 *             ...
 *         </Create>
 *     );
 */
declare function CreateActions({ className, ...rest }: {
    [x: string]: any;
    className: any;
}): JSX.Element;
declare namespace CreateActions {
    namespace propTypes {
        const basePath: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const hasList: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
