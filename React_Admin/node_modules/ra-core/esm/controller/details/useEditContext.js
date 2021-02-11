var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useContext } from 'react';
import { EditContext } from './EditContext';
export var useEditContext = function (props) {
    // Can't find a way to specify the RecordType when CreateContext is declared
    // @ts-ignore
    var context = useContext(EditContext);
    if (!context.resource) {
        /**
         * The element isn't inside a <EditContext.Provider>
         * To avoid breakage in that case, fallback to props
         *
         * @deprecated - to be removed in 4.0
         */
        if (process.env.NODE_ENV !== 'production') {
            console.log("Edit components must be used inside a <EditContext.Provider>. Relying on props rather than context to get Edit data and callbacks is deprecated and won't be supported in the next major version of react-admin.");
        }
        // Necessary for actions (EditActions) which expect a data prop containing the record
        // @deprecated - to be removed in 4.0d
        return __assign(__assign({}, props), { record: props.record || props.data, data: props.record || props.data });
    }
    return context;
};
