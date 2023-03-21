import {question} from 'readline-sync';
export{};
let x:number = 0;
let dem:number=0;
let diem:number=0;
function reset():void{
    let noti:HTMLSpanElement=<HTMLSpanElement>document.getElementById("count");
    let result:HTMLParagraphElement=<HTMLParagraphElement>document.getElementById("result");
    let button:HTMLButtonElement=<HTMLButtonElement>document.getElementById("btn-guess");
    let reset:HTMLButtonElement=<HTMLButtonElement>document.getElementById("btn-reset");
    button.style.display="inline-block";
    reset.style.display="none";
    x = Math.floor(Math.random() * 101);
    console.log(x);
    dem=3;
    noti.innerHTML=String(dem);
    result.innerHTML="";

}
function check():void{
    dem--;
    let noti:HTMLSpanElement=<HTMLSpanElement>document.getElementById("count");
    let input:HTMLInputElement=<HTMLInputElement>document.getElementById("number");
    let y:number=Number(input.value);
    let result:HTMLParagraphElement=<HTMLParagraphElement>document.getElementById("result");
    switch(dem){
        case 0: 
            diem=30;
            break;
        case 1:
            diem=50;
            break;
        case 2:
            diem=100;
            break;
    }
    if(dem<=0 && y!=x) {
        result.innerHTML="Game over mat roi :D";
        let button:HTMLButtonElement=<HTMLButtonElement>document.getElementById("btn-guess");
        let reset:HTMLButtonElement=<HTMLButtonElement>document.getElementById("btn-reset");
        button.style.display="none";
        reset.style.display="inline-block";
    }
    else if(dem>=0){
        if(y==x) {
            result.innerHTML= "Win " + diem +" điểm";
            let button:HTMLButtonElement=<HTMLButtonElement>document.getElementById("btn-guess");
            let reset:HTMLButtonElement=<HTMLButtonElement>document.getElementById("btn-reset");
            button.style.display="none";
            reset.style.display="inline-block";
        }
        else{
                if(y<x) result.innerHTML="Số nhỏ quá";
                if(y>x) result.innerHTML="Số lớn quá";
        }
    }
    console.log(dem);
    if(dem>=0) noti.innerHTML=String(dem);
}