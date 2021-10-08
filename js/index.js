var onScrollHandler = function() {
  
   // элемент который будем менять
   var yourImageElement = document.getElementById('content__1')
   // позиция скролла
   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 
   // проверка на определqwdqwdенных местах по пикселям
   if (scrollTop > 4500 && scrollTop < 5200) {
     // меняем то что нужно
     yourImageElement.src = ''
   }
 
   console.log(scrollTop)
 };
 
 document.addEventListener ("scroll", this.onScrollHandler);