import { CheckCircleIcon } from "@heroicons/react/solid";

const BenefitItem = ({ children }) => {
  return (
    <li className="flex items-center space-x-3">
      <div className="">
        <CheckCircleIcon className="h-8 text-green-500" />
      </div>
      <div className="leading-relaxed font-DM">{children}</div>
    </li>
  );
};

export default BenefitItem;
