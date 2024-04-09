import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; 

import { PostsService } from '../../services/posts.service'

import { Post } from '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[]=[]
  private postsSub: Subscription

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
      this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[]) => {
          this.posts = posts
        })
  }
  

  ngOnDestroy(): void {
      this.postsSub.unsubscribe()
  }
  
}
