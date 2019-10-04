import { Header, Nav, main, footer } from "./components";



const state ={
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
};

//st =a piece of state
  function render (st = state.home) {
document.querySelector("#root").innerHTML=`
${Header( st.heading )}
${Nav( st.heading)}
${main( st.heading)}
${footer( st.heading)}
`;

console.log (st.heading)
  }

  render ();
const links = document.querySelectorAll('nav a');
console.log(Array.isArray(links));

console.log(links[3]);

for(let i=0; i<links.length; i += 1){
links[i].addEventListener('click', function(event){
   event.preventDefault();

   render(state[event.target.textContent.toLowerCase()]);

})
}

