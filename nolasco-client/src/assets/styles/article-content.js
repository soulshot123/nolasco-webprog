const articles = [
    {
        name: "forging-ui-blades",
        title: "Forging UI Blades: Tailwind + React Mastery",
        image: "https://static.wikia.nocookie.net/ageofempires/images/4/4a/EliteSamuraiIcon-DE.png/revision/latest/scale-to-width/360?cb=20250411203946",
        content: [
            "In the Knight Forge, every UI component is tempered like steel. TailwindCSS custom configurations allow us to craft precise design tokens matching our medieval theme.",
            "CSS Variables Integration:\nconst theme = {\n  colors: {\n    'knight-gold': '#D4AF37',\n    'knight-parchment': '#F7F4E3',\n  }\n}",
            "Hover effects use knight-glow utility: box-shadow with gold aura for interactive elements.",
            "Responsive grids scale from mobile quests to desktop sieges using Tailwind breakpoints."
        ]
    },
    {
        name: "shielding-components",
        title: "Shielding Components: Atomic Design Defense",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5aIVMf_n9R8HsfGUw8UFNApOqj4_hj1FEg&s",
        content: [
            "Atoms (buttons, cards), molecules (navbars), organisms (hero sections), templates, pages – our atomic hierarchy ensures scalable architecture.",
            "Button variants: primary (gold-accent), secondary (iron-border), all with hover:scale-[1.02] transforms.",
            "Layout.jsx serves as the master template wrapping all routes with consistent NavBar + Footer structure.",
            "Error boundaries and NotFoundPage protect the user journey like castle walls."
        ]
    },
    {
        name: "parchment-layouts",
        title: "Parchment Layouts: Themed Typography & Spacing",
        image: "https://static.wikia.nocookie.net/ageofempires/images/9/92/EliteObuchIcon-DE.png/revision/latest/scale-to-width/360?cb=20250412225421",
        content: [
            "Cinzel font weights 400-900 create hierarchy. MedievalSharp for logos and accents.",
            "Custom utilities in index.css: .ornate-border, .knight-shadow, .parchment-bg with subtle gradients.",
            "Spacing scale uses multiples of 4 matching Tailwind defaults but with knight-iron borders.",
            "Fixed NavBar with pt-24 padding ensures content flows beneath without overlap."
        ]
    },
    {
        name: "article-armory",
        title: "Article Armory: Dynamic Content Systems",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Englishlongbow.jpg/500px-Englishlongbow.jpg",
        content: [
            "ArticleList.jsx renders dynamic grids from imported articles data, using Link for client-side routing.",
            "Each card features placeholder aspect-4/3 image, excerpt truncation, and 'Read More' CTA.",
            "ArticleListPage and ArticlePage both showcase the system – dynamic path /articles/:name ready for single article views.",
            "Data-driven previews maintain performance while enabling easy content management."
        ]
    },
    {
        name: "quest-metrics",
        title: "Quest Metrics: KPI Dashboard Patterns",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Ancient_Sasanid_Cataphract_Uther_Oxford_2003_06_2%281%29.jpg",
        content: [
            "HomePage KPI section uses gradient circles with bold counters and uppercase labels.",
            "Hover:scale-[1.02] on all interactive cards creates subtle lift effect matching theme.",
            "Grid progression: sm:grid-cols-2 lg:grid-cols-4 handles all screen sizes seamlessly.",
            "Numbers like '50+ Quests Conquered' reinforce the knight narrative while displaying metrics."
        ]
    },
    {
        name: "hero-stronghold",
        title: "Hero Stronghold: Landing Page Architecture",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kriegsmaschinen_Onager.jpg",
        content: [
            "Hero follows proven pattern: tagline → massive H1 → description → CTA button.",
            "Ornate hero container with dashed iron-border and gradient backdrop creates visual separation.",
            "Feature cards below maintain momentum with consistent card anatomy and thumbnail images.",
            "External image optimization via lazy loading recommended for production deploys."
        ]
    },
    {
        name: "foundry-footer",
        title: "Foundry Footer: Bottom Navigation Excellence",
        image: "https://i.pinimg.com/736x/1a/9a/92/1a9a9280c05f1403111a19f47e7dfd64--th-century-equipment.jpg",
        content: [
            "New Footer.jsx features 4-column responsive grid: logo, quick links, social, contact.",
            "Dark knight-velvet gradient with yellow-50 text and gold-accent headers.",
            "Hover underlines and NavLink integration for accessibility and SEO.",
            "Copyright + 'Crafted with ♥ and React' tag maintains personality."
        ]
    },
    {
        name: "dungeon-404",
        title: "Dungeon 404: Error Page Mastery",
        image: "https://castellodiamorosa.com/wp-content/uploads/2021/02/dungeon_.jpg",
        content: [
            "Enhanced NotFoundPage transforms basic error into themed experience with illustration space.",
            "Large knight-glow title 'Lost in the Dungeon?' with descriptive copy and navigation breadcrumbs.",
            "Consistent button styling directs users back to safety (Home/About/Articles).",
            "Maintains app theme while clearly communicating the 404 state."
        ]
    }
];

export default articles;
