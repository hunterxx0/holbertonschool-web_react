/* eslint-disable new-cap */
import {is} from 'immutable';

/**
 * Equality.
 * @param {map1} map1 The first map.
 * @param {map2} map2 The first map.
 * @return {immutable} Map.
 */
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
