import styled from "styled-components";

export const TitleContentStyle: React.FC<any> = styled.div`
  background-color: ${({ bgColor }: any) => bgColor ? bgColor : "#fff"};
`;
