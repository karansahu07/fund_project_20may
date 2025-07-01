import mongoose, { Schema, Document } from 'mongoose';

export interface ICounter extends Document {
  id: string;
  seq: number;
}

const CounterSchema = new Schema<ICounter>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

const Counter = mongoose.models.Counter || mongoose.model<ICounter>('Counter', CounterSchema);
export default Counter;
