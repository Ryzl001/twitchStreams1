import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      /** używamy z  biblioteki lodash metody mapKey - zamienia tablicę w obiekt
       * pierwszy argument - tablica
       * drugi argument - jaka wartość ma być użyta jako key w utworzonym obiekcie
       * {
       *  2(id tego obiektu użyte jako key): { id: 2, title: "hello", description: "World"} (cały obiekt jako value)
       * }
       */
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      /** używamy biblioteki loadash _.omit, pierwszy argument = object z którego będziemy usuwać
       * drugi = id recordu
       * omit nie zmiania obiektu state, tworzy nowy z usuniętym recodem o danym id
       */
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
