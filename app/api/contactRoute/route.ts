import { EmailType, EmailData } from "@/types/common";
import { MailService } from "@/lib/MailService";

interface RequestBody extends EmailData {
  emailTypes?: EmailType[];
}

export async function POST(req: Request) {
  let data = (await req.json()) as RequestBody;

  if (!data?.name || !data?.email || !data?.message) {
    return Response.json({ msg: "Please Fill All The Fields!" });
  }

  try {
    const mailService = new MailService();
    const emailTypes = data.emailTypes || [EmailType.NOTIFICATION, EmailType.THANK_YOU];  // If emailTypes is not specified, send both emails

    await mailService.sendMail({
      name: data.name,
      email: data.email,
      message: data.message,
    }, emailTypes);

    return Response.json({ msg: "Thank You For Contacting Me." });
  } catch (error) {
    const errorResponse = error as Error;
    if (errorResponse.message === "Sending email failed!") {
      return Response.json({ msg: "Sending email failed!" }, { status: 400 });
    }
    return Response.json({ msg: "There is server error" }, { status: 500 });
  }
}
