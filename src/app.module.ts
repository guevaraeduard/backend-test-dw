import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { FilesModule } from './files/files.module';
import { FrontendModule } from './frontend/frontend.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb+srv://guevaraeduard97:Eduard1997@cluster0.pouzdxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    CategoryModule,
    ProductModule,
    FilesModule,
    FrontendModule,
    PedidosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
