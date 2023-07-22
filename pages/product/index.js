import Link from "next/link";

function Product({productId=100}) {
  return (
    <>
      <h1>
        <Link href="/product/1">
          <button> Product 1</button>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2">
          <button> Product 2</button>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3" replace>
          <button> Product 3</button>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <button> Product 100</button>
        </Link>
      </h1>
      <Link href="/">
        <button>HOME</button>
      </Link>
    </>
  );
}

export default Product;
