import inflection from 'inflection';
import useVersion from '../useVersion';
import { useCheckMinimumRequiredProps } from '../checkMinimumRequiredProps';
import { useGetOne } from '../../dataProvider';
import { useTranslate } from '../../i18n';
import { useNotify, useRedirect, useRefresh } from '../../sideEffect';
import { CRUD_GET_ONE } from '../../actions';
import { useResourceContext } from '../../core';
/**
 * Prepare data for the Show view
 *
 * @param {Object} props The props passed to the Show component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Show view
 *
 * @example
 *
 * import { useShowController } from 'react-admin';
 * import ShowView from './ShowView';
 *
 * const MyShow = props => {
 *     const controllerProps = useShowController(props);
 *     return <ShowView {...controllerProps} {...props} />;
 * }
 */
export var useShowController = function (props) {
    useCheckMinimumRequiredProps('Show', ['basePath', 'resource'], props);
    var basePath = props.basePath, hasCreate = props.hasCreate, hasEdit = props.hasEdit, hasList = props.hasList, hasShow = props.hasShow, id = props.id;
    var resource = useResourceContext(props);
    var translate = useTranslate();
    var notify = useNotify();
    var redirect = useRedirect();
    var refresh = useRefresh();
    var version = useVersion();
    var _a = useGetOne(resource, id, {
        action: CRUD_GET_ONE,
        onFailure: function () {
            notify('ra.notification.item_doesnt_exist', 'warning');
            redirect('list', basePath);
            refresh();
        },
    }), record = _a.data, loading = _a.loading, loaded = _a.loaded;
    var resourceName = translate("resources." + resource + ".name", {
        smart_count: 1,
        _: inflection.humanize(inflection.singularize(resource)),
    });
    var defaultTitle = translate('ra.page.show', {
        name: "" + resourceName,
        id: id,
        record: record,
    });
    return {
        loading: loading,
        loaded: loaded,
        defaultTitle: defaultTitle,
        resource: resource,
        basePath: basePath,
        record: record,
        hasCreate: hasCreate,
        hasEdit: hasEdit,
        hasList: hasList,
        hasShow: hasShow,
        version: version,
    };
};
