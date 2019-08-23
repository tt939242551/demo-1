

      setTimeout(function(){
        siteWelcome.classList.remove('active')    
        },1000)

      window.onscroll = function(xxx){
        if(window.scrollY > 0){
          topNavbar.classList.add('sticky')
        }else{
          topNavbar.classList.remove('sticky')
        }
        findClosest()
      }

      let liTags = document.querySelectorAll('nav.menu > ul > li')
        for(let i=0; i<liTags.length; i++){
          liTags[i].onmouseenter = function(x){
            x.currentTarget.classList.add('active')
          }
          liTags[i].onmouseleave = function(x){
            x.currentTarget.classList.remove('active')
          }
        }

      let aTags = document.querySelectorAll('nav.menu > ul > li > a')
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
      for(let i=0; i<aTags.length; i++){
        aTags[i].onclick = function(x){
          x.preventDefault()
          let a = x.currentTarget
          let href = a.getAttribute('href') 
          let element = document.querySelector(href)
          let top = element.offsetTop
          let currentTop = window.scrollY
          let targetTop = top - 80
          let s = targetTop - currentTop 
          var coords = { y: currentTop}; 
          var t = Math.abs((s/100)*200) 
          if(t>1000){ t = 1000 }
          var tween = new TWEEN.Tween(coords) // 起始位置
            .to({ y: targetTop}, t) // 结束位置 和 时间
            .easing(TWEEN.Easing.Cubic.Out) // 缓动类型
            .onUpdate(function() {
              window.scrollTo(0,coords.y) // 如何更新界面
            })
            .start(); // 开始缓动
        }
      } 
      function findClosest(){
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for(let i =1;i<specialTags.length; i++){
          if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i
          }
        }
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#'+ id + '"]')
        let li = a.parentNode
        let brothersAndMe = li.parentNode.children
        for(let i=0; i<brothersAndMe.length; i++){
          brothersAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
      }
      portfolio1.onclick= function(){
        portfolioBar.className = 'bar state-1'
      }
      portfolio2.onclick= function(){
        portfolioBar.className = 'bar state-2'
      }
      portfolio3.onclick= function(){
        portfolioBar.className = 'bar state-3'
      }



