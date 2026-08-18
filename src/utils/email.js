import emailjs from "@emailjs/browser";

const sendEmail = async (type, data) => {
  try {
    let templateId;
    let templateParams;

    // --------------------------------
    // Service Request Form
    // --------------------------------
    if (type === "service") {
      templateId = import.meta.env.VITE_EMAILJS_SERVICE_TEMPLATE_ID;

      templateParams = {
        name: data.name,
        email: data.email,
        contact: data.contact,
        gender: data.gender,
        age: data.age,
        service: data.service,
        preferred_time: data.preferredTime,
        health_concern: data.healthConcern,
      };
    }

    // --------------------------------
    // Contact Us Form
    // --------------------------------
    else if (type === "contact") {
      templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

      templateParams = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      };
    }

    else {
      throw new Error("Invalid email type");
    }

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId,
      templateParams,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    console.log("Email sent successfully:", response);

    return {
      success: true,
      message: "Email sent successfully",
    };

  } catch (error) {
    console.error("EmailJS Error:", error);

    return {
      success: false,
      message: error?.text || "Failed to send email",
      error,
    };
  }
};

export default sendEmail;