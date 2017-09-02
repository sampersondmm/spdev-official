import $ from 'jquery';

class MobileMenu {
    constructor() {

        this.menuScreen = $(".body-screen");
        this.menuIcon = $(".mobile-menu__menu-icon");
        this.menuContent = $(".mobile-menu__menu-content");
        this.menuContentA = $(".mobile-menu__menu-content__a");
        this.plusXOne = $(".mobile-menu__menu-content__menu-x-1");
        this.plusXTwo = $(".mobile-menu__menu-content__menu-x-2");
        this.plusXThree = $(".mobile-menu__menu-content__menu-x-3");
        this.plusXOneNav = $(".nav__menu-x-1");
        this.plusXTwoNav = $(".nav__menu-x-2");
        this.plusXThreeNav = $(".nav__menu-x-3");
        this.hover1 = $(".hover1");
        this.hover2 = $(".hover2");
        this.hover3 = $(".hover3");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.hover1.hover(this.hoverEffect1.bind(this));
        this.hover2.hover(this.hoverEffect2.bind(this));
        this.hover3.hover(this.hoverEffect3.bind(this));
    }

    toggleTheMenu() {
        this.menuScreen.toggleClass("body-screen--active");
        this.plusXOne.toggleClass("mobile-menu__menu-content__menu-x-1--is-visible");
        this.plusXTwo.toggleClass("mobile-menu__menu-content__menu-x-2--is-visible");
        this.plusXThree.toggleClass("mobile-menu__menu-content__menu-x-3--is-visible");
        this.menuContent.toggleClass("mobile-menu__menu-content--is-visible");
        this.menuContentA.toggleClass("mobile-menu__menu-content__a--is-visible");
        this.menuIcon.toggleClass("mobile-menu__menu-icon--close-x");
    }

    hoverEffect1() {
        this.plusXOne.toggleClass("mobile-menu__menu-content__menu-x-1--rotate");
        this.plusXOneNav.toggleClass("nav__menu-x-1--rotate");
    }
    hoverEffect2() {
        this.plusXTwo.toggleClass("mobile-menu__menu-content__menu-x-2--rotate");
        this.plusXTwoNav.toggleClass("nav__menu-x-1--rotate");
    }
    hoverEffect3() {
        this.plusXThree.toggleClass("mobile-menu__menu-content__menu-x-3--rotate");
        this.plusXThreeNav.toggleClass("nav__menu-x-1--rotate");
    }
}

export default MobileMenu;
