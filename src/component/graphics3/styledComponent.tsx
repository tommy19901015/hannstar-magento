import styled from "styled-components";

export const ImgStyle: React.FC<any> = styled.img`
  width: ${(props: { imgSizePercent: number }) =>
    props.imgSizePercent ? props.imgSizePercent : '100'}%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const GraphicsStyle: React.FC<any> = styled.div`
  background-color: ${(props: { bgColor: string }) =>
    props.bgColor ? props.bgColor : '#FFF'};
`;