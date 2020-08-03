var canvas = document.getElementById("can");
document.getElementById("rollNumber").value;
var context = canvas.getContext('2d');
function setRollNumber(){
  doClear();
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 70;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.stroke();
  var x = document.getElementById("rollNumber").value;
  context.font = 'italic 100px sans-serif';
  context.fillText(x, centerX-58, centerY+35);
}
function doClear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
function download(e1){
  download_img = function(el) {
  var image = canvas.toDataURL("image/jpg");
  el.href = image;
};
}