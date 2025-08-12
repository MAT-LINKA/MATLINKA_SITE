"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function HeroCarousel({
  slides,
  interval = 4000, // autoplay ms
}: {
  slides: string[];
  interval?: number;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // autoplay
  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      interval
    );
    return () => clearInterval(id);
  }, [paused, slides.length, interval]);

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <div
      className="absolute inset-0 overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Track */}
      <div
        className="h-full w-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt=""
            className="w-full h-full object-cover flex-shrink-0"
            aria-hidden={i !== current}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const text = "MatLinka";
  const [displayedText, setDisplayedText] = useState("");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const services = [
    "Heavy Construction Equipment",
    "Mining & Drilling Equipments",
    "Professional Power Tools",
    "Safety Equipments",
    "Scaffolding & Formwork System",
    "MEP System",
    "Solar Panels & Distribution Panels",
    "Reactor & Transformer",
    "Turbines & Generators",
    "Industrial Fluid Pumps",
    "Industrial Valves",
    "Pharmaceutical equipments",
    // add more...
  ];

  const slides = [
    "/Img1.jpeg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
    "/img11.jpg",
    "/img12.jpg",
    "/img13.jpg",
  ];

  useEffect(() => {
    if (displayedText.length < text.length) {
      const t = setTimeout(() => {
        setDisplayedText((prev) => prev + text[prev.length]);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [displayedText, text]);

  // Start the sequence once the section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el); // run once
        }
      },
      { root: null, threshold: 0.35 } // ~35% of section visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Reveal items one by one after start
  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount >= services.length) return;

    const t = setTimeout(
      () => setVisibleCount((c) => c + 1),
      400 // speed per item
    );
    return () => clearTimeout(t);
  }, [hasStarted, visibleCount, services.length]);

  // 4) Background carousel: cross-fade
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!hasStarted) return; // only run once section is visible
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return; // respect reduced motion

    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 10000); // slide duration
    return () => clearInterval(id);
  }, [hasStarted, slides.length]);

  // (Optional) Preload images to avoid first-fade flash
  useEffect(() => {
    slides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [slides]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Section.jpg')",
            }}
          ></div>

          {/* Overlay for better contrast */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

          {/* Typing Text */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="relative font-bold tracking-widest text-6xl md:text-8xl text-gray-300">
              <span className="relative z-10">{displayedText}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-[shine_2s_linear_infinite]" />
            </h1>

            <style jsx>{`
              @keyframes shine {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }
            `}</style>
          </div>

          {/* {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`,
                }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                      {slide.subtitle}
                    </p> */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/contact"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Get Quote Now
                      </Link>
                      <Link
                        href="/services"
                        className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Our Services
                      </Link>
                    </div> */}
          {/* </div>
                </div>
              </div>
            </div>
          ))} */}

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm cursor-pointer"
          >
            <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm cursor-pointer"
          >
            <i className="ri-arrow-right-line w-6 h-6 flex items-center justify-center"></i>
          </button> */}

          {/* Slide Indicators */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div> */}
        </section>

        {/* Services what we offer */}
        <section
          className="py-20 bg-gray-50 bg-cover bg-center"
          style={{ backgroundImage: "url('/We_Offer.jpg')" }}
        >
          {" "}
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl font-bold text-gray-900 max-w-3xl mx-auto">
                We specialize in connecting you with suppliers for all your
                industrial and construction material needs
              </p>
            </div>
          </div>
        </section>

        {/* Listing Content */}
        <section
          ref={sectionRef}
          className="relative h-[520px] overflow-hidden"
        >
          {/* Carousel background */}
          <HeroCarousel slides={slides} interval={3500} />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />

          {/* List content (your grid) */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              {/* <ul className="grid grid-rows-4 grid-flow-col md:grid-rows-4 gap-6">
                {services.map((item, i) => {
                  const shown = i < visibleCount;
                  return (
                    <li
                      key={item}
                      className={[
                        "flex items-start gap-3 text-white/95 text-lg md:text-xl transition-all duration-500",
                        shown
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2",
                      ].join(" ")}
                    >
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul> */}
              <ul
                className="
    grid gap-4
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
  "
              >
                {services.map((item, i) => {
                  const shown = i < visibleCount;
                  return (
                    <li
                      key={item}
                      className={[
                        "flex items-start gap-3 text-white/95 text-base md:text-lg transition-all duration-500",
                        shown
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2",
                      ].join(" ")}
                    >
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Services?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We understand the challenges of sourcing materials and
                  equipment according to your needs. Our global network of
                  suppliers will source your required products within your
                  budget.
                </p>

                <div className="space-y-6">
                  {/* <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-check-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Verified Suppliers Network
                      </h3>
                      <p className="text-gray-600">
                        All our suppliers are thoroughly vetted for quality and
                        reliability
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-time-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fast Response Time
                      </h3>
                      <p className="text-gray-600">
                        Quick turnaround on quotes and material sourcing
                        requests
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-shield-check-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Quality Assurance
                      </h3>
                      <p className="text-gray-600">
                        Rigorous quality checks and certification processes
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-customer-service-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Dedicated Support
                      </h3>
                      <p className="text-gray-600">
                        Personalized assistance will be provided according to
                        the client's requirements after confirming the
                        supplier's offer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-global-fill text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Global Supplier Network
                      </h3>
                      <p className="text-gray-600">
                        Our Global Supplier Network is dedicated to sourcing a
                        wide range of industrial products tailored to meet our
                        customers' specific needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20meeting%20in%20modern%20office%20with%20industrial%20equipment%20catalogs%20and%20supplier%20documents%20on%20table%2C%20business%20handshake%2C%20industrial%20procurement%20consultation%2C%20clean%20modern%20office%20environment%20with%20equipment%20displays&width=800&height=600&seq=why-choose-us&orientation=landscape"
                  alt="Professional consultation"
                  className="rounded-xl shadow-2xl object-cover w-full h-96"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Submit your material requirements and let us connect you with the
              right suppliers. Get competitive quotes.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Submit Your Requirements
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
