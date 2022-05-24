import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { fetchProductsAsync, produdctSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

export default function Catalog() {
  const products = useAppSelector(produdctSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  if (status.includes("pending"))
    return <LoadingComponent message='Loading products...' />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
