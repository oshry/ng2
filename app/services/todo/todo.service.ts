export class TodoService{
    todosArr = ['Wash Dishes11', 'Pickup Kids22', 'Eat Dinner33'];
    getTodos(){
        return this.todosArr;
    }
    addTodo(newOne:any){
        this.todosArr.push(newOne);
    }
}