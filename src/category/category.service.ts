import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from 'src/entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {

    const {name, ...categoryData} = createCategoryDto;
    const category = await this.categoryModel.findOne({name: name.toLowerCase()});
    if(category){
      throw new BadRequestException('La categoria ya existe');
    } 
    const newCategory = await this.categoryModel.create({
      ...categoryData,
      name: name.toLowerCase(),
      slug: name.toLowerCase().replace(/ /g, '-'),
    });
    return newCategory;
  }

  async findAll() {
    const categories = await this.categoryModel.find();
    return categories;
  }

  async findOne(id: string) {
    const category = await this.categoryModel.findById(id);
    if(!category){
      throw new NotFoundException('La categoria no existe');
    }
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const {name, ...categoryData} = updateCategoryDto;

    // Si se proporciona un nombre, verificar que no exista otra categoría con el mismo nombre
    if(name) {
      const existingCategory = await this.categoryModel.findOne({ 
        name: name.toLowerCase(),
        _id: { $ne: id } // Excluir la categoría actual
      });
      if(existingCategory) {
        throw new BadRequestException('Ya existe una categoria con ese nombre');
      }
      
      // Actualizar el slug basado en el nuevo nombre
      const updateData = {
        ...categoryData,
        name: name.toLowerCase(),
        slug: name.toLowerCase().replace(/ /g, '-'),
      };
      
      const category = await this.categoryModel.findByIdAndUpdate(id, updateData, {new: true});
      if(!category){
        throw new NotFoundException('La categoria no existe');
      }
      return category;
    }

    const category = await this.categoryModel.findByIdAndUpdate(id, categoryData, {new: true});
    if(!category){
      throw new NotFoundException('La categoria no existe');
    }
    return category;
  }

  async remove(id: string) {
    const category = await this.categoryModel.findByIdAndDelete(id);
    if(!category){
      throw new NotFoundException('La categoria no existe');
    }
    return category;
  }
}
