import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import GoButton from "../Buttons/GoButton";
import { RiLoopLeftLine, RiCheckLine, RiTimeLine } from "react-icons/ri";

export default function GigPricingCard({ price }) {
  return (
    <Card className="">
      <CardHeader className="flex gap-3">
        <p className="mx-10 mt-10 text-2xl font-bold text-gray-700 dark:text-white">
          ${price}
        </p>
      </CardHeader>
      <CardBody className="mx-5">
        <p>I will professionally translate English to German.</p>
        <div className="flex flex-col py-3">
          <div className="flex items-center mb-5 text-xs">
            <RiTimeLine size="18" className="mr-2" /> 2 Days Delivery{" "}
            <RiLoopLeftLine size="16" className="mx-2" />
            Unlimited Revisions
          </div>
          <p className="text-gray-700  dark:text-gray-100 text-sm font-bold">
            What's Included
          </p>

          <div className="grid grid-cols-5 mt-3 gap-y-2 text-gray-700 dark:text-gray-100">
            {/* Details 1 */}
            <RiCheckLine className="h-5 w-5 text-green-500" />
            <div className="col-span-4 text-sm font-light ">
              1 concept included
            </div>

            {/* Details 2 */}
            <RiCheckLine className="h-5 w-5 text-green-500" />
            <div className="col-span-4 text-sm font-light ">
              Logo transparency
            </div>

            {/* Details 3 */}
            <RiCheckLine className="h-5 w-5 text-green-500" />
            <div className="col-span-4 text-sm font-light ">
              Share with up to 5 others
            </div>

            {/* Details 4 */}
            <RiCheckLine className="h-5 w-5 text-green-500" />
            <div className="col-span-4 text-sm font-light ">
              Extra member benefits
            </div>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="px-8">
        <GoButton title="Continue" width="" height="3" />
      </CardFooter>
    </Card>
  );
}
