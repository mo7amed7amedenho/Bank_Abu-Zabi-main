interface ButtonProps {
  children: React.ReactNode
  className?: string
}
export default function Button( props: ButtonProps) {
    return (
      <button className="bg-primary hover:bg-red-500 duration-200 text-white flex justify-center items-center text-sm font-bold py-2 px-4 rounded-lg">
        {props.children}
      </button>
    )
  }
   