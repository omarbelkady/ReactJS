import { Record } from '../../types';
import { EditControllerProps } from './useEditController';
export declare const useEditContext: <RecordType extends Record = Record>(props?: Partial<EditControllerProps<RecordType>>) => Partial<EditControllerProps<RecordType>>;
