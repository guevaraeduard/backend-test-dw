import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) { }

  async create(createProductDto: CreateProductDto) {
    const { sku, ...productData } = createProductDto;
    const product = await this.productModel.findOne({ sku: sku.toLowerCase() });
    if (product) {
      throw new BadRequestException('El producto ya existe');
    }
    const newProduct = await this.productModel.create({
      ...productData,
      sku: sku.toLowerCase(),
    });
    return newProduct;
  }

  async findAll() {
    const products = await this.productModel.find();
    return products;
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('El producto no existe');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { sku, ...productData } = updateProductDto;
    if (sku) {
      const existingProduct = await this.productModel.findOne({
        sku: sku.toLowerCase(),
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
}
