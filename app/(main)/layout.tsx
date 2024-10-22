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
      </>
    )
}
