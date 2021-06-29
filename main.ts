function doSomething(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    //console.log('Finally: ' + i);
    let count =5;
    //count='a'

    let a:number;
    let b:boolean;
    let c:string;
    let d:any;
    let e:number[]=[1,2,3];
    let f:any[] = [1,true,'a',false];

    enum Color {Red, Green, Blue};
    let BackGroundColor = Color.Green;

}

interface Point {
    x:number,
    y:number,
    //draw:()=>void;
}

class Point1 {
    x:number;
    y:number;

    draw1(){

    }

    getDistance(another:Point){

    }
}

let drawPoint = (point:Point)=>{
    console.log(point.x);
}

function log(message){
    console.log(message);
}

let doLog =(message)=>{
    console.log(message);
}

var message = 'Hello World';

log(message);
doLog(message);
doSomething()
drawPoint({
    x:1,
    y:2
});