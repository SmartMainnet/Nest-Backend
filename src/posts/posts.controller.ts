import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@ApiTags('Посты')
@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @ApiOperation({ summary: 'Создание поста' })
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(
        @Body() dto: CreatePostDto,
        @UploadedFile() image
        ) {
        return this.postsService.create(dto, image)
    }

}
