import { HumbagerMenu } from "./humbagerMenu";
import { MagicType } from "./magicType";
import {GoBar} from "./goBar";
import "../scss/style.scss";
import "jquery";
import "bootstrap";

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

var gbar =new GoBar();
var x = document.querySelector<HTMLElement>(".bgound");
x?.appendChild(gbar.svg);