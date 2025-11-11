import { Component, OnInit } from '@angular/core';
import { Books } from './books';
import { Bookservice } from './bookservice';
@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit {
  books: Books[] = [];

  constructor(private bookservice: Bookservice) {}

  getBooks(): void {
    this.books = this.bookservice.getBooks();
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
