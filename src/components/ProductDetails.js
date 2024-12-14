import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../components/style/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mockProducts = [
  {
    id: 1,
    name: "Floor Tile A",
    price: 20,
    category: "Floor Tiles",
    image:
      "https://images.pexels.com/photos/220177/pexels-photo-220177.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Durable floor tiles suitable for high traffic areas. Scratch-resistant and easy to maintain.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Wall Tile B",
    price: 25,
    category: "Wall Tiles",
    image:
      "https://images.pexels.com/photos/7746086/pexels-photo-7746086.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Elegant wall tiles for a sophisticated look. Perfect for kitchens and bathrooms.",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Outdoor Tile C",
    price: 30,
    category: "Outdoor Tiles",
    image:
      "https://images.pexels.com/photos/2093084/pexels-photo-2093084.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Weather-resistant tiles for patios and gardens. Designed to endure outdoor elements.",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Kitchen Tile D",
    price: 35,
    category: "Kitchen Tiles",
    image:
      "https://images.pexels.com/photos/6436799/pexels-photo-6436799.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "High-quality kitchen tiles.",
    rating: 3.2,
  },
  {
    id: 5,
    name: "Bathroom Tile E",
    price: 18,
    category: "Bathroom Tiles",
    image:
      "https://images.pexels.com/photos/3944860/pexels-photo-3944860.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Quality bathroom tiles.",
    rating: 5.0,
  },
  {
    id: 6,
    name: "Wall Tile F",
    price: 22,
    category: "Wall Tiles",
    image:
      "https://images.pexels.com/photos/6373660/pexels-photo-6373660.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant wall tiles for various spaces.",
    rating: 2.5,
  },
  {
    id: 7,
    name: "Floor Tiles",
    price: 28,
    category: "Floor Tiles",
    image:
      "https://images.pexels.com/photos/7671670/pexels-photo-7671670.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Versatile floor tiles.",
    rating: null,
  },
  {
    id: 8,
    name: "Outdoor Tile H",
    price: 40,
    category: "Outdoor Tiles",
    image:
      "https://images.pexels.com/photos/7245527/pexels-photo-7245527.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Durable tiles designed for outdoor spaces.",
    rating: 2.0,
  },
  {
    id: 9,
    name: "Kitchen Tile I",
    price: 15,
    category: "Kitchen Tiles",
    image:
      "https://images.pexels.com/photos/7061064/pexels-photo-7061064.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Quality kitchen tiles.",
    rating: 5.0,
  },
  {
    id: 10,
    name: "Bathroom Tile J",
    price: 19,
    category: "Bathroom Tiles",
    image:
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant bathroom tiles.",
    rating: 4.0,
  },
  {
    id: 11,
    name: "Outdoor Tile K",
    price: 32,
    category: "Outdoor Tiles",
    image:
      "https://images.pexels.com/photos/7942788/pexels-photo-7942788.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Robust outdoor tiles.",
    rating: 3.0,
  },
  {
    id: 12,
    name: "Floor Tiles",
    price: 45,
    category: "Floor Tiles",
    image:
      "https://images.pexels.com/photos/4705833/pexels-photo-4705833.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Premium floor tiles.",
    rating: 2.0,
  },
  {
    id: 13,
    name: "Wall Tile M",
    price: 25,
    category: "Wall Tiles",
    image:
      "https://images.pexels.com/photos/6046291/pexels-photo-6046291.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Beautiful wall tiles for various spaces.",
    rating: 3.5,
  },
  {
    id: 14,
    name: "Kitchen Tile N",
    price: 29,
    category: "Kitchen Tiles",
    image:
      "https://images.pexels.com/photos/7533892/pexels-photo-7533892.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant kitchen tiles.",
    rating: 4.5,
  },
  {
    id: 15,
    name: "Bathroom Tile O",
    price: 27,
    category: "Bathroom Tiles",
    image:
      "https://images.pexels.com/photos/2203743/pexels-photo-2203743.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Stylish bathroom tiles.",
    rating: 5.0,
  },
  {
    id: 16,
    name: "Outdoor Tile P",
    price: 23,
    category: "Outdoor Tiles",
    image:
      "https://images.pexels.com/photos/6664452/pexels-photo-6664452.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Ideal for outdoor areas.",
    rating: 4.5,
  },
  {
    id: 17,
    name: "Roof Tile Q",
    price: 38,
    category: "Roof Tiles",
    image:
      "https://images.pexels.com/photos/48895/roof-plate-tiles-brick-black-48895.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Durable roof tiles.",
    rating: 2.6,
  },
  {
    id: 18,
    name: "Roof Tile R",
    price: 50,
    category: "Roof Tiles",
    image:
      "https://images.pexels.com/photos/45206/roofing-tile-red-wall-45206.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "High-quality roof tiles.",
    rating: 3.9,
  },
  {
    id: 19,
    name: "Roof Tile S",
    price: 21,
    category: "Roof Tiles",
    image:
      "https://images.pexels.com/photos/19640341/pexels-photo-19640341/free-photo-of-mosaic-on-wall-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Functional roof tiles.",
    rating: 5.0,
  },
  {
    id: 20,
    name: "Pooja Tile T",
    price: 26,
    category: "Pooja Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/o/h/ohg_songket_swastik_om_hl.jpg",
    description: "Decorative Pooja tiles for spiritual spaces.",
    rating: 4.9,
  },
  {
    id: 21,
    name: "Pooja Tile U",
    price: 60,
    category: "Pooja Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/o/h/ohg_statuario_brass_bell_hl.jpg",
    description: "Elegant Pooja tiles with brass and unique design.",
    rating: 3.6,
  },
  {
    id: 22,
    name: "Pooja Tile V",
    price: 33,
    category: "Pooja Tiles",
    image:
      "https://images.orientbell.com/media/catalog/product/o/h/ohg_rhomboid_lord_ganesha_hl.jpg",
    description: "Spiritual Pooja tiles featuring Lord Ganesha design.",
    rating: 4.9,
  },
  {
    id: 23,
    name: "Marbles Tile W",
    price: 35,
    category: "Marbles Tiles",
    image:
      "https://images.pexels.com/photos/7718458/pexels-photo-7718458.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Premium marble tiles for luxurious flooring.",
    rating: 5.0,
  },
  {
    id: 24,
    name: "Marbles Tile X",
    price: 20,
    category: "Marbles Tiles",
    image:
      "https://images.pexels.com/photos/6952650/pexels-photo-6952650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Elegant marble tiles for upscale interiors.",
    rating: 3.2,
  },
];

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));
  const similarProducts = mockProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} has been added to the cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="product-details">
      <ToastContainer />
      <div className="product-info">
        <img src={product.image} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <p>
            <strong>Price:</strong> ₹{product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating} ⭐
          </p>
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="similar-products">
        <h3>Similar Products</h3>
        <div className="similar-product-list">
          {similarProducts.map((similar) => (
            <div key={similar.id} className="similar-product-card">
              <img src={similar.image} alt={similar.name} />
              <h4>{similar.name}</h4>
              <p>₹{similar.price}</p>
              <Link to={`/product/${similar.id}`} className="btn btn-secondary">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
