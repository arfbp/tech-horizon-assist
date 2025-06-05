
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  issue: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, issue }: ContactEmailRequest = await req.json();

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "InstallUlang <noreply@installulang.web.id>",
      to: ["support@installulang.web.id"],
      subject: `Pesan Baru dari ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4A7C59; border-bottom: 2px solid #6B9B7F; padding-bottom: 10px;">
            Pesan Baru dari Website InstallUlang
          </h2>
          
          <div style="background-color: #F8FAF9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2F4A38; margin-top: 0;">Detail Pengirim:</h3>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #E1EBE7; border-radius: 8px;">
            <h3 style="color: #2F4A38; margin-top: 0;">Pesan:</h3>
            <p style="line-height: 1.6; color: #555;">${issue}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #F0F5F3; border-radius: 8px;">
            <p style="margin: 0; color: #4A7C59; font-size: 14px;">
              <strong>InstallUlang</strong> - Layanan IT Professional<br>
              Dikirim pada: ${new Date().toLocaleString('id-ID')}
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "InstallUlang <noreply@installulang.web.id>",
      to: [email],
      subject: "Pesan Anda Telah Diterima - InstallUlang",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4A7C59; border-bottom: 2px solid #6B9B7F; padding-bottom: 10px;">
            Terima Kasih, ${name}!
          </h2>
          
          <div style="background-color: #F8FAF9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 16px; color: #2F4A38;">
              Pesan Anda telah berhasil diterima. Tim teknisi kami akan menghubungi Anda dalam 24 jam.
            </p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #E1EBE7; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2F4A38; margin-top: 0;">Ringkasan Pesan Anda:</h3>
            <p style="line-height: 1.6; color: #555;">${issue}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/6287859114643" 
               style="display: inline-block; background: linear-gradient(135deg, #6B9B7F, #4A7C59); 
                      color: white; text-decoration: none; padding: 15px 30px; 
                      border-radius: 12px; font-weight: bold; font-size: 16px;">
              💬 Chat WhatsApp Sekarang
            </a>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #F0F5F3; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #4A7C59; font-size: 14px;">
              <strong>InstallUlang</strong> - Solusi IT Profesional<br>
              📧 support@installulang.web.id | 📱 +62 878-5911-4643
            </p>
          </div>
        </div>
      `,
    });

    console.log("Admin email sent:", adminEmailResponse);
    console.log("Customer email sent:", customerEmailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      adminEmail: adminEmailResponse,
      customerEmail: customerEmailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
