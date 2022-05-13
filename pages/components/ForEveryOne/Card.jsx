import Image from "next/image";

const Card = ({ src, title, children }) => {
  return (
    <div className="flex flex-col px-5  justify-center hover:scale-105 transition rounded-md">
      <Image
        src={src}
        alt="utility"
        width={372}
        height={221}
        className="mx-auto block"
      />
      <div className="text-center mt-7 space-y-4 px-3 ">
        <h1 className="font-DM text-xl font-medium">{title}</h1>
        <p className="text-base font-DM text-slate-700">{children}</p>
      </div>
    </div>
  );
};

export default Card;
