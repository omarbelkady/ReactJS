import { useContext } from 'react';
import { CreateContext } from './CreateContext';
export var useCreateContext = function (props) {
    var context = useContext(
    // Can't find a way to specify the RecordType when CreateContext is declared
    // @ts-ignore
    CreateContext);
    if (!context.resource) {
        /**
         * The element isn't inside a <CreateContext.Provider>
         * To avoid breakage in that case, fallback to props
         *
         * @deprecated - to be removed in 4.0
         */
        if (process.env.NODE_ENV !== 'production') {
            console.log("Create components must be used inside a <CreateContext.Provider>. Relying on props rather than context to get Create data and callbacks is deprecated and won't be supported in the next major version of react-admin.");
        }
        return props;
    }
    return context;
};
