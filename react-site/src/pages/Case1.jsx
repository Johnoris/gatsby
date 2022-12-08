import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import LOGO from '../assets/logo.svg';
import LOGIN_ARROW from '../assets/login-arrow.svg';
import PHONE from '../assets/phone.svg';
import MENU_OPEN from '../assets/menu-open.svg';
import MENU_CLOSE from '../assets/menu-close.svg';
import BLOG_1 from '../assets/blog1.png';
import BLOG_2 from '../assets/blog2.png';
import BLOG_3 from '../assets/blog3.png';
import CASE_2 from '../assets/case2.png';

const Case1 = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    const router = useNavigate();
    const menu = () => {
        var x = document.getElementById("items");
        var o = document.getElementById("menu-open");
        var c = document.getElementById("menu-close");
        if (x.style.display === "none") {
            x.style.display = "block";
            o.style.display = "none";
            c.style.display = "inline";
        } else {
            x.style.display = "none";
            o.style.display = "inline";
            c.style.display = "none";
        }
    };

    //Slide Show Logic
    let slideIndex = 1;

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    };

    useEffect(() => {
        showSlides(slideIndex);
        menu();
    }, []);

    return (
        <main className="relative bg-orange-lt relative">
            <header className="text-primary-dk bg-orange-lt p-5 text-center mx-auto sticky top-0 w-full">
                <nav
                    id="desktop"
                    className=" hidden lg:flex flex-row justify-between items-center py-5"
                >
                    <div>
                        <Link to="/">
                            <img
                                alt="logo"
                                className="w-32 items-center"
                                src={LOGO}
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex flex-row gap-x-12 items-center">
                            <li>
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li>
                                <a
                                    href="tel:08163831316"
                                    className="px-4 py-2 bg-orange-xdk rounded-full"
                                >
                                    Call Us : 081-638-31316
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/case-study-1"
                                    className="px-4 py-2 bg-orange-xdk flex flex-row items-center rounded-full"
                                >
                                    Login{" "}
                                    <span>
                                        <img
                                            alt="login arrow"
                                            className="ml-2"
                                            src={LOGIN_ARROW}
                                        />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <nav
                    id="mobile"
                    className="lg:hidden py-5 flex flex-col gap-y-12"
                >
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <a href='/case-study-1'>
                                <img
                                    alt="logo"
                                    className="w-32 items-center"
                                    src={LOGO}
                                />
                            </a>
                        </div>
                        <div className="flex flex-row items-center">
                            <div>
                                <a
                                    href="tel:08163831316"
                                    className="px-4 py-2 bg-orange-xdk flex flex-row items-center rounded-full mr-4 sm:mr-8"
                                >
                                    Call Us{" "}
                                    <span>
                                        <img
                                            alt="login arrow"
                                            className="ml-2"
                                            src={PHONE}
                                        />
                                    </span>
                                </a>
                            </div>
                            <div>
                                <img
                                    onClick={() => menu()}
                                    id="menu-open"
                                    alt="menu"
                                    src={MENU_OPEN}
                                />
                                <img
                                    onClick={() => menu()}
                                    id="menu-close"
                                    className="hidden"
                                    alt="menu"
                                    src={MENU_CLOSE}
                                />
                            </div>
                        </div>
                    </div>
                    <div id="items" className="hidden">
                        <ul className="flex flex-col gap-y-12 items-center">
                            <li>
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li>
                                <a
                                    href="/case-study-1"
                                    className="px-4 py-2 bg-orange-xdk text-center flex flex-row justify-center items-center rounded-full"
                                >
                                    Login
                                    <span>
                                        <img
                                            alt="login arrow"
                                            className="ml-2"
                                            src="/assets/login-arrow.svg"
                                        />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="text-primary-dk px-5 text-center mx-auto pb-12">
                <div className="max-w-screen-xl mx-auto pt-10">
                    <div className="w-full md:w-3/4 mx-auto border-orange-xxdk transition rounded-3xl p-8 flex flex-col gap-y-12 xmd:flex-row md:gap-x-12">
                        {/* <h2 className="text-3xl font-bold leading-tight sm:text-4xl w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto">
                            “I knew something was wrong, I just couldn’t tell
                            what it was”
                        </h2> */}
                    </div>
                    <p className="text-3xl font-bold leading-tight sm:text-4xl w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto">
                        How We Helped This Yaba Landlord Earn 50% More On His Property
                    </p>
                    <hr className="text-orange-xdk my-8" />
                </div>
                <div className=" max-w-screen-xl w-full md:w-3/4 mx-auto bg-orange-dk hover:border-orange-xdk transition rounded-3xl p-3">
                    <img className="rounded-2xl" src={BLOG_1} alt=""/>
                </div>
                <p className="w-5/6 md:w-1/2 mx-auto text-justify my-12 text-charcoal-md leading-loose">
                    Mr. Jolayemi was one of our early referrals who was hesitant to 
                    meet with us due to a bad previous experience working with property managers. 
                    He said that they didn't address any tenant issues, 
                    including the damage tenants were doing to the property, 
                    and that all they did was supervise activities like cleaning the compound 
                    and making sure water and electricity were available.
                <br />
                    We learned from our conversation that he was spending more than 
                    N4,000,000 on repairs out of the N10,500,000 in rental income. 
                    He had 28 apartments, just three of which were occupied, 
                    and he was having trouble finding tenants for the 25 other apartments. 
                    He was unsure of the magic we would use in this circumstance because, in his opinion, 
                    "Are you not all the same?"
                </p>
                <div className=" max-w-screen-xl w-full md:w-3/4 mx-auto bg-orange-dk hover:border-orange-xdk transition rounded-3xl p-3">
                    <img className="rounded-2xl" src={BLOG_2} alt="" />
                </div>
                {/* <p className="w-5/6 md:w-1/2 mx-auto text-justify my-12 text-charcoal-md">
                    This 30-unit one room apartment building had ust 3 tenants
                    at was clearly poorly managed.{" "}
                </p> */}
                <h2 className="text-primary-dk text-2xl font-bold mt-5">
                Our Intervention
                </h2>
                <br />
                    {/* Our work in cases like this is painstaking but let’s
                    summarize. We always need to figure out the following:
                    <br /> */}
                    <span style={{marginBottom: '0.5rem'}}><p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose"><b>Renovation financing:</b> To fix and upgrade the apartments to meet the competitive standards of the other apartments in the vicinity, we gave the landlord renovation financing of up to N25 million. This was a crucial step in raising the property's value and attracting high-end tenants to the property.</p></span>
                    <br />
                    <span style={{marginBottom: '0.5rem'}}><p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose"><b>Property Management Service:</b> We took over the property's management and implemented quarterly inspections, which enabled us to identify and address any problems or wear and tear on the property as soon as they arose. This was essential to lowering the cost of repairs made when tenants left the property.</p></span>
                    <br />
                    <span style={{marginBottom: '0.5rem'}}><p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose"><b>Landlord Dashboard for Property Updates:</b> We provided the landlord with access to our user-friendly landlord app, which gave him frequent updates on the condition of his property. The landlord felt at ease thanks to this very helpful addition.</p></span>
                    <br />
                    <span style={{marginBottom: '0.5rem'}}><p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose"><b>Rebranding of the Property and Vetted Tenants:</b> We relaunched the property as a community for ambitious professionals. Professionals working for some of the best companies in Nigeria and abroad found the apartments' amenities to be appealing. These potential tenants were carefully screened to make sure they were suitable for the property. </p></span>
                    <br />
                    <span style={{marginBottom: '0.5rem'}}><p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose"><b>Increased Rental Revenue:</b>  All the upgrades resulted in a 50% increase in rent, yet despite this, we had full occupancy in every apartment since the tenants could see the value in the amount they were paying. Mr. Jolayemi's estimated N10 million rental income from that property increased to over N15 million in the bank.</p></span>
                    <br />
                <h3 className="text-2xl text-center font-bold mx-auto" style={{ maxWidth: '600px', marginTop: '2.5rem'}}>
                    Landlord Heaven transformed the landlord from a skeptic into a brand evangelist.
                </h3><br/>
                <p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose">
                    <b>
                        Dear landlord, you no longer have to deal with bad tenants, delayed rent and unnecessary property repair costs.
                        {" "}<span onClick={() => router('/')} style={{ textDecoration: 'underline', cursor: 'pointer'}}>Let’s get you started today.</span>
                    </b>
                </p>
                {/* <p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose my-3">
                    That’s what we did. We went into so much detail and identified the simplest of issues like allowing
                    tenants to
                    install their own wardrobes and then uninstall them when they leave increased wear and tear, to more
                    complex
                    issues like what facilities and branding will attract high-value tenants to this apartment. <br/>

                    Our solution also had to be landlord friendly. For example, solutions that make landlords give up
                    revenue for 7
                    years are clearly abhorrent and take advantage of landlords' desperation. <br/></p>

                <h2 className="text-primary-dk text-2xl font-bold w-full md:w-3/4 xmd:w-1/2 mx-auto mt-12"> The
                    Transformation: From
                    deserted building to filled in 30 days with guaranteed rent!</h2> <br/>
                <p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose my-3">
                    We invested about N25,000,000 to turn around this apartment building, branded it “the studio
                    community” and sold
                    it as a community for ambitious professionals. We definitely installed amenities and services to
                    ensure for
                    example,
                    a minimum of 18 hrs of power daily. <br/>

                    Mr. J starts earning from year 2 and of course, rent value got raised by over 45%. In fact only 10%
                    of
                    the apartment was filled when we took over so that’s even a staggering difference if we consider the
                    difference
                    between day 1, when we took over renovations and day 60 when apartments were filled. <br/>

                    Our partner company, Liveable, got us the best tenants. These tenants work in investment banking,
                    consulting,
                    technology,
                    corporate entertainment and medical services.It’s a great combination for both the tenants and
                    landlords.
                </p> */}

                <div className=" max-w-screen-xl w-full md:w-3/4 mx-auto bg-orange-dk hover:border-orange-xdk transition rounded-3xl p-3 mt-12">
                    <img className="rounded-2xl" src={BLOG_3} alt=""/>
                </div>

                {/* <h2 className="text-primary-dk text-2xl font-bold mt-12">
                    Conclusion: Happy Landlords
                </h2>
                <p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose my-5">
                    There are many similar buildings spread across Nigeria that could do with a transformation even with
                    less
                    investment. The real question is, who’s partnering to make this happen?

                    Thanks to our partners, Mr. J got great tenants, accesses guaranteed rent (even if there’s a
                    default) and are
                    certain that their apartment/property value will appreciate rather than depreciate. We saved the day
                    for Mr J
                    and prevented him from potentially selling the property at below market value or entering a
                    partnership that
                    would be financially draining for him.

                    When we presented progress reports to Mr J, his response is exactly what we want landlords to fill -
                    excitement
                    and peace. His words : <b>“I knew something was wrong, I just couldn’t tell what it was” </b>

                </p> */}
            </section>

            <hr className="text-orange-xdk my-8" />

            <section className="text-primary-dk px-5 text-center mx-auto pb-12">
                <div className="max-w-screen-xl mx-auto py-12">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto">
                        Read our other case studies
                    </h2>
                    <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto mt-5">
                        Examples of how we have helped landlords get the best
                        Return on Investment for their rental properties.
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto">
                    <div
                        className="slide hidden duration-700 ease-in-out transition-all w-full md:w-3/4 mx-auto"
                        data-carousel-item="active"
                    >
                        <div className="bg-orange-dk hover:border-orange-xdk transition rounded-3xl p-8 flex flex-col gap-y-12 xmd:flex-row md:gap-x-12">
                            <img
                                className="rounded-2xl"
                                src={CASE_2}
                                alt=""
                            />
                            <div className="flex flex-col gap-y-6 text-center md:text-left justify-center">
                                <h1 className="text-2xl font-bold leading-tight sm:text-3xl mx-auto xmd:mx-0">
                                    Tenant Background Checks
                                </h1>
                                <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-3/4 mx-auto xmd:mx-0">
                                    How does an honest landlord give his house
                                    to Meth (hard drug) producers? Here’s how we
                                    prevent bad tenants and by extension, bad
                                    court cases.
                                </p>
                                <Link
                                    to="/case-study-2"
                                    className="w-64 bg-orange-lt text-primary-dk px-4 py-3 mt-5 text-center xmd:mx-0 mx-auto flex flex-row justify-center items-center rounded-xl"
                                >
                                    Read full case study{" "}
                                    <span>
                                        <img
                                            alt="get started"
                                            className="ml-2"
                                            src={LOGIN_ARROW}
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Pricing isHomepage={false} />

            <Footer />
        </main>
    );
}

export default Case1;
