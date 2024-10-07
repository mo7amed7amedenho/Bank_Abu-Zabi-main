import { FC, ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}
const Card_sec: FC<CardProps> = ({ icon, title, desc }) => {
  return (
    <div className="w-full text-gray-700 duration-300 hover:text-primary">
      <div className="p-5 hover:translate-y-[-5px] duration-300 border rounded-xl shadow-md flex justify-between items-center bg-white">
        <div className="p-2 border-r-2 border-gray-600 hover:text-primary hover:border-primary duration-300 flex justify-between items-center bg-white">
          <div className="ml-4 px-2 text-5xl">{icon}</div>
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-gray-600">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_sec;
