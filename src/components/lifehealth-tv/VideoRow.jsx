import { ArrowRight } from "lucide-react";
import VideoCard from "@/components/lifehealth-tv/VideoCard";

export default function VideoRow({ title, videos }) {
  return (
    <section className="py-8 first:pt-0">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="font-heading text-xl font-bold text-navy-900">{title}</h2>
        <a href="https://www.youtube.com/@CTIAFRICA/videos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-teal-600 hover:text-teal-500">More videos <ArrowRight className="h-3.5 w-3.5" /></a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-3">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div>
    </section>
  );
}
