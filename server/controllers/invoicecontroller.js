const { mockUsageData } = require("../constants");
const { mockBillingData } = require("../constants");

exports.invoiceGenerator = async (req, res) => {
  try {
    const { name, email } = req.body;
    const { usage } = mockUsageData;
    const {
      totalCost,
      billingCycle,
      paymentStatus,
      dueDate,
      invoiceNumber,
      lastPaymentDate,
    } = mockBillingData;

    // Validate the required fields
    if (!name || !email || !usage || !totalCost || !billingCycle) {
      return res.status(400).send({ error: "Missing required fields" });
    }

    const invoiceMessage = `
    Invoice for ${name}
    ------------------------------
    Customer Name: ${name}
    Email: ${email}
    
    Billing Details:
    ------------------------------
    Total Cost: ${totalCost}
    Billing Cycle: ${billingCycle}
    Payment Status: ${paymentStatus}
    Due Date: ${dueDate}
    Invoice Number: ${invoiceNumber}
    Last Payment Date: ${lastPaymentDate}
    
    Usage Details:
    ------------------------------
    API Calls: ${usage.apiCalls}
    Storage Used: ${usage.storage}
    Bandwidth Used: ${usage.bandwidth}
    Uptime: ${usage.uptime}
    Active Sessions: ${usage.activeSessions}
    
    ------------------------------
    Thank you for your business! We appreciate your trust in 
    our services. If you have any questions or need 
    assistance, feel free to contact our support team.
  `;

    // Define the Zapier Webhook URL
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

    // Send the invoice message to Zapier
    const response = await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: "Your Invoice Details",
        message: invoiceMessage,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send data to Zapier: ${response.statusText}`);
    }

    // Respond back to the client
    res
      .status(200)
      .send({ message: "Invoice sent successfully", data: invoiceMessage });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .send({ error: "An error occurred while processing the request" });
  }
};
