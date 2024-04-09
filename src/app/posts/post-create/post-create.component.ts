import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {

  constructor(public postsService: PostsService) { }
  onSave(form: NgForm) {
    if(form.invalid) {  return }
    
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm()
  }
}
