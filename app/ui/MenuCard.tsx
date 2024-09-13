import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Menu } from '../lib/definitions';

   
const EcommerceCard: React.FC<Menu> = ({image_url, name, currency, price, description}) => {
    return ( //w-96 sm:w-full md:w-1/2 lg:w-1/3
      <Card className="w-96 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <CardHeader shadow={false} floated={false} className="h-64 sm:h-auto md:h-72 lg:h-72">
          <img
            src={image_url}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {currency}{price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }

export default EcommerceCard;