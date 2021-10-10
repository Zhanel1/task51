var onScrollHandler = function() {
   // элемент который будем менять
   var yourImageElement = document.getElementById('content__1')
   var title = document.getElementById('content__title')
   var subtitle = document.getElementById('content__subtitle')
   var text = document.getElementById('content__text')

   // позиция скролла
   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
 
   // проверка на определенных местах по пикселям..
   if (scrollTop > 1850 && scrollTop < 2373) {
     // меняем то что нужно
     yourImageElement.src = './img/how/1.png'
     subtitle.innerHTML = 'Create and sell your NFTs'
     text.innerHTML = 'Once you’ve set up your wallet, connect it to NFTime by clicking the wallet icon.'
   }
   else if(scrollTop > 2373 && scrollTop < 2946){
     yourImageElement.src = './img/how/2.png'
     subtitle.innerHTML = 'Create and sell your NFTs'
     text.innerHTML = 'Set up your collection: Add links on your social media accounts, a description, profile and banner images.'
   }
   else if(scrollTop > 2946 && scrollTop < 3519){
     yourImageElement.src = './img/how/3.png'
     subtitle.innerHTML = 'Create and sell your NFTs'
     text.innerHTML = 'Upload your work (The platform supports images, videos, audios, or 3D arts), add description and title, and customize your NFTs.'
  }
  else if(scrollTop > 3519 && scrollTop < 4092){
    yourImageElement.src = './img/how/4.png'
    subtitle.innerHTML = 'Create and sell your NFTs'
    text.innerHTML = 'Choose how you want to sell your NFTs: via auctions or fixed-price listings.'
  }


   console.log(scrollTop)
 };
 
 document.addEventListener ("scroll", this.onScrollHandler);