import Head from 'next/head'
import Link from 'next/link'
import { useAuthentication } from '../hooks/useAuthentication'

export default function Home() {
  const { user } = useAuthentication()

  return (
    <div>
      <Head>
        <title>Page2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>{user?.uid || '未ログイン'}</p>
      <Link href="/">
        Go back
      </Link>
    </div>
  )
}