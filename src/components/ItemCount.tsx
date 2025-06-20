import { FaMinus, FaPlus } from "react-icons/fa";


type ItemCountProps = {
    className?: string;
}


export default function ItemCount({ className }: ItemCountProps) {

    function minusCount() {
        const input = document.querySelector("#itemcount") as HTMLInputElement;
        let count = Number(input.value);
        count > 1 ? count-- : count = 1
        input.value = count.toString()
    }

    function plusCount() {
        const input = document.querySelector("#itemcount") as HTMLInputElement;
        let count = Number(input.value);
        count < 99 ? count++ : count = 99
        input.value = count.toString()
    }

    return (
        <div className={`flex items-center gap-6 ${className ? className : ""}`}>
            <FaMinus id="minusButton" className="cursor-pointer" onClick={minusCount} />
            <input type="text" name="itemcount" id="itemcount" defaultValue="1" className="size-9 rounded bg-hifi-gray-light text-center focus:outline-0" />
            <FaPlus id="plusButton" className="cursor-pointer" onClick={plusCount} />
        </div>
    )
}