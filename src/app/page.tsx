import Carousel from "./components/Carousel";
import { fetchProducts } from "./assets/utils/fetchData";
import Image from "next/image";

export default async function Home() {

  const data = await fetchProducts(10)

  console.log(data)

  return (
    <main className="flex flex-col">
      <Carousel />
      <ul>
        {
          data && data.map((product) =>
            <li key={product.id}>
              {product.title}
              <Image src={product.image} alt={product.title} width={500} height={500} />
            </li>
          )
        }
      </ul>
    </main>
  );
}
