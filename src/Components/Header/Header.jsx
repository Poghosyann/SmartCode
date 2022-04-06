import './Header.css'
import headerImg from '../../images/header.svg'
import Apply from '../Nav/Apply/Apply'

function Header(){
    return (
        <header>
            <div className="header-info">
                <h1>
                    <b>Սովորի՛ր</b> ծրագրավորում <br />
                    <b>Դարձի՛ր</b> պահանջված մասնագետ
                </h1>
                <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
                <Apply name="Սկսել ուսումը" />
            </div>
            <img src={headerImg} alt="Header img" />
        </header>
    )
}

export default Header