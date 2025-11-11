import { Component, signal } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('8c');
  data!: Observable<number>;
  myArray: number[] = [];
  errors!: boolean;
  finished!: boolean;
  fetchData(): void {
    this.data = new Observable<number>((observer) => {
      setTimeout(() => { observer.next(1); }, 1000);
      setTimeout(() => { observer.next(2); }, 2000);
      setTimeout(() => { observer.next(3); }, 3000);
    });
    this.data.subscribe((value)=> this.myArray.push(value),
    error => this.errors = true,
    () => this.finished = true);
  }
}
