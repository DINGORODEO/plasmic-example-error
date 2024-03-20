import "./global.scss"

import { PropsWithChildren } from "react"
import Footer from "./footer"

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
