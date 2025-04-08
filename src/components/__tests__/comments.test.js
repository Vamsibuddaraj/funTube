import React from "react";
import { render, screen } from "@testing-library/react";
import Comments from "../Comments";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "@testing-library/jest-dom";

// Mock the useGetComments hook
jest.mock("../../hooks/useGetComments", () => ({
  __esModule: true,
  default: jest.fn(),
}));


const mockStore = configureMockStore([]);

const mockComments = [
  {
    id: "1",
    authorDisplayName: "User1",
    textDisplay: "Hello there!",
    authorProfileImageUrl: "https://example.com/user1.jpg",
  },
  {
    id: "2",
    authorDisplayName: "User2",
    textDisplay: "Nice video!",
    authorProfileImageUrl: "https://example.com/user2.jpg",
  },
];

describe("Comments component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      comments: mockComments, // Matches useSelector(store => store.comments)
    });
    jest.clearAllMocks(); // Clear mock calls to ensure fresh state
  });

  it("renders the Comments header and all comments from Redux store", () => {
    render(
      <Provider store={store}>
        <Comments id="123" />
      </Provider>
    );

    // Debug the rendered output (uncomment if needed)
    // screen.debug();

    expect(screen.getByText("Comments")).toBeInTheDocument();
    expect(screen.getByText("User1")).toBeInTheDocument();
    expect(screen.getByText("Hello there!")).toBeInTheDocument();
    expect(screen.getByText("User2")).toBeInTheDocument();
    expect(screen.getByText("Nice video!")).toBeInTheDocument();

    // Optionally check for image presence
    // expect(screen.getByAltText("logo")).toHaveAttribute(
    //   "src",
    //   "https://example.com/user1.jpg"
    // );
  });

  it("returns null when there are no comments", () => {
    const emptyStore = mockStore({ comments: null });

    const { container } = render(
      <Provider store={emptyStore}>
        <Comments id="123" />
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });

  it("returns null when comments array is empty", () => {
    const emptyArrayStore = mockStore({ comments: [] });

    const { container } = render(
      <Provider store={emptyArrayStore}>
        <Comments id="123" />
      </Provider>
    );

    expect(container.firstChild).toBeNull();
  });

  it("calls useGetComments with the provided id", () => {
    const mockUseGetComments = require("../../hooks/useGetComments").default;
    mockUseGetComments.mockClear(); // Clear previous calls

    render(
      <Provider store={store}>
        <Comments id="123" />
      </Provider>
    );

    expect(mockUseGetComments).toHaveBeenCalledWith("123");
    expect(mockUseGetComments).toHaveBeenCalledTimes(1);
  });
});