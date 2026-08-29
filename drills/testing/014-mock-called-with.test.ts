import {describe, it, expect, vi} from 'vitest';

class OrderService {
  constructor(private paymentGateway: any) {}

  checkout(amount: number) {
    this.paymentGateway.pay(amount);
  }
}

describe("OrderService", () =>{
  it("should mock paymentGateway" , ( ) => {
    //Arrange 

    const mockGateway = {
      pay: vi.fn()
    }

    const orderService = new OrderService(mockGateway);

    //Act

    const order = orderService.checkout(500)

    //Assert

    expect(mockGateway.pay).toHaveBeenCalledWith(500);

  })
})