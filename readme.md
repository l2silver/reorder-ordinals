# Reorder Ordinals

A simple library to change the ordinal property of objects in an array.

## Getting started
````
npm i reorder-ordinals
````

## Example Usecase

````
const reorderOrdinalsGenerator = require('reorder-ordinals'); //(options?: Object)=>Func
const reorderOrdinals = reorderOrdinalsGenerator(); //(arr: [{ordinal: Int}, ...], startingOrdinal: Int, endingOrdinal: Int);

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

result = reorderOrdinals(items, 1, 0)
expected = [{...i1, ordinal: 1}, i2, {...i3, ordinal: 0}];
assert.deepEqual(result, expected);
````
## Options

````
reorderOrdinalsGenerator(options=
{
  simple: true // takes an array and treats elements index as ordinal
  getOrdinal: (ele)=>Int // func to return the ordinal of an element in the array
  updateOrdinal: (ele, nextVal) => ele (updated) // func that updates the ordinal of an element
}

);
````
