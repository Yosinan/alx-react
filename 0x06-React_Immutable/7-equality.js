import { is } from 'immutable';

export default function areEqual(map1, map2) {
  return is(map1, map2);
}
