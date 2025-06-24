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

    function inputCount() {
        const input = document.querySelector("#itemcount") as HTMLInputElement;
        input.value = input.value.replace(/[^\d]/g, '');
        let inputValue = Number(input.value)
        if (inputValue >= 99) {
            input.value = "99"
        }
        if (inputValue <= 1) {
            input.value = "1"
        }
    }

    return (
        <div className={`flex items-center gap-4 ${className ? className : ""}`}>
            <FaMinus id="minusButton" className="size-5 hifi-hover-50" onClick={minusCount} />
            <input type="text" name="itemcount" id="itemcount" defaultValue="1" className="size-9 rounded bg-hifi-gray-light font-semibold text-center focus:outline-0" onInput={inputCount} />
            <FaPlus id="plusButton" className="size-5 hifi-hover-50" onClick={plusCount} />
        </div>
    )
}