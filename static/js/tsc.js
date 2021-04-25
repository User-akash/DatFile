"use strict";
var SvgRange = (function () {
    function SvgRange(element) {
        element.setAttribute("hidden", "true");
    }
    return SvgRange;
}());
var elms = document.querySelectorAll(".foo");
elms.forEach(function (elem) {
    new SvgRange(elem);
});
//# sourceMappingURL=tsc.js.map