import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  getFile(filename: string) {
    const filePath = join(__dirname, '../../static/uploads', filename);
    if (!existsSync(filePath)) {
      throw new BadRequestException('File not found');
    }
    return filePath;
  }
}
