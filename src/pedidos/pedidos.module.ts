import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { Pedido, PedidoSchema } from '../entities/pedido.entity';
import { Product, ProductSchema } from '../entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pedido.name, schema: PedidoSchema },
      { name: Product.name, schema: ProductSchema }
    ])
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
