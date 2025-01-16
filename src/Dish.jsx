import styles from "./Dish.module.css";

function Dish({ data: { tittel, pris, ingredienser, kategori } }) {
  return (
    <div className={styles.Dish}>
      <h2 className={styles.DishName}>{tittel}</h2>
      <hr className={styles.DishSeperator} />
      <p className={styles.DishCategory}>{kategori}</p>
      <p className={styles.DishIngredients}>{ingredienser}</p>
      <h4 className={styles.DishPrice}>{pris}</h4>
    </div>
  );
}

export default Dish;
