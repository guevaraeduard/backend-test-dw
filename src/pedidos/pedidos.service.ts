import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { Pedido } from '../entities/pedido.entity';
import { User } from '../entities/user.entity';
import { Product } from '../entities/product.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectModel(Pedido.name) private pedidoModel: Model<Pedido>,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    // Start a session for transaction
    const session = await this.pedidoModel.db.startSession();
    
    try {
      let createdPedido;
      
      await session.withTransaction(async () => {
        // Transform the DTO data to match the entity structure
        const pedidoData = {
          ...createPedidoDto,
          items: createPedidoDto.items.map(item => ({
            ...item,
            id: new Types.ObjectId(item.id)
          })),
        };

        // Update stock for each product
        for (const item of createPedidoDto.items) {
          const productId = new Types.ObjectId(item.id);
          const product = await this.productModel.findById(productId).session(session);
          
          if (!product) {
            throw new Error(`Producto con ID ${item.id} no encontrado`);
          }
          
          if (product.stock < item.quantity) {
            throw new Error(`Stock insuficiente para el producto ${product.name}. Stock disponible: ${product.stock}, cantidad solicitada: ${item.quantity}`);
          }
          
          // Update stock
          await this.productModel.findByIdAndUpdate(
            productId,
            { $inc: { stock: -item.quantity } },
            { new: true, session }
          );
        }

        // Create the order
        const newPedido = new this.pedidoModel(pedidoData);
        createdPedido = await newPedido.save({ session });
      });
      
      return createdPedido;
      
    } catch (error) {
      throw error;
    } finally {
      await session.endSession();
    }
  }

  findAll() {
    return this.pedidoModel.find().populate('user');
  }

  findUser(user: User) {
    const query = {
      user: user._id
    };

    return this.pedidoModel.find(query);
  }

}
