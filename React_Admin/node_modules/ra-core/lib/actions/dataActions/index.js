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
__exportStar(require("./crudCreate"), exports);
__exportStar(require("./crudDelete"), exports);
__exportStar(require("./crudDeleteMany"), exports);
__exportStar(require("./crudGetAll"), exports);
__exportStar(require("./crudGetList"), exports);
__exportStar(require("./crudGetMany"), exports);
__exportStar(require("./crudGetManyReference"), exports);
__exportStar(require("./crudGetMatching"), exports);
__exportStar(require("./crudGetOne"), exports);
__exportStar(require("./crudUpdate"), exports);
__exportStar(require("./crudUpdateMany"), exports);
