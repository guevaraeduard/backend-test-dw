import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FrontendService } from './frontend.service';
import { ParseMongoIdPipe } from '../pipes/parse-mongo-id.pipe';


@Controller('frontend')
export class FrontendController {
  constructor(private readonly frontendService: FrontendService) {}

  @Get('products-categories')
  getProductsCategoies() {
    return this.frontendService.getProductsCategoies();
  }

  @Get('category/:slug')
  getCategory(@Param('slug') slug: string) {
    return this.frontendService.getCategory(slug);
  }

  @Get('product/:id')
  getProduct(@Param('id', ParseMongoIdPipe) id: string) {
    return this.frontendService.getProduct(id);
  }

 
}
