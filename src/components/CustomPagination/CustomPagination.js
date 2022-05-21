import { ContainerPagination, StyledPagination } from "./styles";

export const CustomPagination = ({ setPage, numOfPage = 15 }) => {
  const handlePageChange = (page) => {
    setPage(page);

    window.scroll(0, 0);
  };

  return (
    <ContainerPagination>
      <StyledPagination
        count={numOfPage}
        color='secondary'
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </ContainerPagination>
  )
};
