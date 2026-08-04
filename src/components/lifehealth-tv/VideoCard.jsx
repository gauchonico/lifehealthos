import { Play } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function VideoCard({ video }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="group block w-60 flex-none">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-200">
        <Image src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="h-full w-full transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute bottom-2 right-2 rounded bg-navy-900/90 px-1.5 py-0.5 text-[10px] font-semibold text-white">{video.duration}</span>
        <span className="absolute inset-0 flex items-center justify-center bg-navy-900/0 transition-colors group-hover:bg-navy-900/30"><Play className="h-9 w-9 fill-white text-white opacity-0 transition-opacity group-hover:opacity-100" /></span>
      </div>
      <p className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-navy-900 group-hover:text-teal-600">{video.title}</p>
      <p className="mt-1 text-xs text-slate-500">CTI LifeHealth</p>
    </a>
  );
}
