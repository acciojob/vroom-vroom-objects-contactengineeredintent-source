// Complete the js code
class Car{
	constructor(make, model){
		this.make = make;
		this.model = model;
	}
	
	get getMakeModel() {
		return `${this.make} ${this.model}`;
	}
}

class SportsCar extends Car{
    constructor(make, model, topSpeed){
        super(make, model);
        this._topSpeed = topSpeed;
    }
    
    get gettopSpeed(){
        return this._topSpeed;
    }
    
    set topSpeed(topSpeed){
        this._topSpeed = topSpeed;
    }
}

function SportsCar(make, model, topSpeed) {}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
