/// <reference types="jest" />
import { RenderResult } from '@testing-library/react';
export interface RenderWithReduxResult extends RenderResult {
    dispatch: jest.Mock;
    reduxStore: any;
}
declare const _default: (component: any, initialState?: {}, options?: {}) => RenderWithReduxResult;
/**
 * render with react-testing library adding redux context for unit test.
 * @example
 * const { dispatch, reduxStore, ...otherReactTestingLibraryHelper } = renderWithRedux(
 *     <TestedComponent />,
 *     initialState
 * );
 *
 * @param {ReactNode} component: The component you want to test in jsx
 * @param {Object} initialState: Optional initial state of the redux store
 * @param {Object} options: Render options, e.g. to use a custom container element
 * @return {{ dispatch, reduxStore, ...rest }} helper function to test rendered component.
 * Same as @testing-library/react render method with added dispatch and reduxStore helper
 * dispatch: spy on the redux store dispatch method
 * reduxStore: the redux store used by the tested component
 */
export default _default;
