import { BadRequestException, Injectable, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../entities/product.entity';
import { CategoryService } from '../category/category.service';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
    @Inject(forwardRef(() => CategoryService))
    private categoryService: CategoryService,
  ) { }

  async create(createProductDto: CreateProductDto) {
    const { name, sku, ...productData } = createProductDto;
    const product = await this.productModel.findOne({ sku: sku.toLowerCase() });
    if (product) {
      throw new BadRequestException('El producto ya existe');
    }
    const newProduct = await this.productModel.create({
      ...productData,
      sku: sku.toLowerCase(),
      name,
      slug: name.toLowerCase().replace(/ /g, '-') + sku.toLowerCase().replace(/ /g, '-'),
    });
    return newProduct;
  }

  async findAll(category: string, search: string) {
    let query = {};
    if (category && category.trim() !== '') {

      query = {
        category: category,
      };

    }

    let products = await this.productModel.find(query).populate('category');

    if (search && search.trim() !== '') {
      products = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

    }

    const categories = await this.categoryService.findAll();
    return {
      products: products,
      categories: categories.categories,
    };
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).populate('category');
    if (!product) {
      throw new NotFoundException('El producto no existe');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { name, sku, ...productData } = updateProductDto;
    if (sku && name) {
      const existingProduct = await this.productModel.findOne({
        sku: sku.toLowerCase(),
        name,
        slug: name.toLowerCase().replace(/ /g, '-') + sku.toLowerCase().replace(/ /g, '-'),
        _id: { $ne: id }
      });
      if (existingProduct) {
        throw new BadRequestException('Ya existe un producto con ese sku');
      }
    }
    const product = await this.productModel.findByIdAndUpdate(id, productData, { new: true });
    if (!product) {
      throw new NotFoundException('El producto no existe');
    }
    return product;
  }

  async remove(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) {
      throw new NotFoundException('El producto no existe');
    }
    return product;
  }

  async changeActive(id: string) {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('El producto no existe');
    }
    product.active = !product.active;
    await product.save();
    return product;
  }

  async countProducts() {
    let products = await this.productModel.find().countDocuments()
    return products;
  }

  async searchCategoryProduct(id: string) {
    const query = {
      category: id,
    };

    const products = await this.productModel.find(query);
    
    return products
  }
}
