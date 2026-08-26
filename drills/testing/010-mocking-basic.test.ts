import { describe, it, expect, vi } from "vitest";

class PaymentService {
  constructor(private gateway: any) {}

  pay(amount: number) {
    this.gateway.charge(amount);
  }
}

describe("PaymentService", () => {
  it("should mock charge method of PaymentService", () => {
    //Arrange
    const mockeGateway = {
      charge: vi.fn(),
    };
    const paymentService = new PaymentService(mockeGateway);
    //Act
    paymentService.pay(100);
    //Assert
    expect(mockeGateway.charge).toHaveBeenCalled();
  });
});
