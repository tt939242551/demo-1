
    setTimeout(function () {
        $('.name').animate({
            opacity: "1",
            top: "15%"
        }, 2000);

    }, 6000);
    setTimeout(function () {
        $('.happy').animate({
            opacity: "1",
            top: "15%"
        }, 2000);

    }, 6000);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity: "1",
            top: "70%"
        }, 1500);
        $('.button-style2').animate({
            opacity: "1",
            top: "85%"
        }, 2000);
    }, 9000);
    $(window).click(function () {
        $('audio')[0].play();
        window._isPlay = new Date()-0
    });
    $(`.bt1`).click(function () {
        if (new Date()-window._isPlay>60*1000) {
            location.href = "./Minions/Minions.html"; 
            return
        }
        if (window._isPlay) {
            alert(`先听完音乐哟!`) 
        }
    });
