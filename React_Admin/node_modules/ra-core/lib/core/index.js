"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./dataFetchActions"), exports);
__exportStar(require("./components"), exports);
__exportStar(require("./ResourceContext"), exports);
__exportStar(require("./ResourceContextProvider"), exports);
__exportStar(require("./useResourceContext"), exports);
__exportStar(require("./useResourceDefinition"), exports);
// there seems to be a bug in TypeScript: this only works if the exports are in this order.
// Swapping the two exports leads to the core module missing the dataFetchActions constants
