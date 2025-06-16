"use client";

import { useEffect, useState } from "react";
import { fetchProductBySlug } from "@/sanity/fetchProductBySlug"; // Function to fetch product data
import { useRouter } from "next/navigation";
import { HiMiniShoppingCart } from "react-icons/hi2";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/action";

type Product = {
  _id: string;
  productName: string;
  slug: { current: string };
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductBySlug(slug); // Fetch product by slug
        if (!data) {
          router.push("/404"); // Redirect to 404 if product not found
        } else {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        router.push("/404"); // Handle error by redirecting to 404
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [slug, router]);

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
      e.preventDefault()
      Swal.fire({
        position : "center",
        icon : "success",
        title : `${product.productName} added to your cart`,
        showConfirmButton : false,
        timer : 1000
      })
  
      addToCart(product)
      
    }
  
  if (loading) {
    return (
      <div className="text-center text-4xl h-full py-14 my-28 text-black">
        Loading...
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-4xl my-28">Product not found</div>;
  }

  return (
    <section className="text-gray-400 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h3 className="text-[#9E3500] text-[20px] tracking-widest title-font mb-1">
              {product.status}
            </h3>
            <h1 className="text-black text-4xl md:text-5xl title-font font-medium mb-1">
              {product.productName}
            </h1>
            <p className="mt-3 text-2xl md:text-3xl text-gray-600 mb-3">
              {product.category}
            </p>
            <p className="title-font font-medium text-2xl text-black my-5">
              Price: ₹{product.price}
            </p>
            <p className="leading-relaxed text-[20px] text-[#111111] line-height">
              {product.description}
            </p>
            <div className="my-5">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className="flex flex-row gap-3 text-white my-10 bg-black py-2 px-6 focus:outline-none hover:bg-gray-800 b rounded"
              >
                <HiMiniShoppingCart className="text-white text-2xl" />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
