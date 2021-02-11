import { ReactElement, FunctionComponent } from 'react';
interface Props {
    children: ReactElement<any>;
    authParams?: object;
    location?: object;
}
/**
 * Restrict access to children to authenticated users.
 * Redirects anonymous users to the login page.
 *
 * Use it to decorate your custom page components to require
 * authentication.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @see useAuthenticated
 *
 * @example
 *     import { Authenticated } from 'react-admin';
 *
 *     const CustomRoutes = [
 *         <Route path="/foo" render={() =>
 *             <Authenticated authParams={{ foo: 'bar' }}>
 *                 <Foo />
 *             </Authenticated>
 *         } />
 *     ];
 *     const App = () => (
 *         <Admin customRoutes={customRoutes}>
 *             ...
 *         </Admin>
 *     );
 */
declare const Authenticated: FunctionComponent<Props>;
export default Authenticated;
