const dropdown = document.querySelectorAll(".dropdown");
const dropdownArray = Array.prototype.slice.call(dropdown, 0);
const dd = {
    init() {


        dropdownArray.forEach(function (el) {
            let button = el.querySelector('a[data-toggle="dropdown"]'),
                menu = el.querySelector(".dropdown-menu"),
                arrow = button.querySelector("i.icon-arrow");

            button.onclick = function (e) {
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
Element.prototype.hasClass = function (className) {
    return (
        this.className &&
        new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
    );
};
export default dd