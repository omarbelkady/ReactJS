import { Record } from '../../types';
import { ShowControllerProps } from './useShowController';
export declare const useShowContext: <RecordType extends Record = Record>(props?: Partial<ShowControllerProps<RecordType>>) => Partial<ShowControllerProps<RecordType>>;
