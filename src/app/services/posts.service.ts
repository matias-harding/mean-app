// Posts service
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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
    this.http
      .get<{message: string, posts: any}>('http://localhost:3000/api/posts')
      .pipe(
        // Map response to an array of posts with id, not _id
        map(res => {
          return res.posts.map(post => {
            return {
              title: post.title,
              content: post.content,
              id: post._id
            }
          })
        })
      )
      .subscribe(modifiedPosts => {
        this.posts = modifiedPosts
        this.postsUpdated.next([...this.posts])
      })
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};

    this.http
      .post<{ message: string }>("http://localhost:3000/api/posts", post)
      .subscribe(res => {
        console.log(res.message)
        this.posts.push(post);
        this.postsUpdated.next([...this.posts])
      })
  }

  deletePost(postId: string) {
    this.http
      .delete(`http://localhost:3000/api/posts/${postId}`)
      .subscribe(() => {
        console.log(`Post id: ${postId} Deleted!`)
        this.posts = this.posts.filter(post => post.id !== postId)
        this.postsUpdated.next([...this.posts])
      })
  }
}