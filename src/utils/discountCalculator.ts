calculateDiscount(product: Product): number {
    const discountAmount = (product.price * product.discountPercentage) / 100;
    return product.price - discountAmount;
}