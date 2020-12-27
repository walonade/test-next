import {NextPageContext} from "next"
import { Waypoint } from "react-waypoint";
import styled from "styled-components"
import Masonry from "react-masonry-component";
import ItemPhoto from "../components/ItemPhoto";
import fetch from "isomorphic-unfetch"
import { masonryOptions } from "../utils/config";
import WithHeader from "../layouts/WithHeader"
import { ComponentProps, useState, useEffect, useMemo } from "react";
import absoluteUrl from "next-absolute-url";
const MasonnryStyled = styled(Masonry)`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`
const Home = (props: ComponentProps<any>) => {
  let hasItem: unknown[] = [];
  const [photosList, setPhotosList] = useState<Array<unknown>>([])
  const [page, setPage] = useState(2)
  const loadMoreItems = async () => {
    const data = await fetch(`/api/photo/getlist?page=${page}`, {method: "GET"})
    const response = await data.json()
    setPhotosList([...photosList, ...response.results])
    setPage(page + 1)
  };
  useEffect(() => {
    if(props.photos.results) setPhotosList(props.photos.results)
  }, [props.photos.results.length])

  // useEffect(() => {
  //     console.log('load')
  //     const listener = (event : Event) => {
  //       let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom
  //       if (windowRelativeBottom < document.documentElement.clientHeight + 500) {
  //         event.target?.removeEventListener('scroll', loadMoreItems)
  //         window.addEventListener('scroll', event => listener(event))
  //       }
  //     }
  //     window.addEventListener('scroll', event => listener(event))
  // }, [])

  let photos = useMemo(() => photosList.map((item: any) => {
    if (!hasItem.includes(item.id)) {
      hasItem.push(item.id);
      return (
        <ItemPhoto
          key={item.id}
          alt={item.description}
          img={item.urls.small}
          userAvatar={item.user.profile_image.medium}
          instagram={item.user.instagram_username}
          userName={item.user.name}
          id={item.id}
        />
      );
    }
  }), [photosList.length])
  return (
    <>
        <MasonnryStyled options={masonryOptions}>
          {photos}
        </MasonnryStyled>
        <Waypoint onEnter={loadMoreItems} bottomOffset="-500px" />
    </>
  );
}

Home.Layout = WithHeader

export async function getServerSideProps(ctx: NextPageContext<any>) {
  const {origin} = absoluteUrl(ctx.req)
  const response = await fetch(`${origin}/api/photo/getlist?page=1`, {method: "GET"})
  return {
    props: {
      photos: response.status === 200 ? await response.json() : []
    }
  }
}
export default Home