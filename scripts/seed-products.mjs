import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error("MONGODB_URI eksik");

const ProductSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
  price: Number,
  size: String,
  description: String,
  image: String,
  isActive: Boolean
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

const products = [
  { name: "A5 Metal Tablo", slug: "a5-metal-tablo", price: 299.9, size: "A5", description: "Kompakt ölçüde parlak metal baskı.", image: "/placeholder-product.png", isActive: true },
  { name: "A4 Metal Tablo", slug: "a4-metal-tablo", price: 499.9, size: "A4", description: "En çok tercih edilen metal tablo ölçüsü.", image: "/placeholder-product.png", isActive: true },
  { name: "A3 Metal Tablo", slug: "a3-metal-tablo", price: 699.9, size: "A3", description: "Geniş yüzeyli premium metal baskı.", image: "/placeholder-product.png", isActive: true }
];

async function main() {
  await mongoose.connect(MONGODB_URI, { bufferCommands: false });
  for (const item of products) {
    await Product.updateOne({ slug: item.slug }, item, { upsert: true });
  }
  console.log("Örnek ürünler yüklendi.");
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
