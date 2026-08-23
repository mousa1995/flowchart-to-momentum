class Inventory {
    private items: string[];

    constructor() {
        this.items = [];
    }

    addItem(item: string) {
        this.items.push(item);
    }

    removeItem(item: string) {
        this.items = this.items.filter(a => a !== item);
    }

    getItems() {
        return this.items;
    }
}

const inventory = new Inventory();

inventory.addItem("sword");
inventory.addItem("shield");
inventory.addItem("potion");

inventory.removeItem("shield");

console.log(inventory.getItems());