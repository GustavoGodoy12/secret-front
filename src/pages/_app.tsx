import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import SideBar from '@/components/SideBar/Sidebar'
import { SIDEBAR_WIDTH } from '@/components/SideBar/Sidebar.styles'
import '@/styles/globals.css'

const PUBLIC_ROUTES = ['/login', '/register', '/Login', '/Register']

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const hideSidebar = PUBLIC_ROUTES.some((r) => pathname.startsWith(r))

  if (hideSidebar) {
    return <Component {...pageProps} />
  }

  return (
    <>
      <SideBar />
      <div
        style={{
          marginLeft: SIDEBAR_WIDTH,
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  )
}
