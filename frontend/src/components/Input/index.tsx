import { forwardRef } from "react"

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}


// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, PropsInput>((props: PropsInput, ref) => (
    <input 
    className="block w-80 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6" 
        ref={ref}
        {...props}/>      
))

export { Input }