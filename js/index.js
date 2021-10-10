var onScrollHandler = function() {
  
   // элемент который будем менять
   var yourImageElement = document.getElementById('content__1')
   // позиция скролла
   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 
   // проверка на определенных местах по пикселям..
   if (scrollTop > 2801 && scrollTop < 2900) {
     // меняем то что нужно
     yourImageElement.src = './img/how/2.png'
   }
   else if(scrollTop <= 2900 ){
      yourImageElement.src = './img/how/1.png'
     
   }
 
   console.log(scrollTop)
 };
 
 document.addEventListener ("scroll", this.onScrollHandler);