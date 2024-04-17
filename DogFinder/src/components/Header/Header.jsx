import './Header.css'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import expand from '../../assets/expand_arrow.svg'
import flag from '../../assets/flag.svg'

export const Header = () => {

    return (
        <div className='container'>
            <div className='left_side'>
                <img src={logo} alt="logo" />
                <p>PET</p>
            </div>

            <div className='center_side'>
                <p>About us</p>
                <p>Adopt</p>
                <p>Donate</p>
                <p>Events</p>
                <p>Contact us</p>
                <p>Blog</p>
                <p>Resources</p>
            </div>

            <div className='right_side'>
                <div className='menu_side'>
                    <img src={menu} alt="menu" />
                    <p>Pets</p>
                    <img src={expand} alt="" />
                </div>
                <div>
                    <img src={flag} alt="" />
                </div>
                <div className='div_sign'>
                    <p>Sign in</p>
                </div>
            </div>
        </div>
    )
}