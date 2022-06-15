import {List} from 'immutable';

/**
 * List.
 * @param {array} array The first array.
 * @return {immutable} List.
 */
export function getListObject(array) {
  return List(array);
}

/**
 * Push.
 * @param {list} list The first list.
 * @param {element} element The first element.
 * @return {immutable} List.
 */
export function addElementToList(list, element) {
  return list.push(element);
}
