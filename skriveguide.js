// skriveguide.js — writing guide with consistent grammar colors and legends

const skriveguideGrammarLegend = `
<div class="grammar-legend grammar-local-legend"
     aria-label="Grammar color guide">
    <span><span class="legend-dot conjunction"></span> Konjunktion (K)</span>
    <span><span class="legend-dot subject"></span> Subjekt (S)</span>
    <span><span class="legend-dot verb-v1"></span> Finit verbum (V1)</span>
    <span><span class="legend-dot verb-v2"></span> Infinit verbum (V2)</span>
    <span><span class="legend-dot adverb"></span> Adverbum (A)</span>
    <span><span class="legend-dot object"></span> Direkte objekt (DO)</span>
</div>
`;

const skriveguide = [
    {
        title: "Konjunktioner",
        content: `
            <h3>Hvad er konjunktioner?</h3>

            <p>
                Konjunktioner binder ord eller sætninger sammen. De kan blandt andet forbinde to
                <strong>hovedsætninger</strong> eller indlede en <strong>ledsætning</strong>.
            </p>

            ${skriveguideGrammarLegend}

            <h4>Hovedsætning (HS)</h4>
            <p>En hovedsætning kan stå alene som en hel sætning.</p>

            <div class="rule-block">
                <div class="rule-title">
                    <span class="subject">S</span> +
                    <span class="verb-v1">V1</span>
                </div>
                <div class="ex">
                    <span class="subject">Vi</span>
                    <span class="verb-v1">spiser</span>.
                </div>
            </div>

            <p>To hovedsætninger kan forbindes med en hovedsætningskonjunktion:</p>

            <div class="ex">
                <span class="subject">Vi</span>
                <span class="verb-v1">spiser</span>,
                <span class="conjunction">for</span>
                <span class="subject">vi</span>
                <span class="verb-v1">er</span>
                sultne.
            </div>

            <h4>Ledsætning (LS)</h4>
            <p>
                En ledsætning kan ikke stå alene. Den fungerer som en del af en større sætning. Den kan stå både før og efter
                hovedsætningen.
            </p>

            <div class="ex">
                <span class="subject">Vi</span>
                <span class="verb-v1">spiser</span>,
                <span class="conjunction">når</span>
                <span class="subject">du</span>
                <span class="verb-v1">kommer</span>.
            </div>

            <div class="ex">
                <span class="conjunction">Når</span>
                <span class="subject">du</span>
                <span class="verb-v1">kommer</span>,
                <span class="verb-v1">spiser</span>
                <span class="subject">vi</span>.
            </div>

            <aside class="grammar-rule">
                <p>
                    Når ledsætningen står først, kommer der inversion i hovedsætningen:
                    <span class="verb-v1">V1</span> + <span class="subject">S</span>.
                </p>
            </aside>
        `
    },

    {
        title: "Hovedsætningskonjunktioner (HS-konj.)",
        content: `
            <h3>De 5 mest almindelige HS-konjunktioner</h3>

            <p class="chip-row">
                <span class="chip">og</span>
                <span class="chip">men</span>
                <span class="chip">eller</span>
                <span class="chip">for</span>
                <span class="chip">så</span>
            </p>

            ${skriveguideGrammarLegend}

            <p>
                <strong>Regel:</strong>
                En hovedsætningskonjunktion forbinder to hovedsætninger. Efter konjunktionen følger normal hovedsætningsordstilling:
                <span class="subject">S</span> + <span class="verb-v1">V1</span> + <span class="adverb">A</span>.
            </p>

            <div class="rule-block">
                <div class="rule-title">K + S + V1 + A</div>

                <div class="ex">
                    <span class="conjunction">For</span>
                    <span class="subject">lønnen</span>
                    <span class="verb-v1">er</span>
                    <span class="adverb">også</span>
                    lav.
                </div>

                <div class="ex">
                    <span class="conjunction">Men</span>
                    <span class="subject">lønnen</span>
                    <span class="verb-v1">er</span>
                    <span class="adverb">ikke</span>
                    god.
                </div>
            </div>
        `
    },

    {
        title: "Ledsætningskonjunktioner (LS-konj.)",
        content: `
            <h3>Almindelige ledsætningskonjunktioner</h3>

            <div class="grid-2">
                <ul class="tight">
                    <li>at, om, fordi, eftersom, selvom</li>
                    <li>da, når, idet, mens, hvorimod</li>
                    <li>før, inden, indtil, siden, dengang</li>
                    <li>hvis, ligesom</li>
                </ul>
                <div>
                    <p>
                        <strong>Hv-ord:</strong>
                        hvem, hvor, hvornår, hvorfor, hvad, hvordan osv.
                    </p>
                </div>
            </div>

            ${skriveguideGrammarLegend}

            <p>
                <strong>Regel:</strong>
                I en ledsætning står et centraladverbium som
                <em>ikke</em>, <em>aldrig</em> eller <em>også</em> normalt <strong>før det finitte verbum</strong>.
            </p>

            <div class="rule-block">
                <div class="rule-title">K + S + A + V1</div>

                <div class="ex">
                    <span class="subject">Han</span>
                    <span class="verb-v1">søger</span>
                    <span class="object">nyt arbejde</span>,
                    <span class="conjunction">fordi</span>
                    <span class="subject">lønnen</span>
                    <span class="adverb">også</span>
                    <span class="verb-v1">er</span>
                    lav.
                </div>

                <div class="ex">
                    <span class="conjunction">Hvis</span>
                    <span class="subject">lønnen</span>
                    <span class="adverb">ikke</span>
                    <span class="verb-v1">stiger</span>,
                    <span class="verb-v1">vil</span>
                    <span class="subject">han</span>
                    <span class="verb-v2">søge</span>
                    <span class="object">nyt arbejde</span>.
                </div>
            </div>

            <aside class="grammar-rule">
                <p>
                    Hovedsætning:
                    <span class="subject">S</span> + <span class="verb-v1">V1</span> +
                    <span class="adverb">A</span>
                </p>
                <p>
                    Ledsætning:
                    <span class="conjunction">C</span> + <span class="subject">S</span> + <span class="adverb">A</span> +
                    <span class="verb-v1">V1</span>
                </p>
            </aside>
        `
    },

    {
        title: "Adverbial først → inversion (V1 + S)",
        content: `
            <h3>Adverbial først giver inversion</h3>

            <p>Når et adverbial står på første plads i en hovedsætning, kommer det finitte verbum før subjektet.</p>

            ${skriveguideGrammarLegend}

            <div class="rule-block">
                <div class="rule-title">A + V1 + S</div>

                <div class="ex">
                    <span class="adverb">Derfor</span>
                    <span class="verb-v1">er</span>
                    <span class="subject">lønnen</span>
                    <span class="adverb">også</span>
                    lav.
                </div>

                <div class="ex">
                    <span class="adverb">Desuden</span>
                    <span class="verb-v1">er</span>
                    <span class="subject">lønnen</span>
                    <span class="adverb">ikke</span>
                    god.
                </div>
            </div>

            <p class="muted">
                <strong>OBS:</strong>
                Centraladverbier som <em>også, ikke, heller ikke, nemlig, altid</em> og <em>aldrig</em> står normalt efter det
                finitte verbum i en hovedsætning.
            </p>
        `
    },

    {
        title: "Hurtig oversigt",
        content: `
            ${skriveguideGrammarLegend}

            <div class="grid-2">
                <div class="rule-block">
                    <div class="rule-title">Hovedsætning</div>
                    <div class="ex">
                        <span class="subject">S</span> + <span class="verb-v1">V1</span> +
                        <span class="adverb">A</span>
                    </div>
                </div>

                <div class="rule-block">
                    <div class="rule-title">Ledsætning</div>
                    <div class="ex">
                        <span class="conjunction">K</span> + <span class="subject">S</span> + <span class="adverb">A</span> +
                        <span class="verb-v1">V1</span>
                    </div>
                </div>

                <div class="rule-block">
                    <div class="rule-title">Adverbial først → inversion</div>
                    <div class="ex">
                        <span class="adverb">A</span> + <span class="verb-v1">V1</span> +
                        <span class="subject">S</span>
                    </div>
                </div>

                <div class="rule-block">
                    <div class="rule-title">Ledsætning først → inversion i HS</div>
                    <div class="ex">
                        <span class="conjunction">Når</span>
                        <span class="subject">du</span>
                        <span class="verb-v1">kommer</span>,
                        <span class="verb-v1">spiser</span>
                        <span class="subject">vi</span>.
                    </div>
                </div>
            </div>
        `
    },

    {
        // REPLACE the previous three “Konjunktioners betydning …” pages with these:

        // 1) HS-konjunktioner

        title: "Konjunktioners betydning — Hovedsætningskonjunktioner",
        content: `
            <h3>Hovedsætningskonjunktioner (S + V1 + A)</h3>
            <p class="muted">Forbinder to hovedsætninger. Ordstilling efter konjunktionen: <strong>S + V1 + A</strong>.</p>

            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">og</span>
                        <span class="konj-meaning"
                            >tilføjelse <span class="sep">/</span> <span class="en">addition, and</span></span
                        >
                    </div>
                    <div class="konj-ex">Hun købte en is, <strong>og</strong> han købte en cola.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">men</span>
                        <span class="konj-meaning"
                            >modsætning <span class="sep">/</span> <span class="en">contrast, but</span></span
                        >
                    </div>
                    <div class="konj-ex">Jeg har lige spist, <strong>men</strong> jeg er stadig sulten.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">eller</span>
                        <span class="konj-meaning"
                            >alternativ <span class="sep">/</span> <span class="en">alternative, or</span></span
                        >
                    </div>
                    <div class="konj-ex">Vi kan holde pause nu, <strong>eller</strong> vi kan vente.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">for</span>
                        <span class="konj-meaning"
                            >forklaring <span class="sep">/</span> <span class="en">explanation, for/because</span></span
                        >
                    </div>
                    <div class="konj-ex">Hun aflyste mødet, <strong>for</strong> hun var syg.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">så</span>
                        <span class="konj-meaning"
                            >konsekvens <span class="sep">/</span> <span class="en">consequence, so/therefore</span></span
                        >
                    </div>
                    <div class="konj-ex">De har ferie, <strong>så</strong> de kan sove længe.</div>
                </div>
            </div>
        `
    },
    {
        title: "Konjunktioners betydning — Ledsætningskonjunktioner (1)",
        content: `
            <h3>Ledsætningskonjunktioner (S + A + V1)</h3>
            <p class="muted">Indleder ledsætninger. Typisk ordstilling i ledsætningen: <strong>S + A + V1</strong>.</p>

            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">at</span>
                        <span class="konj-meaning"
                            >objektsætning <span class="sep">/</span> <span class="en">that (object clause)</span></span
                        >
                    </div>
                    <div class="konj-ex">De siger, <strong>at</strong> de ikke kan komme.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">om</span>
                        <span class="konj-meaning"
                            >spørgende ledsætning <span class="sep">/</span> <span class="en">if/whether (indirect Q)</span></span
                        >
                    </div>
                    <div class="konj-ex">Han spørger, <strong>om</strong> de gerne vil komme.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">fordi / eftersom</span>
                        <span class="konj-meaning"
                            >forklaring <span class="sep">/</span> <span class="en">because, since</span></span
                        >
                    </div>
                    <div class="konj-ex">Hun blev sur, <strong>fordi</strong> jeg ikke kom.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">selvom</span>
                        <span class="konj-meaning"
                            >modsætning <span class="sep">/</span> <span class="en">although, even though</span></span
                        >
                    </div>
                    <div class="konj-ex">Jeg kommer, <strong>selvom</strong> jeg ikke er rask.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">da</span>
                        <span class="konj-meaning"
                            >tid (fortid) / forklaring <span class="sep">/</span> <span class="en">when (past) / since</span></span
                        >
                    </div>
                    <div class="konj-ex">Jeg besøgte ham, <strong>da</strong> jeg var i USA.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">når</span>
                        <span class="konj-meaning"
                            >tid (hver gang) <span class="sep">/</span> <span class="en">when/whenever (habit/future)</span></span
                        >
                    </div>
                    <div class="konj-ex">Jeg besøger ham, <strong>når</strong> jeg tager til USA.</div>
                </div>
            </div>
        `
    },
    {
        title: "Konjunktioners betydning — Ledsætningskonjunktioner (2) & hv-ord",
        content: `
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">idet</span>
                        <span class="konj-meaning"
                            >tid (lige da) <span class="sep">/</span> <span class="en">as/just as</span></span
                        >
                    </div>
                    <div class="konj-ex">Telefonen ringede, <strong>idet</strong> jeg kom ind i stuen.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">mens</span>
                        <span class="konj-meaning">tid (samtidig) <span class="sep">/</span> <span class="en">while</span></span>
                    </div>
                    <div class="konj-ex">Telefonen ringede, <strong>mens</strong> jeg var i haven.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">før / inden</span>
                        <span class="konj-meaning">tid (før noget) <span class="sep">/</span> <span class="en">before</span></span>
                    </div>
                    <div class="konj-ex">Min mormor døde, <strong>før</strong> jeg blev født.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">indtil</span>
                        <span class="konj-meaning">tid (periode) <span class="sep">/</span> <span class="en">until</span></span>
                    </div>
                    <div class="konj-ex">Han skal blive hjemme, <strong>indtil</strong> han er rask.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">siden</span>
                        <span class="konj-meaning">tid (frem til nu) <span class="sep">/</span> <span class="en">since</span></span>
                    </div>
                    <div class="konj-ex">Jeg har ikke set ham, <strong>siden</strong> vi gik i skole.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">dengang</span>
                        <span class="konj-meaning"
                            >tid (for længe siden) <span class="sep">/</span> <span class="en">back when</span></span
                        >
                    </div>
                    <div class="konj-ex">Jeg besøgte ham, <strong>dengang</strong> jeg var i USA.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">så</span>
                        <span class="konj-meaning"
                            >hensigt <span class="sep">/</span> <span class="en">so that, in order that</span></span
                        >
                    </div>
                    <div class="konj-ex">De skal huske regntøj, <strong>så</strong> de ikke bliver våde.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">der / som</span>
                        <span class="konj-meaning"
                            >relativ (subjekt/objekt) <span class="sep">/</span> <span class="en">who/that/which</span></span
                        >
                    </div>
                    <div class="konj-ex">Hun har en ven, <strong>der</strong> arbejder i Tivoli.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">hvis</span>
                        <span class="konj-meaning">betingelse <span class="sep">/</span> <span class="en">if</span></span>
                    </div>
                    <div class="konj-ex">Vi tager på stranden, <strong>hvis</strong> solen skinner.</div>
                </div>
            </div>

            <h4>Hv-ord, der indleder ledsætninger</h4>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">hvem</span
                        ><span class="konj-meaning">person <span class="sep">/</span> <span class="en">who(m)</span></span>
                    </div>
                    <div class="konj-ex">Jeg ved ikke, <strong>hvem</strong> min nye lærer er.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">hvor</span
                        ><span class="konj-meaning">sted <span class="sep">/</span> <span class="en">where</span></span>
                    </div>
                    <div class="konj-ex">Han ved godt, <strong>hvor</strong> han skal rejse hen.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">hvornår</span
                        ><span class="konj-meaning">tid <span class="sep">/</span> <span class="en">when</span></span>
                    </div>
                    <div class="konj-ex">Det er ikke besluttet, <strong>hvornår</strong> deres ferie starter.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">hvorfor</span
                        ><span class="konj-meaning">årsag <span class="sep">/</span> <span class="en">why</span></span>
                    </div>
                    <div class="konj-ex">Tom spørger, <strong>hvorfor</strong> de ikke kommer.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">hvad</span
                        ><span class="konj-meaning">genstand <span class="sep">/</span> <span class="en">what</span></span>
                    </div>
                    <div class="konj-ex">Hun fortæller, <strong>hvad</strong> hun har købt.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">hvordan</span
                        ><span class="konj-meaning">måde <span class="sep">/</span> <span class="en">how</span></span>
                    </div>
                    <div class="konj-ex">Vi må finde ud af, <strong>hvordan</strong> vi kommer hjem.</div>
                </div>
            </div>
        `
    },

    /* =========================================
    Forbinderords betydning — Page 1 (Tid + Rækkefølge)
    ========================================= */
    {
        title: "Forbinderords betydning — Tid & Rækkefølge",
        content: `
            <h3>Tid (husk: adverbial først → inversion V1 + S)</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">først / bagefter / derefter</span>
                        <span class="konj-meaning"
                            >tidsrækkefølge <span class="sep">/</span> <span class="en">first / afterwards / then</span></span
                        >
                    </div>
                    <ul class="konj-list">
                        <li><strong>først</strong> <span class="en">first</span></li>
                        <li><strong>bagefter</strong> <span class="en">afterwards</span></li>
                        <li><strong>derefter / derpå / dernæst</strong> <span class="en">then / next</span></li>
                    </ul>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">senere / til sidst</span>
                        <span class="konj-meaning"
                            >tidsplacering <span class="sep">/</span> <span class="en">later / finally</span></span
                        >
                    </div>
                    <ul class="konj-list">
                        <li><strong>senere / kort efter</strong> <span class="en">later / shortly after</span></li>
                        <li><strong>til sidst</strong> <span class="en">in the end / finally</span></li>
                    </ul>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">før / tidligere / nu / i dag</span>
                        <span class="konj-meaning"
                            >tidspunkt <span class="sep">/</span> <span class="en">before / earlier / now / today</span></span
                        >
                    </div>
                    <ul class="konj-list">
                        <li><strong>før</strong> <span class="en">before</span></li>
                        <li><strong>tidligere</strong> <span class="en">earlier</span></li>
                        <li><strong>nu / i dag</strong> <span class="en">now / today</span></li>
                    </ul>
                </div>
            </div>

            <h3>Rækkefølge</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">for det første / for det andet / endelig</span>
                        <span class="konj-meaning"
                            >opremsning <span class="sep">/</span> <span class="en">firstly / secondly / finally</span></span
                        >
                    </div>
                    <ul class="konj-list">
                        <li><strong>for det første</strong> <span class="en">firstly</span></li>
                        <li><strong>for det andet</strong> <span class="en">secondly</span></li>
                        <li><strong>endelig</strong> <span class="en">finally</span></li>
                    </ul>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">dels … dels</span>
                        <span class="konj-meaning">deling <span class="sep">/</span> <span class="en">partly … partly</span></span>
                    </div>
                    <div class="konj-ex">
                        Vi rejser <strong>dels</strong> for at slappe af, <strong>dels</strong> for at besøge familien.
                    </div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">først og fremmest</span>
                        <span class="konj-meaning"
                            >det vigtigste <span class="sep">/</span> <span class="en">first and foremost</span></span
                        >
                    </div>
                    <div class="konj-ex"><strong>Først og fremmest</strong> vil vi sikre kvalitet.</div>
                </div>
            </div>
        `
    },

    /* =========================================
    Forbinderords betydning — Page 2 (Tilføjelse / Forklaring / Konsekvens)
    ========================================= */
    {
        title: "Forbinderords betydning — Tilføjelse, Forklaring & Konsekvens",
        content: `
            <h3>Tilføjelse / Ny information</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">også / heller ikke</span>
                        <span class="konj-meaning"
                            >tilføjelse / negation <span class="sep">/</span> <span class="en">also / neither</span></span
                        >
                    </div>
                    <div class="konj-ex">Hun kommer <strong>også</strong>. Han kommer <strong>heller ikke</strong>.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">desuden / derudover / endvidere</span>
                        <span class="konj-meaning"
                            >mere info <span class="sep">/</span> <span class="en">in addition / moreover / furthermore</span></span
                        >
                    </div>
                    <ul class="konj-list">
                        <li><strong>desuden</strong> <span class="en">in addition</span></li>
                        <li><strong>derudover</strong> <span class="en">moreover</span></li>
                        <li><strong>endvidere / ydermere</strong> <span class="en">furthermore</span></li>
                    </ul>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">ligeledes / samtidig</span>
                        <span class="konj-meaning"
                            >på samme måde / supplement <span class="sep">/</span>
                            <span class="en">likewise / at the same time</span></span
                        >
                    </div>
                    <div class="konj-ex">Vi støtter projektet og arbejder <strong>ligeledes</strong> med uddannelse.</div>
                </div>
            </div>

            <h3>Forklaring</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">fordi / da / eftersom / idet</span>
                        <span class="konj-meaning"
                            >årsag / præcisering af årsag <span class="sep">/</span>
                            <span class="en">because / since / as</span></span
                        >
                    </div>
                    <ul class="konj-list">
                        <li><strong>fordi</strong> <span class="en">because</span></li>
                        <li><strong>da / eftersom</strong> <span class="en">since (cause)</span></li>
                        <li><strong>idet</strong> <span class="en">as / in that</span></li>
                    </ul>
                    <div class="konj-ex">Vi blev hjemme, <strong>fordi</strong> det regnede.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">for</span>
                        <span class="konj-meaning"
                            >forklaring (HS) <span class="sep">/</span> <span class="en">for/because</span></span
                        >
                    </div>
                    <div class="konj-ex">Vi tager en pause, <strong>for</strong> vi er trætte.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">nemlig</span>
                        <span class="konj-meaning"
                            >præcisering <span class="sep">/</span> <span class="en">namely / you see</span></span
                        >
                    </div>
                    <div class="konj-ex">Han kommer senere, <strong>nemlig</strong> efter mødet.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">pga. (på grund af)</span>
                        <span class="konj-meaning"
                            >årsag <span class="sep">/</span> <span class="en">because of / due to</span></span
                        >
                    </div>
                    <div class="konj-ex">Mødet aflyses <strong>pga.</strong> sygdom.</div>
                </div>
            </div>

            <h3>Konsekvens <span class="muted">(adverbium først → VSA)</span></h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">så</span>
                        <span class="konj-meaning"
                            >konsekvens <span class="sep">/</span> <span class="en">so / therefore</span></span
                        >
                    </div>
                    <div class="konj-ex">Det regnede, <strong>så</strong> vi blev hjemme.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">derfor / dermed / således / følgelig / af den grund</span>
                        <span class="konj-meaning"
                            >afledt resultat <span class="sep">/</span>
                            <span class="en">therefore / thereby / thus / consequently / for that reason</span></span
                        >
                    </div>
                    <ul class="konj-list">
                        <li><strong>derfor</strong> <span class="en">therefore</span></li>
                        <li><strong>dermed</strong> <span class="en">thereby</span></li>
                        <li><strong>således</strong> <span class="en">thus</span></li>
                        <li><strong>følgelig</strong> <span class="en">consequently</span></li>
                        <li><strong>af den grund</strong> <span class="en">for that reason</span></li>
                    </ul>
                    <div class="konj-ex"><strong>Derfor</strong> blev mødet flyttet til i morgen.</div>
                </div>
            </div>
        `
    },

    /* =========================================
    Forbinderords betydning — Page 3 (Sammenligning & Modsætning)
    ========================================= */
    {
        title: "Forbinderords betydning — Sammenligning & Modsætning",
        content: `
            <h3>Sammenligning</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">også / både … og / begge</span>
                        <span class="konj-meaning"
                            >positiv lighed <span class="sep">/</span> <span class="en">also / both … and / both</span></span
                        >
                    </div>
                    <div class="konj-ex">Hun taler <strong>både</strong> dansk <strong>og</strong> engelsk.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">heller ikke / hverken … eller</span>
                        <span class="konj-meaning"
                            >negativ lighed <span class="sep">/</span> <span class="en">neither / neither … nor</span></span
                        >
                    </div>
                    <div class="konj-ex">Vi vil <strong>hverken</strong> have te <strong>eller</strong> kaffe.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">ligesom</span>
                        <span class="konj-meaning"
                            >sammenligning <span class="sep">/</span> <span class="en">just like / similarly</span></span
                        >
                    </div>
                    <div class="konj-ex">Priserne stiger, <strong>ligesom</strong> de gjorde sidste år.</div>
                </div>
            </div>

            <h3>Modsætning / Kontrast</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">men / dog / imidlertid</span>
                        <span class="konj-meaning"
                            >kontrast <span class="sep">/</span> <span class="en">but / however / nevertheless</span></span
                        >
                    </div>
                    <div class="konj-ex">Vejret var dårligt, <strong>men</strong> vi tog af sted.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">på den ene side … på den anden side</span>
                        <span class="konj-meaning"
                            >to sider <span class="sep">/</span> <span class="en">on the one hand … on the other hand</span></span
                        >
                    </div>
                    <div class="konj-ex">
                        <strong>På den ene side</strong> er det dyrt, <strong>på den anden side</strong> er det hurtigt.
                    </div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">selvom</span>
                        <span class="konj-meaning"
                            >uventet / modsigelse <span class="sep">/</span> <span class="en">although / even though</span></span
                        >
                    </div>
                    <div class="konj-ex">Han kom, <strong>selvom</strong> han var syg.</div>
                </div>

                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">derimod / til gengæld</span>
                        <span class="konj-meaning"
                            >stærk kontrast / kompensation <span class="sep">/</span>
                            <span class="en">on the contrary / in return</span></span
                        >
                    </div>
                    <div class="konj-ex">Han kan ikke synge; <strong>derimod</strong> spiller han godt klaver.</div>
                </div>
            </div>
        `
    },

    /* =========================================
    Forbinderords betydning — Page 4 (Eksempel, Uddybning, Holdning, Opsummering)
    ========================================= */
    {
        title: "Forbinderords betydning — Eksempel, Uddybning, Holdning, Opsummering",
        content: `
            <h3>Eksempel</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">fx / for eksempel / eksempelvis</span>
                        <span class="konj-meaning"
                            >eksemplificering <span class="sep">/</span> <span class="en">for example / for instance</span></span
                        >
                    </div>
                    <div class="konj-ex">Vi arbejder med sprog, <strong>fx</strong> dansk og engelsk.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">bl.a.</span>
                        <span class="konj-meaning"
                            >blandt andet <span class="sep">/</span> <span class="en">among other things</span></span
                        >
                    </div>
                    <div class="konj-ex">Vi tilbyder kurser i IT, <strong>bl.a.</strong> Python.</div>
                </div>
            </div>

            <h3>Uddybning / Præcisering</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">dvs. / det vil sige</span>
                        <span class="konj-meaning"
                            >forklaring <span class="sep">/</span> <span class="en">i.e. / that is</span></span
                        >
                    </div>
                    <div class="konj-ex">Han er jurist, <strong>dvs.</strong> han har en kandidat i jura.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">altså / faktisk</span>
                        <span class="konj-meaning"
                            >opsummering / modsat forventet <span class="sep">/</span> <span class="en">so / actually</span></span
                        >
                    </div>
                    <div class="konj-ex"><strong>Altså</strong>, vi mødes kl. 9. Han kom <strong>faktisk</strong> for tidligt.</div>
                </div>
            </div>

            <h3>Holdning</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">selvfølgelig / naturligvis</span>
                        <span class="konj-meaning"
                            >positiv vurdering <span class="sep">/</span> <span class="en">of course / naturally</span></span
                        >
                    </div>
                    <div class="konj-ex"><strong>Selvfølgelig</strong> hjælper vi.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">(u)heldigvis / desværre</span>
                        <span class="konj-meaning"
                            >vurdering <span class="sep">/</span> <span class="en">fortunately / unfortunately</span></span
                        >
                    </div>
                    <div class="konj-ex"><strong>Desværre</strong> kan jeg ikke i morgen.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">forhåbentlig / sandsynligvis</span>
                        <span class="konj-meaning"
                            >forventning <span class="sep">/</span> <span class="en">hopefully / probably</span></span
                        >
                    </div>
                    <div class="konj-ex">Vi får <strong>forhåbentlig</strong> godt vejr.</div>
                </div>
            </div>

            <h3>Opsummering / Konklusion</h3>
            <div class="konj-grid">
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">alt i alt / kort sagt</span>
                        <span class="konj-meaning"
                            >opsummering <span class="sep">/</span> <span class="en">all in all / in short</span></span
                        >
                    </div>
                    <div class="konj-ex"><strong>Kort sagt</strong>: planen virker.</div>
                </div>
                <div class="konj-card">
                    <div class="konj-head">
                        <span class="konj-chip">afslutningsvis / til sidst</span>
                        <span class="konj-meaning"
                            >afslutning <span class="sep">/</span> <span class="en">in conclusion / finally</span></span
                        >
                    </div>
                    <div class="konj-ex"><strong>Til sidst</strong> vil jeg sige tak.</div>
                </div>
            </div>

            <p class="muted">OBS: Listen er ikke komplet, og mange udtryk kan passe i flere kategorier.</p>
        `
    },

    // Final page: writing checklist.
    {
        title: "Tjekliste for skriveopgaver",
        content: `
            <h3>Indhold <span class="sep">/</span> <span class="en">Content</span></h3>
            <div class="checklist">
                <div class="check-item">
                    <div class="txt">
                        <strong>Overskrift</strong> — passende og præcis <span class="en">(clear, relevant title)</span><br />
                        <span class="muted">Titlen afspejler emnet og opgavens fokus.</span>
                    </div>
                </div>

                <div class="check-item">
                    <div class="txt">
                        <strong>Indledning</strong> — klar start <span class="en">(clear introduction)</span><br />
                        <span class="muted">Præsenter emnet og formålet kort.</span>
                    </div>
                </div>

                <div class="check-item">
                    <div class="txt">
                        <strong>Alle punkter</strong> — besvaret <span class="en">(all task points covered)</span><br />
                        <span class="muted">Sørg for, at hvert krav/spørgsmål i opgaven er med.</span>
                    </div>
                </div>

                <div class="check-item">
                    <div class="txt">
                        <strong>Fokus</strong> — hold dig til emnet <span class="en">(stay on topic)</span><br />
                        <span class="muted">Kun oplysninger, der støtter hovedpointen.</span>
                    </div>
                </div>

                <div class="check-item">
                    <div class="txt">
                        <strong>Afsnit</strong> — tydelig struktur <span class="en">(clear paragraphs)</span><br />
                        <span class="muted">Ét hovedpunkt pr. afsnit med logisk opbygning.</span>
                    </div>
                </div>

                <div class="check-item">
                    <div class="txt">
                        <strong>“Rød tråd”</strong> — god sammenhæng <span class="en">(cohesion)</span><br />
                        <span class="muted">Brug forbindere (fx desuden, men, derfor) for flydende tekst.</span>
                    </div>
                </div>

                <div class="check-item">
                    <div class="txt">
                        <strong>Slutning</strong> — klar afrunding <span class="en">(clear ending)</span><br />
                        <span class="muted">Opsummer hovedpointe og rund teksten af.</span>
                    </div>
                </div>
            </div>

            <h3>Form — tjek én ting ad gangen <span class="sep">/</span> <span class="en">Form — one item at a time</span></h3>

            <!-- Verbs -->
            <div class="konj-card">
                <div class="konj-head">
                    <span class="konj-chip">1. Verber</span>
                    <span class="konj-meaning"
                        >tid &amp; endelser <span class="sep">/</span> <span class="en">tense &amp; endings</span></span
                    >
                </div>
                <div class="subtle">Hold tiden konsekvent i et afsnit.</div>
                <ul class="konj-list">
                    <li><strong>nutid</strong> = +<em>(e)r</em> <span class="en">present: +r</span></li>
                    <li>
                        <strong>datid</strong> = grp.1 <em>+ede</em>, grp.2 <em>+te</em>, grp.3 <em>uregelmæssig</em>
                        <span class="en">past: -ede/-te/irreg.</span>
                    </li>
                    <li><strong>førnutid</strong> = <em>har</em> + <em>(e)t</em> <span class="en">present perfect</span></li>
                    <li><strong>førdatid</strong> = <em>havde</em> + <em>(e)t</em> <span class="en">past perfect</span></li>
                    <li>
                        <strong>modalverber</strong>: V1 + <em>infinitiv</em> (V2) uden “at”
                        <span class="en">modals + bare infinitive</span>
                    </li>
                </ul>
                <div class="pills">
                    <span class="pill">nutid: arbejder</span>
                    <span class="pill">datid: arbejdede</span>
                    <span class="pill">førnutid: har arbejdet</span>
                </div>
            </div>

            <!-- Nouns -->
            <div class="konj-card">
                <div class="konj-head">
                    <span class="konj-chip">2. Substantiver</span>
                    <span class="konj-meaning">former <span class="sep">/</span> <span class="en">noun forms</span></span>
                </div>
                <ul class="konj-list">
                    <li><strong>ubestemt</strong> = <em>en/et</em> <span class="en">indefinite</span></li>
                    <li><strong>bestemt</strong> = <em>+en / +et</em> <span class="en">definite suffix</span></li>
                    <li>
                        <strong>flertal</strong> = <em>+(e)r / +e</em> / ureg. <span class="en">plural endings / irregular</span>
                    </li>
                </ul>
                <div class="konj-ex">
                    <strong>en</strong> bog, <strong>et</strong> hus <span class="en">(a book, a house)</span><br />
                    bog<strong>en</strong>, hus<strong>et</strong> <span class="en">(the book, the house)</span><br />
                    bil → bil<strong>er</strong>; barn → b<strong>ørn</strong> (ureg.)
                    <span class="en">(car → cars; child → children)</span>
                </div>
            </div>

            <!-- Adjectives -->
            <div class="konj-card">
                <div class="konj-head">
                    <span class="konj-chip">3. Adjektiver</span>
                    <span class="konj-meaning"
                        >vælg korrekt form <span class="sep">/</span> <span class="en">pick the right ending</span></span
                    >
                </div>
                <div class="subtle">Tjek substantivet/pronomenet, som adjektivet beskriver.</div>
                <ul class="konj-list">
                    <li><strong>grundform</strong> — ved <em>n-ord</em> <span class="en">base for common gender</span></li>
                    <li><strong>t-form</strong> — ved <em>t-ord</em> <span class="en">-t for neuter</span></li>
                    <li>
                        <strong>e-form</strong> — ved <em>flertal</em>, efter <em>bestemt form</em> / <em>possessive</em> /
                        <em>genitiv</em>
                        <span class="en">-e in plural/definite/possessive/genitive</span>
                    </li>
                </ul>
                <div class="pills">
                    <span class="pill">en stor bil</span>
                    <span class="pill">et stort hus</span>
                    <span class="pill">de store huse</span>
                </div>
            </div>

            <!-- Pronouns -->
            <div class="konj-card">
                <div class="konj-head">
                    <span class="konj-chip">4. Pronominer</span>
                    <span class="konj-meaning">
                        sin / sit / sine vs. hans / hendes / deres
                        <span class="sep">/</span> <span class="en">reflexive vs. non-reflexive</span>
                    </span>
                </div>
                <div class="konj-ex">
                    <strong>sin/sit/sine</strong> = refererer til <em>subjektets egen</em> ting.
                    <span class="en">(subject’s own)</span><br />
                    <em>Maria glemte <strong>sin</strong> taske.</em> <span class="en">(her own bag)</span><br />
                    <em>Peter elsker <strong>sin</strong> mor.</em> <span class="en">(his own mother)</span><br /><br />
                    <strong>hans/hendes/deres</strong> = <em>en andens</em> ting. <span class="en">(someone else’s)</span><br />
                    <em>Maria glemte <strong>hendes</strong> taske.</em> <span class="en">(another woman’s bag)</span><br />
                    <em>Peter elsker <strong>hans</strong> mor.</em> <span class="en">(another man’s mother)</span><br /><br />
                    Plural: <em>De tog <strong>deres</strong> børn med.</em> <span class="en">(their children)</span>.
                </div>
            </div>

            <!-- Word order -->
            ${skriveguideGrammarLegend}
            <div class="konj-card">
                <div class="konj-head">
                    <span class="konj-chip">5. Ordstilling</span>
                    <span class="konj-meaning">mønstre <span class="sep">/</span> <span class="en">patterns</span></span>
                </div>
                <ul class="konj-list">
                    <li>
                        <span class="subject">S</span> + <span class="verb-v1">V1</span> + <span class="adverb">A</span> —
                        <strong>hovedsætning</strong> <span class="en">main clause</span>
                    </li>
                    <li>
                        <span class="verb-v1">V1</span> + <span class="subject">S</span> — efter
                        <strong>adverbial/ledsætning</strong> <span class="en">inversion in main clause</span>
                    </li>
                    <li>
                        <span class="subject">S</span> + <span class="adverb">A</span> + <span class="verb-v1">V1</span> —
                        <strong>ledsætning</strong> <span class="en">subordinate clause</span>
                    </li>
                </ul>
                <div class="subtle">
                    Tip: starter du med et adverbium (<em>Derfor, I går</em>) → brug inversion <strong>V1 + S</strong>.
                </div>
            </div>

            <p class="muted">OBS: Ved præpositioner — tjek ordbogen. <span class="en">(Look up prepositions.)</span></p>
        `
    }
];
