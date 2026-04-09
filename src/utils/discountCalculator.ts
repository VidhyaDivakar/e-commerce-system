import { Product } from  "../models/Product";

export function calculateDiscount(product: Product): number {
    const discountAmount = (product.price * product.discountPercentage) / 100; // since we can calling price and discount percentrage outside of class we are using classname.price, etc. // since they are in different scopeusing same name forconsts is allowed
    //In TypeScript, a class automatically becomes a type, so you can use the class name as a type annotation for variables, function parameters, and return types. This allows you to create instances of the class and ensure that they conform to the structure defined by the class.
    return product.price - discountAmount;
}