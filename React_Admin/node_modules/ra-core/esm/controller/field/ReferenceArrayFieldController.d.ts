import { FunctionComponent, ReactElement } from 'react';
import { ListControllerProps } from '../useListController';
import { Record, SortPayload } from '../../types';
interface Props {
    basePath: string;
    filter?: any;
    page?: number;
    perPage?: number;
    record?: Record;
    reference: string;
    resource: string;
    sort?: SortPayload;
    source: string;
    children: (params: ListControllerProps) => ReactElement<any>;
}
/**
 * Render prop version of the useReferenceArrayFieldController hook.
 *
 * @see useReferenceArrayFieldController
 */
declare const ReferenceArrayFieldController: FunctionComponent<Props>;
export default ReferenceArrayFieldController;
