(function () {
  "use strict";

  var currentScript = document.currentScript;
  var loaderScript = document.createElement("script");

  loaderScript.src = "https://omniweb.ai/widget.js";
  loaderScript.async = true;

  if (currentScript) {
    Array.prototype.slice.call(currentScript.attributes).forEach(function (attribute) {
      if (attribute.name.indexOf("data-") === 0) {
        loaderScript.setAttribute(attribute.name, attribute.value);
      }
    });
  }

  (document.head || document.body || document.documentElement).appendChild(loaderScript);
})();
