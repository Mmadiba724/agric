import Logo from '../assets/logo-bg.png';
import profilePic from '../assets/boy.png';
import SearchIcon from '@mui/icons-material/Search';
import ContrastIcon from '@mui/icons-material/Contrast';

const Navbar = ({ toggleTheme }) => {
    return (
        <div>
            <div className="container flex justify-between ">
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
}

export  default Navbar;

