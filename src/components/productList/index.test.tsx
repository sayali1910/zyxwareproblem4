import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import ProductList from ".";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

describe("ProductList component", () => {
  test("displays product list", async () => {
    const mockedResponse: AxiosResponse = {
      data: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 3.9, count: 120 },
        },
      ],
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
      mockedResponse
    );

    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          { exact: false }
        )
      ).toBeInTheDocument();
    });
  });
});
