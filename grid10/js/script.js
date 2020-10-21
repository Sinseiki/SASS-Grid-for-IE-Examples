function imgModule(a) {
    var alist = document.querySelectorAll("." + a + " li a");
    for (var i = 0; i < alist.length; i++) {
        alist[i].style.background = "url(images/" + (a + (i + 1)) + ".jpg) no-repeat center top / cover";
    }
    ;
}
imgModule('banner');
imgModule('gallery');
imgModule('icon');
imgModule('slide');
imgModule('sns');
(function slideClone() {
    var cloneLi = document.querySelector('.slide li').cloneNode(true);
    document.querySelector('.slide ul').appendChild(cloneLi);
})();
(function leftContentTab() {
    var leftH2A = document.querySelectorAll('.leftContent h2 a');
    for (var i = 0; i < leftH2A.length; i++) {
        leftH2A[i].addEventListener('click', function () {
            for (var i_1 = 0; i_1 < leftH2A.length; i_1++) {
                leftH2A[i_1].classList.remove('on');
                this.classList.add('on');
                var leftContents = document.querySelectorAll('.bbs,.gallery');
                leftContents[i_1].classList.remove('on');
                if (this === leftH2A[i_1]) {
                    var indexOfH2A = i_1;
                    leftContents[indexOfH2A].classList.add('on');
                }
            }
        });
    }
})();
(function modal() {
    document.querySelector('tr').addEventListener('click', function () {
        document.querySelector('.modal').classList.add('on');
    });
    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.modal').classList.remove('on');
    });
})();
