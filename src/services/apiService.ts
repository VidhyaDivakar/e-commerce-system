import { Product } from "../models/Product";
import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";

const API_URL = "https://dummyjson.com/products"; // storing the API endpoint as a const variable

export async function fetchProducts(): Promise<Product[]> { // async function returns a promise automaticaly
    try {
        const response = await fetch(API_URL); //fetch gets data, awaits pauses until responses
        if (!response.ok) { // built in boolean to check the response
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // here we are converting the response to json format, which is a common format for APIs to return data. we are awaiting this as well because it is also an asynchronous operation.
        return data.products; // extrcts only products field, returns array of product objects
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error; // sends error back to caller, that is index.ts
    }
}

// Response Object is builtin brwoser API obj that container response = {
 //  status: number,
 // ok: boolean,
 //  json: function,
//    
