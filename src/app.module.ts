import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClicksModule } from './clicks/clicks.module';
import { SitesModule } from './sites/sites.module';
import { ArmodelsModule } from './armodels/armodels.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb+srv://felipeTable:dviYXi7lDLMro5L6@cluster0.yik6j.mongodb.net/simplexr?retryWrites=true&w=majority'),
    // MongooseModule.forRoot('mongodb+srv://FelipeHenrique:DjCXPhQcLEdXkW68@cluster0.mav8k.mongodb.net/Deployments?retryWrites=true&w=majority'), 
    // MongooseModule.forRoot('mongodb://localhost/simplexr'), 
    ClicksModule, SitesModule, ArmodelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
