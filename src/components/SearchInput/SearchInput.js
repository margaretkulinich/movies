import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

export const SearchInput = ({ isLiveSearching, initialValue }) => {
    const [searchValue, setSearchValue] = useState(initialValue);
    const navigate = useNavigate();

    useEffect(() => {
        setSearchValue(initialValue);
    }, [initialValue]);

    const handleInputKeyUp = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search/${searchValue}`);
            setSearchValue('');
        }
    };

    const handleInputKeyUpDebounced = () => {
        debounce(navigate(`/search/${searchValue}`), 3000);
    };

    function debounce(fnCall, time) {
        let handler;

        return (...args) => {
            clearTimeout(handler);

            handler = setTimeout(fnCall.bind(this, args), time);
        };
    };

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={isLiveSearching ? handleInputKeyUpDebounced : handleInputKeyUp}
            />
        </Search>
    )
};
