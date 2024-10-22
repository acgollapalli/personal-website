import { MainSidebar } from "@/components/main-sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    return (
      <>
        <MainSidebar>
          {children}
        </MainSidebar>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h4>© 2024 Akshay Caleb Gollapalli, All rights reserved.</h4>
      </footer>
      </>
    )
}
