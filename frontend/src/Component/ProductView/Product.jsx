const Product = (props) => {
  const { keyid, imgSrc, productName, price } = props;
  return (
    <div key={keyid}>
      <img className="carImg" src={imgSrc} alt="Product.img" />
      <h3>{productName}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Product;
