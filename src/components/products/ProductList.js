import { useEffect, useState } from "react"
import "./Products.css"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [highestPrice, setHighestPrice] = useState (false)
    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/products`)
                const productsArray = await response.json()
                    setProducts(productsArray)
                }
                fetchData()
        },
        []
    )

    useEffect(
        () => {
            if (highestPrice === true) {
                const filteredArray = products.filter((product) => {
                    return product.price === 700;
                });
                setFiltered(filteredArray);   
            } else {
                setFiltered(products);
            }
        },
        [highestPrice, products]
    );

    // useEffect(
    //     () => {
    //         if (kandyUserObject.staff){
    //             setFiltered(products)
    //         }
    //         else {
                
    //         }
    //     },
    //     [products]
    // )

    return <>
    {
        kandyUserObject.staff
        ? <>
             <button onClick={ () => {setHighestPrice(true)}}>Highest price</button>
             <button onClick={ () => {setHighestPrice(false)}}>Show All</button>
        </>
        : <> 
            
        </>
        
    }

            <h2>Pick Your Kandy</h2>

            <article className="products">
                {
                    filteredProducts.map(
                        (product) => {
                            return <section key={`product--${product.id}`} className="product">
                                <ul>
                                    <li>{product.name}</li>
                                    <li>${product.price}</li>
                                    <li>this item is in stock at stores {product.locationId}</li>
                                </ul>
                                
                            </section>
                        }
                    )
                }
            </article>

                </>
}