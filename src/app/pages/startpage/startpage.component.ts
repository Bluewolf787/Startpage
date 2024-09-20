import { Component, OnInit } from '@angular/core';
import { BookmarksComponent } from '../../common/bookmarks/bookmarks.component';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [BookmarksComponent],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.scss',
})
export class StartpageComponent implements OnInit {
  myDate: Date | undefined;
  cite: string | undefined;

  ngOnInit(): void {
    this.cite =
      '"A computer is like air conditioning - it becomes useless when you open Windows." Linus Torvalds';

    this.utcTime();
  }

  utcTime(): void {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }

  showTime(): string {
    const date = new Date();

    const today = date.toLocaleString('en', { weekday: 'long' });
    const hour = date.toLocaleString('pl', { hour: '2-digit' }); // use 24h time format
    const minute = this.addZero(
      date.toLocaleString('en', { minute: '2-digit' })
    );
    const second = this.addZero(
      date.toLocaleString('en', { second: '2-digit' })
    );
    const day = date.toLocaleString('en', { day: '2-digit' });
    const month = date.toLocaleString('en', { month: 'short' });
    const year = date.toLocaleString('en', { year: 'numeric' });

    return `${hour}:${minute}:${second} ${today} ${day}, ${month} ${year}`;
  }

  addZero(i: string): string {
    if (i.length < 2) i = '0' + i;
    return i;
  }
}
