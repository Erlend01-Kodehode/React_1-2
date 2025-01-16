import Dish from "./Dish.jsx";
import styles from "./Menu.module.css";

function Menu(props) {
  return (
    <div>
      <div className={styles.MenuTitle}>
        <h2>Our Menu</h2>
      </div>
      <div className={styles.Menu}>
        {props.data.map((item) => {
          return <Dish key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
