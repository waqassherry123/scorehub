import type { ReactNode } from "react";
import Header from "../components/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="-mt-22">{children}</main>
    </div>
  );
}
