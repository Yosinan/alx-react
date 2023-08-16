const { accessImmutableObject } = require('./2-nested');

accessImmutableObject({
     name: {
          first: "Guillaume",
          last: "Salva"
     }
}, ['name', 'first'])
