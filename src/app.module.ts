import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';

@Module({
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
  imports: [BooksModule],
})
export class AppModule {}
