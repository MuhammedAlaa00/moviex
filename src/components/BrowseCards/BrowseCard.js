import React from "react";
import { Container } from "./style/BrowseCard-style";
function BrowseCard({ Film, children, ...restProps }) {
  //   Film?.forEach((element) => {
  //     console.log(element);
  //   });
  //   for (const [i, item] in Film) {
  //     console.log(i, Film[item]);
  //   }
  // for (const [key, value] of Object.entries(Film)) {
  //   console.log(`${key}: ${value}`);
  // }
  console.log(Film);
  //   Film.map((film) => {
  //     console.log(film);
  //   });
  return <Container {...restProps}>{children}</Container>;
}

export default BrowseCard;
