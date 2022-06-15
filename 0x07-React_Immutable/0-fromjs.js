import {fromJS} from 'immutable';

/**
 * Converting into an Immutable object using fromJS
 * @param {object} object The first object.
 * @return {immutable} fromJS.
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}
