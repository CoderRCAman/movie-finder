import { useStore } from "@/store/StoreProvider";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  const { setSearch } = useStore();
  return (
    <div className="flex w-full bg-white shadow-md border-slate-100 px-3 py-2 items-center border rounded-full">
      <input
        name="search"
        placeholder="Search your favourite movie..."
        className="w-full bg-transparent outline-none"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <IoSearchSharp />
    </div>
  );
}
