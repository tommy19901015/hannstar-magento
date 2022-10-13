import styled from "styled-components";

export const ImgStyle: React.FC<any> = styled.img`
  width: ${(props: { imgSizePercent: number }) =>
    props.imgSizePercent ? props.imgSizePercent : '100'}%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;