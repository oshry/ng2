import {Component, Inject, provide} from '@angular/core';
import {MyComponent} from '../my-component/my-component.component';
import {TodosComponent} from '../todos/todos.component';
//dependency injection 
import {Car} from '../../services/car/car.service';
import {Body} from '../../services/body/body.service';
import {Engine} from '../../services/engine/engine.service';
import {Tires} from '../../services/tires/tires.service';
@Component({
    selector: 'my-app',
    template: `
                <h1>My First Angular 2 App</h1>
                {{color}}
                <my-component></my-component>
                <todos></todos>
              `, 
    directives: [MyComponent, TodosComponent],
    providers: [Car, Body, Engine, Tires]
})
export class AppComponent {
    color: string;

    constructor(@Inject(Car) c:any){
        this.color = c.body.color;

    }
}
