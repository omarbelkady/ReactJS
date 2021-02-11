import { PaginationPayload, Record, SortPayload } from '../../types';
import { FieldInputProps } from 'react-final-form';
/**
 * Prepare data for the ReferenceArrayInput components
 *
 * @example
 *
 * const { choices, error, loaded, loading } = useReferenceArrayInputController({
 *      basePath: 'resource';
 *      record: { referenceIds: ['id1', 'id2']};
 *      reference: 'reference';
 *      resource: 'resource';
 *      source: 'referenceIds';
 * });
 *
 * @param {Object} props
 * @param {string} props.basePath basepath to current resource
 * @param {Object} props.record The current resource record
 * @param {string} props.reference The linked resource name
 * @param {string} props.resource The current resource name
 * @param {string} props.source The key of the linked resource identifier
 *
 * @param {Props} props
 *
 * @return {Object} controllerProps Fetched data and callbacks for the ReferenceArrayInput components
 */
declare const useReferenceArrayInputController: (props: Option) => ReferenceArrayInputProps;
export default useReferenceArrayInputController;
/**
 * @typedef ReferenceArrayProps
 * @type {Object}
 * @property {Array} ids the list of ids.
 * @property {Object} data Object holding the reference data by their ids
 * @property {Object} error the error returned by the dataProvider
 * @property {boolean} loading is the reference currently loading
 * @property {boolean} loaded has the reference already been loaded
 */
interface ReferenceArrayInputProps {
    choices: Record[];
    error?: any;
    warning?: any;
    loading: boolean;
    loaded: boolean;
    setFilter: (filter: any) => void;
    setPagination: (pagination: PaginationPayload) => void;
    setSort: (sort: SortPayload) => void;
}
interface Option {
    basePath?: string;
    filter?: any;
    filterToQuery?: (filter: any) => any;
    input: FieldInputProps<any, HTMLElement>;
    options?: any;
    perPage?: number;
    record?: Record;
    reference: string;
    resource?: string;
    sort?: SortPayload;
    source: string;
}
