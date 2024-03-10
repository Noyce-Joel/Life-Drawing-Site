'use server'

import cloudinary from "cloudinary";

const fetchImages = async () => {
const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder:life-drawing`)
    .sort_by("uploaded_at", "desc")
    .with_field('tags')
    .max_results(116)
    .execute()) ;
    return results
}

export default fetchImages;