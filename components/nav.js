import{links} from "../store"

function linksBuilder(links) {
 letlinksHTML ="";




for (let i=0; i < links.length; i +=1) {
linksHTML += `<li><a href='./${links[i]}'>${links[i]}</a></li>`;
}
    return linkHTML;
}









export default function (){
    return `<nav>
        <span class="fas fa-hamburger is-hidden--desktop"></span>
        <ul>
            <li><a href="../">home</a></li>
            <li><a href="../about/">About</a></li>
            <li><a href="./contact/">Contact</a></li>
            <li><a href="../gallery/">Gallery</a></li>
            <li><a hf="../blog/">Blog</a></li>
        </ul>
    </nav> `;}

