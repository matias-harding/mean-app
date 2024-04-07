// Posts service
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from '../posts/post.model';

// Make sole instance of this service available on the root level.
@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>()
  
  getPosts() {
    // Return an array without manipulating the original instance of this.posts
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }
}