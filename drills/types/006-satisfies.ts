type PaymentGateway = {
  pay: (amount: number) => void;
};

const mockGateway = {
  pay: (amount: number) => {
    console.log(`Mock payment: ${amount}`);
  },
  //name: "Test Gateway",
} satisfies PaymentGateway;
