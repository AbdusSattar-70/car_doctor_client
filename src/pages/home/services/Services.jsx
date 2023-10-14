import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:5000/service";
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setServices(data);
        setLoading(false);
      };

      fetchData();
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <div className="mt-5">
      <div className="text-center space-y-3">
        <h3 className="text-orange-500 text-2xl text-bold">Services</h3>
        <h3 className="text-4xl text-bold">Our Service Area</h3>
        <p>
          The majority have suffered alteration in some form,
          <br /> by injected humour, or randomised words which don&apos;t look
          even slightly believable.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <div className="flex justify-center">
            {loading}
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
          </div>
        ) : (
          services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
