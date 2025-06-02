import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	const { name, email, message } = await req.json();

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "sushildawadi14@gmail.com",
			pass: process.env.GMAIL_APP_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: '"Portfolio Contact" <sushildawadi14@gmail.com>',
			to: "sushildawadi14@gmail.com",
			subject: `New message from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
			html: `
				<div>
					<p><b>Name:</b> ${name}</p>
					<p><b>Email:</b> ${email}</p>
					<p><b>Message:</b></p>
					<p>${message}</p>
				</div>
			`,
		});
		return new Response(JSON.stringify({ ok: true }), { status: 200 });
	} catch (err) {
		return new Response(
			JSON.stringify({ ok: false, error: "Error sending mail." }),
			{ status: 500 }
		);
	}
}
