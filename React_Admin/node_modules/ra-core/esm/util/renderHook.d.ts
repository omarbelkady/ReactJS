/// <reference types="jest" />
import { RenderResult } from '@testing-library/react';
import { RenderWithReduxResult } from './renderWithRedux';
interface RenderHookResult extends RenderResult {
    hookValue: any;
    childrenMock: jest.Mock;
    rerender: (f: any) => any;
}
interface RenderHookWithReduxResult extends RenderWithReduxResult {
    hookValue: any;
    childrenMock: jest.Mock;
    rerender: (f: any) => any;
}
/**
 * render given hook using @testing-library/react and return hook value
 * @param hook the hook to render
 * @param withRedux should we provide a redux context default to true
 * @param reduxState optional initial state for redux context
 *
 * @returns {RenderHookResult}
 * @returns {RenderHookWithReduxResult}
 */
declare function renderHook(hook: Function, withRedux?: true, reduxState?: {}): RenderHookWithReduxResult;
declare function renderHook(hook: Function, withRedux: false): RenderHookResult;
export default renderHook;
