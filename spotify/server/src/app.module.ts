import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from "path"
@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static'), }),
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://mirx:1234@cluster0.pbg250l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    FileModule
  ],
})
export class AppModule {}
