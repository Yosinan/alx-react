function accessImmutableObject (object, array) {
  let value = object;
  for (let i = 0; i < array.length; i++) {
    if (value === undefined || typeof value === 'string' || value instanceof Map) {
      return value;
    }
    value = value[array[i]];
  }
  return value;
}

module.exports = accessImmutableObject;