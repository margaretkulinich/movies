import styled from "@emotion/styled";
import { Chip, InputLabel, Select } from "@mui/material";
import { YELLOW_COLOR } from "../../utils/constants";

export const StyledSelect = styled(Select)`
  color: ${YELLOW_COLOR};
  width: 300px;

  & .MuiOutlinedInput-notchedOutline {
    border-color: white;
    box-shadow: 0px 0px 4px 1px black;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  color: white;
`;

export const StyledChip = styled(Chip)`
  color: ${YELLOW_COLOR};
`;
