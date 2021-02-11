declare namespace _default {
    namespace show {
        function component(props: any): JSX.Element;
        function representation(_: any, children: any): string;
    }
    namespace array {
        export function component_1({ children, ...props }: {
            [x: string]: any;
            children: any;
        }): JSX.Element;
        export { component_1 as component };
        export function representation_1(props: any, children: any): string;
        export { representation_1 as representation };
    }
    namespace boolean {
        export { BooleanField as component };
        export function representation_2(props: any): string;
        export { representation_2 as representation };
    }
    namespace date {
        export { DateField as component };
        export function representation_3(props: any): string;
        export { representation_3 as representation };
    }
    namespace email {
        export { EmailField as component };
        export function representation_4(props: any): string;
        export { representation_4 as representation };
    }
    namespace id {
        export { TextField as component };
        export function representation_5(props: any): string;
        export { representation_5 as representation };
    }
    namespace number {
        export { NumberField as component };
        export function representation_6(props: any): string;
        export { representation_6 as representation };
    }
    namespace reference {
        export { ReferenceField as component };
        export function representation_7(props: any): string;
        export { representation_7 as representation };
    }
    namespace referenceChild {
        export function component_2(props: any): JSX.Element;
        export { component_2 as component };
        export function representation_8(): string;
        export { representation_8 as representation };
    }
    namespace referenceArray {
        export { ReferenceArrayField as component };
        export function representation_9(props: any): string;
        export { representation_9 as representation };
    }
    namespace referenceArrayChild {
        export function component_3(props: any): JSX.Element;
        export { component_3 as component };
        export function representation_10(): string;
        export { representation_10 as representation };
    }
    namespace richText {
        export { RichTextField as component };
        export function representation_11(props: any): string;
        export { representation_11 as representation };
    }
    namespace string {
        export { TextField as component };
        export function representation_12(props: any): string;
        export { representation_12 as representation };
    }
    namespace url {
        export { UrlField as component };
        export function representation_13(props: any): string;
        export { representation_13 as representation };
    }
}
export default _default;
import BooleanField from "../field/BooleanField";
import DateField from "../field/DateField";
import EmailField from "../field/EmailField";
import TextField from "../field/TextField";
import NumberField from "../field/NumberField";
import ReferenceField from "../field/ReferenceField";
import ReferenceArrayField from "../field/ReferenceArrayField";
import RichTextField from "../field/RichTextField";
import UrlField from "../field/UrlField";
