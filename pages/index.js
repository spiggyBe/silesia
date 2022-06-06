import dynamic from "next/dynamic"
const DynamicMetaTags = dynamic(() => import("/components/MetaTags/MetaTags"))
export default function Home() {
  return (
    <>
      <DynamicMetaTags
        title={"tytul"}
        keywords={"jakies keywordsy"}
        description={"jakis opis"}
        ogTitle={"tytul"}
        ogType={"website"}
        ogUrl={"https://silesiasites.pl"}
        ogImage={"/images/logo.webp"}
      />
      {/*       <main>
        <section>
         
        </section>
      </main> */}
    </>
  )
}
