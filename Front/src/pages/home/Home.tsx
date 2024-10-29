import React from "react";
import Category from "../../components/Category";
import Sarches from "../../components/Searches";

const Home = () => {
  return (
    <main className="">
      <section className="flex flex-col">
        <h2 className="">Ceara</h2>
        <figure className="w-full h-32 my-3 bg-black md:h-52 rounded-xl">
          Propaganda
        </figure>
        <Category />
        <span className="flex items-center justify-center w-full h-20 bg-slate-100">
          Propaganda
        </span>
        <Sarches />
      </section>
    </main>
  );
};

export default Home;
