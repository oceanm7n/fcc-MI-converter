/*
*
*
*       Complete the handler logic below
*       
*       
*/

// all possible units in lowercase
const UNITS = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];

// gets the index of the beginning of the number part
function getFirstCharacter (input) {
  for (i=0; i<input.length; i++) {
    if (/[a-z]/i.test(input[i])) {
      return i;
    }
  }
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result, number;
    let startChar = getFirstCharacter(input);
    number = input.slice(0, startChar);
    if (!number) number = 1;
    try {
      number = eval(number);
    }
    catch (err) {
      number = null;
    }
    return (number !== null && number !== Infinity ? number : undefined);
  };
  
  this.getUnit = function(input) {
    var result, unit;
    let startChar = getFirstCharacter(input);
    unit = input.slice(startChar).toLowerCase();    
    return (UNITS.indexOf(unit) > -1 ? unit : undefined);
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    let index = UNITS.indexOf(initUnit);
    if (index > -1) {
      return (index % 2 === 0 ? UNITS[index+1] : UNITS[index-1])
    }
    else return undefined;
  };


  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case UNITS[0]:
        return initNum * galToL;
      case UNITS[1]:
        return initNum / galToL;
      case UNITS[2]:
        return initNum * lbsToKg;
      case UNITS[3]:
        return initNum / lbsToKg;
      case UNITS[4]:
        return initNum * miToKm;
      case UNITS[5]:
        return initNum / miToKm;
      default:
        return undefined;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    // 5 decimal places
    returnNum = Number(Math.round(returnNum+'e5')+'e-5');
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
  
}

module.exports = ConvertHandler;
