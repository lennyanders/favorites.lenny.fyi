/**
 * @typedef Page
 * @type {object}
 * @property {string} title
 * @property {string} url
 */

/**
 * @typedef Collections
 * @type {Record<string, Page[]>}
 */

/** @type {Page} */
export let page = { title: '', url: '' };

/** @param {Page} newPage */
export const __setPage = (newPage) => (page = newPage);

/** @type {Collections} */
export let collections = {};

/** @param {Collections} newCollections */
export const __setCollections = (newCollections) => (collections = newCollections);
