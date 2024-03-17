import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { compileAdminTemplate } from "../../../../utils/adminMail";

export async function POST() {
  try {
    console.log("llegue 1");
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URI
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });
    console.log("llegue 2");

    const accessTokenResponse = await oAuth2Client.getAccessToken();
    console.log(accessTokenResponse);
    const accessToken = accessTokenResponse?.token;

    const transport = nodemailer.createTransport({
      host: "https://mail.google.com",
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "ignaciofronttest@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "ignaciofronttest@gmail.com",
      to: "juansegundomartinez7@gmail.com",
      subject: "Nuevo ingreso en Diamond Academy",
      html: `<h2>Hola Juan</h2>`,
    };

    console.log("llegue 4");

    await transport.sendMail(mailOptions);

    console.log("llegue 5");

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Email sending failed", error: error.message },
      { status: 500 }
    );
  }
}
