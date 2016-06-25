import {Component, Inject, provide} from '@angular/core';

import {User} from '../../entity/user';
@Component({
    selector: 'my-form',
    template: `
                <h1>Form - two way binding</h1>
                <form>
                  <div class="form-group">
                    <label for="uid">User Id</label>
                    <input type="text" class="form-control" id="uid" [(ngModel)]="user.id" ngControl="uid"  #id="ngForm" placeholder="User Id" required>
                    <div [hidden]= "id.valid || id.pristine"class="alert alert-danger">Id is Required</div>
                  </div>
                  <div class="form-group">
                    <label for="name">User Name</label>
                    <input type="text" class="form-control" id="name" [(ngModel)]="user.name" ngControl="name" placeholder="User Name">
                  </div>
                  <div class="form-group">
                    <label for="name">Type</label>
                    <select class="form-control"  [(ngModel)]="user.type"  ngControl="type">
                        <option *ngFor="let type of types">{{type}}</option>
                    </select>
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
              `
})
export class AppComponent {
    color: string;
    promise: any;
    types: any = ['what', 'the', 'fuck'];
    user = new User(1, 'Blat', this.types[0]);
    submitted: any = false;
    constructor(){

        }

    }
