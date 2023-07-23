import { Autocomplete, styled } from "@mui/material";

export const AutocompleteCSS = styled(Autocomplete)`
  #MultiSelectCheckbox {
    min-width: 1px;
  }
  
  div.MuiButtonBase-root svg {
    display: none;
  }
  
  .MuiOutlinedInput-root {
    padding: 4px !important;
  }
  
  input#long-value-select {
    min-height: 1.7em;
    box-sizing: border-box;
  }
  
  .MuiChip-root {
    border-radius: 6px;
    margin: 0 4px;
    font-size: 0.7125rem;
  }
  
  div.MuiAutocomplete-tag {
    background: #7B9EFF;
    color: #131822;
    border-radius: 4px;
  }
  
  .MuiChip-deleteIcon {
    color: ${({ theme }) => theme.palette.grey['600']};
    font-size: 12px;
  }
`;
