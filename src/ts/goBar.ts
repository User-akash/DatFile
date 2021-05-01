import Random from "./random";
export class GoBar {
    svg: SVGElement;
    screenW: number;
    screenH: number;
    gradient: SVGLinearGradientElement;
    stop1: SVGStopElement;
    stop2: SVGStopElement;
    stop3: SVGStopElement;
    constructor(){
        this.resizeHandle = this.resizeHandle.bind(this);
        const svgns = "http://www.w3.org/2000/svg";
        this.svg = document.createElementNS(svgns, "svg");
        this.gradient = document.createElementNS(svgns, "linearGradient");
        this.stop1 = document.createElementNS(svgns, "stop");
        this.stop2 = document.createElementNS(svgns, "stop");
        this.stop3 = document.createElementNS(svgns, "stop");
        this.svg.setAttribute("version", "1.1");
        this.svg.setAttribute("xmlns", svgns);
        this.svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.screenH = screen.height;
        this.screenW = screen.width;
        this.svg.setAttribute("viewBox", "0 0 "+this.screenW+" "+this.screenH);
        this.svg.style.position = "fixed";
        this.svg.style.top = "0";
        this.gradient.id = "gradient";
        this.gradient.setAttribute("x1", "0");
        this.gradient.setAttribute("x2", this.screenW.toString());
        this.gradient.setAttribute("y1", "20");
        this.gradient.setAttribute("y2", "20");
        this.gradient.setAttribute("gradientUnits", "userSpaceOnUse");
        this.stop1.setAttribute("offset", "0");
        this.stop1.style.stopColor = "green";
        this.stop2.setAttribute("offset", "0.1");
        this.stop2.style.stopColor = "green";
        this.stop3.setAttribute("offset", "1");
        this.stop3.style.stopColor = "green";
        this.stop3.style.stopOpacity = "0";
        // this.svg.style.opacity = "0.5";
        window.addEventListener("resize", this.resizeHandle);
        this.gradient.appendChild(this.stop1);
        this.gradient.appendChild(this.stop2);
        this.gradient.appendChild(this.stop3);
        this.svg.appendChild(this.gradient);
        document.body.appendChild(this.svg);
        this.createAnimate();
    }
    resizeHandle(ev: UIEvent){
        this.screenH = screen.height;
        this.screenW = screen.width;
        this.svg.setAttribute("viewBox", "0 0 "+this.screenW+" "+this.screenH);
    }
    createAnimate(){
        enum direction{tb, bt, lr, rl};
        // var ran = Random.number(direction.tb, direction.rl);
        var ran = direction.tb;
        const svgns = "http://www.w3.org/2000/svg";
        var posy = 0;
        var posx = 0;
        if(ran == direction.tb || ran == direction.rl)
             posy = (Math.random()*this.screenH);
        else
            var posx = (Math.random()*this.screenW);
        let rectagle = document.createElementNS(svgns, "rect");
        let group = document.createElementNS(svgns, "g");
        group.style.transform = "translate("+posx+"px, "+posy+"px)";
        rectagle.setAttribute("height", "5");
        rectagle.setAttribute("width", this.screenW.toString());
        rectagle.setAttribute("fill", "url(#gradient)");
        switch (ran) {
            case direction.tb:
                rectagle.style.animation = "moveYn 5s linear";
                break;
            case direction.bt:
                rectagle.style.animation = "moveYp 5s linear";
                break;
            case direction.lr:
                rectagle.style.animation = "moveXp 5s linear";
                break;
            case direction.rl:
                rectagle.style.animation = "moveXn 5s linear";
                break;
        
            default:
                break;
        }
        // rectagle.style.transformOrigin = posx + "px " + posy+"px ";
        rectagle.onanimationend = (en:AnimationEvent)=>{
            group.remove();
            this.createAnimate();
        }
        // rectagle.style.transform = "translateY(50vh)"
        group.appendChild(rectagle);
        this.svg.appendChild(group);
    }
}