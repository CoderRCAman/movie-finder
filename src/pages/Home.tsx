import MovieCard from "@/components/Home/MovieCard/MovieCard";
import SearchWithSelect from "@/components/SearchWithSelect/SearchWithSelect";
import { useStore } from "@/store/StoreProvider";
import { AnimatePresence, motion } from "framer-motion";
import { Pagination } from "react-rainbow-components";
export default function Home() {
  const { data, pages, pagination, handlePagination } = useStore();
  return (
    <div className="grid-bg">
      <section className="container">
        <SearchWithSelect />
      </section>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className=" container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 gap-3 "
      >
        {data.map((movie) => (
          <AnimatePresence mode="sync">
            <motion.div
              key={movie.imdbmovieid}
              exit={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
            >
              <MovieCard
                genres={movie.moviegenres}
                image_url={movie.moviemainphotos[0]}
                title={movie.movietitle}
              />
            </motion.div>
          </AnimatePresence>
        ))}
      </motion.div>
      <div className="my-10">
        <Pagination
          className="rainbow-m_auto"
          pages={pages}
          activePage={pagination}
          onChange={(_: number, index: number) => handlePagination(index)}
        />
      </div>
    </div>
  );
}
