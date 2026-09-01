import { motion } from "motion/react";
import Navbar from "../general/Navbar";
import HeroTextLeft from "../general/HeroTextLeft";
import ButtonPrimary from "../general/ButtonPrimary";
import ButtonSecondary from "../general/ButtonSecondary";

import sky from "../../../assets/sky.png";
import europe_2 from "../../../assets/europe_2.jpg";
import united_kingdom from "../../../assets/united_kingdom.png";
import dubai from "../../../assets/dubai.png";
import united_state from "../../../assets/united_state.jpg";

const destinations = [
    {
        image: europe_2,
        alt: "Europe",
    },
    {
        image: united_kingdom,
        alt: "United Kingdom",
    },
    {
        image: dubai,
        alt: "Dubai",
    },
    {
        image: united_state,
        alt: "United States",
    },
];

const TourismHero = () => {
    return (
        <motion.header
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-cover
                bg-center
                bg-no-repeat
                flex
                flex-col
            "
            style={{
                backgroundImage: `url(${sky})`,
                backgroundSize: "200% 200%",
            }}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-skyblue/40 z-0" />

            {/* Navbar */}
            <div className="relative z-20">
                <Navbar />
            </div>

            {/* Main Hero Area */}
            <div
                className="
                    relative
                    z-10
                    flex-1
                    w-full
                    max-w-7xl
                    mx-auto
                    md:mt-24
                    mt-8
                    px-4
                    sm:px-6
                    lg:px-8

                    flex
                    flex-col

                    /*
                     * MOBILE
                     * Normal vertical flow.
                     */
                    justify-start

                    /*
                     * TABLET
                     * Text at the top, images pushed
                     * to the bottom.
                     */
                    md:justify-between

                    /*
                     * DESKTOP
                     * Text and images sit side-by-side.
                     */
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    lg:gap-16
                "
            >

                {/* =========================
                    HERO TEXT
                ========================== */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="
                        w-full
                        lg:w-1/2

                        flex
                        flex-col
                        items-start

                        /*
                         * Space below navbar.
                         */
                        pt-16
                        sm:pt-20

                        /*
                         * Tablet needs more separation
                         * from the navbar.
                         */
                        md:pt-28

                        /*
                         * Desktop gets centered vertically
                         * by the parent instead.
                         */
                        lg:pt-0

                        /*
                         * Mobile needs some space before images.
                         */
                        pb-12
                        md:pb-0
                    "
                >
                    <div className="w-full max-w-2xl text-left">
                        <HeroTextLeft
                            title="See more of the world."
                            description="From the UAE to Europe, the United Kingdom, Canada and the United States — we help you plan international journeys around your destination, schedule and preferences."
                        />
                    </div>

                    {/* Buttons */}
                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            items-start
                            justify-start
                            gap-4
                            mt-8
                            w-full
                            sm:w-auto
                        "
                    >
                        <ButtonPrimary
                            text="Plan Your Trip"
                            href="/tourism/#plan-trip"
                        />

                        <ButtonSecondary
                            text="Explore Destinations"
                            href="/tourism/#destinations"
                        />
                    </div>
                </motion.div>


                {/* =========================
                    DESTINATION IMAGES
                ========================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                    }}
                    className="
                        /*
                         * MOBILE
                         * -------------------------
                         * Wide 2x2 grid.
                         * Small margin from viewport edges.
                         */
                        w-full
                        max-w-none
                        mx-auto

                        grid
                        grid-cols-2
                        gap-0

                        shadow-2xl

                        /*
                         * TABLET
                         * -------------------------
                         * Four images in one row.
                         * Full viewport width.
                         * This sits at the bottom because
                         * the parent uses justify-between.
                         */
                        md:w-screen
                        md:max-w-none
                        md:relative
                        md:left-1/2
                        md:-translate-x-1/2

                        md:grid-cols-4
                        md:shadow-none

                        /*
                         * DESKTOP
                         * -------------------------
                         * Return to a 2x2 grid.
                         * Sits beside hero text.
                         */
                        lg:w-1/2
                        lg:left-auto
                        lg:translate-x-0
                        lg:relative
                        lg:grid-cols-2
                        lg:shadow-2xl
                        lg:mx-0
                        lg:ml-auto
                    "
                >
                    {destinations.map((destination) => (
                        <div
                            key={destination.alt}
                            className="
                                aspect-square
                                overflow-hidden

                                transform
                                transition-transform
                                duration-700
                                hover:scale-105

                                /*
                                 * Tablet images become taller.
                                 */
                                md:aspect-auto
                                md:h-72

                                /*
                                 * Desktop returns to square.
                                 */
                                lg:aspect-square
                                lg:h-auto
                            "
                        >
                            <img
                                src={destination.image}
                                alt={destination.alt}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "
                            />
                        </div>
                    ))}
                </motion.div>

            </div>
        </motion.header>
    );
};

export default TourismHero;