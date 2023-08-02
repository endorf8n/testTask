import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;

  @media only screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
