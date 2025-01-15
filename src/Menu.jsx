import Dish from "./Dish.jsx";

function Menu(props) {
  return (
    <div>
      <div className="MenuTitle">
        <h2>Our Menu</h2>
      </div>
      <div className="Menu">
        {props.data.map((item) => {
          return <Dish key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
