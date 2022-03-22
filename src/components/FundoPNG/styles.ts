import styled, { css } from 'styled-components/native';

interface ContainerType {
  type?: number;
}
export const Container = styled.View<ContainerType>`
  position: ${({ type }) => type === 1 ? css`absolute` : css`relative`};;
  bottom: ${({ type }) => type === 1 ? css`-32px` : css`-13px`};
  left: ${({ type }) => type === 1 ? css`-32px` : css`-13px`};;

`;

export const Fundo = styled.Image`
 
  height: 150px;
  width: 275px;
  border-radius: 25px;
  overflow: hidden;
`;