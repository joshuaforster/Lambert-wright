import { useParams } from 'react-router-dom';
import { services } from '../Data/serviceData';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const serviceId = id ? parseInt(id, 10) : null;
  const service = services.find(service => service.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src={service.image}
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.title}</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              {service.description}
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                {service.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
