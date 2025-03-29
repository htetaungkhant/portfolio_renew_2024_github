import { sendMail } from "@/lib/MailService";

export async function POST(req: Request) {
  let data = (await req.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!data?.name || !data?.email || !data?.message) {
    return Response.json({ msg: "Please Fill All The Fields!" });
  }

  try {
    await sendMail({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    return Response.json({ msg: "Thank You For Contacting Me." });
  } catch (error) {
    const errorResponse = error as Error;
    if (errorResponse.message === "Sending email failed!") {
      return Response.json({ msg: "Sending email failed!" }, { status: 400 });
    }
  }
  return Response.json({ msg: "There is server error" }, { status: 500 });
}
