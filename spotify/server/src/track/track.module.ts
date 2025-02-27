import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackSchema } from './schemas/track.schema';
import { CommentSchema } from './schemas/comment.schema';
import { FileService } from '../file/file.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name: "Track", schema: TrackSchema}]),
    MongooseModule.forFeature([{name: "Comment", schema: CommentSchema}])
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService]
})
export class TrackModule {}
