class SCROLL{
    constructor(set) {
       if(typeof set.element == 'string') {
          this.el = document.querySelector(set.element);
       }else if(set.element instanceof HTMLElement) {
          this.el = set.element
       }
       this.el.style.position = 'fixed';
       this.el.style.width = '100%';
       this.el.style.zIndex = '1';
       this.top = set.range;
       this.el.style.top = this.top + 'px';

       window.addEventListener('scroll', () => this.scroll())
    }
    scroll() {
        if(this.top - scrollY > 0) {
           this.el.style.top = this.top - scrollY + 'px';
        }else {
           this.el.style.top = 0;
        }
    }
}

let scroll = new SCROLL({
    element: '.header__nav',
    range: 90,
})
////Бургер
let burger = document.querySelector('.header__nav-icon');
if(burger){
let navBox = document.querySelector('.header__nav-box');
burger.addEventListener('click', function(e){
   burger.classList.toggle('_active');
   navBox.classList.toggle('_active');
 });

}