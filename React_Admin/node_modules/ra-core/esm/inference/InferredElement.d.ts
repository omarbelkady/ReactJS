/// <reference types="react" />
import { InferredType } from './types';
declare class InferredElement {
    private type?;
    private props?;
    private children?;
    constructor(type?: InferredType, props?: any, children?: any);
    getElement(props?: {}): import("react").ReactElement<{}, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    getProps(): any;
    isDefined(): boolean;
    getRepresentation(): string;
}
export default InferredElement;
