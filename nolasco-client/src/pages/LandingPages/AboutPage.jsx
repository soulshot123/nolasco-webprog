import Button from '../../components/Button';

const AboutPage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
                        <img 
                            src="https://cdn11.bigcommerce.com/s-fex90914pb/images/stencil/760x1000/uploaded_images/leper-king-baldwin-blog-scld.jpg?t=1764966751" 
                            alt="Studio founder profile"
                            className="h-72 w-full rounded-[1.25rem] lg:h-[28rem] lg:rounded-full lg:h-72 lg:w-72 object-cover mx-auto"
                        />
                    </div>

                    <div>
                     <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        About Section
                     </p>
                     <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                        Nolasco Studio: Precision Wireframing & UI Architecture
                     </h1>
                     <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                        We specialize in clean, scalable wireframes that transition seamlessly from concept to production code. Seven years building design systems for startups and enterprises, delivering pixel-perfect implementations with maintainable React architecture.
                     </p>
                     <div className="mt-6 flex flex-wrap gap-3">
                        <Button to="/" variant="primary">
                            Back Home
                        </Button>
                        <Button to="/articles">Open Articles</Button>
                     </div>
                </div>
            </div>
        </section>

        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Profile Overview
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick summary blocks</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <p className="text-3xl font-bold text-zinc-900">7</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                        Years Experience
                    </p>
                </div>
                <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                    <p className="text-3xl font-bold text-zinc-900">5</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                        Core Specialties
                    </p>
                </div>
            </div>
        </section>
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Studio Story
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Stacked content wireframe</h2>

                    <div className="mt-6 space-y-4">
                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Our Philosophy</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">Structure first, style second. We believe wireframes should solve problems before they become visual distractions. Every line of code serves the user experience.</p>
                        </article>

                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">Studio Journey</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">Started as solo wireframer in 2017. Grew to serve 30+ clients across fintech, SaaS, and e-commerce. 100k+ screens delivered, always on time, always over-engineered.</p>
                        </article>

                        <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                            <h3 className="text-lg font-semibold text-zinc-900">What We Deliver</h3>
                            <p className="mt-3 text-sm leading-6 text-zinc-600">Production-ready React components with TailwindCSS. Figma-to-code workflows. Design tokens and component libraries built for scale. Documentation included.</p>
                        </article>
                    </div>
                </div>

                <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Visual Grid
                    </p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <img src="https://matuls.pl/wp-content/uploads/2018/01/xp_1_2_4_124-Pikowaniec-typ-5.jpg.pagespeed.ic.lJ_Ib0j5Ey.jpg" alt="Wireframe icon 1" className="aspect-square w-full rounded-[1.25rem] object-cover" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-O1cVm6WzXwZA1NcZ4kzNxAy93fvHZYPWw&s" alt="Wireframe icon 2" className="aspect-square w-full rounded-[1.25rem] object-cover" />
                        <img src="https://m.media-amazon.com/images/I/41sUXesxrgL._AC_UF894,1000_QL80_.jpg" alt="Wireframe icon 3" className="aspect-square w-full rounded-[1.25rem] object-cover" />
                        <img src="https://www.historyofarmor.com/images/historyofarmor/picture-of-armour-for-gustav-i-of-sweden.jpg" alt="Wireframe icon 4" className="aspect-square w-full rounded-[1.25rem] object-cover" />
                        </div>
                        <Button className="mt-5">View Portfolio</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;