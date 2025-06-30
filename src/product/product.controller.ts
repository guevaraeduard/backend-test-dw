import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ParseMongoIdPipe } from '../pipes/parse-mongo-id.pipe';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('product')
@Auth()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Query() query: { category: string, search: string }) {
    return this.productService.findAll(query.category, query.search);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseMongoIdPipe) id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.productService.remove(id);
  }

  @Patch('change-active/:id')
  changeActive(@Param('id', ParseMongoIdPipe) id: string) {
    return this.productService.changeActive(id);
  }
}
