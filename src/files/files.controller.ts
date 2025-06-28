import { Controller, Post, BadRequestException, UploadedFile, UseInterceptors, Get, Res, Param } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilterImage, fileNamer } from '../helper/helpers';
import { Auth } from '../auth/decorators/auth.decorator';
import { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload/images')
  @Auth()
  @UseInterceptors(FileInterceptor('file', {
    fileFilter: fileFilterImage,
    limits: {
      fileSize: 1024 * 1024 * 10, // 10MB
    },
    storage: diskStorage({
      destination: './static/uploads',
      filename: fileNamer,
    }),
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    const baseUrl = 'http://localhost:3001/api';
    //const baseUrl = 'http://localhost:3001/api';
    const url = `${baseUrl}/files/${file.filename}`;
    return {
      url,
    };
  }

  @Get('/:filename')
  getFile(
    @Res() res: Response,
    @Param('filename') filename: string
  ) {
    const path = this.filesService.getFile(filename);
    res.sendFile(path);
  }

}
