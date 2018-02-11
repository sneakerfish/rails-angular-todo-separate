import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public columns = ['id', 'name', 'description', 'dueby', 'completed'];
  public rows : Array<Todo>;

  constructor(public apiService: ApiService, public router: Router) { }

  ngOnInit() {
    this.apiService.get("todos").subscribe((data: Todo[])=>{
      console.log(data);
      this.rows = data;
    });
  }

  public delete(id:string) {
    console.log("deleting : " + id);
    var path = 'todos/' + id;
    this.apiService.delete(path).subscribe((r)=>{
      this.rows = this.rows.filter((p,i)=>{
        if (Number(id) === p.id) {
	  return false;
	}
	return true;
      }, this.rows)
     });
  }

  public update(id:string) {
    console.log("update: " + id);
    this.router.navigateByUrl('/add/' + id);
  }
}
