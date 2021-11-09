import {Controller, Get, Res} from '@nestjs/common';
import {Response} from 'express';
import * as path from 'path';

@Controller()
export class AppController {
    @Get()
    getPage(@Res() res: Response): void {
        const pathFile = path.resolve(__dirname, '../static/index.html');
        res.sendFile(pathFile);
    }
}
