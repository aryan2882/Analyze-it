// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");


// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     role:{
//         type:String,
//         required:true,
//     },
//     statust:{
//         type:Boolean,
//         required:true,
//     }
//   },
//   {
//     timestamps: true,
//   }
// );

// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) {
//       return next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
//   });
  
//   //Method to compare password
//   userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
//   };

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    statust: {
      type: Boolean,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: null, // Track last login timestamp
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Update last login method
userSchema.methods.updateLastLogin = async function () {
  this.lastLogin = new Date();
  await this.save();
};

module.exports = mongoose.model("User", userSchema);
