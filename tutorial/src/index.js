import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/718SstStV3L._SY466_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
);
const Title = () => <h2>Interesting Facts For Curious Minds</h2>;
const Author = () => {
  return <h4>Jordan Moore</h4>;
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
