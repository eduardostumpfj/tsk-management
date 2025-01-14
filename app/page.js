
export default function Home() {
  return (
    <section className="grid w-full h-[calc(100vh-60px-5rem)] md:h-full items-center justify-center px-8">
      <div className="flex flex-col gap-12 items-center">
        <h1 className="text-6xl text-center font-bold"> Welcome </h1>
        <p className="text-xl">
            This is a simple project created with the intent of putting into practice some of the things I learned about <span className="font-black text-4xl text-purple-100">React</span> and <span className="font-black text-4xl text-purple-100">Next.js</span>.
            <br />
            <br />
            Some things are not 100% perfect, and others could be improved, but the main idea is here.
            <br />
            <br />
            I took the liberty of adapting the entire visual design from an amazing project I found on Behance.
        </p>
        <a
          className="bg-purple-100 min-w-[100px] mr-3 w-fit text-light-100 px-4 py-2 rounded-full justify-self-center hover:bg-purple-300 transition-[backGround] cursor-pointer"
           href="https://www.behance.net/gallery/203264349/QTaask-Project-Manager?tracking_source=search_projects|managment+webapp&l=57"
           target="_blank"
        >
            Check it out here!
        </a>
      </div>
    </section>    
  );
}
