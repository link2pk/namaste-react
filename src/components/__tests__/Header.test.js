import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { render } from "@testing-library/react";

test("logo should load when header renders", () => {
  //check if header is already loaded
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");

  //assert that logo is in the header
  expect(logo).toBeInTheDocument();

  expect(logo.getAttribute("src")).toBe("dummyImg");
  //   console.log(logo);
});

test("Initailly cart should have 0 items on page load", () => {
  //check if header is already loaded
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");

  //assert that cart is in the header
  expect(cart).toBeInTheDocument();

  expect(cart.innerHTML).toBe("Cart 0 item(s)");
  //   console.log(logo);
});

test("user online symbol should be green", () => {
  //check if header is already loaded
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const isOnline = header.getByTestId("is-online");
  //assert that user is online and have ✓ sysmbol
  expect(isOnline.children[0]).toHaveAttribute(
    "data-status-content",
    expect.stringContaining("✓")
  );
});
