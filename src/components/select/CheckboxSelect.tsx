"use client";
import { FC, useId } from "react";
import { Controller, useFormContext } from 'react-hook-form';
import { Box, Checkbox, styled, TextField } from "@mui/material";
import { Close } from '@mui/icons-material';
import { AutocompleteCSS } from "@/ui/AutocompleteCSS";
import { CheckboxSelectProps } from "@/types";

export const CheckboxSelect: FC<CheckboxSelectProps> = ({name, options, limitTags = 2, placeholder}) => {
  const {control} = useFormContext()
  let id = useId();
  
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({field: {value, onChange, ...field}}) =>
        <AutocompleteCSS
          {...field}
          id="long-value-select"
          disableCloseOnSelect
          multiple
          fullWidth
          size="small"
          limitTags={limitTags}
          freeSolo
          value={value || []}
          options={options}
          onChange={(event, selectedOptions) => onChange(selectedOptions)}
          getOptionLabel={(option: any) => typeof option === 'string' || typeof option === 'number' ? option : ""}
          ChipProps={{deleteIcon: <Close/>}}
          renderOption={(props, option, {selected}) =>
            <BoxCSS {...props} key={`${id}box`}>
              <CheckboxCSS checked={selected}/>
              {option}
            </BoxCSS>
          }
          renderInput={(params) =>
            <TextFieldCSS {...params} placeholder={value.length <= limitTags ? placeholder : ''}/>
          }
        />
      }
    />
  );
};

const BoxCSS = styled(Box)`
  background: #171B27;
  padding-left: 6px;
`;

const CheckboxCSS = styled(Checkbox)`
  color: ${({theme}) => theme.palette.grey[600]};
  padding: 0 6px;
  
  &.Mui-checked {
    color: ${({theme}) => theme.palette.grey[600]};
  }
`;

export const TextFieldCSS = styled(TextField)`
  padding: 8px 0 8px 0;
  
  .MuiInputBase-root {
    background: #61667D;
    border-radius: 5px;
  }
  
  .MuiFormHelperText-root {
    margin-left: 0;
    font-size: 12px;
  }
`;
