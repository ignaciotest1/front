import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.REDIRECT_URI
    );
    const ACCESS_TOKEN = await oAuth2Client.getAccessToken();

    console.log(ACCESS_TOKEN);

    const { user, email } = await request.json();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "ignaciofronttest@gmail.com",
        clientId: process.env.CLIENT_ID as string,
        clientSecret: process.env.CLIENT_SECRET as string,
        refreshToken: process.env.REFRESH_TOKEN as string,
        accessToken: ACCESS_TOKEN as string,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    //EMAIL OPTIONS
    const mailOptions = {
      from: "ignaciofronttest@gmail.com",
      to: email,
      subject: "🌻 This Is Sent By NodeMailer 🌻",
      html: `
      <p>Hey ${user},</p>
      <p>🌻 This Is A Test Mail Sent By NodeMailer 🌻</p>
      <p>Thank you</p>
      `,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
