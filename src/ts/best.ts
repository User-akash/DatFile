class SvgRange {
    constructor(element:Element){
        element.setAttribute("hidden", "true");
    }
}

var elms: NodeListOf<Element> = document.querySelectorAll(".foo");
elms.forEach((elem)=>{
    new SvgRange(elem);
})