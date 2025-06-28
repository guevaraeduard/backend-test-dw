import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

const fileFilterImage = (req: Express.Request, file: Express.Multer.File, callback: Function) => {
    if (!file) return callback(new Error('File is required'), false);
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(new HttpException('Archivo no válido', HttpStatus.BAD_REQUEST), false);
    }
}

const fileNamer = (req: Express.Request, file: Express.Multer.File, callback: Function) => {
    if (!file) return callback(new Error('File is required'), false);
    const extension = file.mimetype.split('/')[1];
    const filename = `${uuid()}.${extension}`;
    callback(null, filename);
}


export { fileFilterImage, fileNamer };