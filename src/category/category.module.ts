import { Module, forwardRef } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../entities/category.entity';
import { ProductModule } from '../product/product.module';

@Module({
  controllers: [CategoryController],  
  providers: [CategoryService],
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    forwardRef(() => ProductModule)
  ],
  exports: [CategoryService]
})
export class CategoryModule {}
