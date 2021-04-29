import {MagicType} from "./magicType";

class HumbagerMenu{
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

var menu = document.querySelector(".hambaga");
var menuHub = document.querySelectorAll(".menu-hub");
var menus = document.querySelectorAll(".menus");
if(menu) {
    new HumbagerMenu(menu, [menus[0], menuHub[0]]);
}

var text = document.querySelector<HTMLElement>(".spacial h3");

if(text)
{
    new MagicType(text, {delay:5000, texts:["Shadhin is my name", "I am work as developer", "this Type Script "]});
}

// var spaChar = `!"#$%&'()*+,-:;<=>?@{|}~¡¢£¤¥¦§¼æ֍֎֏`;
// var text = document.querySelector<HTMLElement>(".spacial h3");
// if(text)
// {
//     let elem = text;
//     const orText = String(elem.innerText);
//     let len = elem.innerText.length;
//     let t = elem.innerText.length-1;
//     let counter = 0;
//     let triggar = true;
//     setInterval(()=>{
//         /*
//         if(t < len){
//             let temp = String(elem?.innerText);
//             let charP = Math.floor(Math.random()*(spaChar.length-1))+1;
//             temp = temp.substr(0,t)+spaChar[charP]+temp.substr(t+1);
//             elem.innerText = temp;
//             console.log(charP);
//             t++;
//         }else{
//             t = 0;
//         }*/
//         let temp = String(elem?.innerText);
//         for(let i = t; i < len; i++){
//             let charP = Math.floor(Math.random()*(spaChar.length-1))+1;
//             temp = temp.substr(0,i)+spaChar[charP]+temp.substr(i+1);
//             if(counter == 8){
//                 temp = temp.substr(0,i)+orText[i]+temp.substr(i+1);
//             }
//         }
//         if(triggar)
//             elem.innerText = temp;
//         counter++
//         if(counter > 8)
//         {
//             t++;
//             counter = 0;
//         }
//         if(t >= elem.innerText.length){
//             elem.innerText = orText;
//             t = 0;
//             triggar = !triggar;
//         } 
//     },20);
// }