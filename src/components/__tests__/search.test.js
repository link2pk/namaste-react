import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { fireEvent, render } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";

test("check if search works properly on homepage", () => {
  //check if body loaded
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  //get restaurants
  const restaurants = body.getByTestId("restaurants");
  //check if 15 restaurants are available
  expect(restaurants.children.length).toBe(15);

  //get search input
  const searchInput = body.getByTestId("search-input");
  // Add text to the input by firing the change event
  fireEvent.change(searchInput, { target: { value: "junction" } });
  // click search button to filter the restaurant list
  fireEvent.click(body.getByTestId("search-btn"));
  // expected result to be 1 for 'punjabi junction'
  expect(restaurants.children.length).toBe(1);
});
