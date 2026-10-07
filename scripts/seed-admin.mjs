import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI eksik");
}

const UserSchema = new mongoose.Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User || mongoose.model("User", UserSchema);

async function main() {
  await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  });

  const fullName =
    process.env.ADMIN_NAME || "MemoriaMetal Admin";

  const email =
    process.env.ADMIN_EMAIL || "admin@memoriametal.com";

  const password =
    process.env.ADMIN_PASSWORD || "Memoria@2027Admin";

  const hashed = await bcrypt.hash(password, 10);

  await User.updateOne(
    { email },
    {
      $set: {
        fullName,
        email,
        password: hashed,
        role: "admin",
      },
    },
    {
      upsert: true,
    }
  );

  console.log("================================");
  console.log("ADMIN KULLANICI HAZIR");
  console.log("E-posta:", email);
  console.log("Rol: admin");
  console.log("================================");

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error("ADMIN OLUŞTURMA HATASI:");
  console.error(err);
  process.exit(1);
});