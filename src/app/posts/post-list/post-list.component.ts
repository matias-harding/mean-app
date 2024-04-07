import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts = [
    {
      "title": "Unforgettable Evening",
      "content": "The ambiance was perfect for our anniversary dinner. The staff went above and beyond, making us feel special. Every dish was a delight, especially the seared scallops."
    },
    {
      "title": "Family Friendly and Delicious",
      "content": "Took the kids on Saturday and had a great time. The menu has something for everyone, and the kids' play area is a godsend. The pizza was a hit with the little ones!"
    },
    {
      "title": "Best Brunch in Town",
      "content": "Sunday brunch here is a must-try! The French toast with fresh berries is my go-to, and their coffee is simply the best. Cozy atmosphere and friendly service always."
    },
    {
      "title": "Exquisite Vegetarian Options",
      "content": "As a vegetarian, it's often hard to find a variety of options, but this place is a gem. The vegetarian lasagna was rich in flavor, and the garden salad was fresh and crisp."
    },
    {
      "title": "A Disappointing Experience",
      "content": "Unfortunately, our visit didn't meet expectations. The service was slow, and my steak was overcooked. However, the manager was understanding and offered a complimentary dessert."
    }
  ]
  
}
