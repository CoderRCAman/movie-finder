import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export default function MovieCard({
  title,
  image_url,
  genres,
}: {
  title: string;
  image_url: string;
  genres: string[];
}) {
  return (
    <Card className=" w-full ">
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={image_url} className="w-full h-48 object-cover" />
      </CardContent>
      <CardFooter className="gap-1 ">
        {genres.map((genre, index) => (
          <Badge variant={"secondary"} key={index}>
            {genre}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
