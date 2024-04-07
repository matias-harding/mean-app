import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {
  postTitle = '';
  postContent = '';
  @Output() newPost = new EventEmitter();

  onSave() {
    const post = {
      title: this.postTitle,
      content: this.postContent
    }

    this.newPost.emit(post);
  }
}
