import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messageRepo: MessagesRepository;

  constructor() {
    // DON'T DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION INSTEAD
    this.messageRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}
