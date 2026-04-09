import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

type PreviewProps = {
  url: string;
  title: string;
  summary: string;
  category: string;
  promptId: string;
  priority?: boolean;
  onSelect: () => void;
};

export const Preview = ({
  url,
  title,
  summary,
  category,
  promptId,
  priority,
  onSelect,
}: PreviewProps) => (
  <button
    type="button"
    onClick={onSelect}
    data-prompt-id={promptId}
    className="group mb-4 w-full rounded-xl bg-card p-2 text-left shadow-xl transition-transform duration-200 hover:-translate-y-1"
  >
    <AspectRatio ratio={1}>
      <div className="relative h-full overflow-hidden rounded-md">
        <Image
          alt={title || "Skill preview"}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          src={url}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 text-white">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
            {category}
          </span>
          <h3 className="line-clamp-2 text-base font-semibold leading-tight">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm text-white/80">{summary}</p>
        </div>
      </div>
    </AspectRatio>
  </button>
);
