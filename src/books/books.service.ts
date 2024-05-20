import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './books.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
let BookDB: Book[] = [];
type DeleteResType = { status: boolean; msg: string };

@Injectable()
export class BooksService {
  #client: Book[];
  constructor() {
    this.#client = BookDB;
  }

  async findAll(): Promise<Book[]> {
    return await new Promise((resolve, reject) => {
      resolve(this.#client);
    });
  }

  async findOne(id: number): Promise<Book> {
    return await new Promise((resolve, reject) => {
      const book = this.#client.find((book: Book) => book.id === id);
      if (!book)
        return reject(
          new HttpException(
            `book with id:${id} does not exist`,
            HttpStatus.BAD_REQUEST,
          ),
        );
      resolve(book);
    });
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const bookExist = this.#client.find(
      (book) => book.title === createBookDto.title,
    );

    if (bookExist)
      return await Promise.reject(
        new HttpException(`book already exist`, HttpStatus.BAD_REQUEST),
      );

    return await new Promise((resolve, reject) => {
      let book = { ...createBookDto, id: uuidv4() };
      this.#client.push(book);
      resolve(book);
    });
  }
  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const bookExist = this.#client.find((book: Book) => book.id === id);

    if (!bookExist)
      return await Promise.reject(
        new HttpException(
          `book with id:${id} does not exist`,
          HttpStatus.BAD_REQUEST,
        ),
      );

    return new Promise((resolve, reject) => {
      this.#client = this.#client.map((book) => {
        if (book.id === id) return { ...updateBookDto, id };
        return book;
      });

      resolve({ ...updateBookDto, id });
    });
  }

  async delete(id: number): Promise<DeleteResType> {
    return await new Promise((resolve, reject) => {
      const bookExist = this.#client.find((book) => book.id === id);
      if (!bookExist) {
        return reject(
          new HttpException(`book does not exist`, HttpStatus.BAD_REQUEST),
        );
      }
      this.#client.forEach((book, index) => {
        if (book.id === id) {
          this.#client.splice(index, 1);
        }
      });
      resolve({ status: true, msg: `book deleted successfully.` });
    });
  }
}
