import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Codigofacilito from "../components/codigofacilito"
import EdNav from "../components/education-nav"

export default function Home() {
  return (
    <div>
      <Header />
      <EdNav />
      <Repos />
      <Codigofacilito />
    </div>
  )
}
