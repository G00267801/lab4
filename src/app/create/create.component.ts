import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddMovie(form: NgForm) {

    //this.service.addPost(form.value.title, form.value.content).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }

}
