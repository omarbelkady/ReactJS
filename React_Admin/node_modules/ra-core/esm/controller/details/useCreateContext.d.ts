import { Record } from '../../types';
import { CreateControllerProps } from './useCreateController';
export declare const useCreateContext: <RecordType extends Pick<Record, import("../../types").Identifier> = Pick<Record, import("../../types").Identifier>>(props?: Partial<CreateControllerProps<RecordType>>) => Partial<CreateControllerProps<RecordType>>;
