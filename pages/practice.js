import Link from "next/link";
import { useRouter } from "next/router";
function Practice() {
    const router=useRouter()

    const clickHandle=()=>{
        console.log('Clicked')
        router.push('/product/sweater')
    }
  return (
    <div>
      <Link href="/blog">
        <h1>Blog Links from Practice File</h1>
      </Link>
      <Link href='/product'>
        <h1>Product Links from Practice File</h1>
      </Link>
      <button onClick={clickHandle}>Button from Practice File</button>
    </div>
  );
}

export default Practice;
