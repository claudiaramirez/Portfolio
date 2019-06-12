  window.onscroll = () => {
    const nav = document.querySelector('.header');
    if(this.scrollY < 700){
        nav.classList.remove('active');
    } else{
        nav.classList.add('active');
    } 
  };



  