import React, { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { MapPinIcon } from '@heroicons/react/24/solid'


const GeolocationComponent: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const isGeolocationAvailable = (): boolean => {
    return 'geolocation' in navigator;
  };

  const getUserLocation = () => {
    if (isGeolocationAvailable()) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const fetchedAddress = await fetchAddress(latitude, longitude);
            const [firstElement = '', secondElement = '', thirdElement = ''] = fetchedAddress.split(',').map(part => part.trim());
            const formatted_address = `${secondElement}, ${thirdElement}`;
            setAddress(formatted_address);
          } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred');
            }
          }
        },
        (error) => {
          setError(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const fetchAddress = async (latitude: number, longitude: number): Promise<string> => {
    const api_key = process.env.NEXT_PUBLIC_MAPS_API_KEY
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api_key}`);
    const data = await response.json();
    if (data.status === 'OK') {
      return data.results[0].formatted_address;
    } else {
      throw new Error('Unable to fetch address');
    }
  };

  return (
    <div className="mb-2 flex items-center p-4">
        <MapPinIcon className="h-6 w-6 mr-4 ml-0.5 text-blue-gray-600" />
        <Typography variant="text" color="blue-gray">
            {address ? `${address}` : "Fetching location..."}
            {error && `${error}`}
        </Typography>
    </div>
  );
};

export default GeolocationComponent;
