import { useRouter } from "next/router"

function ReviewDetail(){
    const router=useRouter()
    const {productId,reviewId}=router.query
    return(
        <h1>Detail of product {productId} for review {reviewId}</h1>
    )
}

export default ReviewDetail