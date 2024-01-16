import React, { createContext, useContext, useState } from 'react'
import { ImageContextProps, ImageContextValues } from './interface'

const ImageContext = createContext<ImageContextValues | undefined>(undefined)

export const ImageProvider: React.FC<ImageContextProps> = ({ children }) => {
  const [page, setPage] = useState<number | null>(null)
  const [totalPage, setTotalPage] = useState<number | null>(null)
  const [category, setCategory] = useState<string>('nature')
  const [loading, setLoading] = useState<boolean>(false)

  const updatePage = (newPage: number) => {
    setPage(newPage)
  }

  const updateCategory = (newCategory: string) => {
    setCategory(newCategory)
  }

  const contextValues: ImageContextValues = {
    page,
    loading,
    category,
    totalPage,
    setTotalPage,
    updatePage,
    updateCategory,
    setLoading,
  }

  return (
    <ImageContext.Provider value={contextValues}>
      {children}
    </ImageContext.Provider>
  )
}

export const useImageContext = (): ImageContextValues => {
  const context = useContext(ImageContext)

  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider')
  }

  return context
}
