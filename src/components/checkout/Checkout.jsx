import React from "react";
import Card from "../card/Card";
import './checkout.css'

export default class Checkout extends React.Component{
    render(){
        return (
            <div className="checkout">
                <div className="checkout-items">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <p className="textCantidad"> Total cases <span>83746281937</span></p>
                <a href="" className="btnCheckout">Checkout</a>
            </div>
        )
    }
}