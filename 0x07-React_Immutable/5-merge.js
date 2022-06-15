/* eslint-disable new-cap */
import {Map, List} from 'immutable';

/**
 * Concat .
 * @param {page1} page1 The first page.
 * @param {page2} page2 The first page.
 * @return {immutable} List.
 */
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

/**
 * Merge.
 * @param {page1} page1 The first page.
 * @param {page2} page2 The first page.
 * @return {immutable} Map.
 */
export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}
