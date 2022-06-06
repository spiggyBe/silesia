import Head from "next/head"

const MetaTags = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta charSet="utf-8" />
      <meta name="twitter:card" content="summary" />
      <meta name="whatsup:card" content="summary" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
/* MetaTags.defaultProps = {
  title:
    "Prywatny Detektyw Wrocław - detektyw od zdrad, wykrywanie zdrady, udowadnianie zdrady, zbieranie i gromadzenie dowodów - Prywany Wydział Śledczy PWŚ",
  keywords:
    "zdrada, wykrywanie zdrady, wykrycie zdrady, udowodnienie zdrady, udowadnianie zdrady, poszukiwanie osób zaginionych, poszukiwania zaginionych, poszukiwanie osób, poszukiwania osób, ustalanie sprawców przestępstw, ustalenie sprawców przestępstw, badania genetycznie, badania dna, dyskretne badania dna, obserwacje, obscerwacja, ustalenia, zbieranie dowodów, gromadzenie dowodów, śledzenie",
  description:
    "Detektyw od zdrad, wykrywanie zdrady, ujawnianie zdrady i romansu, poszukiwania osób zaginioncyh, obserwacje, obserwowanie, ustalenia, zbieranie dowodów, prywatny detektyw Wrocław i okolice",
  ogTitle:
    "Prywatny Detektyw Wrocław - detektyw od zdrad, wykrywanie zdrady, udowadnianie zdrady, zbieranie i gromadzenie dowodów - Prywany Wydział Śledczy PWŚ",
} */
export default MetaTags
