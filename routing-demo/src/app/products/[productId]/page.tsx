export default async function ProductDetails({
    params,
}:{
   // params:{productId:string};
    params:Promise<{productId:string}>;
}){
    const productId = (await params).productId;
    return <h1>Details about product {productId}</h1>
}