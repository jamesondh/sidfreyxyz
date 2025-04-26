import Search from "@/components/search";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="space-y-2 text-center">
        <div className="flex justify-center items-center">
          <Image src="/sidfrey.png" alt="Sidfrey" width={120} height={120} />
        </div>
        <div className="flex justify-center items-center">
          <TextAnimate
            text="Sidfrey"
            type="calmInUp"
            className="text-foreground text-5xl font-medium"
          />
        </div>
        <p className="text-lg text-muted-foreground">
          !Bang to anywhere. Search with your favorite engine.
        </p>
      </div>
      <Search />
    </>
  );
}
