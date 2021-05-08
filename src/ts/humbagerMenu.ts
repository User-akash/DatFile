import "./humbagerMenu.scss";
export class HumbagerMenu{
    private isopen: boolean;
    constructor(private menuIcon: Element, private moreElement?:Array<Element>){
        this.init()
        this.hadleClick = this.hadleClick.bind(this);
        this.isopen = window.location.hash == "#menus-open"? true : false;
        if(this.isopen)
        {
            this.open()
        }
        window.addEventListener("hashchange", (e)=>{
            if(window.location.hash == "#menus-open")
            {
                this.open();
            }else{
                this.close();
            }
        });
        this.menuIcon.addEventListener("click", ()=>{
            if(this.isopen)
            window.location.hash = "";
            else
            window.location.hash = "#menus-open";
        });
    }
    init(){
        const svgns="http://www.w3.org/2000/svg";
        let svg=document.createElementNS(svgns, "svg");
        svg.setAttribute("viewBox", "0 0 64 64");
        let line = document.createElementNS(svgns, "path");
        let line2 = document.createElementNS(svgns, "path");
        let line3 = document.createElementNS(svgns, "path");
        svg.appendChild(line);
        svg.appendChild(line2);
        svg.appendChild(line3);
        // console.log(svg);
        this.menuIcon.appendChild(svg)
    }
    private hadleClick(){
        if(this.isopen)
        {
            this.close();
        }
        else
        {
            this.open();
        }
    }
    private open() {
        this.menuIcon.classList.toggle("open");
        this.moreElement?.forEach(element=>{
            element.classList.toggle("open");
        });
        this.isopen = true;
    }
    private cleanHash(){
        window
    }
    private close() {
        this.menuIcon.classList.toggle("open");
        this.moreElement?.forEach(element=>{
            element.classList.toggle("open");
        });
        this.isopen = false;
    }
}