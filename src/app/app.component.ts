import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mean-app';

  postsList = []

  onNewPost(post) {
    this.postsList.push(post)
  }
}
