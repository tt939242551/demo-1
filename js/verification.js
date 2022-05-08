$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "明月" && pwd == "生日快乐") {
        $('#h').text("欢迎回来！");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        window._index++
        // if (window._index==1&&userName == "明月") {
            
        // }
        alert("用户名或密码不正确！");
    }
});
