const mockBillingData = {
  billingCycle: "Feb 1 - Feb 28",
  totalCost: "Rs. 50,564",
  paymentStatus: "Pending",
  dueDate: "Feb 28, 2025",
  invoiceNumber: "IN209472345",
  lastPaymentDate: "Jan 30, 2025",
};

const mockUsageData = {
  usage: {
    apiCalls: 1200,
    storage: "5GB",
    bandwidth: "50GB",
    uptime: "99.9%",
    activeSessions: 45,
  },
  activeUsers: 15,
};

module.exports.mockBillingData = mockBillingData;
module.exports.mockUsageData = mockUsageData;
