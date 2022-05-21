import { NavLink } from "react-router-dom";
import { SearchInput } from "../SearchInput/SearchInput";
import { classes, HeaderStyled, Navigation } from "./styles";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

export function Header() {
    return (
        <HeaderStyled>
            <div>
                <NavLink to='/' className={classes.logo}>
                 <span>M </span>
                 <VideoCameraBackIcon className={classes.logoIcon}/>
                  <span> VIES</span>
                </NavLink>
            </div>
            <Navigation>
                <NavLink to='/' className={classes.navLink}>Most Popular</NavLink>
                <NavLink to='/movies' className={classes.navLink}>Movies</NavLink>
                <NavLink to='/tvshows' className={classes.navLink}>TV shows</NavLink>
                
                <SearchInput initialValue=''/>
            </Navigation>
        </HeaderStyled>
    )
};
