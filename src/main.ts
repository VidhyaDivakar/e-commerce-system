import { Product } from "./models/Product";
import { fetchProducts } from "./services/apiService";
import { calculateTax } from "./utils/taxCalculator";
import { handleError } from "./utils/errorHandler";

async function main () {
    try {
        const prodsData = await fetchProducts();
        const products: Product[] = prodsData.map((item: any) => {
            return new Product(
                item.id,
                item.title,
                item.price,
                item.description,
                item.category,
                item.discountPercentage,
                item.rating,
                item.stock,
                item.brand,
                item.thimbnail
            );
        });
        products.forEach((product) => {
           
            product.displayDetails();

            const tax = calculateTax(product);
            console.log(`Prod Tax: $${tax.toFixed(2)}`);

            const Price = product.price - (product.price * product.discountPercentage) /100 + tax;
            console.log (`Product Price with tax (after discount): $${Price.toFixed(2)}`);
        });
        
    
} catch (error) {
    handleError(error);
}
}

main();
