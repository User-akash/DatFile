export class HumbagerMenu{
    private isopen: boolean;
    constructor(private menuIcon: Element, private moreElement?:Array<Element>){
        this.hadleClick = this.hadleClick.bind(this);
        this.isopen = this.menuIcon.classList.contains("open");
        this.menuIcon.addEventListener("click", this.hadleClick);
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

    private close() {
        this.menuIcon.classList.toggle("open");
        this.moreElement?.forEach(element=>{
            element.classList.toggle("open");
        });
        this.isopen = false;
    }
}