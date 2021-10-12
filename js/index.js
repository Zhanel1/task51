var onScrollHandler = function() {
   // элемент который будем менять
   var yourImageElement = document.getElementById('content__1')
   // позиция скролла
   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 
   console.log(scrollTop);
   // проверка на определенных местах по пикселям..
   if (scrollTop > 2400 && scrollTop < 2946) {
     // меняем то что нужно
     yourImageElement.style.top = '0'
     yourImageElement.style.width = '740px'
     yourImageElement.style.height = '573px'
     yourImageElement.src = './img/how/1.png'
    }
   else if(scrollTop > 2946 && scrollTop < 3519){ 
    yourImageElement.style.top = '0'
    yourImageElement.style.width = '740px'
    yourImageElement.style.height = '573px'
    yourImageElement.src = './img/how/2.png'
    }
   else if(scrollTop > 3519 && scrollTop < 4092){
    yourImageElement.style.top = '0'
    yourImageElement.style.width = '740px'
    yourImageElement.style.height = '573px'
    yourImageElement.src = './img/how/3.png'
    }
    else if(scrollTop > 4092 && scrollTop < 4665){    
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
 };

 const box = document.getElementById('myPointer');
 // Initial position
 let position = 0;
 
 function animate() {
   // Updating scene logic
   // moving box for one pixel per frame
   // "requestAnimationFrame" is optimized for 60fps
   // so we should get smooth movement of 60px per second
   position += 4;
   position = position % 1600
 
   // Render updated scene
   box.style.top = `${position}px`;
   // Start next frame
   requestAnimationFrame(animate);
 }
 
 // Start animation
 animate();

 document.addEventListener ("scroll", this.onScrollHandler);