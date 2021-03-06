import { app, h } from "hyperapp";
import html from "./html";
const { main, h1, div, button } = html;

app({
  init: 0,
  view: count =>
    main(
      h1(count),
      div(
        { class: "control-bar" },
        button(
          {
            onclick: count => count - 1,
            disabled: count <= 0
          },
          "ー"
        ),
        button({ onclick: count => count + 1 }, "＋")
      )
    ),
  node: document.getElementById("app")
});
