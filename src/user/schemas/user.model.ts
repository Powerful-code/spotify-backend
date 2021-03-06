import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Album } from 'src/album/schemas/album.schemas';
import { Track } from 'src/track/schemas/track.schemas';

export type UserDocument = User & Document;

@Schema()
export class User {
  [x: string]: any;
  @Prop({ unique: true })
  email: string;

  @Prop({ unique: true })
  fullname: string;

  @Prop()
  password: string;

  @Prop()
  avatar: string;

  @Prop({ default: false })
  isAdmin?: boolean;

  @Prop({ default: false })
  isSinger?: boolean;

  @Prop()
  tracks: Track[];

  @Prop()
  albums: Album[];
}

export const UserSchema = SchemaFactory.createForClass(User);
