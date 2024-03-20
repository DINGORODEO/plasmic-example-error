import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional"

export const PLASMIC = initPlasmicLoader({
  preview: process.env.NEXT_PUBLIC_PLASMIC_PREVIEW === "true",
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT ?? "",
      token: process.env.NEXT_PUBLIC_PLASMIC_TOKEN ?? "",
      version: process.env.PLASMIC_VERSION,
    },
  ],
})
