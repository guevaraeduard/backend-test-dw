import { Module } from '@nestjs/common';
import { FrontendService } from './frontend.service';
import { FrontendController } from './frontend.controller';
import { ProductModule } from '../product/product.module';
import { CategoryModule } from '../category/category.module';

@Module({
  controllers: [FrontendController],
  providers: [FrontendService],
  imports:[
    CategoryModule,
    ProductModule
  ]
})
export class FrontendModule {}
