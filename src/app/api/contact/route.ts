import { Resend } from "resend"

export const runtime = "nodejs"

type ContactPayload = {
  name: string
  email: string
  message: string
}

const resendApiKey = process.env.RESEND_API_KEY

export async function POST(req: Request) {
  if (!resendApiKey) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Email service not configured"
      }),
      { status: 500 }
    )
  }

  try {
    const body = (await req.json()) as ContactPayload
    const { name, email, message } = body

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required"
        }),
        { status: 400 }
      )
    }

    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["patelvpv369@gmail.com"], // ✅ valid email
      subject: `New contact from ${name}`,
      replyTo: email,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully"
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API Error:", error)

    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong"
      }),
      { status: 500 }
    )
  }
}
