import LOCATION from '../assets/location.svg';
import EMAIL from '../assets/email.svg';
import FACEBOOK from '../assets/facebook.svg';
import TWITTER from '../assets/twitter.svg';
import LINKEDIN from '../assets/linkedin.svg';
import PHONE_ICON from '../assets/phone-icon.png';
import LOGO from '../assets/logo.svg';

const  Footer = () => {
    return (
        <footer className="text-primary-dk px-5 text-left mx-auto pb-12 bg-orange-dk">
            <div className="max-w-screen-xl mx-auto py-12">
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div>
                        <div><a href="/"><img alt="logo" className="w-32 items-center mt-12"
                                              src={LOGO}/></a></div>
                        <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-3/4 xmd:mx-0 mt-5">Easiest way to
                            manage your
                            properties, tenants and track your revenue.</p>
                        <a href="https://goo.gl/maps/WrTAZaFL3NXB4Cni6" target="_blank"
                           className="text-charcoal-md mt-8 mx-auto xmd:mx-0 flex flex-row justify-left items-center">
                            <span><img alt="location" className="mr-4" src={LOCATION}/></span>Sterling offices, 2 Turnbull road (Onikoyi road), Ikoyi, Lagos 100233, Nigeria</a>
                        <a href="https://goo.gl/maps/WrTAZaFL3NXB4Cni6" target="_blank"
                           className="text-charcoal-md mt-8 mx-auto xmd:mx-0 flex flex-row justify-left items-center">
                            <span><img alt="location" className="mr-4" src={LOCATION}/></span>Wakeman Heights, 294 Borno Way, Alagomeji-Yaba 101245, Lagos, Nigeria.</a>
                        <a href="https://goo.gl/maps/7SUqAj5jZEmBQ51B6" target="_blank"
                           className="text-charcoal-md mt-8 mx-auto xmd:mx-0 flex flex-row justify-left items-center">
                            <span><img alt="location" className="mr-4" src={LOCATION}/></span>634, Mission street, San Francisco, CA 94105</a>
                        <a href="mailto:hello@mylandlordheaven.com" target="_blank"
                           className="text-charcoal-md mt-8 mx-auto xmd:mx-0 flex flex-row justify-left items-center">
                            <span><img alt="email" className="mr-4" src={EMAIL}/></span>hello@mylandlordheaven.com</a>
                        <a
                            href="tel:08163831316"
                            className="text-charcoal-md mt-8 mx-auto xmd:mx-0 flex flex-row justify-left items-center"
                        >
                            <span className="w-8 h-8 mr-4"><img alt="phone" className="mr-4" src={PHONE_ICON}/></span>08163831316
                        </a>
                    </div>
                    <div className="mx-0 md:ml-12">
                        <div className="mt-12 mx-auto xmd:mx-0 flex flex-row justify-left items-center">
                            <a href="https://www.facebook.com/liveableNG" target="_blank">
                                <span><img alt="facebook" className="mr-4" src={FACEBOOK}/></span></a>
                            <a href="https://twitter.com/landlordheaven" target="_blank">
                                <span><img alt="twitter" className="mr-4" src={TWITTER}/></span></a>
                            <a href="https://www.linkedin.com/company/landlordheaven/" target="_blank">
                                <span><img alt="linkedin" className="mr-4" src={LINKEDIN}/></span></a>
                        </div>
                    </div>
                </div>

                <p className="text-charcoal-md text-sm w-full sm:w-4/6 xmd:w-3/4 lg:w-1/4 xmd:mx-0 mt-12">© 2022 . All
                    rights
                    reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
