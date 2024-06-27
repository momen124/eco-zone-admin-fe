import type { PropsWithChildren } from "react";
import Footer from "../Footer";
import Header from "../Header";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
