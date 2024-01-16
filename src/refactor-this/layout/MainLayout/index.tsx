import { Layout } from 'antd'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const { Content } = Layout
const MainLayout: React.FC = () => {
  return (
    <Layout style={{ height: '100%', minHeight: '100dvh' }}>
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default MainLayout
