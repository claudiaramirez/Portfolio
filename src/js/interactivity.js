  window.onscroll = () => {
    const nav = document.querySelector('.header');
    if(this.scrollY < 750){
        nav.classList.remove('active');
    } else{
        nav.classList.add('active');
    } 
  };



  