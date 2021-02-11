import * as React from 'react';
import { memo } from 'react';
import useTranslate from '../i18n/useTranslate';
import getFieldLabelTranslationArgs from './getFieldLabelTranslationArgs';
export var FieldTitle = function (_a) {
    var resource = _a.resource, source = _a.source, label = _a.label, isRequired = _a.isRequired;
    var translate = useTranslate();
    if (label && typeof label !== 'string') {
        return label;
    }
    return (React.createElement("span", null,
        translate.apply(void 0, getFieldLabelTranslationArgs({
            label: label,
            resource: resource,
            source: source,
        })),
        isRequired && ' *'));
};
// wat? TypeScript looses the displayName if we don't set it explicitly
FieldTitle.displayName = 'FieldTitle';
export default memo(FieldTitle);
