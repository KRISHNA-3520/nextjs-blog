import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router=useRouter()

  const clickhandle=()=>{
    console.log('Placing your Order')
    router.push('/product')
    
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href=" /blog">
        <button>Blog</button>
      </Link>
      <Link href='/product'>
        <button>Porduct</button>
      </Link>
        <button onClick={clickhandle}>Place Order</button>
    </div>
  );
}

export default Home;
