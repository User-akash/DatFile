export default class Random {
    static number(min:number=0, max:number=100, resulation:number=1):number{
        let t = Math.random()*(max-min)+min;
        let num = Math.round(t/resulation)*resulation;
        num = Math.round(num*10000000000)/10000000000;
        return num;
    }
}