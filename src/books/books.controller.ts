import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './books.interface';
type DeleteResType = { status: boolean; msg: string };

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}
  @Get()
  async getBooks(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Get(':id')
  async getBook(@Param('id') id: number): Promise<Book> {
    return this.bookService.findOne(id);
  }

  @Post()
  createBook(@Body() createbookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createbookDto);
  }

  @Put(':id')
  async updateBook(
    @Body() updatebookDto: UpdateBookDto,
    @Param('id') id: number,
  ): Promise<Book> {
    return this.bookService.update(id, updatebookDto);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<DeleteResType> {
    return this.bookService.delete(id);
  }
}
