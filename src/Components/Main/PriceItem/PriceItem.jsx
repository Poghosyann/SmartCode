import './PriceItem.css'

function PricingItem(props){

    return (
        <div className="item">
            <div className="item-header">
                <p>StartUp</p>
                <p>{props.price}</p>
            </div>
            <div className="item-content"></div>
        </div>
    )
}

export default PricingItem