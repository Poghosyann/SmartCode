import './Main.css'
import ProcingItem from './PriceItem/PriceItem'

function Main(){
    return (
        <main>
            <h2>Pricing plans</h2>
            <div className="pricingItems">
                <ProcingItem price="9.9 $"/>
                <ProcingItem price="10.9 $" />
                <ProcingItem price="20.9 $" />
            </div>
        </main>
    )
}

export default Main