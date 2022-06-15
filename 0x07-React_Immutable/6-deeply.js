/* eslint-disable new-cap */
import {Map} from 'immutable';

/**
 * Nested merge.
 * @param {page1} page1 The first page.
 * @param {page2} page2 The first page.
 * @return {immutable} Map.
 */
export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
