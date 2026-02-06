export default function Features() {
    return (
        <section class="features-section" id="features-section">
            <div class="features-texts flex text-center flex-col gap-7 pt-36 px-10">
                <h1 class="text-5xl pb-4 font-light">FEATURES</h1>
                <p class="text-xl font-light">
                    Most calendars are designed for teams. Slate is designed for <br class="hidden lg:block" /> freelancers who want a
                    simple way to plan their schedule.
                </p>
            </div>
            <div class="features flex items-center flex-col px-10 pt-7 gap-7 lg:flex-row justify-center">
                <img src="/features/feature-mobile.svg" alt="Calendar feature image" class="calendar-img lg:hidden" />
                <img src="/features/feature-desktop.svg" alt="Calendar feature image" class="calendar-img hidden lg:block" />
                <div class="flex flex-col gap-6 lg:w-1/5">
                    <div class="features-blocks flex flex-col px-5 pb-7">
                        <div class="flex flex-row text-left pb-4">
                            <img src="/features/single-source.svg" alt="" class="features-icons" />
                            <h2 class="text-xl font-medium pl-4">
                                A single source <br /> of truth
                            </h2>
                        </div>
                        <p class="font-light">When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                    <div class="features-blocks flex flex-col px-5 pb-7">
                        <div class="flex flex-row text-left pb-4">
                            <img src="/features/intuitive.svg" alt="" class="features-icons" />
                            <h2 class="text-xl font-medium pl-4">
                                Intuitive <br /> interface
                            </h2>
                        </div>
                        <p class="font-light">When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                    <div class="features-blocks flex flex-col px-5">
                        <div class="flex flex-row text-left pb-4">
                            <img src="/features/rules.svg" alt="" class="features-icons" />
                            <h2 class="text-xl font-medium pl-4">Or with rules</h2>
                        </div>
                        <p class="font-light">When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
