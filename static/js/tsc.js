"use strict";
var HumbagerMenu = (function () {
    function HumbagerMenu(menuIcon, moreElement) {
        this.menuIcon = menuIcon;
        this.moreElement = moreElement;
        this.hadleClick = this.hadleClick.bind(this);
        this.isopen = this.menuIcon.classList.contains("open");
        this.menuIcon.addEventListener("click", this.hadleClick);
    }
    HumbagerMenu.prototype.hadleClick = function () {
        if (this.isopen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    HumbagerMenu.prototype.open = function () {
        var _a;
        this.menuIcon.classList.toggle("open");
        (_a = this.moreElement) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
            element.classList.toggle("open");
        });
        this.isopen = true;
    };
    HumbagerMenu.prototype.close = function () {
        var _a;
        this.menuIcon.classList.toggle("open");
        (_a = this.moreElement) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
            element.classList.toggle("open");
        });
        this.isopen = false;
    };
    return HumbagerMenu;
}());
var menus = document.querySelectorAll(".hambaga");
menus.forEach(function (menus) {
    new HumbagerMenu(menus);
});
//# sourceMappingURL=tsc.js.map