import { useLocation, useNavigate } from 'react-router-dom'
import { useImageContext } from '../../context'
import { useCallback, useEffect } from 'react'
import { Pagination } from 'antd'
import { getImages } from '../../services/api'

const Footer = () => {
  const {
    category,
    page,
    updatePage,
    totalPage,
    setTotalPage,
    loading,
    setLoading,
  } = useImageContext()
  const { search } = useLocation()
  const navigate = useNavigate()

  const handlePageChange = (newPage: number) => {
    setLoading(true)
    updatePage(newPage)
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', String(newPage))
    navigate({
      search: searchParams.toString(),
    })
    setLoading(false)
  }

  const fetchTotalImage = useCallback(async () => {
    const promises = []

    for (let i = 1; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        const imagePage = i * 3 + j - 2
        promises.push(getImages(category, imagePage.toString()))
      }
    }
    const fetchedImages = await Promise.all(promises)
    setTotalPage(fetchedImages.flat().length)
  }, [category, setTotalPage])

  useEffect(() => {
    const params = new URLSearchParams(search)
    const pageParam = params.get('page')

    if (pageParam) {
      const parsedPage = parseInt(pageParam, 10)

      if (!isNaN(parsedPage)) {
        updatePage(parsedPage)
      }
    }
  }, [search, updatePage])

  useEffect(() => {}, [loading])

  useEffect(() => {
    fetchTotalImage()
  }, [fetchTotalImage])

  return (
    <div className="d-flex justify-content-center py-4">
      <Pagination
        current={page ?? 1}
        defaultCurrent={1}
        total={totalPage ?? 1}
        onChange={handlePageChange}
        responsive
        disabled={loading}
      />
    </div>
  )
}

export default Footer
