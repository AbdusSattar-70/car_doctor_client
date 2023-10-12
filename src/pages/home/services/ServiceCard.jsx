/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <p className="text-orange-700">Price: ${price}</p>
          <button className="text-orange-700">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
