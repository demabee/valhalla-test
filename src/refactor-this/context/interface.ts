import { ReactNode } from 'react'

export interface ImageContextProps {
  children: ReactNode
}

export interface ImageContextValues {
  page: number | null
  category: string
  loading: boolean
  totalPage: number | null
  setTotalPage: (newPage: number | null) => void
  updatePage: (newPage: number) => void
  updateCategory: (newCategory: string) => void
  setLoading: (loading: boolean) => void
}

export interface ImageProps {
  category: string
  name: string
  url: string
}
