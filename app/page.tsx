import type { Metadata } from "next";
import { Suspense } from "react";
import { Results } from "@/components/results";
import { UploadedImagesProvider } from "@/components/uploaded-images-provider";

export const metadata: Metadata = {
  title: "vectr",
  description: "vectr",
};

const ImagesSkeleton = () => (
  <div className="gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4">
    {Array.from({ length: 12 }, (_, idx) => {
      // Deterministically pick an aspect ratio for each skeleton (to keep keys and aspect ratio stable)
      const aspects = [
        "aspect-square", // 1:1
        "aspect-video", // 16:9
        "aspect-[9/16]", // 9:16; needs tailwind support or define this utility in your css
      ];
      // Use modulo for stable assignment
      const aspect = aspects[idx % aspects.length];
      // Compose the className
      const className = `mb-4 rounded-xl bg-card p-2 shadow-xl ${aspect}`;
      return <div className={className} key={`skeleton-${aspect}-${idx}`} />;
    })}
  </div>
);

const Home = () => (
  <UploadedImagesProvider>
    <div className="container relative mx-auto px-[10px] py-8">
      <Suspense fallback={<ImagesSkeleton />}>
        <Results />
      </Suspense>
    </div>
  </UploadedImagesProvider>
);

export default Home;
