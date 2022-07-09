import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArmodelDto } from './dto/create-armodel.dto';
import { UpdateArmodelDto } from './dto/update-armodel.dto';
import { Armodel, ArmodelDocument } from './entities/armodel.entity';

@Injectable()
export class ArmodelsService {
  constructor(@InjectModel(Armodel.name) private ArmodelModel: Model<ArmodelDocument>) {}
  create(createArmodelDto: CreateArmodelDto) {
    const Armodel = new this.ArmodelModel(createArmodelDto);
    return Armodel.save();
  }

  findAll() {
    return this.ArmodelModel.find().exec();

  }

  findOne(idModel: string) {
    return this.ArmodelModel.findOne({idModel});
  }
  findByModels(idModel: string) {
    return this.ArmodelModel.findOne({idModel}).exec();
  }

  update(id: string, updateArmodelDto: UpdateArmodelDto) {
    return this.ArmodelModel.findByIdAndUpdate({
      _id: id
    },
    {
      ...updateArmodelDto
    },
    {
      new: true
    }
    
    );
  }

  remove(id: string) {
    return this.ArmodelModel.deleteOne({
      _id:id,
    }).exec();
  }
}
