import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { compileUserTemplate } from "../../../../utils/userMail";

export async function POST(request: NextRequest) {
  try {
    console.log(["llegue"]);
    const { user, email } = await request.json();

    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URI
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    const accessTokenResponse = await oAuth2Client.getAccessToken();
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
      to: email,
      subject: "Bienvenido a Diamon Academy",
      html: compileUserTemplate(user),
    };
    console.log("llegue 2");

    await transport.sendMail(mailOptions);

    console.log("llegue 3");

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
