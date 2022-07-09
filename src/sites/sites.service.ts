import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { Site, SiteDocument } from './entities/site.entity';

@Injectable()
export class SitesService {
  constructor(@InjectModel(Site.name) private SiteModel: Model<SiteDocument>) {}
  create(createSiteDto: CreateSiteDto) {
    const Site = new this.SiteModel(createSiteDto);
    return Site.save();
  }

  findAll() {
    return this.SiteModel.find().exec();

  }

  findByModels(arModel: any, nome: string, tipo: string) {
    return this.SiteModel.findOne({arModel, nome, tipo}).exec();
  }

  findAllByModels(arModel: any) {
    return this.SiteModel.find({ arModel : { $in : [arModel] }}).exec();
  }

  findOne(id: string) {
    return this.SiteModel.findById(id);
  }

  update(id: string, updateSiteDto: UpdateSiteDto) {
    return this.SiteModel.findByIdAndUpdate({
      _id: id
    },
    {
      ...updateSiteDto
    },
    {
      new: true
    }
    
    );
  }

  remove(id: string) {
    return this.SiteModel.deleteOne({
      _id:id,
    }).exec();
  }
}
