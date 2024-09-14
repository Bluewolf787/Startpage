import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [DatePipe],
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
}
