import {Component} from '@angular/core';
@Component({
    selector: 'todos',
    template: `
                <h1>My Todos</h1>
                <!--if-->
                <div *ngIf="todos">
                    TEST
                </div>
                <!--else-->
                <div *ngIf="!todos">
                    Not Found
                </div>
                <!--switch-->
                <div [ngSwitch] = "name">
                    <div *ngSwitchCase = "'john'">
                        oshry                   
                    </div>
                    <div *ngSwitchDefault>
                        Something Else                   
                    </div>
                </div>
                <!--for-->
                <ul>
                    <li *ngFor="let todo of todosArr">
                        <a href="#" (click)="removeTodo(todo)">{{todo}}</a>
                    </li>
                </ul>
                <!--user input-->
                <br>
                <div>
                    <div *ngIf="errorMsg">{{errorMsg}}</div>
                    <div *ngIf="successMsg">{{successMsg}}</div>
                    <input type="text" class="clasic-one" [(ngModel)]="newTodo" (keyup.enter)="addTodo()"/>
                </div>
                <button (click)="resetTodo()">Clear List</button>
                <br>  
              `,
})
export class TodosComponent {
    todos;
    name;
    todosArr;
    newTodo;
    errorMsg;
    successMsg;
    constructor(){
         this.todos = 'hello';
         this.name = 'pery';
         this.todosArr = ['Wash Dishes', 'Pickup Kids', 'Eat Dinner'];
    }
    addTodo(){
        if(!this.newTodo || this.newTodo.length < 3){
            this.successMsg = '';
            this.errorMsg = 'Todo must be at least 3 characters';
        }else{
            this.todosArr.push(this.newTodo);
            this.errorMsg = '';
            this.successMsg = 'Great Success';
        }

    }
    removeTodo(todo){
        this.todosArr.splice(this.todosArr.indexOf(todo), 1);
    }
    resetTodo(){
        this.todosArr.length = 0;
        this.successMsg = 'Todos Cleared';
    }
}
