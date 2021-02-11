import { Component, ReactNode } from 'react';
import { Store } from 'redux';
import { History } from 'history';
import { ReduxState } from '../types';
export declare const defaultStore: {
    admin: {
        resources: {};
        references: {
            possibleValues: {};
        };
        ui: {
            viewVersion: number;
        };
        notifications: any[];
    };
};
declare type ChildrenFunction = ({ store, history, }: {
    store: Store<ReduxState>;
    history: History;
}) => ReactNode;
interface Props {
    initialState?: object;
    enableReducers?: boolean;
    history?: History;
    children: ReactNode | ChildrenFunction;
}
/**
 * Simulate a react-admin context in unit tests
 *
 * Pass custom store values as store prop
 *
 * @example
 * // in an react testing-library test
 * const utils = render(
 *     <TestContext initialState={{ admin: { resources: { post: { data: { 1: {id: 1, title: 'foo' } } } } } }}>
 *         <Show {...defaultShowProps} />
 *     </TestContext>
 * );
 *
 * @example
 * // in an react testing-library test, using jest.
 * const utils = render(
 *     <TestContext initialState={{ admin: { resources: { post: { data: { 1: {id: 1, title: 'foo' } } } } } }}>
 *         {({ store }) => {
 *              dispatchSpy = jest.spyOn(store, 'dispatch');
 *              return <Show {...defaultShowProps} />
 *         }}
 *     </TestContext>
 * );
 */
declare class TestContext extends Component<Props> {
    storeWithDefault: any;
    history: History;
    constructor(props: any);
    renderChildren: () => {};
    render(): JSX.Element;
}
export default TestContext;
