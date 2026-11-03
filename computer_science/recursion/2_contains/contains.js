const contains = function(prop, elem) {
  for (const v of Object.values(prop)){
    if (v === elem || Object.is(v, elem)) return true
    if (typeof v === "object" && v !== null){
      if (contains(v, elem)) {
        return true
      }
    }
  }
  return false
};

module.exports = contains;