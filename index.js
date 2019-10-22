import { Header, Nav, main, footer } from "./components";

import * as state from "./store";

import Navigo from "navigo";
import axios from "axios";

import{ capitalize } from "lodash";
import {db} from "./firebase";

const router = new Navigo(location.origin);
console.log(router)


/*const state ={

    home: {
    heading: "Home Page",
    links: ["Home", "About", "Contact", "Blog", "Gallery"]
    },
    about :{
     heading :" About Page",
     links :["Home", "About", "Contact", "Blog", "Gallery"]
    },
    contact:{
     heading : "Contact Page",
     links:["Home", "About", "Contact", "Blog", "Gallery"]
    },
    gallery : {
      heading : "Gallery Page",
      links:["Home", "About", "Contact", "Blog", "Gallery"]
    },
    blog: {
      heading: "Blog Page",
      links:["Home", "About", "Contact", "Blog", "Gallery"]
    }
}; */
//st =a piece of state
function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav()}
${main(st)}
${footer()}
`;

  router.updatePageLinks();

  // const links = document.querySelectorAll('nav a');

  // for (let i = 0; i < links.length; i += 1) {
  //   links[i].addEventListener('click', function (event) {
  //     event.preventDefault();
  //     render(state[event.target.textContent]);
  //   })
  // }
}

router
  // Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
  .on(":page", params =>
    render(state[capitalize(params.page)])
  )
  .on("/", () => render())
  .resolve();

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {

    state.Blog.main= response.data.map(({title,body}) => `
    <article>
    <h2>${title}</h2>
    <p>${body}</p>
    </article>
    `).join("");
if (capitalize(router.lastRouteResolved().params.page) === "Blog"){
  render(state.Blog)}


  })
  .catch(err => console.log(err));

  render();

  db.collection("pictures")
  .get()

  /**
   * Developer's Note: There is no straightforward way to get data back as an Array,
   * so 'superpowers' are useless.😞
   */
  .then(querySnapshots => {
    console.log(querySnapshots)
    state.Gallery.main =
      `<div class="gallery">` +
      querySnapshots.docs
        .map(doc => {
          const { caption, credit, imgURL } = doc.data();

          return `
        <figure>
          <img src="${imgURL}" alt="">
          <figcaption>${caption} - ${credit}</figcaption>
        </figure>
      `;
        })
        .join(" ") +
      `</div>`;
        console.log(state.Gallery.main)
    if (
      router.lastRouteResolved().params &&
      capitalize(router.lastRouteResolved().params.page) === "Gallery"
    ) {
      render(state.Gallery);
    }
  })
  .catch(err => console.error("Error loading pics", err));

  render();
