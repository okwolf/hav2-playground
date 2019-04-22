import { app, h } from "hyperapp";
import html from "./html";
const { main, h1, button } = html(h);

app({
  init: 0,
  view: count =>
    main(
      h1(count),
      button(
        {
          onclick: count => count - 1,
          disabled: count <= 0
        },
        "ー"
      ),
      button({ onclick: count => count + 1 }, "＋")
    ),
  subscribe: console.log,
  container: document.body
});