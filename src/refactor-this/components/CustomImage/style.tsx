import sc, { keyframes } from 'styled-components'
import { ColumnProps } from './type'

const slideRightAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Column = sc.div<ColumnProps>`
  height: 400px;
  padding: 10px;
  animation: ${slideRightAnimation} ${(props) => props.delay * 0.5}s both;

  &:hover {
    img {
      opacity: 0.3;
    }

    .middle {
      opacity: 1;
    }
  }
`

export const ImageElm = sc.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`

export const Overlay = sc.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`
