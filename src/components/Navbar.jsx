import PropTypes from 'prop-types';
import Logo from '../assets/logo-bg.png';
import profilePic from '../assets/boy.png';
import ContrastIcon from '@mui/icons-material/Contrast';

const Navbar = ({ toggleTheme }) => {
    return (
        <div className={'w-full'}>
            <div className="container flex justify-between lg:w-full ">
                <div className="flex items-center text-xl text-green-800 ">
                    <img src={Logo} alt={'logo'} className={'w-15 rounded-full '} />
                    Agric
                </div>

                <div className="flex items-center gap-5     ">

                    <img src={profilePic} alt={'profilePic'} className={'w-10 rounded-full '} />
                    {/*<SearchIcon />*/}

                    <button onClick={toggleTheme} className="hover: cursor-pointer" >
                        <ContrastIcon />
                    </button>
                </div>
            </div>

        </div>
    )
};

Navbar.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
}

export  default Navbar;

