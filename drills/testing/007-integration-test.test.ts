import { describe, it, expect } from "vitest";

const getTotal = (prices: number[]) => {
  return prices.reduce((sum, price) => sum + price, 0);
};

class Cart {
  private items: number[] = [];

  add(price: number) {
    this.items.push(price);
  }

  getTotal() {
    return getTotal(this.items);
  }
}

describe("Cart", () => {
  it("should return one product price", () => {
    //Arrange
    const cart = new Cart();

    //Act
    cart.add(100);

    //Assert
    expect(cart.getTotal()).toBe(100);
  });

  it("should sum the price of three items", () => {
    //Arrange
    const cart = new Cart();

    //Act
    cart.add(100);
    cart.add(200);
    cart.add(50);

    //Assert
    expect(cart.getTotal()).toBe(350);
  });
});
