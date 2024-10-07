import { FC, ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  children?: ReactNode;
  className?: string;
}
const Card: FC<CardProps> = ({ icon, title, desc, children }) => {
  return (
    <div className="relative w-full hover:translate-y-[-5px] duration-300 hover:text-red-800">
      <div className="p-4 border rounded-xl shadow-md flex justify-between items-center bg-white">
        <div className="top-1 p-4 border-r-2 border-primary hover:border-red-400 duration-300 flex justify-between items-center bg-white">
          <div className="ml-4 px-2 text-5xl text-primary">{icon}</div>
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <div className="flex">
              <p className="text-gray-600">{desc}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
