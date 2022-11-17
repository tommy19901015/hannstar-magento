import styled from "styled-components";

export const BGBannerStyle: React.FC<any> = styled.div`
  background-image: url("${({ src }: any) => src}");
  background-size: cover;
  background-size: auto;
  background-repeat: no-repeat;
  width: 100%;  

    @media (max-width: 980px) {
      
    }
`;

