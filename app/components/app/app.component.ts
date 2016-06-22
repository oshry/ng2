import {Component} from '@angular/core';
import {MyComponent} from '../my-component/my-component.component';
import {TodosComponent} from '../todos/todos.component';
@Component({
    selector: 'my-app',
    template: `
                <h1>My First Angular 2 App</h1>
                <my-component></my-component>
                <todos></todos>
              `, 
    directives: [MyComponent, TodosComponent]
})
export class AppComponent { }
