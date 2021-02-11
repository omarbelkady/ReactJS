"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceContext = void 0;
var react_1 = require("react");
/**
 * Context to store the current resource information.
 *
 * Use the useResource() hook to read the context. That's what most components do in react-admin.
 *
 * @example
 *
 * import { useResource, useTranslate } from 'ra-core';
 *
 * const MyCustomEditTitle = props => {
 *     const name = useResource(props);
 *
 *     return (
 *         <h1>{translate(`${name}.name`)}</h1>
 *     );
 * };
 */
exports.ResourceContext = react_1.createContext(undefined);
