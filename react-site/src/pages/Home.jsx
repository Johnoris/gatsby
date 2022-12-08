import {Formik} from "formik";
import { useEffect, useState} from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import {useSearchParams, Link} from "react-router-dom";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import '../styles/phone-number-input.scss';
// import PricingBtn from "../components/UI/PricingBtn";
import MeetingTimeModal from "../modal/meetingTimeModal";
import RequestFailed from "../components/requestFailed";
import RequestSuccess from "../components/RequestSuccess";
import Api from "../api/api";
import LOGO from '../assets/logo.svg';
import LOGIN_ARROW from '../assets/login-arrow.svg';
import HERO_ARROW from '../assets/hero-arrow.svg';
import ARROW_UP from '../assets/arrow-up.svg'

const Home = () => {
    const [referralId, setReferralId] = useState("");
    // const [date, setDate] = useState('')
    // const [time, setTime] = useState('')
    const [searchParams] = useSearchParams();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [ requestPending, setRequestPending ] = useState(false)
    // const [showValidationError, setShowValidationError] = useState(false);
    // const [validationError, setValidationError] = useState('All fields are Required');
    // const [isWhatsappNumber, setIsWhatsappNumber] = useState(false)

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


    // useEffect(() => {
    //     phone === ''
    //         ?
    //         setValidationError('Enter your phone number')
    //         :
    //         setValidationError('Enter a valid phone number')
    //     email === ''
    //         ?
    //         setValidationError('Enter your email')
    //         :
    //         setValidationError('Enter a valid email')
    //     name === '' && setValidationError('Enter your name')
    // })
    // useEffect(() => {
    //     EMAIL_REGEX.test(email) ? setEmailValid(true) : setEmailValid(false)
    //     name !== '' ? setNameValid(true) : setNameValid(false);
    //     phone.length === 14 ? setPhoneValid(true) : (false);
    //     console.log(pageValid)
    //     emailValid && phoneValid && nameValid && setPageValid(true)
    // }, [email, name, phone])
    //
    // useEffect(() => {
    //     showValidationError
    //         ?
    //         setTimeout(() => {
    //             setShowValidationError(false)
    //         }, 2000)
    //         :
    //         ''
    // })
    //
    const submitHandler = async(values) => {
        setRequestPending(true)
        const data = {...values, ...{username: searchParams.get("referral")}};
        try{
            const response = await Api.post('/referral', data)
            setRequestPending(false)
            setTimeout(() => {
                setReferralId(response.data?.data?.referral_id)
            }, 5)
            setTimeModalActive(true)
        }
        catch(err){
            setRequestPending(false)
            console.log(err)
        }
    };

    // axios
    // .post(BASE_URL, data)
    // .then(function (response) {
    //     if (response.data.success) {
    //         setRequestPending(false)
    //         setTimeout(() => {
    //             setReferralId(response.data?.data?.referral_id)
    //         }, 5)
    //         setTimeModalActive(true)
    //     } else {
    //     }
    // })
    // .catch(function (error) {
    //     setRequestPending(false)
    // });

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
    // let slideIndex = 1;

    // Next/previous controls
    // const plusSlides = (n) => {
    //     showSlides((slideIndex += n));
    // };

    // Thumbnail image controls
    const [ currentSlide, setCurrentSlide ] = useState(0)

    // const currentSlide = (n) => {
    //     showSlides((slideIndex = n));
    // };

    // const showSlides = useCallback((n) => {
    //     let i;
    //     let slides = document.getElementsByClassName("slide");
    //     let dots = document.getElementsByClassName("dot");
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" bg-primary-dk", "");
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " bg-primary-dk";
    // },[])

    // useEffect(() => {
    //     showSlides(slideIndex);
    //     menu();
    // }, [ showSlides, slideIndex ]);

    const [timeModalActive, setTimeModalActive] = useState(false)

    return (
        <main className="relative bg-orange-lt relative">
            <RequestFailed setRequestFailed={setShowErrorMessage} requestFailed={showErrorMessage} message="Submission Failed"/>
            <RequestSuccess setRequestSuccess={setShowSuccessMessage} requestSuccess={showSuccessMessage} message="Request successful"/>
            { timeModalActive && <MeetingTimeModal setTimeModalActive={setTimeModalActive} setRequestFailed={setShowErrorMessage} setRequestSuccess={setShowSuccessMessage} referralId={referralId}/>}
            <header className="text-primary-dk bg-orange-lt p-5 text-center mx-auto sticky top-0 left-1/2 w-full">
                {/*Destop Navigation*/}
                <nav
                    id="desktop"
                    className=" hidden max-w-screen-xl mx-auto lg:flex flex-row justify-between items-center py-5"
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
                                    Call Us : 0816-383-1316
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
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
                {/*Mobile Navigation */}
                <nav
                    id="mobile"
                    className="lg:hidden py-5 flex flex-col gap-y-12"
                >
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <a href='/'>
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
                                            src={require("../assets/phone.svg")}
                                        />
                                    </span>
                                </a>
                            </div>
                            <div>
                                <img
                                    onClick={() => menu()}
                                    id="menu-open"
                                    alt="menu"
                                    src={require("../assets/menu-open.svg")}
                                />
                                <img
                                    onClick={() => menu()}
                                    id="menu-close"
                                    className="hidden"
                                    alt="menu"
                                    src={require("../assets/menu-close.svg")}
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
                                    href="/"
                                    className="px-4 py-2 bg-orange-xdk text-center flex flex-row justify-center items-center rounded-full"
                                >
                                    Login
                                    <span>
                                        <img
                                            alt="login arrow"
                                            className="ml-2"
                                            src={require("../assets/login-arrow.svg")}
                                        />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {/*Hero Section*/}
            <section
                id="hero"
                className="text-primary-dk p-5 pt-8 pb-12 md:pb-32 text-center max-w-screen-xl mx-auto flex flex-col xmd:flex-row xmd:text-left justify-between items-center"
            >
                <div className="flex flex-col gap-y-6">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl xl:text5xl">
                        We help landlords guarantee and increase their rental
                        income.
                    </h1>
                    <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-3/4 mx-auto xmd:mx-0">
                        The simplest, surest, and most profitable way to rent
                        out your apartments.
                    </p>
                    {/*{showSuccessMessage &&*/}
                    {/*    <div className="bg-green-lt hover:border-orange-xdk transition rounded-3xl p-8 text-left">*/}
                    {/*        <p className="">*/}
                    {/*            Thank you for adding you this lead. We will*/}
                    {/*            reach out to you with details.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*}*/}
                    {/*{showErrorMessage &&*/}
                    {/*    <div*/}
                    {/*        className="bg-red-lt hover:border-orange-xdk transition rounded-3xl p-8 text-left w-full md:w-3/4">*/}
                    {/*        <a href="#" className="">*/}
                    {/*            The form submission was unsuccessful! Click to try*/}
                    {/*            to resubmit.*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*}*/}
                    {/*{showValidationError &&*/}
                    {/*    <div*/}
                    {/*        className="bg-red-lt hover:border-orange-xdk transition rounded-3xl p-8 text-left w-full md:w-3/4">*/}
                    {/*        <a href="#" className="">*/}
                    {/*            {validationError}*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*}*/}
                    <Formik
                        initialValues={{email: '', name: '', phone: '', is_whatsapp_number: false}}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            if (!values.phone) {
                                errors.phone = 'Required';
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            submitHandler(values);
                            setSubmitting(false);
                            resetForm();
                        }}
                        className="flex flex-col mx-auto md:mx-0 w-full items-center xmd:items-start">
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              setFieldValue
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <div
                                    className="flex flex-col xmd:flex-row w-5/6 md:w-full xmd:w-3/4 xmd:space-x-5 items-center xmd:items-start mx-auto xmd:mx-0">
                                    <div className='flex flex-col w-full md:w-3/4 xmd:w-1/2 mx-auto md:mx-0'>
                                        <input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            name='name'
                                            className="appearance-none block  bg-orange-lt text-charcoal-md border border-primary-dk rounded py-4 px-3 mt-5 leading-tight focus:outline-none focus:bg-orange-md"
                                            type="text"
                                            placeholder="Full Name"
                                        />
                                        <small
                                            style={{color: 'red'}}>{errors.name && touched.name && errors.name}</small>
                                    </div>
                                    <div className='flex flex-col  w-full md:w-3/4 xmd:w-1/2 mx-auto'>
                                        <input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            name='email'
                                            className="appearance-none block w-full bg-orange-lt text-charcoal-md border border-primary-dk rounded py-4 px-3 mt-5 leading-tight focus:outline-none focus:bg-orange-md"
                                            type="email"
                                            placeholder="Your Email"
                                        />
                                        <small
                                            style={{color: 'red'}}>{errors.email && touched.email && errors.email}</small>
                                    </div>
                                </div>
                                <div className="flex flex-col w-5/6 md:w-full xmd:w-full items-center xmd:items-start mx-auto xmd:mx-0">
                                    <div className="md:w-3/4 w-full md:w-3/4">
                                        <PhoneInputWithCountrySelect
                                            defaultCountry="NG"
                                            name="phone"
                                            placeholder="Your Phone number"
                                            value={values.phone}
                                            onChange={(phone) => {
                                                setFieldValue("phone", phone);
                                            }}
                                        />
                                        {/*<small*/}
                                        {/*    style={{color: 'red'}}>{errors.phone && touched.phone && errors.phone}</small>*/}

                                        <div
                                            style={{width: 'max-content', marginTop: '15px', alignSelf: "flex-start"}}>
                                            <input
                                                type="checkbox"
                                                id="whatsapp"
                                                name='is_whatsapp_number'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.is_whatsapp_number}
                                                style={{marginRight: '10px'}}
                                            />
                                            <label htmlFor="whatsapp"
                                                style={{fontSize: '16px', color: '#284256', whiteSpace: 'nowrap'}}>This
                                                is my Whatsapp Number</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        disabled={isSubmitting}
                                        type='submit'
                                        style={{outline: 'none'}}
                                        className="w-56 xl:w-1/2 bg-primary-dk text-orange-lt px-4 py-3 text-center mx-auto xmd:mx-0 mt-5 flex flex-row justify-center items-center rounded-xl"
                                    >{
                                        requestPending
                                            ? 
                                            <div className="loading"></div>
                                            :
                                        <>
                                            Let us contact you
                                            <span>
                                                <img
                                                    alt="get started"
                                                    className="ml-2"
                                                    src={HERO_ARROW}
                                                />
                                             </span>
                                        </>
                                    }
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
                <div>
                    <img
                        className="w-full pl-12 py-5 hidden xmd:inline"
                        alt="hero"
                        src={require("../assets/hero.png")}
                    />
                    <img
                        className="w-full py-8 xmd:hidden"
                        alt="hero"
                        src={require("../assets/hero-2.png")}
                    />
                </div>
            </section>
            {/*Features Section*/}
            <section className="text-primary-dk px-5 pb-12 text-center mx-auto bg-orange-xdk">
                <div className="max-w-screen-xl mx-auto py-12">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto">
                        Here is how
                        we are transforming the landlord experience.
                    </h2>
                </div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-12">
                    <div className="bg-orange-lt rounded-3xl p-8 col-span-2 md:col-span-1">
                        <img
                            className="w-64 mx-auto p-5"
                            alt="illustration"
                            src={require("../assets/1.png")}
                        />
                        <h3 className="text-2xl font-bold leading-tight sm:text-3xl w-full sm:w-5/6 xmd:w-3/4  mx-auto">
                            Guaranteed Rent, No Defaults
                        </h3>
                        <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 mx-auto mt-5">
                            Get guaranteed annual rent on time even if the
                            tenant defaults. Our most-celebrated service.
                        </p>
                    </div>
                    <div className="bg-orange-lt rounded-3xl p-8 col-span-2 md:col-span-1">
                        <img
                            className="w-64 mx-auto p-5"
                            alt="illustration"
                            src={require("../assets/2.png")}
                        />
                        <h3 className="text-2xl font-bold leading-tight sm:text-3xl w-full sm:w-5/6 xmd:w-3/4  mx-auto">
                            Property Upgrade <br></br> Financing
                        </h3>
                        <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 mx-auto mt-5">
                            Our landlord-friendly financing helps you
                            increase the value of your rental asset and rental income as much as 50%.
                        </p>
                    </div>
                    <div className="bg-orange-lt rounded-3xl p-8 col-span-2 md:col-span-1">
                        <img
                            className="w-64 mx-auto p-5"
                            alt="illustration"
                            src={require("../assets/3.png")}
                        />
                        <h3 className="text-2xl font-bold leading-tight sm:text-3xl w-full sm:w-5/6 xmd:w-3/4  mx-auto">
                            Property Care & Management service
                        </h3>
                        <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 mx-auto mt-5">
                            Our proprietary Property Preventive Maintenance
                            Service ensures your property does not lose its
                            value and proactively prevents you from avoidable
                            renovation costs.
                        </p>
                    </div>
                    <div className="bg-orange-lt rounded-3xl p-8 col-span-2 md:col-span-1">
                        <img
                            className="w-64 mx-auto p-5"
                            alt="illustration"
                            src={require("../assets/4.png")}
                        />
                        <h3 className="text-2xl font-bold leading-tight sm:text-3xl w-full sm:w-5/6 xmd:w-3/4  mx-auto">
                            Access to credible and vetted tenants
                        </h3>
                        <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 mx-auto mt-5">
                            We fill apartments with vetted tenants who are
                            professionals working for some of the best companies
                            in Nigeria and overseas.
                        </p>
                    </div>
                    <div className="bg-orange-lt hover:border-orange-xdk transition rounded-3xl p-8 col-span-2">
                        <img
                            className="w-64 mx-auto p-5"
                            alt="illustration"
                            src={require("../assets/5.png")}
                        />
                        <h3 className="text-2xl font-bold leading-tight sm:text-3xl w-full sm:w-5/6 xmd:w-1/2  mx-auto">
                            Just sit back and enjoy optimized Return on Investment on your
                            properties, we'll do the rest
                        </h3>
                        <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto mt-5">
                            Our all-in-one-package takes on the hard work of
                            tenant selection, paperwork, property care, and
                            tenant relationship management and provides you with
                            a dashboard to monitor transparently from anywhere
                            in the world.
                        </p>
                        <a
                            href="/"
                            className="w-56 bg-primary-dk text-orange-lt px-4 py-3 text-center mx-auto mt-8 flex flex-row justify-center items-center rounded-xl"
                        >
                            Let us contact you
                            <span>
                                <img
                                    alt="get started"
                                    className="ml-2"
                                    src={ARROW_UP}
                                />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/*Case study Section*/}
            <section className="text-primary-dk px-5 text-center mx-auto pb-12">
                <div className="max-w-screen-xl mx-auto py-12">
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto">
                        Read some of our case studies
                    </h2>
                    <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-1/2 mx-auto mt-5">
                        Examples of how we have helped landlords get the best
                        Return on Investment for their rental properties.
                    </p>
                </div>

                <div className="max-w-screen-xl mx-auto">
                    {
                        currentSlide === 0 &&
                    <div
                        className="slide duration-700 ease-in-out transition-all w-full md:w-3/4 mx-auto"
                        data-carousel-item="active"
                    >
                        <div
                            className="bg-orange-dk hover:border-orange-xdk transition rounded-3xl p-8 flex flex-col gap-y-12 xmd:flex-row md:gap-x-12">
                            <img
                                className="rounded-2xl"
                                src={require("../assets/case1.png")}
                                alt=""
                            />
                            <div className="flex flex-col gap-y-6 text-center md:text-left justify-center">
                                <h1 className="text-2xl font-bold leading-tight sm:text-3xl mx-auto xmd:mx-0">
                                    Studio - Yaba
                                </h1>
                                <p className="text-charcoal-md w-full sm:w-4/6 xmd:w-3/4 lg:w-3/4 mx-auto xmd:mx-0">How
                                    we partnered with Yaba
                                    Landlord to turn things around and increase Return on Investment by 50%.</p>
                                <Link
                                    to="case-study-1"
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
                    }
                    { currentSlide === 1 &&
                    <div
                        className="slide duration-700 ease-in-out transition-all w-full md:w-3/4 mx-auto"
                        data-carousel-item="active"
                    >
                        <div
                            className="bg-orange-dk hover:border-orange-xdk transition rounded-3xl p-8 flex flex-col gap-y-12 xmd:flex-row md:gap-x-12">
                            <img
                                className="rounded-2xl"
                                src={require("../assets/case2.png")}
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
                                    to="case-study-2"
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
                    }

                    {/*Slider indicators*/}
                    <div className="flex justify-center space-x-3 w-full mt-8">
                        <button
                            onClick={() => setCurrentSlide(0)}
                            type="button"
                            className={ currentSlide === 0 ? "dot w-8 h-2 focus:outline-none rounded-full bg-primary-dk" : "dot w-8 h-2 focus:outline-none rounded-full bg-primary-lt hover:bg-primary-dk"}
                            aria-current="true"
                            aria-label="Slide 1"
                            data-carousel-slide-to="0"
                        ></button>
                        <button
                            onClick={() => setCurrentSlide(1)}
                            type="button"
                            className={ currentSlide === 1 ? "dot w-8 h-2 focus:outline-none rounded-full bg-primary-dk" : "dot w-8 h-2 focus:outline-none rounded-full bg-primary-lt hover:bg-primary-dk"}
                            aria-current="false"
                            aria-label="Slide 2"
                            data-carousel-slide-to="1"
                        ></button>
                    </div>
                </div>
            </section>

            {/*Pricing Section*/}
            <Pricing isHomepage={true}/>

            <Footer/>
        </main>
    );
}

export default Home;