export default function Features() {
    return (
        <section class="features-section" id="features-section">
            <div>
                <div class="features-texts flex text-center flex-col gap-7 pt-36 px-10">
                    <h1 class="text-5xl pb-4 font-light">FEATURES</h1>
                    <p class="text-xl font-extralight">
                        Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their
                        schedule.
                    </p>
                </div>
                <div class="features flex items-center flex-col px-10 pt-7 gap-7">
                    <img src="./public/features/feature-mobile.svg" alt="Calendar feature image" class="calendar-img" />
                    <div class="features-blocks flex flex-col px-5">
                        <div class="flex flex-row text-left pb-4">
                            <img src="./public/features/single-source.svg" alt="" class="features-icons" />
                            <h2 class="text-xl font-medium pl-4">A single source of truth</h2>
                        </div>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                    <div class="features-blocks flex flex-col px-5">
                        <div class="flex flex-row text-left pb-4">
                            <img src="./public/features/intuitive.svg" alt="" class="features-icons" />
                            <h2 class="text-xl font-medium pl-4">Intuitive interface</h2>
                        </div>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                    <div class="features-blocks flex flex-col px-5">
                        <div class="flex flex-row text-left pb-4">
                            <img src="./public/features/rules.svg" alt="" class="features-icons" />
                            <h2 class="text-xl font-medium pl-4">Or with rules</h2>
                        </div>
                        <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
