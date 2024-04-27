import sanityClient from "@sanity/client"
import { createClient } from "@sanity/client"
export const client = createClient({
    projectId: "wn243ptr",
    dataset: "production",
    useCdn: true
})