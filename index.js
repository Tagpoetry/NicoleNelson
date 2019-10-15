import { Header, Nav, main, footer } from "./components";

import * as state from "./store";

import Navigo from "navigo";

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

const links = document.querySelectorAll('nav a');




for(let i=0; i<links.length; i += 1){
links[i].addEventListener('click', function(event){
   event.preventDefault();

   render(state[event.target.textContent]);

})
);

  }

  render ();


