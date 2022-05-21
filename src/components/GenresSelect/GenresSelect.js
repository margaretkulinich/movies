import axios from "axios";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { ITEM_HEIGHT, ITEM_PADDING_TOP, QUANTITY_GENRES_SHOWN } from "./constants";
import { FormControl, MenuItem, OutlinedInput } from "@mui/material";
import { StyledChip, StyledInputLabel, StyledSelect } from "./styles";
import { MAIN_BACKGROUND_COLOR, YELLOW_COLOR } from "../../utils/constants";
import { baseUrl } from "../../config/config";

export const GenresSelect = ({
    setPage,
    selectedGenres,
    setSelectedGenres,
    setGenresForQueryStr
}) => {
  const [genresMap, setGenresMap] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        const newGenresMap = {};

        data.genres.forEach(({ id, name }) => {newGenresMap[name] = id;});
      
        setGenresMap(newGenresMap);
      } catch (error) {
        console(`Error: ${error}`);
      }
    };

    fetchGenres();

    return () => {
      setGenresMap({});
    };
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedGenres(typeof value === 'string' ? value.split(',') : value);
  };

  useEffect(() =>{
    setGenresForQueryStr(
      selectedGenres.map((genreName) => genresMap[genreName]).join(',')
    );
  }, [genresMap, selectedGenres, setGenresForQueryStr]);

  const handleDelete = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((item) => genresMap[item] !== genresMap[genre])
    );
    
    setPage(1);
  };
  
  return (
    <div>
      <FormControl sx={{ m: 2}}>
        <StyledInputLabel>Genres</StyledInputLabel>
        <StyledSelect
          multiple
          value={selectedGenres}
          onChange={handleChange}
          input={<OutlinedInput label="Genres" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <StyledChip
                  key={value}
                  label={value}
                  variant="outlined"
                  onDelete={() => handleDelete(value)}
                  onMouseDown={(e) => {e.stopPropagation()}}
                />
              ))}
            </Box>
          )}
          MenuProps={{PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * QUANTITY_GENRES_SHOWN + ITEM_PADDING_TOP,
              width: 250,
              backgroundColor: MAIN_BACKGROUND_COLOR,
              color: YELLOW_COLOR,
            },
          },
          }}
        >
          {Object.entries(genresMap).map(([genreName, genreId]) => (
            <MenuItem
              key={genreName}
              value={genreName}
              id={genreId}
            >
              {genreName}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </div>
  )
};
