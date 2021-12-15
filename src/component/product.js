const Product = ({ product }) => {
    return <div>
        {product.map((item, index) => {
            return <div key={index}>
                {item.name}
                <img src={item.image} />
            </div>
        })}
    </div>
}

export default Product