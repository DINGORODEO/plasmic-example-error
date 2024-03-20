import { PLASMIC } from "@/plasmic-init"
import { PlasmicClientRootProvider } from "../plasmic-init-client"
import { PlasmicComponent } from "@plasmicapp/loader-nextjs"

export default async function Footer() {
  const data = await PLASMIC.fetchComponentData("Footer")
  return (
    <PlasmicClientRootProvider prefetchedData={data}>
      <PlasmicComponent component="Footer" />
    </PlasmicClientRootProvider>
  )
}
