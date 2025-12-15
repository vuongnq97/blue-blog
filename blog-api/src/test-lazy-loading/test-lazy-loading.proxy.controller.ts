import { Controller, Get } from '@nestjs/common';
import { LazyModuleLoader, ModuleRef } from '@nestjs/core';
import { TestLazyLoadingController } from './test-lazy-loading.controller';
import {Public} from "../auth/decorators/public.decorator";

@Controller('test-lazy-loading')
export class TestLazyLoadingProxyController {
  private moduleRef?: ModuleRef;

  constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}

  @Public()
  @Get()
  async getStatus() {
    if (!this.moduleRef) {
      this.moduleRef = await this.lazyModuleLoader.load(() =>
        import('./test-lazy-loading.module.js').then(
          (m) => m.TestLazyLoadingModule,
        ),
      );
    }

    const controller = this.moduleRef.get(TestLazyLoadingController, {
      strict: false,
    });

    return controller.getStatus();
  }
}
