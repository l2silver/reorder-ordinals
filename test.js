const reorderOrdinal = require('./');
const assert = require('assert');


let result, expected, i1, i2, i3, items;
i1 = {
  id: 1,
  ordinal: 0
}

i2 = {
  id: 2,
  ordinal: 2
}

i3 = {
  id: 3,
  ordinal: 1
};

items = [
  i1, i2, i3
];

result = reorderOrdinal()(items, 1, 0)
expected = [{...i1, ordinal: 1}, i2, {...i3, ordinal: 0}];
assert.deepEqual(result, expected);

i1 = {
  id: 1,
  ordinal: 0
}

i2 = {
  id: 2,
  ordinal: 2
}

i3 = {
  id: 3,
  ordinal: 1
};

items = [
  i1, i2, i3
];

result = reorderOrdinal()(items, 0, 1)
expected = [{...i1, ordinal: 1}, i2, {...i3, ordinal: 0}];
assert.deepEqual(result, expected);