/* eslint-disable new-cap */
import {fromJS} from 'immutable';

/**
 * Accessing nested elements.
 * @param {object} object The first object.
 * @param {array} array The first array.
 * @return {immutable} Map.
 */
export default function accessImmutableObject(object, array) {
  return fromJS(object).getIn(array, undefined);
}
