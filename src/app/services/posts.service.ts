// Posts service
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from '../posts/post.model';

// Make sole instance of this service available on the root level.
@Injectable({providedIn: 'root'})

export class PostsService {
  // Attributes
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>()

  // Constructor
  constructor(private http: HttpClient) {}

  // Methods and Functions
  getPosts() {
    this.http.get<{message: string, posts:Post[]}>('http://localhost:3000/api/posts')
      .subscribe(res => {
        this.posts = res.posts
        this.postsUpdated.next([...this.posts])
      })
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    // Random id 0-100
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(100);
    const id = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // Both max and min are inclusive
    const post: Post = {id: id, title: title, content: content};

    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(res => {
        console.log(res.message)
        this.posts.push(post);
        this.postsUpdated.next([...this.posts])
      })
  }
}