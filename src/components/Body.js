import { RESTAURANT_CARDS } from "../../config";
import Restaurant from "./Restaurant";
const Body = () => {
  return (
    <section>
      {RESTAURANT_CARDS.map((obj) => (
        <Restaurant restaurant={obj.data} key={obj.data.id} />
      ))}
    </section>
  );
};

export default Body;
