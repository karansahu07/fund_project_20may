import mongoose from 'mongoose';

const investmentRecordSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId, // or String, depending on your auth system
    required: true,
    ref: 'employee'
  },
  schemeCode: {
    type: String, // Mutual Fund Scheme code like "119721"
    required: true,
  },
  unitsPurchased: {
    type: Number,
    required: true,
  },
  amountInvested: {
    type: Number,
    required: true,
  },
  navAtPurchase: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('InvestmentRecord', investmentRecordSchema);
