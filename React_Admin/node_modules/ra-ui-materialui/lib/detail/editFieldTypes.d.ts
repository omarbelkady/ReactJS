declare namespace _default {
    namespace form {
        export { SimpleForm as component };
        export function representation(_: any, children: any): string;
    }
    namespace array {
        export function component({ children, ...props }: {
            [x: string]: any;
            children: any;
        }): JSX.Element;
        export function representation_1(props: any, children: any): string;
        export { representation_1 as representation };
    }
    namespace boolean {
        export { BooleanInput as component };
        export function representation_2(props: any): string;
        export { representation_2 as representation };
    }
    namespace date {
        export { DateInput as component };
        export function representation_3(props: any): string;
        export { representation_3 as representation };
    }
    namespace email {
        export { TextInput as component };
        export function representation_4(props: any): string;
        export { representation_4 as representation };
    }
    namespace id {
        export { TextInput as component };
        export function representation_5(props: any): string;
        export { representation_5 as representation };
    }
    namespace number {
        export { NumberInput as component };
        export function representation_6(props: any): string;
        export { representation_6 as representation };
    }
    namespace reference {
        export { ReferenceInput as component };
        export function representation_7(props: any, children: any): string;
        export { representation_7 as representation };
    }
    namespace referenceChild {
        export function component_1(props: any): JSX.Element;
        export { component_1 as component };
        export function representation_8(): string;
        export { representation_8 as representation };
    }
    namespace referenceArray {
        export { ReferenceArrayInput as component };
        export function representation_9(props: any): string;
        export { representation_9 as representation };
    }
    namespace referenceArrayChild {
        export function component_2(props: any): JSX.Element;
        export { component_2 as component };
        export function representation_10(): string;
        export { representation_10 as representation };
    }
    namespace richText {
        export { TextInput as component };
        export function representation_11(props: any): string;
        export { representation_11 as representation };
    }
    namespace string {
        export { TextInput as component };
        export function representation_12(props: any): string;
        export { representation_12 as representation };
    }
    namespace url {
        export { TextInput as component };
        export function representation_13(props: any): string;
        export { representation_13 as representation };
    }
}
export default _default;
import SimpleForm from "../form/SimpleForm";
import BooleanInput from "../input/BooleanInput";
import DateInput from "../input/DateInput";
import TextInput from "../input/TextInput";
import NumberInput from "../input/NumberInput";
import ReferenceInput from "../input/ReferenceInput";
import ReferenceArrayInput from "../input/ReferenceArrayInput";
