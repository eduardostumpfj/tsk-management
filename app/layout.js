import "./globals.css";
import Menu from '@/components/organism/Menu'
import { TaskProvider } from "@/context/TaskContext";
import { Suspense } from "react";

export default function RootLayout({ children }) {  

  return (
    <html lang="en">
      <body className="bg-dark-900 text-light-300 h-screen">
          <TaskProvider>
              <div className="grid grid-cols-[130px_1fr] gap-8 p-8 h-full">
                <Menu />
                <Suspense>
                  <section className="bg-dark-700 rounded-normal p-8 overflow-hidden">{children}</section>
                </Suspense>
              </div>
          </TaskProvider>
      </body>
    </html>
  );
}
