import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import LOGO from '../assets/logo.svg';
import LOGIN_ARROW from '../assets/login-arrow.svg';
import PHONE from '../assets/phone.svg';
import MENU_OPEN from '../assets/menu-open.svg';
import MENU_CLOSE from '../assets/menu-close.svg';
import BLOG_4 from '../assets/blog4.png';
import CASE_1 from '../assets/case1.png';

function Case2() {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

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
    <header className="text-primary-dk bg-orange-lt p-5 text-center  mx-auto sticky top-0 w-full">

      <nav id="desktop" className=" hidden lg:flex flex-row justify-between items-center py-5">
        <div><Link to="/"><img alt="logo" className="w-32 items-center" src={LOGO}/></Link></div>
        <div>
          <ul className="flex flex-row gap-x-12 items-center">
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="tel:08163831316" className="px-4 py-2 bg-orange-xdk rounded-full">Call Us : 081-638-31316</a></li>
            <li><a href="/case-study-2" className="px-4 py-2 bg-orange-xdk flex flex-row items-center rounded-full">Login <span><img
                    alt="login arrow" className="ml-2" src={LOGIN_ARROW}/></span></a></li>
          </ul>
        </div>
      </nav>

      <nav id="mobile" className="lg:hidden py-5 flex flex-col gap-y-12">
        <div className="flex flex-row items-center justify-between">
          <div><a><img alt="logo" className="w-32 items-center" src={LOGO}/></a></div>
          <div className="flex flex-row items-center">
            <div><a href="tel:08163831316"
                className="px-4 py-2 bg-orange-xdk flex flex-row items-center rounded-full mr-4 sm:mr-8">Call Us <span><img
                    alt="login arrow" className="ml-2" src={PHONE}/></span></a></div>
            <div>
              <img onClick={() => menu()} id="menu-open" alt="menu" src={MENU_OPEN}/>
              <img onClick={() => menu()} id="menu-close" className="hidden" alt="menu" src={MENU_CLOSE}/>
            </div>
          </div>
        </div>
        <div id="items" className="hidden">
          <ul className="flex flex-col gap-y-12 items-center">
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="/case-study-2"
                className="px-4 py-2 bg-orange-xdk text-center flex flex-row justify-center items-center rounded-full">Login
                <span><img alt="login arrow" className="ml-2" src={LOGIN_ARROW}/></span></a></li>
          </ul>
        </div>
      </nav>
    </header>
    <section className="text-primary-dk px-5 text-center mx-auto pb-12">
      <div className="max-w-screen-xl mx-auto pt-12">
        <div
          className="w-full md:w-3/4 mx-auto border-orange-xxdk transition rounded-3xl p-8 flex flex-col gap-y-12 xmd:flex-row md:gap-x-12">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto">Preventing
            Bad Tenants</h2>
        </div>
        <p className=" text-3xl text-primary-dk w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto mt-5">How does an honest landlord
          give his house to Meth (hard drug) producers? Here’s how we prevent bad tenants and by extension, bad court
          cases.
        </p>
        <hr className="text-orange-xdk my-8"/>
      </div>
        <p className="w-5/6 md:w-1/2 mx-auto text-justify mt-12 mb-5 text-charcoal-md leading-loose">When we onboarded
            Mr T,
            his
            top goal was to fill his recently vacated apartments with good tenants. A few of his previous tenants
            couldn’t
            renew their rent after year 1 and had
            to leave.<br/>

                We met him at the right time or should we say, He met us at the right time?<br/>

                Our proprietary tenant assessment tool helps us score tenants on a scale of 5 to 10 so the risks
                associated with
                each tenant is clear. Before scoring though, basic background check is done in this order:

        </p>
        <p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose">
            <b>
                1. Confirm that tenant works where they claim they work at<br/>
                2. Get testimonial from past apartment<br/>
                3. Confirm stable average income<br/>
                4. Confirm that there are no criminal records<br/>
                5. Confirm spousal/family information.<br/>
            </b>
        </p>
        <p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose my-3">
            Letting agents always tell landlords that they’ve verified information provided by prospective tenants.
            That’s
            exactly what Mr T was
            told. Our suggestion to landlords is that it’s better to lose one week doing very detailed background checks
            (Landlord heaven has a 15-point checklist for this) rather
            than losing several years rent later when bad tenants go rogue. <br/>


        </p>
        <h2 className="text-primary-dk text-2xl font-bold mt-12"> Here’s what we found:</h2>
        <div
            className=" max-w-screen-xl w-full md:w-3/4 mx-auto bg-orange-dk hover:border-orange-xdk transition rounded-3xl p-3 mt-12">
            <img className="rounded-2xl mx-auto" src={BLOG_4}/>
        </div>
        <p className="w-5/6 md:w-1/2 mx-auto text-justify text-charcoal-md leading-loose my-3">
            This proposed tenant gave a fake office address. No one identified as his wife in the company where He
            claimed
            his wife worked. His past address didn’t check out either. Apparently, He assumed this was business as usual
            and
            no one would check to verify claims. We didn’t have to do too much to spot his dishonesty.<br/>

            The great thing about our processes is that we always have multiple potential tenants. Just one week later,
            we
            had filled this apartment with a tenant whose work and income history we could verify and vouch for.

        </p>
    </section>

    <hr className="text-orange-xdk my-8"/>

    <section className="text-primary-dk px-5 text-center mx-auto pb-12">
      <div className="max-w-screen-xl mx-auto py-12">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto">Read our
          other case studies</h2>
        <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto mt-5">Examples of how we have helped
          landlords get the best Return on Investment for their rental properties.</p>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="slide hidden duration-700 ease-in-out transition-all w-full md:w-3/4 mx-auto"
          data-carousel-item="active">
          <div
            className="bg-orange-dk hover:border-orange-xdk transition rounded-3xl p-8 flex flex-col gap-y-12 xmd:flex-row md:gap-x-12">
            <img className="rounded-2xl" src={CASE_1}/>
            <div className="flex flex-col gap-y-6 text-center md:text-left justify-center">
              <h1 className="text-2xl font-bold leading-tight sm:text-3xl mx-auto xmd:mx-0">Studio - Yaba</h1>
              <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-3/4 mx-auto xmd:mx-0">How we partnered with Yaba
                Landlord to turn things around and increase Return on Investment by 50%.
              </p>
              <Link to="/case-study-1"
                className="w-64 bg-orange-lt text-primary-dk px-4 py-3 mt-5 text-center xmd:mx-0 mx-auto flex flex-row justify-center items-center rounded-xl">Read
                full case study <span><img alt="get started" className="ml-2" src={LOGIN_ARROW}/></span></Link>
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

export default Case2;
