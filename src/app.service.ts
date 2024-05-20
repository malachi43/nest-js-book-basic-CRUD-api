import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDocumentation(): string {
    const docs = `<a href="https://documenter.getpostman.com/view/23505718/2sA3QmEujz#4a315c26-3256-4b52-8373-81c1bccf9e35">DOCUMENTATION</a>`;
    return docs;
  }
}
