const ProductsCard = ({ product }) => {
  const { title, thumbnail } = product;
  console;
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-img" />
      <span>{title}</span>
    </div>
  );
};

export default ProductsCard;
