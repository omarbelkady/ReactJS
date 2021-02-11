import { MutableRefObject } from 'react';
import { Record, Identifier, MutationMode, OnSuccess, OnFailure } from '../../types';
import { RedirectionSideEffect } from '../../sideEffect';
import { SetOnSuccess, SetOnFailure, TransformData, SetTransformData } from '../saveModifiers';
export interface EditProps {
    basePath?: string;
    hasCreate?: boolean;
    hasEdit?: boolean;
    hasShow?: boolean;
    hasList?: boolean;
    id?: Identifier;
    resource?: string;
    /** @deprecated use mutationMode: undoable instead */
    undoable?: boolean;
    mutationMode?: MutationMode;
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
    transform?: TransformData;
    [key: string]: any;
}
export interface EditControllerProps<RecordType extends Record = Record> {
    basePath?: string;
    data?: RecordType;
    defaultTitle: string;
    hasCreate?: boolean;
    hasEdit?: boolean;
    hasShow?: boolean;
    hasList?: boolean;
    loading: boolean;
    loaded: boolean;
    onSuccessRef: MutableRefObject<OnSuccess>;
    onFailureRef: MutableRefObject<OnFailure>;
    transformRef: MutableRefObject<TransformData>;
    save: (data: Partial<Record>, redirect?: RedirectionSideEffect, callbacks?: {
        onSuccess?: OnSuccess;
        onFailure?: OnFailure;
        transform?: TransformData;
    }) => void;
    saving: boolean;
    setOnSuccess: SetOnSuccess;
    setOnFailure: SetOnFailure;
    setTransform: SetTransformData;
    successMessage?: string;
    record?: RecordType;
    redirect: RedirectionSideEffect;
    resource: string;
    version: number;
}
/**
 * Prepare data for the Edit view
 *
 * @param {Object} props The props passed to the Edit component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Edit view
 *
 * @example
 *
 * import { useEditController } from 'react-admin';
 * import EditView from './EditView';
 *
 * const MyEdit = props => {
 *     const controllerProps = useEditController(props);
 *     return <EditView {...controllerProps} {...props} />;
 * }
 */
export declare const useEditController: <RecordType extends Record = Record>(props: EditProps) => EditControllerProps<RecordType>;
