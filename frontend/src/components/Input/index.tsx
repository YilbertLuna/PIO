interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: PropsInput): JSX.Element {
    return (
        <input className="w-72 p-2 bg-transparent border-b border-white font-semibold text-xl placeholder-gray-500 focus:outline-none" {...props}/>
    )
}