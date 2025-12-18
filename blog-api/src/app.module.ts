import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TestLazyLoadingProxyController } from './test-lazy-loading/test-lazy-loading.proxy.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsModule } from './blogs/blogs.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    AccountModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-app',
      }),
    }),
    BlogsModule,
    TagsModule,
    CategoriesModule,
    CommentsModule,
    PostsModule,
  ],
  controllers: [AppController, TestLazyLoadingProxyController],
  providers: [AppService],
})
export class AppModule {}
