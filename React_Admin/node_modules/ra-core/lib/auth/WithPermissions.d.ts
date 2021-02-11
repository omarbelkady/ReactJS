import { ReactElement, ComponentType } from 'react';
import { Location } from 'history';
export interface WithPermissionsChildrenParams {
    permissions: any;
}
declare type WithPermissionsChildren = (params: WithPermissionsChildrenParams) => ReactElement;
interface Props {
    authParams?: object;
    children?: WithPermissionsChildren;
    component?: ComponentType<any>;
    location?: Location;
    render?: WithPermissionsChildren;
    staticContext?: object;
    [key: string]: any;
}
declare const _default: ComponentType<Props>;
export default _default;
