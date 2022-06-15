import {fromJS} from 'immutable';

/**
 * Accessing nested elements.
 * @param {object} object The first object.
 * @return {immutable} Map.
 */
export default function accessImmutableObject(object, array) {
  return fromJS(object).getIn(array, undefined);
}
