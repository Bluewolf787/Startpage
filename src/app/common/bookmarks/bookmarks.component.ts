import { Component } from '@angular/core';
import { BookmarkCategory } from '../../interfaces/bookmark-category';
import { bookmarks } from '../../constants/bookmarks';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss',
})
export class BookmarksComponent {
  bookmarkCategories: BookmarkCategory[];

  constructor() {
    this.bookmarkCategories = bookmarks;
  }
}
