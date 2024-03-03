import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Avatar,
  Chip,
} from "@nextui-org/react";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const GigCard = ({
  title,
  img,
  price,
  username,
  userIcon,
  ratingStars,
  className,
  numberOfOrders,
}) => {
  const renderStars = () => {
    const fullStars = Math.floor(ratingStars);
    const hasHalfStar = ratingStars % 1 !== 0;

    const stars = Array.from({ length: fullStars }, (_, index) => (
      <span key={index} className="text-yellow-500 text-lg">
        ★
      </span>
    ));

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-500 text-lg">
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <Card
      as={Link}
      to="/categories/:categoryId/gigDesc"
      shadow="sm"
      className={`mb-4 ml-1 lg:ml-0 ${className}`} // Include additional className
      isPressable
      onPress={() => console.log("Gig card pressed")}
      style={{ height: "fit-content", width: "fit-content" }} // Set the size styles here
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-[200px]"
          src={img}
        />
      </CardBody>
      <CardFooter className="text-small flex-col gap-1 px-6">
        <div className="flex w-full flex-col pt-2">
          <Chip variant="flat" avatar={<Avatar name="User" src={userIcon} />}>
            {username}
          </Chip>
          <div className="flex items-center">
            <span className="ml-2 text-xs font-bold">
              {`${ratingStars}/5 `}
            </span>
            <span className="mx-1 my-auto">{renderStars()}</span>
            <span className="text-xs text-gray-700">{`(${numberOfOrders})`}</span>
          </div>
        </div>
        <span className="text-sm w-full text-left mb-2">{title}</span>
        <div className="flex w-full items-center justify-between mb-2">
          <Chip variant="flat" color="success" className="pt-1 text-md py-5">
            ${price}
          </Chip>
          <button className="block text-md px-2 py-1 leading-loose text-center text-white bg-primary dark:bg-primary-dark hover:bg-yellow-600 rounded-full">
            Contact Seller
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GigCard;
