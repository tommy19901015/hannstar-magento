import styled from "styled-components";

export const BGBannerStyle: React.FC<any> = styled.div`
  background-image: url("${(src: { src: string }) => src}");
  width: 100%;  
  height:560px
    @media (max-width: 980px) {
      
    }
`;

