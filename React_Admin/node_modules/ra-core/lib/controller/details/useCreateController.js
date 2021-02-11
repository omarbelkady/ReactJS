"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecord = exports.useCreateController = void 0;
var react_1 = require("react");
// @ts-ignore
var inflection_1 = __importDefault(require("inflection"));
var query_string_1 = require("query-string");
var react_router_dom_1 = require("react-router-dom");
var checkMinimumRequiredProps_1 = require("../checkMinimumRequiredProps");
var dataProvider_1 = require("../../dataProvider");
var sideEffect_1 = require("../../sideEffect");
var saveModifiers_1 = require("../saveModifiers");
var i18n_1 = require("../../i18n");
var useVersion_1 = __importDefault(require("../useVersion"));
var actions_1 = require("../../actions");
var core_1 = require("../../core");
/**
 * Prepare data for the Create view
 *
 * @param {Object} props The props passed to the Create component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Create view
 *
 * @example
 *
 * import { useCreateController } from 'react-admin';
 * import CreateView from './CreateView';
 *
 * const MyCreate = props => {
 *     const controllerProps = useCreateController(props);
 *     return <CreateView {...controllerProps} {...props} />;
 * }
 */
exports.useCreateController = function (props) {
    checkMinimumRequiredProps_1.useCheckMinimumRequiredProps('Create', ['basePath', 'resource'], props);
    var basePath = props.basePath, hasEdit = props.hasEdit, hasShow = props.hasShow, _a = props.record, record = _a === void 0 ? {} : _a, successMessage = props.successMessage, onSuccess = props.onSuccess, onFailure = props.onFailure, transform = props.transform;
    var resource = core_1.useResourceContext(props);
    var location = react_router_dom_1.useLocation();
    var translate = i18n_1.useTranslate();
    var notify = sideEffect_1.useNotify();
    var redirect = sideEffect_1.useRedirect();
    var recordToUse = exports.getRecord(location, record);
    var version = useVersion_1.default();
    if (process.env.NODE_ENV !== 'production' && successMessage) {
        console.log('<Create successMessage> prop is deprecated, use the onSuccess prop instead.');
    }
    var _b = saveModifiers_1.useSaveModifiers({ onSuccess: onSuccess, onFailure: onFailure, transform: transform }), onSuccessRef = _b.onSuccessRef, setOnSuccess = _b.setOnSuccess, onFailureRef = _b.onFailureRef, setOnFailure = _b.setOnFailure, transformRef = _b.transformRef, setTransform = _b.setTransform;
    var _c = dataProvider_1.useCreate(resource), create = _c[0], saving = _c[1].loading;
    var save = react_1.useCallback(function (data, redirectTo, _a) {
        if (redirectTo === void 0) { redirectTo = 'list'; }
        var _b = _a === void 0 ? {} : _a, onSuccessFromSave = _b.onSuccess, onFailureFromSave = _b.onFailure, transformFromSave = _b.transform;
        return Promise.resolve(transformFromSave
            ? transformFromSave(data)
            : transformRef.current
                ? transformRef.current(data)
                : data).then(function (data) {
            return create({ payload: { data: data } }, {
                action: actions_1.CRUD_CREATE,
                onSuccess: onSuccessFromSave
                    ? onSuccessFromSave
                    : onSuccessRef.current
                        ? onSuccessRef.current
                        : function (_a) {
                            var newRecord = _a.data;
                            notify(successMessage ||
                                'ra.notification.created', 'info', {
                                smart_count: 1,
                            });
                            redirect(redirectTo, basePath, newRecord.id, newRecord);
                        },
                onFailure: onFailureFromSave
                    ? onFailureFromSave
                    : onFailureRef.current
                        ? onFailureRef.current
                        : function (error) {
                            notify(typeof error === 'string'
                                ? error
                                : error.message ||
                                    'ra.notification.http_error', 'warning', {
                                _: typeof error === 'string'
                                    ? error
                                    : error && error.message
                                        ? error.message
                                        : undefined,
                            });
                        },
            });
        });
    }, [
        transformRef,
        create,
        onSuccessRef,
        onFailureRef,
        notify,
        successMessage,
        redirect,
        basePath,
    ]);
    var resourceName = translate("resources." + resource + ".name", {
        smart_count: 1,
        _: inflection_1.default.humanize(inflection_1.default.singularize(resource)),
    });
    var defaultTitle = translate('ra.page.create', {
        name: "" + resourceName,
    });
    return {
        loading: false,
        loaded: true,
        saving: saving,
        defaultTitle: defaultTitle,
        onFailureRef: onFailureRef,
        onSuccessRef: onSuccessRef,
        transformRef: transformRef,
        save: save,
        setOnSuccess: setOnSuccess,
        setOnFailure: setOnFailure,
        setTransform: setTransform,
        resource: resource,
        basePath: basePath,
        record: recordToUse,
        redirect: getDefaultRedirectRoute(hasShow, hasEdit),
        version: version,
    };
};
exports.getRecord = function (_a, record) {
    var state = _a.state, search = _a.search;
    if (record === void 0) { record = {}; }
    if (state && state.record) {
        return state.record;
    }
    if (search) {
        try {
            var searchParams = query_string_1.parse(search);
            if (searchParams.source) {
                if (Array.isArray(searchParams.source)) {
                    console.error("Failed to parse location search parameter '" + search + "'. To pre-fill some fields in the Create form, pass a stringified source parameter (e.g. '?source={\"title\":\"foo\"}')");
                    return;
                }
                return JSON.parse(searchParams.source);
            }
        }
        catch (e) {
            console.error("Failed to parse location search parameter '" + search + "'. To pre-fill some fields in the Create form, pass a stringified source parameter (e.g. '?source={\"title\":\"foo\"}')");
        }
    }
    return record;
};
var getDefaultRedirectRoute = function (hasShow, hasEdit) {
    if (hasEdit) {
        return 'edit';
    }
    if (hasShow) {
        return 'show';
    }
    return 'list';
};
