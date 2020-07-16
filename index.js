function defaultGetOrdinal(obj){
  return obj.ordinal
}

function defaultUpdateOrdinal(obj, val){
  obj.ordinal = val;
  return obj;
}

function reorderOrdinalGenerator(options = {}){
  const { getOrdinal=defaultGetOrdinal, updateOrdinal=defaultUpdateOrdinal} = options;
  
  return function reorderOrdinal(arr, startIndex, endIndex){
    if(startIndex === endIndex) return arr;
    if(options.simple){
      const result = Array.from(arr);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    }
    return arr.map(obj => {
      const ordinal = getOrdinal(obj);
      if(ordinal === startIndex){
        return updateOrdinal(obj, endIndex)
      }
      // MOVE ITEM LATER, UPDATE ITEMS BETWEEN ORIGINAL POSITION AND NEW POSITION
      if(startIndex > endIndex){
        if(ordinal >= endIndex && ordinal < startIndex){
          return updateOrdinal(obj, ordinal+1);
        }
      };
      // MOVE ITEM EARLIER, UPDATE ITEMS BETWEEN NEW POSITION AND ORIGINAL POSITION
      if(endIndex > startIndex){
        if(ordinal > startIndex && ordinal <= endIndex){
          return updateOrdinal(obj, ordinal-1);
        }
      }
      return obj;
    });
  }
}

module.exports = reorderOrdinalGenerator;
module.exports.default = reorderOrdinalGenerator;