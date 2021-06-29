export class Point{
    //private x:number;
    //private y:number;

    constructor(private _x?:number,private _y?:number){
           // this.x = x;
           // this.y =y;
    }

    draw(){
       console.log('X: ' + this._x + 'Y: ' + this._y);
    }

    getDistance(another:Point){

    }

    get x(){
        return this._x;
    }

    set x(value){
            if(value<0){
                throw new Error("value of x can ont be less than zaro");
            }
            this._x = value;
    }
}

