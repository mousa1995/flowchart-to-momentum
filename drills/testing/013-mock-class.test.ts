import {describe, it, vi, expect} from 'vitest';

class OrderService {

  constructor(
    private paymentGateway: any
  ) {}

  checkout(amount:number){

    return this.paymentGateway.pay(amount);

  }

}
describe("OrderService", () => {
    it("should call paymentService", () => {
        //Arrange 
        const mockPaymentGateway = {
            pay: vi.fn().mockReturnValue("paid")
        }
        const orderService = new OrderService(mockPaymentGateway)
        //Act
        const paied = orderService.checkout(50);
        //Assert
        expect(mockPaymentGateway.pay).toHaveBeenCalled();
        expect(paied).toBe("paid");
    })
})