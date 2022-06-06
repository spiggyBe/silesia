import dynamic from "next/dynamic"
const DynamicMetaTags = dynamic(() => import("/components/MetaTags/MetaTags"))
const DynamicErrorSite = dynamic(() =>
  import("../components/ErrorSite/ErrorSite")
)

const Error404 = () => {
  return (
    <>
      <DynamicMetaTags
        title={
          "Błąd: taka strona nie istnieje - Prywatny Detektyw Wrocław - detektyw od zdrad, wykrywanie zdrady, udowadnianie zdrady, zbieranie i gromadzenie dowodów - Prywany Wydział Śledczy PWŚ"
        }
        keywords={
          "zdrada, wykrywanie zdrady, wykrycie zdrady, udowodnienie zdrady, udowadnianie zdrady, poszukiwanie osób zaginionych, poszukiwania zaginionych, poszukiwanie osób, poszukiwania osób, ustalanie sprawców przestępstw, ustalenie sprawców przestępstw, badania genetycznie, badania dna, dyskretne badania dna, obserwacje, obscerwacja, ustalenia, zbieranie dowodów, gromadzenie dowodów, śledzenie"
        }
        description={
          "Detektyw od zdrad, wykrywanie zdrady, ujawnianie zdrady i romansu, poszukiwania osób zaginioncyh, obserwacje, obserwowanie, ustalenia, zbieranie dowodów, prywatny detektyw Wrocław i okolice"
        }
        ogTitle={
          "Błąd: taka strona nie istnieje - Prywatny Detektyw Wrocław - detektyw od zdrad, wykrywanie zdrady, udowadnianie zdrady, zbieranie i gromadzenie dowodów - Prywany Wydział Śledczy PWŚ"
        }
        ogType={"person"}
        ogUrl={"https://detektyw-pws.pl/"}
        ogImage={"/images/logo.webp"}
      />
      <DynamicErrorSite />
    </>
  )
}

export default Error404
