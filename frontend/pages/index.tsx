import { useEffect, useState, useRef } from "react";

import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import { getAnimeByIds, indexPage } from "@animeflix/api";
import { AnimeInfoFragment } from "@animeflix/api/aniList";

import Section, { videoSources } from "@components/anime/Section";
import Modal from "@components/Modal/Modal";
import Binge from "@components/Binge/Binge";
import Header from "@components/Header";
import progressBar from "@components/Progress";
import Banner from "@components/anime/Banner";

export const getServerSideProps = async () => {
  const data = await indexPage({
    perPage: 8,
    page: 1,
    seasonYear: new Date().getFullYear(),
  });

  return {
    props: {
      ...data,
    },
  };
};

const VideoPlayer = dynamic(() => import("@components/watch/VideoPlayer"), {
  ssr: false,
});

const Index = ({
  banner,
  trending,
  popular,
  topRated,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // finish the progress bar
  progressBar.finish();
  const [showModal, setShowModal] = useState(false);
  const [showBinge, setShowBinge] = useState(false);
  const [recentlyWatched, setRecentlyWatched] = useState<AnimeInfoFragment[]>(
    []
  );
  const [videoSrc, setVideoSrc] = useState<string>();
  const time = videoSrc?.includes("Coffe") ? 4 : 5;
  const videoPlayerRef = useRef<any>();

  useEffect(() => {
    function startCountDown() {
      setTimeout(() => {
      setShowBinge(false);
      setVideoSrc("https://test-data-interviews.s3.eu-west-1.amazonaws.com/Ocean+-+62249.mp4")
      setTimeout(() => {
        if (videoPlayerRef.current) {
          videoPlayerRef.current.current.play()
        }
      }, 2000);
    }, 5000);
    }

    if(showBinge) {
      startCountDown()
    }
  }, [showBinge])
  // populate recentlyWatched
  useEffect(() => {
    const ids = Object.keys(localStorage)
      .filter((key) => key.startsWith("Anime"))
      .map((key) => parseInt(key.replace("Anime", ""), 10));

    getAnimeByIds({
      perPage: 12,
      page: 1,
      ids,
    }).then((data) => setRecentlyWatched(data.Page.media));
  }, []);

  return (
    <>
      {showModal && <Modal onClick={() => setShowModal(false)} />}
      {showBinge && <Binge time={time} />}
      <Header />

      <Banner
        anime={banner}
        src={videoSrc}
        onEnded={() => setShowModal(true)}
        bingeWatching={(videoplayer) => {
          setShowBinge(true)
          videoPlayerRef.current = videoplayer;
        }
        }
        hideBinge={() => setShowBinge(false)}
      />

      <Section
        title="Trending Now"
        animeList={trending.media}
        setVideoSrc={setVideoSrc}
      />

      {/* only show */}
      {recentlyWatched.length > 0 ? (
        <Section
          title="Continue watching"
          animeList={recentlyWatched}
          setVideoSrc={setVideoSrc}
        />
      ) : null}

      <Section
        title="Popular"
        animeList={popular.media}
        setVideoSrc={setVideoSrc}
      />
      <Section
        title="Top Rated (All time)"
        animeList={topRated.media}
        setVideoSrc={setVideoSrc}
      />
    </>
  );
};

export default Index;
