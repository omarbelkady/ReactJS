"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroupContextProvider = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var FormGroupContext_1 = require("./FormGroupContext");
var useFormContext_1 = require("./useFormContext");
/**
 * This provider allows its input children to register to a specific group.
 * This enables other components in the group to access group properties such as its
 * validation (valid/invalid) or whether its inputs have been updated (dirty/pristine).
 *
 * @example
 * import { Edit, SimpleForm, TextInput, FormGroupContextProvider, useFormGroup } from 'react-admin';
 * import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *             <FormGroupContextProvider name="options">
 *                 <Accordion>
 *                     <AccordionSummary
 *                         expandIcon={<ExpandMoreIcon />}
 *                         aria-controls="options-content"
 *                         id="options-header"
 *                     >
 *                         <AccordionSectionTitle name="options">Options</AccordionSectionTitle>
 *                     </AccordionSummary>
 *                     <AccordionDetails id="options-content" aria-labelledby="options-header">
 *                         <TextInput source="teaser" validate={minLength(20)} />
 *                     </AccordionDetails>
 *                 </Accordion>
 *             </FormGroupContextProvider>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * const AccordionSectionTitle = ({ children, name }) => {
 *     const formGroupState = useFormGroup(name);
 *     return (
 *         <Typography color={formGroupState.invalid && formGroupState.dirty ? 'error' : 'inherit'}>
 *             {children}
 *         </Typography>
 *     );
 * }
 *
 * @param props The component props
 * @param {ReactNode} props.children The form group content
 * @param {String} props.name The form group name
 */
exports.FormGroupContextProvider = function (_a) {
    var children = _a.children, name = _a.name;
    var formContext = useFormContext_1.useFormContext();
    react_1.useEffect(function () {
        if (!formContext ||
            !formContext.registerGroup ||
            !formContext.unregisterGroup) {
            console.warn("The FormGroupContextProvider can only be used inside a FormContext such as provided by the SimpleForm and TabbedForm components");
            return;
        }
        formContext.registerGroup(name);
        return function () {
            formContext.unregisterGroup(name);
        };
    }, [formContext, name]);
    return (React.createElement(FormGroupContext_1.FormGroupContext.Provider, { value: name }, children));
};
