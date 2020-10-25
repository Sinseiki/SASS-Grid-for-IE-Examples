function imgModule(a:string){
  const alist:NodeListOf<HTMLElement> = document.querySelectorAll(`.${a} li a`);
  for(let i=0;i<alist.length;i++){
    alist[i].style.background = `url(images/${a+(i+1)}.jpg) no-repeat center top / cover`;
  };
}
imgModule('banner');
imgModule('gallery');
imgModule('icon');
imgModule('slide');
imgModule('sns');


(function slideClone(){
  const cloneLi = document.querySelector('.slide li').cloneNode(true);
  document.querySelector('.slide ul').appendChild(cloneLi);
})();


(function leftContentTab(){
  const leftH2A:NodeListOf<HTMLElement> = document.querySelectorAll('.leftContent h2 a');
  
  for(let i = 0; i < leftH2A.length; i++){
    leftH2A[i].addEventListener('click',function(){
      for(let i = 0; i < leftH2A.length; i++){
        leftH2A[i].classList.remove('on');
        this.classList.add('on');

        const leftContents = document.querySelectorAll('.bbs,.gallery')
        leftContents[i].classList.remove('on');
        
        if (this === leftH2A[i]){
          const indexOfH2A = i;
          leftContents[indexOfH2A].classList.add('on');
        }
      }
    })
  }
})();


(function modal(){
  document.querySelector('tr').addEventListener('click',function(){
    document.querySelector('.modal').classList.add('on');
  })
  document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modal').classList.remove('on');
  })
})();