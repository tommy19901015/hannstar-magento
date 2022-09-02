import styled from "styled-components";
import { I_Style } from "./interface";

export const FullPageStyle: React.FC<I_Style> = styled.div`
  max-width: 1400px;
  margin: 40px auto;
  padding: 0 20px;
  @media (max-width: 980px) {
    
  }
`;

export const OneColStyle: React.FC<I_Style> = styled.div`
    max-width:1400px
    margin: 0 auto;
    @media (max-width: 980px) {
    margin: 40px auto;
    }   
`;

export const TwoColStyle: React.FC<I_Style> = styled.div`
  display: flex;
  margin: 40px auto;
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    margin: 20px auto;
  }
`;

export const LeftColStyle: React.FC<I_Style> = styled.div`
  width: ${(props: { widthL: number }) => props.widthL}%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const RightColStyle: React.FC<I_Style> = styled.div`
  width: ${(props: { widthR: number }) => props.widthR}%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;
