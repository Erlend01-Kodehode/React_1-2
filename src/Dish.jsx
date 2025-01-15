function Dish({ data: { tittel, pris, ingredienser, kategori } }) {
  return (
    <div className="Dish">
      <h2 className="DishName">{tittel}</h2>
      <hr />
      <p className="DishCategory">{kategori}</p>
      <p className="DishIngredients">{ingredienser}</p>
      <h4 className="Price">{pris}</h4>
    </div>
  );
}

export default Dish;
