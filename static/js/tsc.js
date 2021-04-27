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
var menu = document.querySelector(".hambaga");
var menuHub = document.querySelectorAll(".menu-hub");
var menus = document.querySelectorAll(".menus");
if (menu) {
    new HumbagerMenu(menu, [menus[0], menuHub[0]]);
}
var MagicType = (function () {
    function MagicType(element, options) {
        this.element = element;
        this.options = options;
        this.spaChar = "!\"#$%&'()*+,-:;<=>?@{|}~\u00A1\u00A2\u00A3\u00A4\u00A5\u00A6\u00A7\u00BC\u00E6\u058D\u058E\u058F";
        this.nextTime = 100;
        this.count = 0;
        this.trigar = true;
        this.textIndex = 0;
        this.action = this.action.bind(this);
        this.text = element.innerText;
        setTimeout(this.action, 1000);
    }
    MagicType.prototype.action = function () {
        var _a, _b, _c;
        if (this.trigar) {
            this.count++;
            if (this.count > this.text.length) {
                this.trigar = !this.trigar;
                if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.delay)
                    this.nextTime = (_b = this.options) === null || _b === void 0 ? void 0 : _b.delay;
            }
        }
        else {
            this.count--;
            this.nextTime = 50;
            if (this.count < 0) {
                if ((_c = this.options) === null || _c === void 0 ? void 0 : _c.texts) {
                    this.text = this.options.texts[this.textIndex];
                    this.textIndex++;
                    if (this.textIndex > this.options.texts.length - 1)
                        this.textIndex = 0;
                }
                this.trigar = !this.trigar;
            }
        }
        this.element.innerText = this.text.substr(0, this.count) + this.genText(this.text.length - this.count);
        setTimeout(this.action, this.nextTime);
    };
    MagicType.prototype.genText = function (len) {
        var text = "";
        for (var i = 0; i < len; i++) {
            var random = Math.random() * (this.spaChar.length - 1);
            text += this.spaChar[Math.floor(random)];
        }
        return text;
    };
    return MagicType;
}());
var text = document.querySelector(".spacial h3");
if (text) {
    new MagicType(text, { delay: 5000, texts: ["Shadhin is my name", "I am work as developer", "this Type Script "] });
}
//# sourceMappingURL=tsc.js.map