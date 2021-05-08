import { HumbagerMenu } from "./humbagerMenu";
import { MagicType } from "./magicType";
import {GoBar} from "./goBar";
import "../scss/style.scss";
import "jquery";
import "bootstrap";

var menu = document.querySelector(".humbarger-menu");
var menuHub = document.querySelectorAll(".menu-hub");
var menus = document.querySelectorAll(".menus");
if(menu) {
    new HumbagerMenu(menu);
}

var text = document.querySelector<HTMLElement>(".spacial h3");

if(text)
{
    new MagicType(text, {delay:5000, texts:["Shadhin is my name", "I am work as developer", "this Type Script "]});
}

var x = document.querySelector<HTMLElement>(".bgound");
if(x){
    var gbar =new GoBar();
    x?.appendChild(gbar.svg);
}

// document.addEventListener("backbutton", ()=>{console.log("backpress"); return false})