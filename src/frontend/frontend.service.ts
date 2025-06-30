import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryService } from '../category/category.service';
import { ProductService } from '../product/product.service';


@Injectable()
export class FrontendService {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService

  ) { }
  async  getProductsCategoies() {

    return await this.productService.findAll('', '')
  }

  async getCategory(slug: string) {
    return await this.categoryService.findBySlug(slug)
  }
  async getProduct(id: string) {
    try {
      const product = await this.productService.findOne(id)
      const categoryId = (product.category as any)._id || product.category
      
      const relations = await this.productService.searchCategoryProduct(categoryId.toString())
     
      return {
        product,
        relations
      }
    } catch (error) {
      throw new NotFoundException(error);
    }

  }
}
