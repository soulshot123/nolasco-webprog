import Button from '../../components/Button';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="ornate-border bg-gradient-to-b from-transparent via-yellow-50/70 to-amber-50/50 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 knight-shadow">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] gold-accent">
                            The Quest Begins
                        </p>
                        <h1 className="max-w-xl text-4xl md:text-5xl lg:text-6xl font-black leading-none text-knight-ink mb-6 drop-shadow-lg">
                            Nolasco Knight Forge
                        </h1>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                            Discover the art of wireframing with a simple layout system for hero content, key numbers, and feature cards.
                        </p>
                        <div className="mt-6">
                            <Button to="/about" variant="primary">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
                        <img 
                            src="https://castmastereliteshop.com/cdn/shop/articles/castmasterelite-167176-forge-knife-home-blogbanner1_grande.jpg?v=1654886959" 
                            alt="Wireframe design process"
                            className="h-72 w-full rounded-[1.25rem] object-cover lg:h-80"
                        />
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        KPI Section
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                        Quick overview blocks
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl iron-border bg-gradient-to-br from-yellow-50 to-amber-50 p-6 text-center knight-shadow hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-knight-gold to-yellow-600 flex items-center justify-center shadow-lg">
                            <span className="text-xl font-black text-knight-velvet">50+</span>
                        </div>
                        <p className="text-lg font-bold text-knight-ink mb-1">Quests Conquered</p>
                        <p className="text-xs uppercase tracking-[0.25em] gold-accent">Portfolio Projects</p>
                    </div>
                    <div className="rounded-3xl iron-border bg-gradient-to-br from-yellow-50 to-amber-50 p-6 text-center knight-shadow hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-knight-gold to-yellow-600 flex items-center justify-center shadow-lg">
                            <span className="text-xl font-black text-knight-velvet">15</span>
                        </div>
                        <p className="text-lg font-bold text-knight-ink mb-1">Scrolls Crafted</p>
                        <p className="text-xs uppercase tracking-[0.25em] gold-accent">Reusable Sections</p>
                    </div>
                    <div className="rounded-3xl iron-border bg-gradient-to-br from-yellow-50 to-amber-50 p-6 text-center knight-shadow hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-knight-gold to-yellow-600 flex items-center justify-center shadow-lg">
                            <span className="text-xl font-black text-knight-velvet">120+</span>
                        </div>
                        <p className="text-lg font-bold text-knight-ink mb-1">Shields Forged</p>
                        <p className="text-xs uppercase tracking-[0.25em] gold-accent">Screens Designed</p>
                    </div>
                    <div className="rounded-3xl iron-border bg-gradient-to-br from-yellow-50 to-amber-50 p-6 text-center knight-shadow hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-knight-gold to-yellow-600 flex items-center justify-center shadow-lg">
                            <span className="text-xl font-black text-knight-velvet">67+</span>
                        </div>
                        <p className="text-lg font-bold text-knight-ink mb-1">Armor Sets</p>
                        <p className="text-xs uppercase tracking-[0.25em] gold-accent">Projects Completed</p>
                    </div>                                   
                </div>
            </section>

            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Feature Cards
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                        Core Features
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhAkPPE56yR-gY2Q-Wmom17ETRRYwSa2ryQ&s" 
                            alt="Responsive wireframes"
                            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                        />
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                            Responsive Components
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Mobile-first wireframes that scale perfectly across devices. Tailwind-powered, fully responsive layouts ready for production.
                        </p>
                        <Button className="mt-4" variant="primary">Explore Components</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <img 
                            src="https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/3738c930-414e-4df8-8af3-0c9db9721d71_scaled.jpg" 
                            alt="Figma to code workflow"
                            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                        />
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                            Figma to Code Workflow
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Seamless handoff from Figma designs to production-ready React components. Pixel-perfect implementation with clean code structure.
                        </p>
                        <Button className="mt-4" variant="primary">See Workflow</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <img 
                            src="https://i.pinimg.com/736x/24/5c/93/245c93d6ff6c3294e1e906751e6cf7b9.jpg" 
                            alt="Design system components"
                            className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                        />
                        <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                            Design System Ready
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Battle-tested components following Atomic Design principles. Consistent tokens, scalable architecture for enterprise needs.
                        </p>
                        <Button className="mt-4" variant="primary">View System</Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
