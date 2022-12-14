import styled from "styled-components";
import { I_Style, TopMType } from "./interface";

export const OneColFullStyle: React.FC<I_Style> = styled.div`
margin-bottom:40px;
  &:first-child{
    margin: 0px auto;  
  }
  @media (max-width: 980px) {
    margin-bottom: 24px;
  }
`;

export const TwoColFullStyle: React.FC<I_Style> = styled.div`
  display: flex;
  &:first-child{
    margin: 0px auto; 
  }
  @media (max-width: 980px) {
    flex-direction: ${(props: { topMContent: TopMType }) =>
    props.topMContent === TopMType.Left ? "column" : "column-reverse"};
    margin-bottom: 24px;
  }
`;

export const OneColStyle: React.FC<I_Style> = styled.div`    

    margin:${(props: { fixClass: string }) =>
    props.fixClass === 'fixed' ? "60px auto 0px auto" : "0px auto"};
    max-width:1400px;
    &:first-child{
    }
    @media (max-width: 980px) {
    margin: 30px 0px;
    padding: 0 30px;
    }   
`;

export const TwoColStyle: React.FC<I_Style> = styled.div`
  display: flex;
  padding:0 60px;
  margin: 40px auto;
  max-width: 1400px;
  &:first-child{
  }
  @media (max-width: 980px) {
    flex-direction: ${(props: { topMContent: TopMType }) =>
    props.topMContent === TopMType.Left ? "column" : "column-reverse"};
    margin: 30px auto;
    padding:0 30px;
  }
`;

export const LeftColStyle: React.FC<I_Style> = styled.div`
  width: ${(props: { widthL: number, minWidthL: string }) => props.widthL}%;
  min-width: ${(props: { widthL: number, minWidthL: string }) =>
    props.minWidthL ? props.minWidthL : "initial"};
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

export const ColBGStyle: React.FC<I_Style> = styled.div`    
    background-color: ${(props: { bgColor: string }) => props.bgColor ? props.bgColor : "#fff"};
`;
