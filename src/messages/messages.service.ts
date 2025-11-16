import { Injectable, NotFoundException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessagesRepository) {}

  async findOne(id: string) {
    const message = await this.messageRepository.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }

  async findAll() {
    return this.messageRepository.findAll();
  }

  async create(content: string) {
    return this.messageRepository.create(content);
  }
}
