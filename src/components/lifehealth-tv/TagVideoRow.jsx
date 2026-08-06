import Image from "next/image";
import { Play, Tag as TagIcon } from "lucide-react";
import { urlFor } from "@/sanity/image";

export default function TagVideoRow({ tag, videos }) {
  return (
    <div className="py-6 first:pt-0">
      <div className="mb-4 flex items-center gap-2">
        <TagIcon className="h-4 w-4 text-teal-600" />
        <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-navy-900">{tag}</h3>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {videos.map((video) => (
          <a key={video._id} href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="group flex-none">
            <div className="relative h-[130px] w-52 overflow-hidden rounded-xl bg-slate-200">
              {video.featuredImage ? (
                <Image
                  src={urlFor(video.featuredImage).width(208).height(130).url()}
                  alt=""
                  width={208}
                  height={130}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : null}
              <span className="absolute inset-0 flex items-center justify-center bg-navy-900/0 transition-colors group-hover:bg-navy-900/30">
                <Play className="h-8 w-8 fill-white text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </div>
            <p className="mt-2 w-52 line-clamp-2 text-sm font-semibold leading-snug text-navy-900 group-hover:text-teal-600">
              {video.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
