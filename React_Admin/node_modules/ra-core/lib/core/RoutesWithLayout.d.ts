import { FunctionComponent } from 'react';
import { AdminChildren, CustomRoutes, CatchAllComponent, TitleComponent, DashboardComponent } from '../types';
interface Props {
    catchAll: CatchAllComponent;
    children: AdminChildren;
    customRoutes?: CustomRoutes;
    dashboard?: DashboardComponent;
    title?: TitleComponent;
}
declare const RoutesWithLayout: FunctionComponent<Props>;
export default RoutesWithLayout;
