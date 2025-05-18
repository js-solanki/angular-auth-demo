import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { postState } from '../../store';
import { Store } from '@ngrx/store';
import { ADD_POST_ACTION, addPost } from '../store/post.action';

@Component({
  selector: 'app-add-post-form',
  imports: [FlexLayoutModule,CommonModule,MatButton,ReactiveFormsModule,
    MatFormFieldModule,FormsModule,
    MatInputModule],
  templateUrl: './add-post-form.component.html',
  styleUrl: './add-post-form.component.scss'
})
export class AddPostFormComponent {

  addPostForm: FormGroup = new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required]),
  }
  );

  constructor(private store: Store<postState> ){

  }

  saveData(){
    this.store.dispatch(addPost(this.addPostForm.value));
    this.addPostForm.reset();
  }

  clearData(){
    this.addPostForm.reset();
  }
}
