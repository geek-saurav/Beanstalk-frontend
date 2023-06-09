import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App({ Component, pageProps }) {
  return (
    <ProSidebarProvider>
      <Component {...pageProps} />
    </ProSidebarProvider>
  );
}
