// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here

  var type = typeof obj;

  if(obj !== null && type === "object") {

    var json = [];
    var is_array = obj instanceof Array;

    for (var item in obj) {
      
      // get type before recursive call
      item_type = typeof obj[item];

      var value = stringifyJSON(obj[item]);

      if(value !== "undefined" && item_type !== "function") {

        if(is_array){
          json.push(String(value));
        } else {
          json.push('"' + item + '":' + String(value));
        }

      }
    }

    if(is_array) {
      return "[" + String(json) + "]";
    } else {
      return "{" + String(json) + "}";
    }

  } else {
    // if string add quotes
    if (type === "string") {
      obj = '"' + obj + '"';
    }

    return String(obj);
  }
};