import { Router, Request, Response } from "express"
import {ACCESSKEY} from "../keys"
import {createApi} from "unsplash-js"
const unsplash = createApi({accessKey: ACCESSKEY})
const router : Router = Router()
router.get("/getlist", async (req: Request, res: Response) => {
    const {page} = req.query
    const {response, status} = await unsplash.photos.list({page: page ? +page : 1, perPage: 30})
    status === 200 ? res.status(200).json(response) : res.status(500).end()
})
router.get("/getphoto/:id", async (req:Request, res: Response) => {
    const {id} = req.params 
    const { response, status } = await unsplash.photos.get({photoId: id})
    if (status == 200 ) {
        res.status(200).json(response)
    } else {
        res.status(404).end()
    }
})
router.get("/download_photo/:id", async (req: Request, res: Response) => {
    const {id} = req.params
    const { response, status } = await unsplash.photos.get({photoId: id})
    if(status == 200) {
        const {response: {url}} = await unsplash.photos.trackDownload({ downloadLocation: response.links.download_location})
        res.status(200).json({url, id})
    } else {
        res.status(404).end()
    }
})
export default router