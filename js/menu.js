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
        }
        else if (this.menuState === 'visible') {
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
export default menu