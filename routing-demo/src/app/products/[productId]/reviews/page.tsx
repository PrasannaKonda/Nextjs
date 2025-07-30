export default async function ReviewsList({
    params,
}:{
    params:Promise<{productId:string}>
}){
    const {productId} = await params
    return <>
        <h1>Reviews List for Product {productId}</h1>
        <h2>Review 1</h2>
        <h2>Review 2</h2>
        <h2>Review 3</h2>
    </>
}