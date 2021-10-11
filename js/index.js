var onScrollHandler = function() {
   // элемент который будем менять
   var yourImageElement = document.getElementById('content__1')
   var imageElement = document.getElementsByClassName('img__item')
   var title = document.getElementById('content__title')
   var subtitle = document.getElementById('content__subtitle')
   var text = document.getElementById('content__text')
   // позиция скролла
   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 
   // проверка на определенных местах по пикселям..
   if (scrollTop > 1850 && scrollTop < 2373) {
     // меняем то что нужно
     
     yourImageElement.style.top = '0'
     yourImageElement.style.width = '740px'
     yourImageElement.style.height = '573px'
     yourImageElement.src = './img/how/1.png'
    }
   else if(scrollTop > 2373 && scrollTop < 2946){
     
    yourImageElement.style.top = '0'
    yourImageElement.style.width = '740px'
    yourImageElement.style.height = '573px'
    yourImageElement.src = './img/how/2.png'
    }
   else if(scrollTop > 2946 && scrollTop < 3519){
      
    yourImageElement.style.top = '0'
    yourImageElement.style.width = '740px'
    yourImageElement.style.height = '573px'
    yourImageElement.src = './img/how/3.png'
    }
    else if(scrollTop > 3519 && scrollTop < 4092){
         
     yourImageElement.style.top = '0'
     yourImageElement.style.width = '740px'
     yourImageElement.style.height = '573px'
      yourImageElement.src = './img/how/4.png'
    }
    else if(scrollTop > 4092 && scrollTop < 1850){
      yourImageElement.style.position = 'auto'   
     yourImageElement.style.top = '0'
     yourImageElement.style.width = '740px'
     yourImageElement.style.height = '573px'
      console.log(yourImageElement.style.position)
    }
   console.log(scrollTop)
   console.log(yourImageElement.style.position)
 };
 
 document.addEventListener ("scroll", this.onScrollHandler);