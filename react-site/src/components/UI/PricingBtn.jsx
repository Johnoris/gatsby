import {Link} from "react-router-dom";

function PricingBtn({isHomepage}) {
    return (
        <a
            href={isHomepage ? "#hero" : "/#hero"}
            className="bg-orange-dk font-bold text-2xl text-primary-dk block px-5 py-5 mt-12 text-center mx-auto rounded-2xl "
        >
            Sign up for less than 10% of annual rent
        </a>
    );
}

export default PricingBtn;
