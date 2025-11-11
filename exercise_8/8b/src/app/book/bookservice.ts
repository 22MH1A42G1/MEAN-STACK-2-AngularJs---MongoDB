import { Injectable } from '@angular/core';
import { BOOKS } from './books-data';
@Injectable({
  providedIn: 'root'
})
export class Bookservice {
  getBooks() {
    return BOOKS;
  }
}
