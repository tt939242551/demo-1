var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

setCanvasSize()
window.onresize = function() {
    setCanvasSize()
  }
if(document.body.ontouchstart !== undefined){
  listenToTouch(canvas) 
}else{
    listenToMouse(canvas) 
}



var eraserEnabled = false
eraser.onclick = function() {
  eraserEnabled =true
  actions.className = 'actions x'
}
brush.onclick = function(){
  eraserEnabled = false
  actions.className = 'actions'
}
/******/

  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight

    canvas.width = pageWidth
    canvas.height = pageHeight
  }


function drawCircle(x, y, radius) {
  context.beginPath()
  context.fillStyle = 'black'
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black'
  context.moveTo(x1, y1) // 起点
  context.lineWidth = 5
  context.lineTo(x2, y2) // 终点
  context.stroke()
  context.closePath()
}
if(document.body.ontouchstart !== undefined){

}
else{

}
function listenToMouse(canvas) {


  var using = false
  var lastPoint = {
    x: undefined,
    y: undefined
  }
  canvas.onmousedown = function(aaa) {
    var x = aaa.clientX
    var y = aaa.clientY
    using = true
    if (eraserEnabled) {
      context.clearRect(x - 8, y - 8, 16, 16)
    } else {
      lastPoint = {
        "x": x,
        "y": y
      }
    }
  }
  canvas.onmousemove = function(aaa) {
    var x = aaa.clientX
    var y = aaa.clientY

    if (!using) {return}

    if (eraserEnabled) {
      context.clearRect(x - 8, y - 8, 16, 16)
    } else {
      var newPoint = {
        "x": x,
        "y": y
      }
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
      lastPoint = newPoint
    }

  }
  canvas.onmouseup = function(aaa) {
    using = false
  }
}
function listenToTouch(canvas) {


  var using = false
  var lastPoint = {
    x: undefined,
    y: undefined
  }
  canvas.ontouchstart = function(aaa) {
    var x = aaa.touches[0].clientX
    var y = aaa.touches[0].clientY
    using = true
    if (eraserEnabled) {
      context.clearRect(x - 8, y - 8, 16, 16)
    } else {
      lastPoint = {
        "x": x,
        "y": y
      }
    }
  }
  canvas.ontouchmove = function(aaa) {
    var x = aaa.touches[0].clientX
    var y = aaa.touches[0].clientY

    if (!using) {return}

    if (eraserEnabled) {
      context.clearRect(x - 8, y - 8, 16, 16)
    } else {
      var newPoint = {
        "x": x,
        "y": y
      }
      drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
      lastPoint = newPoint
    }

  }
  canvas.ontouchend = function(aaa) {
    using = false
  }
}