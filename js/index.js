var onScrollHandler = function() {
   // элемент который будем менять
   var yourImageElement = document.getElementById('content__1')
   var content1 = document.getElementById('item1').getBoundingClientRect()
   var content2 = document.getElementById('item2').getBoundingClientRect()
   var content3 = document.getElementById('item3').getBoundingClientRect()
   var content4 = document.getElementById('item4').getBoundingClientRect()

   elemRect = yourImageElement.getBoundingClientRect()
   offset1   = content1.bottom - elemRect.top;
   offset2   = content2.bottom - elemRect.top;
   offset3   = content3.bottom - elemRect.top;
   offset4   = content4.bottom - elemRect.top;

   console.log('Element is ' + offset1 + ' vertical pixels from <body>' + content2.offsetHeight);
   console.log('Element is ' + offset2 + ' vertical pixels from <body>' + content2.offsetHeight);
   console.log('Element is ' + offset3 + ' vertical pixels from <body>' + content3.offsetHeight);
   console.log('Element is ' + offset4 + ' vertical pixels from <body>' + content4.offsetHeight);
   // позиция скролла
   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 
  //  console.log(scrollTop);
   console.log(scrollTop)
   // проверка на определенных местах по пикселям..
   if (offset1 > 0) {
     // меняем то что нужно
     yourImageElement.src = './img/how/1.png'
    }
   else if(offset1 < 0 && offset2 > 0){ 
    yourImageElement.src = './img/how/2.png'
    }
   else if(offset2 < 0 && offset3 > 0){
    yourImageElement.style.top = '0'
    yourImageElement.src = './img/how/3.png'
    }
    else if(offset3 < 0 && offset4 > 0){    
     yourImageElement.style.top = '0'
      yourImageElement.src = './img/how/4.png'
    }
    else if(offset4 < 0){
      yourImageElement.style.position = 'auto'   
     yourImageElement.style.top = '0'
      console.log(yourImageElement.style.position)
    }
 };

 const box = document.getElementById('myPointer');
 const line = document.getElementById('slider_line');
 // Initial position
 let position = 0;
 
 function animate() {
   // Updating scene logic
   // moving box for one pixel per frame
   // "requestAnimationFrame" is optimized for 60fps
   // so we should get smooth movement of 60px per second
   position += 4;
   position = position % line.offsetHeight
 
   // Render updated scene
   box.style.top = `${position}px`;
   // Start next frame
   requestAnimationFrame(animate);
 }
 
 // Start animation
 animate();

 document.addEventListener ("scroll", this.onScrollHandler);

 var burgerElement = document.getElementById('burger')
 var burgerListElement = document.getElementById('burger__menu')

 burgerElement.addEventListener("click", function () {
  burgerListElement.classList.toggle('active')
 })