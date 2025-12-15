import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TestLazyLoadingProxyController } from './test-lazy-loading/test-lazy-loading.proxy.controller';

@Module({
  imports: [
    AccountModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, PostsController, TestLazyLoadingProxyController],
  providers: [AppService],
})
export class AppModule {}
