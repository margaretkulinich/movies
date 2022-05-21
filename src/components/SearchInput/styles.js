import InputBase from '@mui/material/InputBase';
import { YELLOW_COLOR } from '../../utils/constants';
import { styled as styledMui, alpha } from '@mui/material/styles';

export const Search = styledMui('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },

    '@media (max-width: 767px)' : {
        width: '25%',
    }
}));
  
export const SearchIconWrapper = styledMui('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    padding: theme.spacing(0, 2),
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: YELLOW_COLOR,

    '@media (max-width: 767px)' : {
        display: 'none',
    }
}));
  
export const StyledInputBase = styledMui(InputBase)(({ theme }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
         width: '20ch',
        },

        '@media (max-width: 767px)' : {
            paddingLeft: '3px',
            fontSize: '10px',
        },

        '@media (min-width: 768px) and (max-width: 1023px)' : {
            paddingLeft: '40px',
            fontSize: '15px',
        }
    },
}));
