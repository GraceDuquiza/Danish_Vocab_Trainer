// skriveguide.js — “book” pages with clear S/V/A highlights

const skriveguide = [
    {
        title: "Konjunktioner",
        content: `
        <h3>Hvad er konjunktioner?</h3>
        <p>Konjunktioner binder sætninger sammen – enten to <strong>hovedsætninger</strong> eller en <strong>hovedsætning</strong> 
        og en <strong>ledsætning</strong>.</p>

        <p><strong>Hovedsætning (HS):</strong> kan stå alene, fx. <br/>
        <span class="ex">
            <span class="role-s">S: Vi</span>
            <span class="role-v">V: spiser</span>.
            <span class="role-h">hovedsætning: For vi er sultne. </span></p>
        </span>
        </p>

        <p><strong>Ledsætning (LS):</strong> kan ikke stå alene – den skal stå sammen med en hovedsætning.Ledsætningen kan både stå før og efter hovedsætningen, fx<br/>
        <span class="ex">
            <p></p><span class="role-h">hovedsætning: Vi spiser, </span>
            <span class="role-l">ledsætning: når du kommer. </span> eller
            <span class="role-l">ledsætning: Når du kommer, </span>
            <span class="role-h">hovedsætning: vi spiser. </span></p>
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

        <p><strong>Regel:</strong> Efter en HS-konjunktion bruger vi <strong>SVA</strong>-ordstilling.</p>

        <div class="rule-block">
            <div class="rule-title">SVA (Hovedsætning)</div>
            <div class="ex">
            For
            <span class="role-s">S: lønnen</span>
            <span class="role-v">V: er</span>
            <span class="role-a">A: også lav</span>.
            </div>
            <div class="ex">
            Men
            <span class="role-s">S: lønnen</span>
            <span class="role-v">V: er</span>
            <span class="role-a">A: ikke god</span>.
            </div>
        </div>
        `
    },

    {
        title: "Ledsætningskonjunktioner (LS-konj.)",
        content: `
        <h3>Almindelige LS-konjunktioner</h3>
        <div class="grid-2">
            <ul class="tight">
            <li>at, om, fordi, eftersom, selvom</li>
            <li>da, når, idet, mens, hvorimod</li>
            <li>før, inden, indtil, siden, dengang</li>
            <li>så, der, som, end, ligesom</li>
            </ul>
            <div>
            <p><strong>Hv-ord:</strong> hvem, hvor, hvornår, hvorfor, hvad, hvordan osv.</p>
            </div>
        </div>

        <p><strong>Regel:</strong> I ledsætninger bruger vi <strong>SAV</strong> – <em>verbet står sidst i sætningskernen</em>.</p>

        <div class="rule-block">
            <div class="rule-title">SAV (Ledsætning)</div>
            <div class="ex">
            <p><span class="role-h">hovedsætning:Han søger nyt arbejde,</span> <strong>fordi</strong>
            <span class="role-s">S: lønnen</span>
            <span class="role-a">A: også</span>
            <span class="role-v">V: er</span> lav.</p>
            </div>

            <div class="ex">
            <p><strong>Hvis</strong>
            <span class="role-s">S: lønnen</span>
            <span class="role-a">A: ikke</span>
            <span class="role-v">V: stiger</span>,
            <span class="role-h">hovedsætning: vil han søge nyt arbejde.</span></p>
            </div>
        </div>
        `
    },

    {
        title: "Adverbial først → inversion (VSA)",
        content: `
        <h3>Adverbium først giver inversion</h3>
        <p>Når sætningen begynder med et adverbial (fx <em>derfor, desuden, i dag, måske</em>), får vi <strong>VSA</strong>-ordstilling.</p>

        <div class="rule-block">
            <div class="rule-title">VSA (inversion)</div>
            <div class="ex">
            <p><span class="role-a">A: Derfor</span>
            <span class="role-v">V: er</span>
            <span class="role-s">S: lønnen</span>
            <span class="role-a">A: også</span> lav.</p>
            </div>

            <div class="ex">
            <p><span class="role-a">A: Desuden</span>
            <span class="role-v">V: er</span>
            <span class="role-s">S: lønnen</span>
            <span class="role-a">A: ikke </span>god.</p>
            </div>
        </div>

        <p class="muted"><strong>OBS:</strong> Adverbier som <em>også / ikke / heller ikke / nemlig / altid / aldrig</em> står normalt <em>efter</em> verbet i hovedsætninger.</p>
        `
    },

    {
        title: "Hurtig oversigt",
        content: `
        <div class="grid-2">
            <div class="rule-block">
            <div class="rule-title">HS-konjunktion → SVA</div>
            <div class="ex">
                For
                <span class="role-s">S</span>
                <span class="role-v">V</span>
                <span class="role-a">A</span>
            </div>
            </div>

            <div class="rule-block">
            <div class="rule-title">LS-konjunktion → SAV</div>
            <div class="ex">
                fordi
                <span class="role-s">S</span>
                <span class="role-a">A</span>
                <span class="role-v">V</span>
            </div>
            </div>

            <div class="rule-block">
            <div class="rule-title">Adverbium først → VSA</div>
            <div class="ex">
                Derfor
                <span class="role-v">V</span>
                <span class="role-s">S</span>
                <span class="role-a">A</span>
            </div>
            </div>

            <div class="rule-block">
            <div class="rule-title">Eksempel (LS + HS)</div>
            <div class="ex">
                <span class="role-l">ledsætning: <em>Når</em> du kommer, </span>
                <span class="role-h">hovedsætning: spiser vi. </span>
                
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
        <h3>Hovedsætningskonjunktioner (SVA)</h3>
        <p class="muted">Forbinder to hovedsætninger. Ordstilling efter konjunktionen: <strong>SVA</strong>.</p>

        <div class="konj-grid">
        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">og</span>
            <span class="konj-meaning">tilføjelse <span class="sep">/</span> <span class="en">addition, and</span></span>
            </div>
            <div class="konj-ex">Hun købte en is, <strong>og</strong> han købte en cola.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">men</span>
            <span class="konj-meaning">modsætning <span class="sep">/</span> <span class="en">contrast, but</span></span>
            </div>
            <div class="konj-ex">Jeg har lige spist, <strong>men</strong> jeg er stadig sulten.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">eller</span>
            <span class="konj-meaning">alternativ <span class="sep">/</span> <span class="en">alternative, or</span></span>
            </div>
            <div class="konj-ex">Vi kan holde pause nu, <strong>eller</strong> vi kan vente.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">for</span>
            <span class="konj-meaning">forklaring <span class="sep">/</span> <span class="en">explanation, for/because</span></span>
            </div>
            <div class="konj-ex">Hun aflyste mødet, <strong>for</strong> hun var syg.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">så</span>
            <span class="konj-meaning">konsekvens <span class="sep">/</span> <span class="en">consequence, so/therefore</span></span>
            </div>
            <div class="konj-ex">De har ferie, <strong>så</strong> de kan sove længe.</div>
        </div>
        </div>
    `
    },
    {
    title: "Konjunktioners betydning — Ledsætningskonjunktioner (1)",
    content: `
        <h3>Ledsætningskonjunktioner (SAV)</h3>
        <p class="muted">Indleder ledsætninger. Typisk ordstilling i ledsætningen: <strong>SAV</strong>.</p>

        <div class="konj-grid">
        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">at</span>
            <span class="konj-meaning">objektsætning <span class="sep">/</span> <span class="en">that (object clause)</span></span>
            </div>
            <div class="konj-ex">De siger, <strong>at</strong> de ikke kan komme.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">om</span>
            <span class="konj-meaning">spørgende ledsætning <span class="sep">/</span> <span class="en">if/whether (indirect Q)</span></span>
            </div>
            <div class="konj-ex">Han spørger, <strong>om</strong> de gerne vil komme.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">fordi / eftersom</span>
            <span class="konj-meaning">forklaring <span class="sep">/</span> <span class="en">because, since</span></span>
            </div>
            <div class="konj-ex">Hun blev sur, <strong>fordi</strong> jeg ikke kom.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">selvom</span>
            <span class="konj-meaning">modsætning <span class="sep">/</span> <span class="en">although, even though</span></span>
            </div>
            <div class="konj-ex">Jeg kommer, <strong>selvom</strong> jeg ikke er rask.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">da</span>
            <span class="konj-meaning">tid (fortid) / forklaring <span class="sep">/</span> <span class="en">when (past) / since</span></span>
            </div>
            <div class="konj-ex">Jeg besøgte ham, <strong>da</strong> jeg var i USA.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">når</span>
            <span class="konj-meaning">tid (hver gang) <span class="sep">/</span> <span class="en">when/whenever (habit/future)</span></span>
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
            <span class="konj-meaning">tid (lige da) <span class="sep">/</span> <span class="en">as/just as</span></span>
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
            <span class="konj-meaning">tid (for længe siden) <span class="sep">/</span> <span class="en">back when</span></span>
            </div>
            <div class="konj-ex">Jeg besøgte ham, <strong>dengang</strong> jeg var i USA.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">så</span>
            <span class="konj-meaning">hensigt <span class="sep">/</span> <span class="en">so that, in order that</span></span>
            </div>
            <div class="konj-ex">De skal huske regntøj, <strong>så</strong> de ikke bliver våde.</div>
        </div>

        <div class="konj-card">
            <div class="konj-head">
            <span class="konj-chip">der / som</span>
            <span class="konj-meaning">relativ (subjekt/objekt) <span class="sep">/</span> <span class="en">who/that/which</span></span>
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

        <h4>Hv-ord som konjunktioner</h4>
        <div class="konj-grid">
        <div class="konj-card"><div class="konj-head"><span class="konj-chip">hvem</span><span class="konj-meaning">person <span class="sep">/</span> <span class="en">who(m)</span></span></div><div class="konj-ex">Jeg ved ikke, <strong>hvem</strong> min nye lærer er.</div></div>
        <div class="konj-card"><div class="konj-head"><span class="konj-chip">hvor</span><span class="konj-meaning">sted <span class="sep">/</span> <span class="en">where</span></span></div><div class="konj-ex">Han ved godt, <strong>hvor</strong> han skal rejse hen.</div></div>
        <div class="konj-card"><div class="konj-head"><span class="konj-chip">hvornår</span><span class="konj-meaning">tid <span class="sep">/</span> <span class="en">when</span></span></div><div class="konj-ex">Det er ikke besluttet, <strong>hvornår</strong> deres ferie starter.</div></div>
        <div class="konj-card"><div class="konj-head"><span class="konj-chip">hvorfor</span><span class="konj-meaning">årsag <span class="sep">/</span> <span class="en">why</span></span></div><div class="konj-ex">Tom spørger, <strong>hvorfor</strong> de ikke kommer.</div></div>
        <div class="konj-card"><div class="konj-head"><span class="konj-chip">hvad</span><span class="konj-meaning">genstand <span class="sep">/</span> <span class="en">what</span></span></div><div class="konj-ex">Hun fortæller, <strong>hvad</strong> hun har købt.</div></div>
        <div class="konj-card"><div class="konj-head"><span class="konj-chip">hvordan</span><span class="konj-meaning">måde <span class="sep">/</span> <span class="en">how</span></span></div><div class="konj-ex">Vi må finde ud af, <strong>hvordan</strong> vi kommer hjem.</div></div>
        </div>
    `
    },


];
