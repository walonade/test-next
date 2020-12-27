import PhotoContainer from "../../containers/Photo"
import {NextPageContext} from "next" 
import absoluteUrl from "next-absolute-url";
import fetch from "isomorphic-unfetch"
import { ComponentProps } from "react";
import ErrorPage from "next/error"
import WithHeader from "../../layouts/WithHeader"
const PhotoPage = (props: ComponentProps<any>) => {
    if(props.photoStatus !== 200) return <ErrorPage statusCode={404}/>
    return <PhotoContainer photo={props.photo}/>
}
export async function getServerSideProps(ctx : NextPageContext) {
    const {origin} = absoluteUrl(ctx.req)
    const {id} = ctx.query 
    const data = await fetch(`${origin}/api/photo/getphoto/${id}`, {method: "GET"})
    const photo = data.status === 200 ? await data.json() : {}
    return {
        props: {
            photo,
            photoStatus: data.status
        }
    }
}
PhotoPage.Layout = WithHeader
export default PhotoPage