import Product from "./Product";

function ProductGrid({ products, loadCartItems }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} loadCartItems={loadCartItems} />
      ))}
    </div>
  );
}

export default ProductGrid;
