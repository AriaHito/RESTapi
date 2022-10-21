const nodemailer= require("nodemailer");

async function main() {
  
  const transporter = nodemailer.createTransport({
   service:"gmail",
    auth: {
        user: 'mailbusiness990@gmail.com',
        pass: 'avsmbwzoqaadmwgb'
    }
});

  
  let info = await transporter.sendMail({
    from: '"mailbusiness990@gmail.com', 
    to: "npmshrm31@gmail.com , jaiparasher30@gmail.com",
    subject: "mail testing✔", 
    text: "testing mail",
    html: "<b>testing mail</b>",
  });

  console.log ("message sent")
  
}

main().catch(console.error);
