window._index=0
$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "明月" && pwd == "生日快乐") {    
        $('#hs').text(""); 
        if (window._index<=5) { $('#h').text(`真聪明!${window._index}次就猜对了,棒棒哒!`); }
        if (window._index>5){ $('#h').text(`厉害哟!恭喜你猜对了,棒棒哒!`); }
        if (window._index>=10){ $('#h').text(`恭喜你终于猜对了,棒棒哒!`); }
        if (window._index>20){ $('#h').text(`笨笨的你终于答对了!`); }
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        window._index++
        if (userName == "明月") {
            $('#hs').text("密码错误哟!"); 
            if (window._index>=5) { $('#h').text("密码也是中文哟!"); }
            if (window._index>=10) { $('#h').text("加油,马上就可以猜对了!"); }
            if (window._index>=20) { $('#h').text("密码是生日快乐,小笨蛋!"); }
        }else{
            $('#hs').text("用户名错误哟!");
            if (window._index>=5) {
                $('#h').text(`${window._index}次了,用户名都没猜对,笨笨的,哈哈哈哈哈哈!
                \n\t用户名就是名字啦!`);
            }  
        }
        event.preventDefault();
    }
});
