require('dotenv').config();
const nodemailer = require('nodemailer');
const handlebars = require('handlebars')
const nodemailerHbs = require('nodemailer-handlebars');
const fs = require('fs')
const path = require('path')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;



const createTransporter = async () => {
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
                reject();
            }
            resolve(token);
        });
    });

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL,
            accessToken,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
    });

    transporter.use('compile',nodemailerHbs({
        viewEngine: {
            extname: '.handlebars',
            layoutsDir: path.join(process.cwd(),'views','layouts'),
        }
    }))

    return transporter;
};

const templatePubliSoli = fs.readFileSync(path.join(process.cwd(),'views','templates','publiSoli.handlebars'),'utf8')

const sendEmail = async (emailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
};

module.exports = {
    sendEmail
}