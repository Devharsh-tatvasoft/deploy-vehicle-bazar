import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema({ timestamps: true })
export class Location {
  @Prop({ required: true, type: String })
  city: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
