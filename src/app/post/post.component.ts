import { Component } from '@angular/core';
import { postState } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postList } from './store/post.reducer';
import { selectPostValue } from './store/post.selector';
import { CommonModule, NgFor } from '@angular/common';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { MatButtonModule } from '@angular/material/button';
import { deletePost, updatePost } from './store/post.action';

@Component({
  selector: 'app-post',
  imports: [CommonModule,AddPostFormComponent,FlexLayoutModule,MatButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  $post : Observable<any>;
  constructor(private store : Store<postState>){
      this.$post = store.select(selectPostValue)
  }

  getPostData(postId:number){
    this.store.dispatch(updatePost({id:postId}));
  }

  deletePostData(postId:number){
     this.store.dispatch(deletePost({id:postId}));
  }
}
