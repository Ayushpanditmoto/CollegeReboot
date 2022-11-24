const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const auth_link = 'https://developers.google.com/oauthplayground';

const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const oauth2Client = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  auth_link
);

exports.SentVerificationEmail = async (email, name, url) => {
  oauth2Client.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = oauth2Client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken: accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: 'JUCollegeWindow Email Verification',
    html: `<h1>Hi ${name}</h1>
        <p>Thank you for registering with us. Please click on the link below to verify your email address.</p>
        <a href="${url}" style="
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        width: 200px;
        ">Verify Email</a>
        <p>If you did not register with us, please ignore this email.</p>
        <p>Thank you.</p>`,
  };
  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      return err;
    } else {
      return info;
    }
  });
};
