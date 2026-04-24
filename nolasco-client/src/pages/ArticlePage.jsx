import Button from '../components/Button';

const ArticlePage = () => {
    return (
     <div className="flex w-full flex-col gap-6">
                <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Articles
                    </p>
                    <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                        Featured articles in a simple card grid
                    </h1>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                        Explore our latest insights on wireframing best practices, design system architecture, and modern UI development workflows. Each article packed with practical examples and code snippets.
                    </p>
                    <div className="mt-6">
                        <Button to="/">Back Home</Button>
                    </div>
                </section>

                <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                    <div className="mb-6">
                     <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Featured Articles
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                        Article card grid
                    </h2>
                    </div>

<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                            <img 
                                src="https://medievalfragments.wordpress.com/wp-content/uploads/2014/05/bible-1.jpg" 
                                alt="Wireframe basics"
                                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                            />
                            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                                Jan 2024
                            </p>
                            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                                10 Wireframe Patterns Every Designer Needs
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                Essential layouts that solve 80% of UI problems. From hero sections to pricing grids, these patterns scale across breakpoints.
                            </p>
                            <Button className="mt-4">Read Article</Button>
                        </article>
                        
                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKVZ-gg1NOXS0CFJdbJI28cE_k6JqOh8UTQ&s" 
                                alt="Design systems"
                                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                            />
                            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                                Dec 2023
                            </p>
                            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                                TailwindCSS Design Tokens Done Right
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                Complete guide to building scalable color palettes, spacing scales, and typography systems. CSS custom properties + Tailwind config mastery.
                            </p>
                            <Button className="mt-4">Read Article</Button>
                        </article>

                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                            <img 
                                src="data:image/jpeg;base64,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" 
                                alt="Responsive design"
                                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                            />
                            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                                Nov 2023
                            </p>
                            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                                Using cards and lists
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                The same low-fidelity treatment keeps the card section easy to scan.
                            </p>
                            <Button className="mt-4">Read More</Button>
                        </article>

                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98lqH4OeKhHMTFy8G2xHup4DICObzmYdtfA&s" 
                                alt="Trojan"
                                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                            />
                            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                                Oct 2023
                            </p>
                            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                                Trojans Horsed
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                Quit hoarsing around nobody reads cards description kekw.
                            </p>
                            <Button className="mt-4">Read Article</Button>
                        </article>

                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                            <img 
                                src="https://images.metmuseum.org/CRDImages/aa/original/DP-12882-001.jpg" 
                                alt="Atomic design"
                                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                            />
                            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                                Oct 2023
                            </p>
                            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                                Atomic Design Systems at Scale
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                Building component libraries that survive product evolution. Storybook integration, testing strategies, and documentation that developers love.
                            </p>
                            <Button className="mt-4">Read Article</Button>
                        </article>

                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                            <img 
                                src="https://earlychurchhistory.org/wp-content/uploads/2014/12/Battering-Ram-on-Wheels.jpg" 
                                alt="Performance wireframes"
                                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                            />
                            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                                Sep 2023
                            </p>
                            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                                Performance-First Wireframing
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                Layouts that load fast and convert better. Critical rendering path optimization, CSS containment, and component-level performance budgeting.
                            </p>
                            <Button className="mt-4">Read Article</Button>
                        </article>
                    </div>
            </section>
        </div>
    );
};

export default ArticlePage;
