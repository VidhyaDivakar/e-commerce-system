import { Product } from "../models/Product";
export function calculateTax(product: Product): number {
    const taxRate = 0.0475;   // default tax rate of 4.75%  
    const groceryTaxrate = 0.03
    const taxCharge = product.category.toLowerCase() === "groceries" ? groceryTaxrate : taxRate; // use of ternary operator to check if the category is groceries and apply the appropriate tax rate. its like if else statement but more concise. if the condition is true it will return groceryTaxrate otherwise it will return taxRate.
    return product.price * taxCharge;
}
