import { IEmailTransporterProvider, IMessage } from "../IEmailTransporterProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class EmailTransporterProvider implements IEmailTransporterProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'doublesync2020@gmail.com',
                pass: 'teamdoublesync2020'
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        });
    }
}