(() => {
    const menuBtnRef = document.querySelector("[data-burger-open]");
    const mobileMenuRef = document.querySelector("[data-burger]");
    const mobileBtnClose = document.querySelector("[data-burger-close]");

    menuBtnRef.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("is-open");
    });

    mobileBtnClose.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("is-open");
    });
})();