import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, genres, languages } from "@/data/selectData";
import { useStore } from "@/store/StoreProvider";
import { Button } from "../ui/button";
import { RxCross1 } from "react-icons/rx";
export default function CategoriesSelect() {
  const {
    country,
    language,
    genre,
    setCountry,
    setLanguage,
    setGenre,
    resetFilters,
  } = useStore();
  return (
    <>
      <CustomSelect
        data={countries}
        value={country}
        placeholder="Countries"
        onChangeHandler={(value) => {
          setCountry(value);
        }}
      />
      <CustomSelect
        value={genre}
        data={genres}
        placeholder="Genres"
        onChangeHandler={(value) => {
          setGenre(value);
        }}
      />
      <CustomSelect
        value={language}
        data={languages}
        placeholder="Languages"
        onChangeHandler={(value) => {
          setLanguage(value);
        }}
      />
      <Button onClick={resetFilters} variant={"destructive"}>
        <RxCross1 className="text-white stroke-2" />
      </Button>
    </>
  );
}

function CustomSelect({
  data,
  placeholder,
  onChangeHandler,
  value,
}: {
  value: string;
  data: string[];
  placeholder: string;
  onChangeHandler?: (value: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChangeHandler}>
      <SelectTrigger className="md:max-w-[200px] md:w-full max-w-[130px] w-full    bg-white shadow-md">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((value) => (
          <SelectItem value={value}>{value}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
