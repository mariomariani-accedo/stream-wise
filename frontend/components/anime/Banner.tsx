import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { AnimeBannerFragment } from "@animeflix/api/aniList";
import { ClockIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";

import Genre from "@components/Genre";
import Icon from "@components/Icon";
import progressBar from "@components/Progress";
import { stripHtml } from "@utility/utils";

const VideoPlayer = dynamic(() => import("@components/watch/VideoPlayer"), {
  ssr: false,
});
export interface BannerProps {
  anime: AnimeBannerFragment;
  onEnded: Function
}

const Banner: React.FC<BannerProps> = ({ anime, onEnded }) => {
  const router = useRouter();
  const src =
    "https://test-data-interviews.s3.eu-west-1.amazonaws.com/Forest+-+97998.mp4";

  // finish the progress bar if the bannerimage doesn't exist
  useEffect(() => {
    if (!anime.bannerImage) progressBar.finish();
  }, [anime.bannerImage]);

  return (
    <div className=" relative flex h-[570px]  justify-center">
      {/* The image behind the banner */}
      {anime.bannerImage && (
        <Image
          priority
          src={anime.bannerImage}
          alt={`Banner for ${anime.title.english || anime.title.romaji}`}
          layout="fill"
          objectFit="cover"
          className="opacity-60"
          onLoadingComplete={progressBar.finish}
        />
      )}

      {/* The container that lies on top of the image */}
      <div className="absolute mx-auto mt-4 text-white">
        <VideoPlayer src={src} poster="" onEnded={onEnded}/>
      </div>
    </div>
  );
};

export default Banner;
