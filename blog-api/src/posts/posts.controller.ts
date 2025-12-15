import {Controller, Get} from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
    getPosts(): string {
        return 'This is a list of blog posts';
    }

    @Get('category')
    getPostsByCategory(): string {
        return 'This is a list of blog posts in a category';
    }
}
