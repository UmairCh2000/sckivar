import { NextResponse } from "next/server";
var nodemailer = require("nodemailer");

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      websiteUrl,
      brand,
      service,
    } = await req.json();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: "samoconnor48787@gmail.com",
        pass: "boezgbcayyjsuzye",
      },
    });
    const info = await transporter.sendMail({
      from: "samoconnor48787@gmail.com",
      to: "sckivarllc@gmail.com", 
      subject: "New form submission on Sckivar",
      text: "", // plain text body
      html: `<html>
      <body font-size: 10px >
      <h2>This form data recived from sckivar<h2>
      <p>First Name : ${firstName}</p>
      <p>Last Name : ${lastName}</p>
      <p>Email : ${email}</p>
      <p>Phone number : ${phoneNumber}</p>
      <p>Amazon Sore / Website URL : ${websiteUrl}</p>
      <p>Service : ${service}</p>
      <p>Scale Brand : ${brand}</p>
      </body>
      </html>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}