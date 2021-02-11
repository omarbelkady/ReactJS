import { FunctionComponent, ReactElement } from 'react';
export interface LabeledProps {
    children: ReactElement;
    className?: string;
    classes?: object;
    fullWidth?: boolean;
    id?: string;
    input?: any;
    isRequired?: boolean;
    label?: string | ReactElement;
    meta?: any;
    resource?: string;
    source?: string;
    [key: string]: any;
}
/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * This component name doesn't have a typo. We had to choose between
 * the American English "Labeled", and the British English "Labelled".
 * We flipped a coin.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
declare const Labeled: FunctionComponent<LabeledProps>;
export default Labeled;
