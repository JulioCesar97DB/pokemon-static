import Head from "next/head"
import { Navbar } from "../ui"

type Props = {
  children?: React.ReactNode,
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Julio Cesar" />
        <meta name="description" content={`Information about the pokemon ${title}`} />
        <meta name="keywords" content={` ${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Information about ${ title }`} />
        <meta property="og:description" content={`This is the page about ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/16.1%20banner.png` }/>
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}