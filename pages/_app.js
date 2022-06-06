import dynamic from "next/dynamic"

const DynamicMetaTags = dynamic(() => import("../components/MetaTags/MetaTags"))
import Layout from "../components/Layout/Layout"

import "/styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DynamicMetaTags
        title={"tytul"}
        keywords={"jakies keywordsy"}
        description={"jakis opis"}
        ogTitle={"tytul"}
        ogType={"website"}
        ogUrl={"https://silesiasites.pl"}
        ogImage={"/images/logo.webp"}
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
