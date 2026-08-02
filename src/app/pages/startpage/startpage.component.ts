import {
  Component,
  OnDestroy,
  computed,
  signal,
} from '@angular/core'
import { BookmarksComponent } from '../../common/bookmarks/bookmarks.component'

@Component({
  selector: 'app-startpage',
  standalone: true,
  imports: [BookmarksComponent],
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss'],
})
export class StartpageComponent implements OnDestroy {
  myDate = signal(new Date());
  cite = signal(
    '"A computer is like air conditioning - it becomes useless when you open Windows." Linus Torvalds'
  );

  ngOnDestroy(): void {
    window.clearInterval(this.intervalId)
  }

  readonly currentTime = computed(() => {
    const date = this.myDate()

    const today = date.toLocaleString('en', { weekday: 'long' })
    const hour = date.toLocaleString('pl', { hour: '2-digit' })
    const minute = this.addZero(date.toLocaleString('en', { minute: '2-digit' }))
    const second = this.addZero(date.toLocaleString('en', { second: '2-digit' }))
    const day = date.toLocaleString('en', { day: '2-digit' })
    const month = date.toLocaleString('en', { month: 'short' })
    const year = date.toLocaleString('en', { year: 'numeric' })

    return `${hour}:${minute}:${second} ${today} ${day}, ${month} ${year}`
  });

  private intervalId = window.setInterval(() => {
    this.myDate.set(new Date())
  }, 1000);


  addZero(i: string): string {
    if (i.length < 2) i = '0' + i
    return i
  }
}
