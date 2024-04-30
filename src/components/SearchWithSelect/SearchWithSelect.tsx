import CategoriesSelect from "./CategoriesSelect";
import SearchBar from "./SearchBar";

export default function SearchWithSelect() {
  return (
    <div className="w-full justify-center gap-y-5 flex-wrap pt-6 flex  gap-x-1 sm:gap-x-3 items-center">
      <SearchBar />
      <CategoriesSelect />
    </div>
  );
}
