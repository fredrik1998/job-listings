import { DetailedHTMLProps, ImgHTMLAttributes } from "react"
import styled from "styled-components"

interface StyledImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    mobileSrc: string;
  }

export const StyledImage = styled.img<StyledImageProps>`
width: 100%;
height: 100%;
background-color:hsl(180, 29%, 50%);
position: relative;
z-index: 1;
@media screen and (max-width: 767px) {
    content: url(${props => props.mobileSrc});
}
`