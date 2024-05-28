import DashboardNavbar from "@/components/navbar/dashboard-navbar";
import DashboardSidebar from "@/components/sidebar/dashboard-sidebar";
import { daisyUiThemes } from "@/components/theme-controller-dropdown";
import "@/styles/globals.css";
import { ModalContainer, ModalProvider } from "@faceless-ui/modal";
import { getCookie } from "cookies-next";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <>
      <Toaster
        closeButton
        duration={3000}
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "w-full p-4 shadow-sm shadow-base-300 flex font-sans items-center gap-4",
            content: "text-sm w-full",
            success: "bg-success text-success-content",
            info: "bg-info text-info-content",
            warning: "bg-warning text-warning-content",
            error: "bg-error text-error-content",
            default: "bg-base-100 text-base-content",
            description: "text-white text-xs",
            closeButton: "bg-base-100 text-base-content",
          },
        }}
      />
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="default"
        themes={daisyUiThemes}
      >
        <ModalProvider transTime={250}>
          <ModalContainer className="grid place-items-center bg-base-200/70" />

          {pathname.startsWith("/dashboard") ? (
            <main className="w-full grid grid-cols-[70px_auto]">
              <DashboardSidebar />

              <div id="dashboard-content" className="relative overflow-y-auto">
                <DashboardNavbar />

                <div className="overflow-y-auto max-h-screen mt-[67px] p-4">
                  <Component {...pageProps} />
                </div>
              </div>
            </main>
          ) : (
            <Component {...pageProps} />
          )}
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}
