import { Component } from '@angular/core';
import { postState } from '../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postList } from './store/post.reducer';
import { selectPostValue } from './store/post.selector';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  $post : Observable<any>;
  constructor(private store : Store<postState>){
      this.$post = store.select(selectPostValue)
  }

}
