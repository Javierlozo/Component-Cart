import React from 'react';
import useStyles from "./styles"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


const sortingOptions = [
  {
    value: 'Recently Added',
    label: 'Recently Added',
  },
  {
    value: 'Highest Rated',
    label: 'Highest Rated',
  }
];

export default function Search() {
  const classes = useStyles();

  return (
    <Box className={classes.searchContainer}>
      <Box className={classes.inputWrapper}>
        <TextField id="search-box" className={classes.inputs} placeholder="Search..." variant="outlined" 
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          }}
        />
        <h3>Sort By</h3>
        <TextField id="sort-dropdown" className={classes.inputs} variant="outlined" select>
        {sortingOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>
      </Box>
    </Box>
  );
}
