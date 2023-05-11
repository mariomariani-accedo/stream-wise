import React, { useRef } from "react";

import { AnimeInfoFragment } from "@animeflix/api/aniList";

import AnimeCard from "@components/anime/Card";

export interface SectionProps {
  title: string;
  animeList: AnimeInfoFragment[];
  setVideoSrc: Function;
}

const Section: React.FC<SectionProps> = ({
  title,
  animeList,
  setVideoSrc = () => {},
}) => {
  const animeListRef = useRef(null);

  const videoSources = [
    // Forest -> 40 s
    "https://test-data-interviews.s3.eu-west-1.amazonaws.com/Forest+-+97998.mp4",

    // Coffe --> 16 s
    "https://test-data-interviews.s3.eu-west-1.amazonaws.com/Coffee+-+45358.mp4",

    // Mountain --> 8s
    "https://test-data-interviews.s3.eu-west-1.amazonaws.com/Mountains+-+61818.mp4",

    // Ocean --> 46s
    "https://test-data-interviews.s3.eu-west-1.amazonaws.com/Ocean+-+62249.mp4",
  ];

  return (
    <div>
      <p className="mt-4 ml-3 text-base font-semibold text-white sm:ml-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {title}
      </p>

      <div
        tabIndex={0}
        className="mt-2 mb-8 ml-2 flex space-x-4 overflow-y-hidden overflow-x-scroll p-1 outline-none scrollbar-hide sm:ml-6"
        ref={animeListRef}
        onMouseEnter={() => animeListRef.current.focus()}
      >
        {animeList.map((anime) => (
          <AnimeCard
            key={anime.id}
            anime={anime}
            onClick={() =>
              setVideoSrc(videoSources[anime.id % videoSources.length])
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
