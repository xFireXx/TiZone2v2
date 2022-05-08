function menu() {
    const iconMenu = document.querySelector(".material");
    const navigation = document.querySelector(".nav");
    const menu = document.querySelector(".menu");

    iconMenu.addEventListener("click", () => {
        navigation.classList.toggle("nav-active");
        menu.classList.toggle("menu-active");
    })
}

export default menu;