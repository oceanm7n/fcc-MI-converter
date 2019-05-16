/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      let returnString;
      if (initNum === undefined) {
        returnString = 'invalid number'
        if (initUnit === undefined) returnString += ' and unit';
      }
      if (initUnit === undefined) returnString = 'invalid unit'

      // If input is invalid
      if (returnString) res.send(returnString)
      else {
        res.json({initNum, initUnit, returnNum, returnUnit, string: toString});
      }
    });
    
};
