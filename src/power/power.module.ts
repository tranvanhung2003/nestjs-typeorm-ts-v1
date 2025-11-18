import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  imports: [PowerModule],
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
