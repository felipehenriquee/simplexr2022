import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArmodelsService } from './armodels.service';
import { CreateArmodelDto } from './dto/create-armodel.dto';
import { UpdateArmodelDto } from './dto/update-armodel.dto';

@Controller('armodels')
export class ArmodelsController {
  constructor(private readonly armodelsService: ArmodelsService) {}

  @Post()
  async create(@Body() createArmodelDto: CreateArmodelDto, @Body() updateArmodelDto: UpdateArmodelDto) {
    const result: any = await this.armodelsService.findByModels(createArmodelDto.idModel);

    if (result){
      updateArmodelDto.clique = result.clique + 1;
      return this.armodelsService.update(result._id, updateArmodelDto);
    }
    else{
      return this.armodelsService.create(createArmodelDto);

    }
  }

  @Get()
  findAll() {
    return this.armodelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armodelsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArmodelDto: UpdateArmodelDto) {
    return this.armodelsService.update(id, updateArmodelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armodelsService.remove(id);
  }
}
