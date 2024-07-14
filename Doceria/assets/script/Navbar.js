function menushow() {
    let menumobile = document.querySelector('.mobile-menu');
    if (menumobile.classList.contains('open')) {
        menumobile.classList.remove('open');
        document.querySelector('.icon').src = "./assets/img/open_menu_white.svg"
    } else {
        menumobile.classList.add('open')
        document.querySelector('.icon').src = "./assets/img/close_menu_white.svg"
    }
}