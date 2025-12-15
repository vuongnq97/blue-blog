import { Module } from '@nestjs/common';
import { TestLazyLoadingController } from './test-lazy-loading.controller';

@Module({
  controllers: [TestLazyLoadingController],
})
export class TestLazyLoadingModule {}
