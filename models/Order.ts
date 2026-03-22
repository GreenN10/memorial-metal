import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    orderCode: { type: String, required: true, unique: true },
    cargoCode: { type: String, default: "" },
    userEmail: { type: String, required: true },
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    note: { type: String, default: "" },
    uploadedImage: { type: String, default: "" },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, default: "pending" },
    status: { type: String, default: "Sipariş Alındı" },
    total: { type: Number, required: true },
    items: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
        size: String
      }
    ]
  },
  { timestamps: true }
);

export const Order = models.Order || model("Order", OrderSchema);
