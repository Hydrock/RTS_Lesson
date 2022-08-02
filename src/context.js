function getContext() {
  var canvas = window.document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  return ctx;
}

// eslint-disable-next-line no-extend-native
Object.prototype.context = getContext();
