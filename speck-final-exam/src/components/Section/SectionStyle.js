import styled from "styled-components";

export const SectionWrapper = styled.div`
    width: 100%;
    display: grid ;
    grid-template-rows: 1fr;
    margin-top: 32px;   
    
  justify-items: center;
    
  align-items: center;
    @media screen and (min-width: 1024px) {
  grid-template-columns: 1fr 1fr 1fr;
    }
`;  