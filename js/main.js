const dropdown = document.querySelectorAll(".dropdown");
const dropdownArray = Array.prototype.slice.call(dropdown, 0);
const dd = {
    init() {


        dropdownArray.forEach(function(el) {
            let button = el.querySelector('a[data-toggle="dropdown"]'),
                menu = el.querySelector(".dropdown-menu"),
                arrow = button.querySelector("i.icon-arrow");

            button.onclick = function(e) {
                if (!menu.hasClass("show")) {
                    menu.classList.add("show");
                    menu.classList.remove("hide");
                    arrow.classList.add("open");
                    arrow.classList.remove("close");
                    e.preventDefault();
                } else {
                    menu.classList.remove("show");
                    menu.classList.add("hide");
                    arrow.classList.remove("open");
                    arrow.classList.add("close");
                    e.preventDefault();
                }
            };
        });
    }
}
Element.prototype.hasClass = function(className) {
    return (
        this.className &&
        new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
    );
};

const menu = {
    $menuButton: document.querySelector('.nav__burger'),
    $menuContainer: document.querySelector('#menu'),
    menuState: false,
    init() {
        this.menuState = this.$menuContainer.getAttribute('menu-state')
        this.$menuButton.addEventListener("click", () => {
            console.log(this.$menuButton);
            this.toggle()
        });
    },
    test() {
        console.log(this.$menuContainer.getAttribute('menu-state'));
    },
    toggle() {

        if (this.menuState === 'hidden') {
            this.$menuContainer.setAttribute('menu-state', 'visible')
            document.querySelector('body').style = 'overflow:hidden'
            this.$menuButton.classList.add('close')
            this.menuState = this.$menuContainer.getAttribute('menu-state')
        } else if (this.menuState === 'visible') {
            this.$menuContainer.style.animation = 'hideBlock .21s linear';
            setTimeout(() => {
                this.$menuContainer.setAttribute('menu-state', 'hidden')
                this.menuState = this.$menuContainer.getAttribute('menu-state')
                this.$menuButton.classList.remove('close')
                document.querySelector('body').style = ''
                this.$menuContainer.style.animation = ''
            }, 200);
        }
    }
}

window.onload = () => {
    menu.init()
    dd.init()
}