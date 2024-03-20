import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional"
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "o18PCvr4rF9aSHNWHVzuzb", // ID of a project you are using
      token:
        "oemFKB0YK8R1e09XPlcjGH47sfRgDCFsFSnAij6rA3QsbPcD77n8Ayf3FTOFx0fNF3XVtln5v1yYKQVBWtA", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
