import { Record } from '../../types';
export declare type LinkToFunctionType = (record: Record, reference: string) => string;
export declare type LinkToType = string | boolean | LinkToFunctionType;
interface Option {
    basePath: string;
    record?: Record;
    source: string;
    reference: string;
    resource: string;
    link?: LinkToType;
    linkType?: LinkToType;
}
/**
 * Get the link toward the referenced resource
 *
 * @example
 *
 * const linkPath = getResourceLinkPath({
 *      basePath: '/comments',
 *      link: 'edit',
 *      reference: 'users',
 *      record: {
 *          userId: 7
 *      },
 *      resource: 'comments',
 *      source: 'userId',
 * });
 *
 * @param {Object} option
 * @param {string} option.basePath basepath to current resource
 * @param {string | false | LinkToFunctionType} option.link="edit" The link toward the referenced record. 'edit', 'show' or false for no link (default to edit). Alternatively a function that returns a string
 * @param {string | false | LinkToFunctionType} [option.linkType] DEPRECATED : old name for link
 * @param {string} option.reference The linked resource name
 * @param {Object} option.record The current resource record
 * @param {string} option.resource The current resource name
 * @param {string} option.source The key of the linked resource identifier
 *
 * @returns {string | false} The reference props
 */
declare const getResourceLinkPath: ({ basePath, link, linkType, reference, record, resource, source, }: Option) => string | false;
export default getResourceLinkPath;
