import styled from "styled-components";

export const BGBannerStyle: React.FC<any> = styled.div`
  background-image: url("${({ src }: any) => src}");
  background-size: cover;
  width: 100%;  
  height:400px;
    @media (max-width: 980px) {
      
    }
`;

