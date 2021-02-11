import { ComponentType, FunctionComponent } from 'react';
import { AdminChildren, CustomRoutes, CatchAllComponent, LayoutComponent, LoadingComponent, CoreLayoutProps } from '../types';
export interface AdminRouterProps extends CoreLayoutProps {
    layout: LayoutComponent;
    catchAll: CatchAllComponent;
    children?: AdminChildren;
    customRoutes?: CustomRoutes;
    loading: LoadingComponent;
    ready?: ComponentType;
}
declare const CoreAdminRouter: FunctionComponent<AdminRouterProps>;
export default CoreAdminRouter;
