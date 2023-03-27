// Nav component
import navImage from '../assets/images/wade.jpg';

export default function Nav(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <div className='toggler'>
                <div className='toggler--slider' onClick={props.handleClick}>
                    <div className='toggler--circle'></div>
                </div>
            </div>
            <img src={navImage} alt="nav-img" class="nav--image" />
        </nav>
    )
}
