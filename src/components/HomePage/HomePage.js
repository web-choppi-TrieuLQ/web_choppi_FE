import React, {useEffect, useState} from "react";
import {LatestProduct} from "./LatestProduct";
import {BestSale} from "./BestSale";
import {WhyUs} from "./WhyUs";
import {GiftVoucher} from "./GiftVoucher";
import {Testimonial} from "./Testimonial";
import {ContactUs} from "./ContactUs";

export function HomePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    useEffect(() => {
        const checkLoggedIn = () => {
            setIsLoggedIn(!!localStorage.getItem("token"));
        };

        checkLoggedIn();
    }, []);
    return (
        <div>
            {isLoggedIn ? (
                <>
                    <LatestProduct/>
                    <BestSale/>
                    <WhyUs/>
                    <GiftVoucher/>
                    <Testimonial/>
                    <ContactUs/>
                </>
            ) : (
                <p>Please login to view this content.</p>
            )}
        </div>
    )
}