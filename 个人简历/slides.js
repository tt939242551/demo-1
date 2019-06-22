var allButtons = $('#buttons > li')
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click',function(x) {
    var index = $(x.currentTarget).index()
    var p = index * -800
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
    n = index
  })
}

var n = 0 
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
var timerId = setTimer()
$('.window').on('mouseenter',function() {
  window.clearInterval(timerId)
})

$('.window').on('mouseleave',function() {
  timerId = setTimer()
})

function setTimer() {
  return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
  }, 3000)
}
