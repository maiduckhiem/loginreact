import { Link } from "react-router-dom"

const Productadmin = ({ product,onremove }) => {
    return <div>
        <button><Link to='add'>them</Link></button>
        {product.map((item, index) => {
            return <div key={index}>
                {item.name}
                <img src={item.image} />
                <button onClick={() => onremove(item.id)}>xoa</button>
            </div>
        })}
    </div>
}
export default Productadmin