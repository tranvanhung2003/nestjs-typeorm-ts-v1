import { NotFoundException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepo: MessagesRepository;

  constructor() {
    // DON'T DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION INSTEAD
    this.messageRepo = new MessagesRepository();
  }

  async findOne(id: string) {
    const message = await this.messageRepo.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }

  async findAll() {
    return this.messageRepo.findAll();
  }

  async create(content: string) {
    return this.messageRepo.create(content);
  }
}
