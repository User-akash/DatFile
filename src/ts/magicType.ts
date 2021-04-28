interface MagicTypeControls{
    texts:Array<string>,
    delay:number
}

class MagicType{
    private spaChar = `!"#$%&'()*+,-:;<=>?@{|}~¡¢£¤¥¦§¼æ֍֎֏`;
    private nextTime = 100;
    private count = 0;
    private text: string;
    private trigar = true;
    private textIndex = 0;
    constructor(private element:HTMLElement, private options?:MagicTypeControls){
        this.action = this.action.bind(this);
        this.text = element.innerText;
        setTimeout(this.action, 1000);
    }
    private action(){
        if(this.trigar)
        {
            this.count++;
            if(this.count > this.text.length)
            {
                this.trigar = !this.trigar;
                if(this.options?.delay)
                    this.nextTime = this.options?.delay;
            }
        }
        else
        {
            this.count--;
            this.nextTime = 50;
            if(this.count < 0)
            {
                if(this.options?.texts)
                    {
                        this.text = this.options.texts[this.textIndex];
                        this.textIndex++;
                        if(this.textIndex > this.options.texts.length-1)
                            this.textIndex = 0;
                    }
                this.trigar = !this.trigar;
            }
        }
            
        this.element.innerText = this.text.substr(0, this.count)+this.genText(this.text.length-this.count);
        setTimeout(this.action, this.nextTime);
    }
    private genText(len:number){
        let text = "";
        for(let i=0; i < len; i++){
            let random = Math.random()*(this.spaChar.length-1);
            text+=this.spaChar[Math.floor(random)];
        }
        return text;
    }
}

export default MagicType;