import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {
  postContent = '';
  newPost = 'NO CONTENT';
  onSave() {
    this.newPost = this.postContent;
  }
}
