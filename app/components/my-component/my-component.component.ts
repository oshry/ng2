import {Component} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
                <br>
                <!--interpolation binding-->
                <h1>Hello Component {{name}}</h1>
                <!--property binding-->
                <img [src] = "imageUrl" />
                <!--class binding-->
                <button [class.isActive] = "isActive">Button</button>
                <!--style binding-->
                <button [style.background-color] = "isActive1 ? 'red': 'green'">Button</button>
                <!--trigger binding-->
                <button (click) = "changeMessage()">Trigger Binding</button>
                <h2>{{clickMessage}}</h2>
                <!--two way binding and ng model change-->
                <input [(ngModel)]="name" (ngModelChange) = "setUpperCase($event)"/>
                `

})
export class MyComponent {
    name:any;
    imageUrl:any;
    isActive:any;
    isActive1:any;
    clickMessage:any;
    constructor(){
        this.name = 'John Doe';//interpolation binding
        this.imageUrl = 'http://lorempixel.com/400/200';// property binding
        this.isActive = true;//class binding
        this.isActive1 = true;//style binding
    }
    //trigger binding
    changeMessage(){
        this.clickMessage = 'Hello World';
    }
    //ng model change
    setUpperCase(e:any){
        this.name = e.toUpperCase();
    }
}