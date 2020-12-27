import fetch from "isomorphic-unfetch"
import { saveAs } from 'file-saver';
const masonryOptions = {
    transitionDuration: "0.6s",
    gutter: 30,
    fitWidth: true
};
const history = [
    "Wallpapers",
    "Textures & Patterns",
    "Nature",
    "Current Events",
    "Architecture",
    "Business & Work",
    "Film",
    "Animals",
    "Travel",
    "Fashion",
    "Food & Drink",
    "Spirituality",
    "Experimental",
    "People",
    "Health Arts & Culture",
];
const downloadPhoto = async (id: string) => {
    const data = await fetch(`/api/photo/download_photo/${id}`)
    const response = await data.json()
    console.log(response)
    saveAs(response.url, `${response.id}.jpg`);
}
export { masonryOptions, history, downloadPhoto };
