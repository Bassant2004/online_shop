function Button({onClick}) {
  return (
    <button className="add-btn" onClick={onClick}>
      Add to Cart
    </button>
  );
}

export default Button;