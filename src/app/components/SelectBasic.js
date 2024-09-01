'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';

const CustomSelect = styled(Select)(({ theme }) => ({
    '.MuiSelect-icon': {
      color: 'white', // Change the color of the dropdown icon
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '50px', // Apply border-radius to match rounded-full
    },
    '.MuiInputBase-input': {
      textAlign: 'center', // Align the text to the center
    },
  }));

export default function BasicSelect({handleChange,value,label,id, option = [],placeholder}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={id}>{label}</InputLabel>
         <CustomSelect
          labelId={id}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
          size='small'
          className='text-white relative'
          placeholder={placeholder}
        >
             <MenuItem value="" disabled defaultValue>
                {placeholder}
             </MenuItem>
            {
                option?.map((el,index) =>{
                   return <MenuItem value={el} key={el+index+"select"}>{el}</MenuItem>
                })
            }
        </CustomSelect>
      </FormControl>
    </Box>
  );
}