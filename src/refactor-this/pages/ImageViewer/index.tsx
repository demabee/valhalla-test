import { useLocation } from 'react-router-dom'
import { useImageContext } from '../../context'
import { useEffect, useState } from 'react'
import { getImages } from '../../services/api'
import CustomImage from '../../components/CustomImage'
import { ImageProps } from '../../types'
import { Spin } from 'antd'
import { debounce } from '../../helpers'

const ImageViewer = () => {
  const { pathname } = useLocation()
  const { page, category, updateCategory, loading, setLoading } =
    useImageContext()
  const [images, setImages] = useState<ImageProps[]>([])

  const fetchImageData = async () => {
    setImages([])
    setLoading(true)
    const promises = []

    for (let i = 0; i < 3; i++) {
      const imagePage = (page ?? 1) * 3 + i - 2
      promises.push(getImages(category, imagePage.toString()))
    }

    try {
      const fetchedImages = await Promise.all(promises)

      const updatedImages = fetchedImages.flat().map((img: ImageProps) => ({
        ...img,
      }))

      setImages(updatedImages)

      setLoading(false)
    } catch (error) {
      console.error('Error fetching images:', error)
    }
  }

  const debouncedFetchImageData = debounce(fetchImageData, 500)

  useEffect(() => {
    updateCategory(pathname.substring(1))
  }, [pathname, updateCategory])

  useEffect(() => {
    debouncedFetchImageData()
  }, [category, page, debouncedFetchImageData])

  return (
    <div>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '90dvh' }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div className="container">
          <div className="row row-cols-3">
            {images.map((img: ImageProps, index: number) => (
              <CustomImage
                key={index}
                delay={index}
                name={img.name}
                url={img.url}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageViewer
