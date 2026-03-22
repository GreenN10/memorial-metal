import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendOrderCreatedEmail(params: {
  customerName: string;
  customerEmail: string;
  orderCode: string;
  total: number;
}) {
  if (!resend || !process.env.MAIL_FROM || !params.customerEmail) return;

  await resend.emails.send({
    from: process.env.MAIL_FROM,
    to: [params.customerEmail],
    subject: `Siparişiniz alındı • ${params.orderCode}`,
    html: `
      <div>
        <h2>Teşekkürler ${params.customerName}</h2>
        <p>Siparişiniz alındı.</p>
        <p>Sipariş No: <b>${params.orderCode}</b></p>
        <p>Toplam: <b>${params.total.toFixed(2)} TL</b></p>
      </div>
    `
  });
}

export async function sendOwnerNewOrderEmail(params: {
  orderCode: string;
  customerName: string;
  total: number;
}) {
  if (!resend || !process.env.MAIL_FROM || !process.env.MAIL_TO_OWNER) return;

  await resend.emails.send({
    from: process.env.MAIL_FROM,
    to: [process.env.MAIL_TO_OWNER],
    subject: `Yeni sipariş • ${params.orderCode}`,
    html: `
      <div>
        <h2>Yeni sipariş geldi</h2>
        <p>Müşteri: <b>${params.customerName}</b></p>
        <p>Sipariş No: <b>${params.orderCode}</b></p>
        <p>Tutar: <b>${params.total.toFixed(2)} TL</b></p>
      </div>
    `
  });
}