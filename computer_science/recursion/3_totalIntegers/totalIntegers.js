const totalIntegers = function(obj) {
    let values = []
    let total = 0;
     
    if (typeof obj === "object" && obj !== null){
        values = Object.values(obj)
    }else{
        return
    } 

    if (values.length > 0){
        total = values.reduce((acc, current) => {
            if (typeof current === "object" && current !== null){ 
                return acc + totalIntegers(current)
            }else{
                if (Number.isInteger(current)) acc += 1;
                return acc
            }
        },0)
    }
    return total
};
  
// Do not edit below this line
module.exports = totalIntegers;
