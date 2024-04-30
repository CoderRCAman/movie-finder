import movies from "../data/data.json";
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
} from "react";

type MoviesDataType = typeof movies;
const TOTAL_PAGE_SIZE = 20;
interface AppContextType {
  data: MoviesDataType; // Change 'any[]' to the actual type of your data array
  country: string;
  genre: string;
  language: string;
  search: string;
  pagination: number;
  pages: number;
  setCountry: React.Dispatch<SetStateAction<string>>;
  setGenre: React.Dispatch<SetStateAction<string>>;
  setLanguage: React.Dispatch<SetStateAction<string>>;
  setSearch: React.Dispatch<SetStateAction<string>>;
  setPagination: React.Dispatch<SetStateAction<number>>;
  resetFilters: () => void;
  handlePagination: (page: number) => void;
}
const AppContext = createContext<AppContextType>({
  data: [],
  country: "",
  genre: "",
  language: "",
  search: "",
  pagination: 1,
  pages: 1,
  setCountry: () => {},
  setGenre: () => {},
  setLanguage: () => {},
  setSearch: () => {},
  setPagination: () => {},
  resetFilters: () => {},
  handlePagination: () => {},
});
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currenntData, setCurrentData] = useState<MoviesDataType>([]);
  const [data, setData] = useState<MoviesDataType>([]);
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(1);
  const [pages, setPages] = useState(1);
  function resetFilters() {
    setCountry("");
    setLanguage("");
    setGenre("");
    setPagination(1);
  }
  function handlePagination(index: number) {
    setPagination(index);
  }
  const sharedState: AppContextType = {
    data: data,
    country: country,
    genre: genre,
    search: search,
    pagination: pagination,
    pages: pages,
    setPagination: setPagination,
    language: language,
    setCountry: setCountry,
    setGenre: setGenre,
    setLanguage: setLanguage,
    setSearch: setSearch,
    resetFilters: resetFilters,
    handlePagination: handlePagination,
  };

  useEffect(() => {
    setCurrentData(movies);
  }, []);

  useEffect(() => {
    if (!search) {
      setCurrentData(movies);
      return;
    }
    setCurrentData(
      movies.filter((movie) =>
        movie.movietitle.toLowerCase().includes(search.toLowerCase())
      )
    );
    resetFilters();
    setPagination(1);
  }, [search]);

  useEffect(() => {
    if (!country && !genre && !language) {
      setCurrentData(movies);
      return;
    }
    let tempData = movies.filter((movie) => {
      if (!country) return true;
      return movie.moviecountries.includes(country);
    });
    tempData = tempData.filter((movie) => {
      if (!genre) return true;
      return movie.moviegenres.includes(genre);
    });
    tempData = tempData.filter((movie) => {
      if (!language) return true;
      return movie.movielanguages.includes(language);
    });
    setCurrentData(tempData);
    setPagination(1);
  }, [country, genre, language]);

  useEffect(() => {
    setPages(Math.ceil(currenntData.length / TOTAL_PAGE_SIZE));
  }, [currenntData]);

  useEffect(() => {
    if (pagination == 0) {
      return;
    }
    if (pagination > pages) {
      return;
    }

    setData(
      currenntData.slice(
        (pagination - 1) * TOTAL_PAGE_SIZE,
        pagination * TOTAL_PAGE_SIZE
      )
    );
  }, [pagination, currenntData, pages]);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useStore() {
  return useContext(AppContext);
}
