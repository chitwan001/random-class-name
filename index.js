export default class addClass{
    constructor(length , classname){
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
       this.className = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        this.className += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.className = this.className.trim();
    this.className = classname +'_'+ this.className
}
    getclassname = () =>{
    return this.className;
}
}