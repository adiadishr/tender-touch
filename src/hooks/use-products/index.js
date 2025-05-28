import { products as data } from "@/constants/products";

export function useProducts() {
  const products = data.flatMap(item =>
    item.subCategories?.length
      ? item.subCategories.map(sub => ({ ...sub }))
      : [{ ...item }]
  );

  return products;
}
