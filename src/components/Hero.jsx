export default function Hero() {
    return (
        <section class="hero-section" id="hero-section">
            <div class="hero-texts flex text-center flex-col p-14">
                <h1 class="text-5xl pb-4 font-light">Work at the speed of thought.</h1>
                <p class="text-xl font-light">
                    Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
                </p>
            </div>
            <div class="buttons flex flex-col items-center gap-5">
                <button class="try-btn py-5 px-10 font-medium">Try For Free</button>
                <button class="learn-btn py-5 px-10 font-medium">Learn More</button>
            </div>
            <div class="img-wrapper relative">
                <img src="./public/hero/screens.svg" alt="App screens image" class="block w-full" />
            </div>
        </section>
    )
}
