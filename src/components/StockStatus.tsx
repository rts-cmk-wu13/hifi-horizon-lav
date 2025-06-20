import CircleDot from "./CircleDot";


type StockStatusProps = {
    obj?: {
        stock?: string | number;
    }
}

export default function StockStatus({ obj }: StockStatusProps) {

    let stockNum = Number(obj?.stock)

    let stockText = "Out of stock"
    let stockColor = "red"
    let stockLimit = 5

    if (stockNum >= stockLimit) {
        stockText = "In stock"
        stockColor = "green"
    }

    if (stockNum < stockLimit) {
        stockText = "Few in stock"
        stockColor = "yellow"
    }

    if (stockNum == 0) {
        stockText = "Out of stock"
        stockColor = "red"
    }


    return (
        <p className="flex items-center gap-2 text-sm">
            {stockText} <CircleDot obj={ { color: stockColor, fill: true } } />
        </p>
    )
}