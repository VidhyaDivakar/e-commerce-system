export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;

    constructor(id: number, title: string, price: number, description: string, category: string, discountPercentage: number, rating: number, stock: number, brand: string, thumbnail: string) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.category = category;
        this.thumbnail = thumbnail;
    }


displayDetails(): void { // we can write without void but it is good practice to specify the return type of a function, even if it is void.
    console.log(`Product: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Price: $${this.price}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Rating: ${this.rating}`);
    console.log(`Stock: ${this.stock}`);
    console.log(`Brand: ${this.brand}`);
    console.log(`Category: ${this.category}`);
}



getPriceWithDiscount(): number {
    const discountAmount = (this.price * this.discountPercentage) / 100;
    return this.price - discountAmount;
}
}