import React, { useState } from 'react';

const mockProducts = [
  { id: 1, name: 'Floor Tile A', price: 20, category: 'Floor Tiles', image: 'https://images.pexels.com/photos/220177/pexels-photo-220177.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Wall Tile B', price: 25, category: 'Wall Tiles', image: 'https://images.pexels.com/photos/7746086/pexels-photo-7746086.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Outdoor Tile C', price: 30, category: 'Outdoor Tiles', image: 'https://images.pexels.com/photos/2093084/pexels-photo-2093084.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Kitchen Tile D', price: 35, category: 'Kitchen Tiles', image: 'https://images.pexels.com/photos/6436799/pexels-photo-6436799.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, name: 'Bathroom Tile E', price: 18, category: 'Bathroom Tiles', image: 'https://images.pexels.com/photos/3944860/pexels-photo-3944860.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Wall Tile F', price: 22, category: 'Wall Tiles', image: 'https://images.pexels.com/photos/6373660/pexels-photo-6373660.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 7, name: 'Floor Tiles', price: 28, category: 'Floor Tiles', image: 'https://images.pexels.com/photos/7671670/pexels-photo-7671670.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 8, name: 'Outdoor Tile H', price: 40, category: 'Outdoor Tiles', image: 'https://images.pexels.com/photos/7245527/pexels-photo-7245527.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 9, name: 'Kitchen Tile I', price: 15, category: 'Kitchen Tiles', image: 'https://images.pexels.com/photos/7061064/pexels-photo-7061064.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 10, name: 'Bathroom Tile J', price: 19, category: 'Bathroom Tiles', image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 11, name: 'Outdoor  Tile K', price: 32, category: 'Outdoor Tiles', image: 'https://images.pexels.com/photos/7942788/pexels-photo-7942788.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 12, name: 'Floor Tiles', price: 45, category: 'Floor Tiles', image: 'https://images.pexels.com/photos/4705833/pexels-photo-4705833.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 13, name: 'Wall Tile M', price: 25, category: 'Wall Tiles', image: 'https://images.pexels.com/photos/6046291/pexels-photo-6046291.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 14, name: 'Kitchen Tile N', price: 29, category: 'Kitchen Tiles', image: 'https://images.pexels.com/photos/7533892/pexels-photo-7533892.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 15, name: 'Bathroom Tile O', price: 27, category: 'Bathroom Tiles', image: 'https://images.pexels.com/photos/2203743/pexels-photo-2203743.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 16, name: 'Outdoor Tile P', price: 23, category: 'Outdoor Tiles', image: 'https://images.pexels.com/photos/6664452/pexels-photo-6664452.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 17, name: 'Roof Tile Q', price: 38, category: 'Roof Tiles', image: 'https://images.pexels.com/photos/48895/roof-plate-tiles-brick-black-48895.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 18, name: 'Roof Tile R', price: 50, category: 'Roof Tiles', image: 'https://images.pexels.com/photos/45206/roofing-tile-red-wall-45206.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 19, name: 'Roof Tile S', price: 21, category: 'Roof Tiles', image: 'https://images.pexels.com/photos/19640341/pexels-photo-19640341/free-photo-of-mosaic-on-wall-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 20, name: 'Pooja Tile T', price: 26, category: 'Pooja Tiles', image: 'https://images.orientbell.com/media/catalog/product/o/h/ohg_songket_swastik_om_hl.jpg' },
  { id: 21, name: 'Pooja Tile U', price: 60, category: 'Pooja Tiles', image: 'https://images.orientbell.com/media/catalog/product/o/h/ohg_statuario_brass_bell_hl.jpg' },
  { id: 22, name: 'Pooja Tile V', price: 33, category: 'Pooja Tiles', image: 'https://images.orientbell.com/media/catalog/product/o/h/ohg_rhomboid_lord_ganesha_hl.jpg' },
  { id: 23, name: 'Marbles Tile W', price: 35, category: 'Marbles Tiles', image: 'https://images.pexels.com/photos/7718458/pexels-photo-7718458.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 24, name: 'Marbles Tile X', price: 20, category: 'Marbles Tiles', image: 'https://images.pexels.com/photos/6952650/pexels-photo-6952650.jpeg?auto=compress&cs=tinysrgb&w=600' },
];


function Catalog() {
  const [filter, setFilter] = useState('');

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product Catalog</h2>
      <select
        className="form-select mb-4"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option value="">All Categories</option>
        <option value="Floor Tiles">Floor Tiles</option>
        <option value="Wall Tiles">Wall Tiles</option>
        <option value="Kitchen Tiles">Kitchen Tiles</option>
        <option value="Bathroom Tiles">Bathroom Tiles</option>
        <option value="Outdoor Tiles">Outdoor Tiles</option>
        <option value="Roof Tiles">Roof Tiles</option>
        <option value="Marbles Tiles">Marbles Tiles</option>
        <option value="Pooja Tiles">Pooja Tiles</option>


      </select>
      <div className="row">
        {mockProducts
          .filter((product) => (filter ? product.category === filter : true))
          .map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <a href={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Catalog;