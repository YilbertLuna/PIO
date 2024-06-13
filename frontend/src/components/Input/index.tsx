import { forwardRef } from "react"

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}


// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, PropsInput>((props: PropsInput, ref) => (
    <input 
        className="w-72 p-2 bg-transparent border-b border-white font-semibold text-xl placeholder-gray-500 focus:outline-none" 
        ref={ref}
        {...props}/>      
))

export { Input }