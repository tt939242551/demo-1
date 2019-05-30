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
pen.onclick = function(){
  eraserEnabled = false
  pen.classList.add('action')
  eraser.classList.remove('action')
}
eraser.onclick = function() {
  eraserEnabled = true
  eraser.classList.add('action')
  pen.classList.remove('action')
}

clear.onclick = function(){
  context.clearRect(0,0,canvas.width,canvas.height)
}

download.onclick = function(){
  var url = canvas.toDataURL('image/png')
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = '我的画儿'
  a.target = '_blank'
  a.click()
}

var linewidth = 3
size1.onclick = function(){
  linewidth = 1
}
size2.onclick = function(){
  linewidth = 2
}
size3.onclick = function(){
  linewidth = 3
}
size4.onclick = function(){
  linewidth = 4
}
size5.onclick = function(){
  linewidth = 5
}

red.onclick = function(){
  context.strokeStyle = 'red'
  red.classList.add('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  yellow.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gray.classList.remove('active')
}
green.onclick = function(){
  context.strokeStyle = 'green'
  red.classList.remove('active')
  green.classList.add('active')
  blue.classList.remove('active')
  yellow.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gray.classList.remove('active')
}
blue.onclick = function(){
  context.strokeStyle = 'blue'
  red.classList.remove('active')
  green.classList.remove('active')
  blue.classList.add('active')
  yellow.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gray.classList.remove('active')
}
yellow.onclick = function(){
  context.strokeStyle = 'yellow'
  yellow.classList.add('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  red.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  gray.classList.remove('active')
}
pink.onclick = function(){
  context.strokeStyle = 'pink'
  pink.classList.add('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  yellow.classList.remove('active')
  red.classList.remove('active')
  purple.classList.remove('active')
  gray.classList.remove('active')
}
purple.onclick = function(){
  context.strokeStyle = 'purple'
  purple.classList.add('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  yellow.classList.remove('active')
  pink.classList.remove('active')
  red.classList.remove('active')
  gray.classList.remove('active')
}
gray.onclick = function(){
  context.strokeStyle = 'gray'
  gray.classList.add('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  yellow.classList.remove('active')
  pink.classList.remove('active')
  purple.classList.remove('active')
  red.classList.remove('active')
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
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1) 
  context.lineWidth = linewidth
  context.lineTo(x2, y2) 
  context.stroke()
  context.closePath()
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