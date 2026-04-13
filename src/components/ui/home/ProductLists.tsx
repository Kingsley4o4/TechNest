"use client"
import {useState} from "react"
import NewProductArrival from "./NewProductArrival"

export default function ProductLists (){
    const [active, setActive] = useState<boolean | null>(null)

    return (
        <div>
            <main  className="lg:mx-page-x mx-page-x-mobile mt-14">
                <div className="flex justify-center  lg:justify-start text-product-name gap-3 lg:text-hero-label cursor-pointer p-8"> 
                    <h1 onClick={() => setActive(null)} className={`${active === null ? 'border-b-2 border-black' : 'text-accent-border'} hover:border-b-2 hover:border-black hover:scale-110 transition-transform duration-200 ease-in-out`}>New Arrival</h1>
                    <h1 onClick={() => setActive(true)} className={`${active === true ? 'border-b-2 border-black' : 'text-accent-border'} hover:border-b-2 hover:border-black hover:scale-110 transition-transform duration-200 ease-in-out`}>Bestseller</h1>
                    <h1 onClick={() => setActive(false)} className={`${active === false ? 'border-b-2 border-black' : 'text-accent-border'} hover:border-b-2 hover:border-black hover:scale-110 transition-transform duration-200 ease-in-out`}>Featured products</h1>
                </div>
                {active === null && (
                    <NewProductArrival />
                )}
            </main>
        </div>
    )
}
