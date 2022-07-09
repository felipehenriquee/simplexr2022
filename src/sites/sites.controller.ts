import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  async create(@Body() createSiteDto: CreateSiteDto, @Body() updateSiteDto: UpdateSiteDto) {
    const result: any = await this.sitesService.findByModels(createSiteDto.arModel, createSiteDto.nome, createSiteDto.tipo );

    if (result){
      updateSiteDto.clique = result.clique + 1;
      return this.sitesService.update(result._id, updateSiteDto);
    }
    else{
      return this.sitesService.create(createSiteDto);

    }

  }

  @Get()
  findAll() {
    return this.sitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(id);
  }
  @Get('model/:id')
  findAllByModel(@Param('id') id: string) {
    return this.sitesService.findAllByModels(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.sitesService.update(id, updateSiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sitesService.remove(id);
  }
}
