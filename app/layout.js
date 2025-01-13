import "./globals.css";
import Menu from '@/components/organism/Menu'
import { TaskProvider } from "@/context/TaskContext";
import { Suspense } from "react";

export default function RootLayout({ children }) {  

  return (
    <html lang="en">
      <body className="bg-dark-900 text-light-300 h-screen">
          <TaskProvider>
              <div className="grid grid-cols-1 grid-rows-[60px_1fr] gap-4 px-4 pt-4
                              md:grid-cols-[60px_1fr] md:grid-rows-1 md:h-full md:pb-4
                              lg:p-8 lg:grid-cols-[130px_1fr] lg:gap-8
              ">
                <Menu />
                <Suspense>
                  <section className="bg-dark-700 rounded-normal p-4 overflow-hidden
                                      lg:p-8
                                    ">
                    {children}
                  </section>
                </Suspense>
              </div>
          </TaskProvider>
      </body>
    </html>
  );
}
