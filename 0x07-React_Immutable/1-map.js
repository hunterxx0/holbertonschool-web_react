import {Map} from 'immutable';

/**
 * Converting into Immutable using Map.
 * @param {object} object The first object.
 * @return {immutable} Map.
 */
export default function getImmutableObject(object) {
  return Map(object);
}
