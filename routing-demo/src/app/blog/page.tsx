import {Metadata} from "next"

//template title
// export const metadata:Metadata = {
//     title:"blog"
// }

//Absolute title
export const metadata:Metadata = {
    title:{
        absolute:"blog"
    }
}

export default function Blog() {
    return <h1>My blog</h1>
}