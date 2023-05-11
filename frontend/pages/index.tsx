import { useEffect, useState } from "react";

import { InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import { getAnimeByIds, indexPage } from '@animeflix/api';
import { AnimeInfoFragment } from '@animeflix/api/aniList';

import Section from '@components/anime/Section';
import Modal from '@components/Modal/Modal';
import Header from '@components/Header';
import progressBar from '@components/Progress';
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

const VideoPlayer = dynamic(() => import('@components/watch/VideoPlayer'), {
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
  const [showModal, setShowModal] = useState(false)
  const [recentlyWatched, setRecentlyWatched] = useState<AnimeInfoFragment[]>(
    []
  );

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
        {
          showModal && <Modal onClick={() => setShowModal(false)}/>
        }
      <Header />
      <Banner anime={banner} onEnded={() => setShowModal(true)}/>
      
      setShowModal(true)
      <Section title="Trending Now" animeList={trending.media} />

      {/* only show */}
      {recentlyWatched.length > 0 ? (
        <Section title="Continue watching" animeList={recentlyWatched} />
      ) : null}
    </>
  );
};

export default Index;
