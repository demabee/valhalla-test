import React from 'react'
import { CustomImageProps } from './type'
import { Column, ImageElm, Overlay } from './style'

const CustomImage: React.FC<CustomImageProps> = ({ name, url, delay }) => {
  return (
    <Column className="col" delay={delay}>
      <ImageElm src={url} alt={name} />
      <Overlay className="middle">
        <a className="btn btn-dark" href={url} download={name}>
          DOWNLOAD
        </a>
      </Overlay>
    </Column>
  )
}

export default CustomImage
