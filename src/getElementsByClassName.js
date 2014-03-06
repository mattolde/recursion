// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here

  function walkDOM(node, callback) {

    var children = node.childNodes;

    for (var i = 0; i < children.length; i++) {
        walkDOM(children[i], callback);
    }

    callback(node);
  }

  function isElement(node){
    return (
        typeof HTMLElement === "object" ? node instanceof HTMLElement : node && typeof node === "object" && node !== null && node.nodeType === 1 && typeof node.nodeName==="string"
    );
  }

  var results = [];

  walkDOM(document.body, function(node) {
    if (isElement(node)){
        if(node.classList.contains(className)) {
            results.push(node);
        }
    }
  });

  return results;

};
