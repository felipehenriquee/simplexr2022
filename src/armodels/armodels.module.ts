import { Armodel, ArmodelSchema } from './entities/armodel.entity';
import { Module } from '@nestjs/common';
import { ArmodelsService } from './armodels.service';
import { ArmodelsController } from './armodels.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({  
  imports: [MongooseModule.forFeature([{ name: Armodel.name, schema: ArmodelSchema }])],
  controllers: [ArmodelsController],
  providers: [ArmodelsService]
})
export class ArmodelsModule {}
