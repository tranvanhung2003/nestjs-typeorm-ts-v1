import { Module } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
import { DiskService } from './disk.service';

@Module({
  imports: [PowerService],
  providers: [DiskService],
})
export class DiskModule {}
