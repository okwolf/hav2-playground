import { app } from "hyperapp";
import { Http } from "hyperapp-fx";
import html from "./html";
const { main, input, button, h3 } = html;

const SuccessResponse = (state, response) => ({
  ...state,
  response,
  error: null,
  fetching: false
});

const ErrorResponse = (state, error) => ({
  ...state,
  response: null,
  error,
  fetching: false
});

const SendHttp = state => [
  { ...state, response: "...", error: null, fetching: true },
  Http({
    url: state.url,
    response: "text",
    action: SuccessResponse,
    error: ErrorResponse
  })
];

const UpdateUrl = (state, { target: { value } }) => ({ ...state, url: value });

app({
  init: {
    response: null,
    error: null,
    url: "https://httpstat.us/200",
    fetching: false
  },
  view: ({ response, error, url, fetching }) =>
    main(
      input({
        autofocus: true,
        value: url,
        disabled: fetching,
        oninput: UpdateUrl
      }),
      button(
        {
          onclick: SendHttp
        },
        "Send"
      ),
      h3(`Response: ${response}`),

      h3(`Error: ${error && (error.statusText || error.message)}`)
    ),
  node: document.getElementById("app")
});
