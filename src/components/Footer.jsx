import Facebook from '../assets/icons/Facebook.png'
import Instagram from '../assets/icons/Instagram.png'
import Twitter from '../assets/icons/Twitter.png'
import Github from '../assets/icons/GitHub.png'


export default function Footer(props){

    console.log(props)
    return(
        <footer className={props.darkMode ? "dark" : ""}>
            <a href='https://twitter.com/KuddyWade' target="_blank"  rel="noreferrer"><img src={Twitter} alt="Twitter" className='twitter'/></a>
            <img src={Facebook} alt="Facebook" className='facebook'/>
            <a href='https://www.instagram.com/theeace8/' target="_blank"  rel="noreferrer"><img src={Instagram} alt="Facebook" className='instagram'/></a>
            <a href='https://github.com/Walshwade-dev' target="_blank"  rel="noreferrer"><img src={Github} alt="Facebook" className='github'/></a>
        </footer>
    )
}