  export default function(st) {
  return `<header>
        <h1 class='title'> ${st.heading}</h1>
        <figure> <img srcset="https://picsum.photos/200,
            https://picsum.photos/300 1.5x,
            https://picsum.photos/400 2x,
            https://picsum.photos/600 3x" src="https://picsum.photos/600" alt="Lorem Picsum">
        </figure>
    </header> `}

