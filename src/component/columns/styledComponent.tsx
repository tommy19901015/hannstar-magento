import styled from "styled-components";
import { I_Style } from "./interface";

export const OneColFullStyle: React.FC<I_Style> = styled.div`
  margin: 0 auto;
  &:first-child{
    margin-top: 0px; 
  }
  @media (max-width: 980px) {
    margin: 24px auto
  }
`;

export const TwoColFullStyle: React.FC<I_Style> = styled.div`
  display: flex;
  &:first-child{
    margin-top: 0px; 
  }
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    margin: 24px auto;
  }
`;

export const OneColStyle: React.FC<I_Style> = styled.div`    
    margin: 0 auto;
    max-width:1400px;
    &:first-child{
      margin-top: 0px; 
    }
    @media (max-width: 980px) {
    margin: 40px 24px;
    }   
`;

export const TwoColStyle: React.FC<I_Style> = styled.div`
  display: flex;
  margin: 40px auto;
  &:first-child{
    margin-top: 0px; 
  }
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
