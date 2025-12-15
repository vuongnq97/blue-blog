import { Controller, Get } from '@nestjs/common';
import {Public} from "../auth/decorators/public.decorator";

@Controller()
export class TestLazyLoadingController {

  @Get()
  @Public()
  getStatus() {
    return {
      message: 'Test lazy loading module loaded successfully',
      timestamp: new Date().toISOString(),
    };
  }
}
