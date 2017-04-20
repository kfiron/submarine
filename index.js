'use strict';

module.exports = obj => submarine(obj);

function submarine(obj){
  var steps = [];

  var handler = {
    get: function(target, name) {
      if(name === 'getOrElse'){
        return getOrElse;
      }else{
        steps.push(name);
        return new Proxy(target, this)
      }
    }
  };

  function getOrElse(defaultValue){
    return data(defaultValue);
  }

  function data(defaultValue){
    return steps.reduce((acc, step) => {
      return acc[step] || defaultValue;
    }, obj);
  }

  return new Proxy(obj, handler);
}



