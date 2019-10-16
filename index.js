import { Header, Nav, main, footer } from "./components";

import * as state from "./store";

import Navigo from "navigo";
import axios from "axios";


const router = new Navigo(location.origin);



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
  function render (st = state.Home) {
document.querySelector("#root").innerHTML=`
${Header( st )}
${Nav( )}
${main(st )}
${footer( )}
`;

router.updatePageLinks();

const links = document.querySelectorAll('nav a');




for(let i=0; i<links.length; i += 1){
links[i].addEventListener('click', function(event){
   event.preventDefault();

   render(state[event.target.textContent]);

})


  }

  router
  // Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
  .on(":page", params =>
    render(state[`${params.page.slice(0, 1).toUpperCase()} ${params.page.slice(1).toLowerCase()}`])
  )
  .on("/", render())
  .resolve();}

  axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.data.posts));
