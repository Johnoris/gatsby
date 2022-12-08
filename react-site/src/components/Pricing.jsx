import PricingBtn from "./UI/PricingBtn";

function Pricing({isHomepage}) {

    return(
        <section
            id="pricing"
            className="text-primary-dk px-5 text-center mx-auto pb-12 bg-orange-xdk"
        >
            <div className="max-w-screen-xl mx-auto py-12">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto">
                    Protect your
                    legacy, earn your rental income and have peace of mind while at it.
                </h2>
                <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto mt-5">
                    Protect your legacy, earn income and
                    have peace of mind while at it with flexible and transparent pricing.
                </p>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <div className="bg-orange-lt rounded-3xl p-8 w-full xmd:w-1/2 mx-auto">
                    <h3 className="text-2xl font-bold leading-tight sm:text-3xl w-full sm:w-5/6 xmd:w-3/4  mx-auto">
                        Premium Guaranteed Rent & Property Care Service
                    </h3>
                    <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 mx-auto mt-12">
                        Guaranteed rent annually
                    </p>
                    <hr className="text-orange-xxdk w-1/2 mx-auto mt-4"/>
                    <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 mx-auto mt-5">
                        Detailed quarterly maintenance reports
                    </p>
                    <hr className="text-orange-xxdk w-1/2 mx-auto mt-4"/>
                    <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 mx-auto mt-5">
                        Full property management services
                    </p>

                    <PricingBtn isHomepage={isHomepage} />
                </div>
            </div>
        </section>
    );
}

export default Pricing;
