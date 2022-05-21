import styled from 'styled-components';
import { Pagination } from "@mui/material";
import { YELLOW_COLOR } from "../../utils/constants";

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

export const StyledPagination = styled(Pagination)`
  & .MuiPaginationItem-root{
    color: ${YELLOW_COLOR};
  }
`;
