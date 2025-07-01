// import mongoose, { Schema, Document, Model } from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';

// export interface IUser extends Document {
//   user_id : string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   phone: string;
//   dateOfJoining: Date;
//   dateOfResigning: Date;
//   dob: Date;
//   role: 'admin' | 'employee';
//   isActive: boolean;
//   createdBy: mongoose.Types.ObjectId;
//   updatedBy: mongoose.Types.ObjectId;
// }

// const UserSchema: Schema<IUser> = new Schema<IUser>(
//   {
//     firstName: {
//       type: String,
//       required: [true, 'First name is required'],
//       trim: true,
//       minlength: 2,
//       maxlength: 50,
//     },
//     lastName: {
//       type: String,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//       trim: true,
//       lowercase: true,
//       match: [/\S+@\S+\.\S+/, 'Email is invalid'],
//     },
//     password: {
//       type: String,
//     },
//     phone: {
//       type: String,
//       required: [true, 'Phone number is required'],
//       match: [/^\+?[0-9]{10,15}$/, 'Phone number is invalid'],
//     },
//     dateOfJoining: {
//       type: Date,
//       required: [true, 'Date of joining is required'],
//     },
//     dateOfResigning: {
//       type: Date,
//       default : null
//     },
//     dob: {
//       type: Date,
//       required: [true, 'Date of birth is required'],
//     },
//     role: {
//       type: String,
//       enum: ['admin', 'employee'],
//       default: 'employee',
//     },
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//     createdBy: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     },
//     updatedBy: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   },
//   {
//     timestamps: true, // Adds createdAt and updatedAt
//   }
// );

// const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
// export default User;



import mongoose, { Schema, Document, Model } from 'mongoose';
import Counter from './Counter'; // import the counter model

export interface IUser extends Document {
  user_id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  dateOfJoining: Date;
  dateOfResigning: Date | null;
  dob: Date;
  role: 'admin' | 'employee';
  isActive: boolean;
  createdBy: mongoose.Types.ObjectId;
  updatedBy: mongoose.Types.ObjectId;
}

const UserSchema: Schema<IUser> = new Schema<IUser>(
  {
    user_id: {
      type: Number,
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^\+?[0-9]{10,15}$/, 'Phone number is invalid'],
    },
    dateOfJoining: {
      type: Date,
      required: [true, 'Date of joining is required'],
    },
    dateOfResigning: {
      type: Date,
      default: null,
    },
    dob: {
      type: Date,
      required: [true, 'Date of birth is required'],
    },
    role: {
      type: String,
      enum: ['admin', 'employee'],
      default: 'employee',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);


UserSchema.pre<IUser>('save', async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { id: 'user_id' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.user_id = counter.seq;
  }
  next();
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
