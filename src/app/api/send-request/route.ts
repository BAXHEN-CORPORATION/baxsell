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

export interface SendRequestBody {
  name: string;
  email: string;
  ig_website: string;
  phone: string;
  goal: string;
  clientType: string;
  productDescription: string;
  budget: string;
  shareContact: "yes" | "no";
}

export async function POST(req: Request) {
  const body: SendRequestBody = await req.json();

  try {
    const source = await readFileAsync(
      "./public/email-templates/send-request.html",
      "utf-8"
    );

    const {
      name,
      email,
      ig_website: ig_website = "",
      phone = "",
      goal,
      clientType,
      productDescription,
      budget = "",
      shareContact = "no",
    } = body;

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
      html: hmtlTemplate, // HTML body
    });

    return NextResponse.json({ message: "success" });
  } catch (err) {
    return NextResponse.json({ message: "failed to load data", err });
  }
}
