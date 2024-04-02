export function InputField({type,placeholder,value,handler}){
    return <div>
        <input value={value} onChange={handler} className="self-center border-2 border-gray-200 rounded-lg w-80 h-10 pl-2 py-4" type={type} placeholder={placeholder} />
    </div>
}