import fs from "fs";
import { NextResponse } from "next/server";
import { promisify } from "util";

import {
  SERVICE_PROVIDER_EMAIL,
  SERVICE_PROVIDER_NAME,
  SMTP_HOST,
  SMTP_PWD,
  SMTP_USER,
} from "@baxsell/lib/constants";
import handlebars from "handlebars";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PWD,
  },
});

const readFileAsync = promisify(fs.readFile);

export async function GET(req: Request) {
  console.log({ req });
  try {
    const source = await readFileAsync(
      "./public/email-templates/send-request.html",
      "utf-8"
    );

    const name = "Leonardo Batista";
    const goal = "Casamentos & Celebrações";
    const clientType = "Pessoa Individual";
    const productDescription =
      "Gostaria de solicitar um orçamento para uma sessão de fotos de casamento, incluindo detalhes sobre o local, data e número de convidados.";
    const budget = "R$ 5.000,00";
    const shareContact = "sim";
    const email = "leo292629@gmail.com";
    const ig_website = "https://instagram.com/oeleo.batista";
    const phone = "+351 912 345 678";

    const replacements = {
      name,
      first_name: name.split(" ")[0],
      email,
      ig_website,
      phone,
      goal,
      clientType,
      productDescription,
      budget,
      shareContact,
    };
    const hmtlTemplate = handlebars.compile(source)(replacements);

    await transporter.sendMail({
      from: '"Baxhen Corporation" <no-reply@baxhen.com>',
      to: SERVICE_PROVIDER_EMAIL, // list of receivers
      subject: `Solicitação de Orçamento - ${SERVICE_PROVIDER_NAME}`,
      text: "Hello world?", // plain‑text body
      html: hmtlTemplate, // HTML body
    });

    return NextResponse.json({ message: "success" });
  } catch (err) {
    return NextResponse.json({ message: "failed to load data", err });
  }
}
