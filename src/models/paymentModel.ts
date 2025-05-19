import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  utr: String,
  name: String,
  amount: Number,
  status: { type: String, default: 'pending' },
}, { timestamps: true });

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
