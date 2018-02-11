import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public todo : Todo = new Todo();

  constructor(public apiService: ApiService, public acRoute: ActivatedRoute) { }


  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
       console.log(data.id);
       if(data && data.id){
       	        this.apiService.get("todos/"+data.id).subscribe((data : Todo)=>{
		        this.todo = data;
 			 });
        } else  {
          this.todo = new Todo();
        }
    })
  }

  public onSubmit(){
    console.log("Adding a todo: " + this.todo.name);
    if(this.todo.id){
    this.apiService.update("todos/"+this.todo.id,this.todo).subscribe((r)=>{
        console.log("Editing a todo.");
        console.log(r);
      })
    } else
      this.apiService.post("todos",this.todo).subscribe((r)=>{
      console.log(r);
      this.todo = new Todo();
    });
  }
}
