// Grammatik_Konjunktion.js
// Bilingual conjunction lessons adapted from Konjunktion.docx.

const konjunktionGrammarPages = [
    {
        id: "konjunktion-1",
        titleDa: "Hvad er en konjunktion?",
        titleEn: "What is a conjunction?",
        content: `
<p lang="da">En konjunktion kaldes også et bindeord. Den forbinder ord, sætningsled eller hele sætninger. Konjunktioner bøjes ikke.</p>
<p class="grammar-english" lang="en"><em>A conjunction is a linking word. It connects words, sentence elements, or entire clauses. Conjunctions do not inflect.</em></p>
<table class="grammar-example-table">
<thead><tr><th><span class="grammar-paired-label"><strong lang="da">Hvad forbindes?</strong><em class="grammar-english" lang="en">What is connected?</em></span></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead>
<tbody>
<tr><td>Substantiver</td><td>kaffe <strong>eller</strong> te</td><td class="grammar-english" lang="en"><em>coffee or tea</em></td></tr>
<tr><td>Adjektiver</td><td>gammel <strong>og</strong> træt</td><td class="grammar-english" lang="en"><em>old and tired</em></td></tr>
<tr><td>Verber</td><td>De sidder <strong>og</strong> snakker.</td><td class="grammar-english" lang="en"><em>They sit and talk.</em></td></tr>
<tr><td>Hovedsætninger</td><td>Hun arbejder, <strong>og</strong> han studerer.</td><td class="grammar-english" lang="en"><em>She works, and he studies.</em></td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Hurtig test:</strong> Binder ordet to ting eller to sætninger sammen? Hvis ja, kan det være en konjunktion.</p><p class="grammar-english" lang="en"><em>Does the word connect two items or two clauses? If yes, it may be a conjunction.</em></p></aside>

        `
    },
    {
        id: "konjunktion-2",
        titleDa: "Hovedsætning, ledsætning og helsætning",
        titleEn: "Main clause, subordinate clause, and complete sentence",
        content: `
<h3>Hovedsætning / Main clause</h3>
<p lang="da">En hovedsætning kan normalt stå alene og give fuld mening. Den er ikke underordnet en anden sætning.</p><p class="grammar-english" lang="en"><em>A main clause can normally stand alone and express a complete thought.</em></p>
<div class="grammar-example"><p lang="da">Jeg bliver hjemme.</p><p class="grammar-english" lang="en"><em>I am staying home.</em></p></div>
<h3>Ledsætning / Subordinate clause</h3>
<p lang="da">En ledsætning er underordnet en hovedsætning og kan normalt ikke stå alene. Den begynder ofte med at, fordi, hvis, når eller selvom.</p><p class="grammar-english" lang="en"><em>A subordinate clause depends on a main clause and normally cannot stand alone.</em></p>
<div class="grammar-example"><p lang="da">… fordi jeg er træt.</p><p class="grammar-english" lang="en"><em>… because I am tired.</em></p></div>
<h3>Helsætning / Complete sentence</h3>
<p lang="da">En helsætning indeholder altid en hovedsætning og kan også indeholde en eller flere ledsætninger.</p><p class="grammar-english" lang="en"><em>A complete sentence always contains a main clause and may contain subordinate clauses.</em></p>
<table class="grammar-bilingual-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Struktur</strong><em class="grammar-english" lang="en">Structure</em></span></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>Kun hovedsætning</td><td>Jeg bliver hjemme.</td></tr><tr><td>Hovedsætning + ledsætning</td><td>Jeg bliver hjemme, fordi jeg er træt.</td></tr><tr><td>Ledsætning + hovedsætning</td><td>Hvis det regner, bliver vi hjemme.</td></tr><tr><td>Hovedsætning + to ledsætninger</td><td>Hun tænkte, at der var lang tid til, at hun fik ferie.</td></tr>
</tbody></table>
        `
    },
    {
        id: "konjunktion-3",
        titleDa: "Sideordnende konjunktioner",
        titleEn: "Coordinating conjunctions",
        content: `
<p lang="da">Sideordnende konjunktioner forbinder to led eller sætninger på samme grammatiske niveau. De mest almindelige er <strong>og, men, eller, for</strong> og <strong>så</strong>. <strong>Samt</strong> bruges især formelt.</p><p class="grammar-english" lang="en"><em>Coordinating conjunctions connect elements or clauses at the same grammatical level. The most common are og, men, eller, for, and så. Samt is mainly formal.</em></p>
<table class="grammar-example-table grammar-conjunction-table"><thead><tr><th><strong>Konjunktion</strong></th><th><span class="grammar-paired-label"><strong lang="da">Betydning</strong><em class="grammar-english" lang="en">Meaning</em></span></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>og</td><td><span class="grammar-meaning-pair"><span lang="da">tilføjelse</span><em lang="en">addition</em></span></td><td>Hun læser, og han skriver.</td></tr><tr><td>men</td><td><span class="grammar-meaning-pair"><span lang="da">modsætning</span><em lang="en">contrast</em></span></td><td>Jeg er træt, men jeg arbejder.</td></tr><tr><td>eller</td><td><span class="grammar-meaning-pair"><span lang="da">valg</span><em lang="en">choice</em></span></td><td>Vil du have kaffe eller te?</td></tr><tr><td>for</td><td><span class="grammar-meaning-pair"><span lang="da">forklaring</span><em lang="en">explanation</em></span></td><td>Jeg går hjem, for jeg er træt.</td></tr><tr><td>så</td><td><span class="grammar-meaning-pair"><span lang="da">resultat</span><em lang="en">result</em></span></td><td>Det regnede, så vi blev hjemme.</td></tr><tr><td>samt</td><td><span class="grammar-meaning-pair"><span lang="da">formel tilføjelse</span><em lang="en">formal addition</em></span></td><td>Rapporten omfatter tekst samt billeder.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">Nogle materialer behandler <strong>for</strong> og <strong>så</strong> som en særlig samordnende undergruppe. Her samles de praktisk med de sideordnende konjunktioner.</p><p class="grammar-english" lang="en"><em>Some materials use a separate coordinating subgroup for for and så. This guide treats them with the other coordinating conjunctions.</em></p></aside>
        `
    },
    {
        id: "konjunktion-4",
        titleDa: "Og, men og eller",
        titleEn: "Og, men, and eller",
        content: `
<h3>Og / And</h3><p lang="da"><strong>Og</strong> tilføjer information eller forbinder to ens led.</p><p class="grammar-english" lang="en"><em>Og adds information or connects equivalent elements.</em></p><div class="grammar-example"><p>Hun købte brød og mælk. · Hun lavede mad, og han vaskede op.</p><p class="grammar-english" lang="en"><em>She bought bread and milk. · She cooked, and he washed the dishes.</em></p></div>
<h3>Men / But</h3><p lang="da"><strong>Men</strong> viser en modsætning, en begrænsning eller noget uventet.</p><p class="grammar-english" lang="en"><em>Men expresses contrast, limitation, or something unexpected.</em></p><div class="grammar-example"><p>Jeg er træt, men jeg vil gerne med. · Filmen var lang, men interessant.</p><p class="grammar-english" lang="en"><em>I am tired, but I would like to come. · The film was long but interesting.</em></p></div>
<h3>Eller / Or</h3><p lang="da"><strong>Eller</strong> viser et valg, en mulighed eller et alternativ.</p><p class="grammar-english" lang="en"><em>Eller expresses a choice, possibility, or alternative.</em></p><div class="grammar-example"><p>Skal vi gå eller tage bussen? · Vil du have te, eller vil du have kaffe?</p><p class="grammar-english" lang="en"><em>Shall we walk or take the bus? · Would you like tea, or would you like coffee?</em></p></div>
<aside class="grammar-rule"><p lang="da">Når bindeordene forbinder enkelte ord eller led, skal de normalt være grammatiske enheder af samme slags.</p><p class="grammar-english" lang="en"><em>The connected words or elements should normally be grammatically parallel.</em></p></aside>
        `
    },
    {
        id: "konjunktion-5",
        titleDa: "For og så",
        titleEn: "For and så",
        content: `
<h3>For / For, because</h3><p lang="da"><strong>For</strong> indleder en forklarende hovedsætning. Betydningen ligner ofte <strong>fordi</strong>, men efter for bruges hovedsætningsordstilling.</p><p class="grammar-english" lang="en"><em>For introduces an explanatory main clause. Its meaning resembles fordi, but it keeps main-clause word order.</em></p>
<div class="grammar-example"><p>Jeg går hjem, for jeg er træt. · for han <strong>er ikke</strong> træt</p><p class="grammar-english" lang="en"><em>I am going home, for I am tired. · main-clause order</em></p></div>
<h3>Så / So</h3><p lang="da"><strong>Så</strong> viser resultatet af den første sætning. Det kan ofte erstattes af adverbiet <strong>derfor</strong>, men ordstillingen ændres.</p><p class="grammar-english" lang="en"><em>Så expresses a result. It can often be replaced by derfor, but the word order changes.</em></p>
<table class="grammar-example-table"><thead><tr><th><strong>Ord</strong></th><th><strong>Type</strong></th><th><strong>Eksempel</strong></th></tr></thead><tbody><tr><td>så</td><td>konjunktion</td><td>Det regnede, så vi blev hjemme.</td></tr><tr><td>derfor</td><td>adverbium</td><td>Det regnede. Derfor blev vi hjemme.</td></tr></tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>For:</strong> han er ikke træt. <strong>Fordi:</strong> han ikke er træt.</p><p class="grammar-english" lang="en"><em>For takes main-clause order; fordi introduces a subordinate clause.</em></p></aside>
        `
    },
    {
        id: "konjunktion-6",
        titleDa: "Underordnende konjunktioner",
        titleEn: "Subordinating conjunctions",
        content: `
<p lang="da">Underordnende konjunktioner indleder ledsætninger. De viser forholdet til hovedsætningen, for eksempel tid, årsag, betingelse, formål eller modsætning.</p><p class="grammar-english" lang="en"><em>Subordinating conjunctions introduce subordinate clauses and show how they relate to the main clause.</em></p>
<table class="grammar-example-table grammar-conjunction-table"><thead><tr><th><strong>Konjunktioner</strong></th><th><span class="grammar-paired-label"><strong lang="da">Betydning</strong><em class="grammar-english" lang="en">Meaning</em></span></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>at, om</td><td><span class="grammar-meaning-pair"><span lang="da">Indhold</span><em lang="en">Content</em></span></td><td>Jeg tror, at hun kommer.</td></tr><tr><td>da, når, mens, før, efter at</td><td><span class="grammar-meaning-pair"><span lang="da">Tid</span><em lang="en">Time</em></span></td><td>Jeg ringer, når jeg kommer hjem.</td></tr><tr><td>fordi, da, eftersom</td><td><span class="grammar-meaning-pair"><span lang="da">Årsag</span><em lang="en">Cause</em></span></td><td>Jeg gik, fordi jeg var træt.</td></tr><tr><td>hvis, medmindre</td><td><span class="grammar-meaning-pair"><span lang="da">Betingelse</span><em lang="en">Condition</em></span></td><td>Vi går, hvis vejret er godt.</td></tr><tr><td>selvom, skønt</td><td><span class="grammar-meaning-pair"><span lang="da">Indrømmelse</span><em lang="en">Concession</em></span></td><td>Hun gik ud, selvom det regnede.</td></tr><tr><td>for at, så at</td><td><span class="grammar-meaning-pair"><span lang="da">Formål</span><em lang="en">Purpose</em></span></td><td>Jeg skriver det ned, så jeg husker det.</td></tr><tr><td>så … at</td><td><span class="grammar-meaning-pair"><span lang="da">Følge</span><em lang="en">Result</em></span></td><td>Han talte så lavt, at jeg intet hørte.</td></tr><tr><td>end, som om, ligesom</td><td><span class="grammar-meaning-pair"><span lang="da">Sammenligning</span><em lang="en">Comparison</em></span></td><td>Hun løber hurtigere, end jeg gør.</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da">Konjunktionen er ikke selv et sætningsled. Den markerer forholdet mellem ledsætningen og resten af sætningen.</p><p class="grammar-english" lang="en"><em>The conjunction is not itself a sentence element; it marks the relationship between clauses.</em></p></aside>
        `
    },
    {
        id: "konjunktion-7",
        titleDa: "At og om",
        titleEn: "At and om",
        content: `
<h3>At / That</h3><p lang="da"><strong>At</strong> indleder ofte indholdet i det, nogen siger, tænker, ved, håber eller føler.</p><p class="grammar-english" lang="en"><em>At often introduces a content clause expressing what someone says, thinks, knows, hopes, or feels.</em></p><div class="grammar-example"><p>Hun siger, at hun kommer senere. · Jeg håber, at du har det godt.</p><p class="grammar-english" lang="en"><em>She says that she is coming later. · I hope that you are well.</em></p></div>
<h3>Om / Whether, if</h3><p lang="da"><strong>Om</strong> indleder ofte et indirekte ja/nej-spørgsmål.</p><p class="grammar-english" lang="en"><em>Om often introduces an indirect yes/no question.</em></p><div class="grammar-example"><p>Jeg ved ikke, om han kommer. · Hun spørger, om vi har tid.</p><p class="grammar-english" lang="en"><em>I do not know whether he is coming. · She asks whether we have time.</em></p></div>
<aside class="grammar-tip"><p lang="da">Påstand eller oplysning: <strong>at</strong>. Usikkerhed eller indirekte spørgsmål: <strong>om</strong>.</p><p class="grammar-english" lang="en"><em>Use at for a statement or fact; use om for uncertainty or an indirect question.</em></p></aside>
        `
    },
    {
        id: "konjunktion-8",
        titleDa: "Tidskonjunktioner",
        titleEn: "Time conjunctions",
        content: `
<p lang="da">Tidskonjunktioner fortæller, hvornår to handlinger sker i forhold til hinanden.</p><p class="grammar-english" lang="en"><em>Time conjunctions show when two actions happen in relation to each other.</em></p>
<table class="grammar-example-table grammar-conjunction-table"><thead><tr><th><strong>Konjunktion</strong></th><th><span class="grammar-paired-label"><strong lang="da">Betydning</strong><em class="grammar-english" lang="en">Meaning</em></span></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>da</td><td><span class="grammar-meaning-pair"><span lang="da">bestemt fortid</span><em lang="en">specific past event</em></span></td><td>Da jeg kom hjem, sov børnene.</td></tr><tr><td>når</td><td><span class="grammar-meaning-pair"><span lang="da">nutid, fremtid, gentagelse</span><em lang="en">present, future, repetition</em></span></td><td>Når jeg kommer hjem, laver jeg mad.</td></tr><tr><td>mens</td><td><span class="grammar-meaning-pair"><span lang="da">samtidig handling</span><em lang="en">simultaneous action</em></span></td><td>Jeg laver mad, mens du dækker bord.</td></tr><tr><td>før / inden</td><td><span class="grammar-meaning-pair"><span lang="da">tidligere end</span><em lang="en">earlier than</em></span></td><td>Ring, før du kommer.</td></tr><tr><td>efter at</td><td><span class="grammar-meaning-pair"><span lang="da">senere end</span><em lang="en">later than</em></span></td><td>Vi gik, efter at filmen var slut.</td></tr><tr><td>indtil</td><td><span class="grammar-meaning-pair"><span lang="da">frem til et tidspunkt</span><em lang="en">until a point in time</em></span></td><td>Vent her, indtil jeg kommer.</td></tr><tr><td>siden</td><td><span class="grammar-meaning-pair"><span lang="da">fra et tidligere tidspunkt</span><em lang="en">from an earlier point</em></span></td><td>Hun har boet her, siden hun blev gift.</td></tr><tr><td>så snart som</td><td><span class="grammar-meaning-pair"><span lang="da">straks efter</span><em lang="en">immediately after</em></span></td><td>Jeg ringer, så snart jeg ved mere.</td></tr><tr><td>så længe som</td><td><span class="grammar-meaning-pair"><span lang="da">i hele perioden</span><em lang="en">throughout the period</em></span></td><td>Du kan blive, så længe du vil.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Da</strong>: én bestemt begivenhed i fortiden. <strong>Når</strong>: nutid, fremtid eller gentagelse.</p><p class="grammar-english" lang="en"><em>Use da for one specific past event; use når for present, future, or repeated events.</em></p></aside>
        `
    },
    {
        id: "konjunktion-9",
        titleDa: "Årsagskonjunktioner",
        titleEn: "Causal conjunctions",
        content: `
<p lang="da">Årsagskonjunktioner forklarer, hvorfor noget sker eller er tilfældet.</p><p class="grammar-english" lang="en"><em>Causal conjunctions explain why something happens or is true.</em></p>
<table class="grammar-example-table grammar-conjunction-table"><thead><tr><th><strong>Konjunktion</strong></th><th><span class="grammar-paired-label"><strong lang="da">Stil og nuance</strong><em class="grammar-english" lang="en">Style and nuance</em></span></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>fordi</td><td><span class="grammar-meaning-pair"><span lang="da">almindelig, tydelig årsag</span><em lang="en">common, clear cause</em></span></td><td>Jeg gik hjem, fordi jeg var træt.</td></tr><tr><td>da</td><td><span class="grammar-meaning-pair"><span lang="da">kendt baggrund</span><em lang="en">known background</em></span></td><td>Da det var sent, tog vi en taxa.</td></tr><tr><td>eftersom</td><td><span class="grammar-meaning-pair"><span lang="da">mere formel</span><em lang="en">more formal</em></span></td><td>Eftersom alle er enige, fortsætter vi.</td></tr><tr><td>siden</td><td><span class="grammar-meaning-pair"><span lang="da">årsag som tages for kendt</span><em lang="en">cause treated as known</em></span></td><td>Siden du er her, kan du hjælpe.</td></tr><tr><td>idet</td><td><span class="grammar-meaning-pair"><span lang="da">formel</span><em lang="en">formal</em></span></td><td>Han afslog, idet han manglede tid.</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da"><strong>Fordi</strong> indleder en ledsætning. <strong>For</strong> forbinder to hovedsætninger.</p><p class="grammar-english" lang="en"><em>Fordi takes subordinate-clause word order; for takes main-clause word order.</em></p></aside>
        `
    },
    {
        id: "konjunktion-10",
        titleDa: "Betingelseskonjunktioner",
        titleEn: "Conditional conjunctions",
        content: `
<p lang="da">Betingelseskonjunktioner fortæller, hvilken betingelse der skal være opfyldt, for at noget andet kan ske.</p><p class="grammar-english" lang="en"><em>Conditional conjunctions state the condition that must be met for something else to happen.</em></p>
<table class="grammar-example-table grammar-conjunction-table"><thead><tr><th><strong>Konjunktion</strong></th><th><span class="grammar-paired-label"><strong lang="da">Betydning</strong><em class="grammar-english" lang="en">Meaning</em></span></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>hvis</td><td><span class="grammar-meaning-pair"><span lang="da">almindelig betingelse</span><em lang="en">general condition</em></span></td><td>Hvis det regner, bliver vi hjemme.</td></tr><tr><td>medmindre</td><td><span class="grammar-meaning-pair"><span lang="da">hvis ikke</span><em lang="en">if not</em></span></td><td>Vi går, medmindre det regner.</td></tr><tr><td>dersom</td><td><span class="grammar-meaning-pair"><span lang="da">formelt hvis</span><em lang="en">formal if</em></span></td><td>Dersom du accepterer, sender vi aftalen.</td></tr><tr><td>såfremt</td><td><span class="grammar-meaning-pair"><span lang="da">formelt hvis</span><em lang="en">formal if</em></span></td><td>Du kan deltage, såfremt du tilmelder dig.</td></tr><tr><td>forudsat at</td><td><span class="grammar-meaning-pair"><span lang="da">kun på denne betingelse</span><em lang="en">only under this condition</em></span></td><td>Du må låne bilen, forudsat at du kører forsigtigt.</td></tr><tr><td>bare / blot</td><td><span class="grammar-meaning-pair"><span lang="da">uformel betingelse</span><em lang="en">informal condition</em></span></td><td>Jeg hjælper dig, bare du spørger.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Medmindre</strong> betyder allerede <strong>hvis ikke</strong>. Tilføj normalt ikke et ekstra ikke.</p><p class="grammar-english" lang="en"><em>Medmindre already means unless/if not, so do not normally add ikke.</em></p></aside>
        `
    },
    {
        id: "konjunktion-11",
        titleDa: "Indrømmelse og modsætning",
        titleEn: "Concession and contrast",
        content: `
<p lang="da">Disse konjunktioner viser, at hovedsætningen gælder, selv om noget andet kunne have været en hindring.</p><p class="grammar-english" lang="en"><em>These conjunctions show that the main clause remains true even though something else could have been an obstacle.</em></p>
<table class="grammar-example-table grammar-conjunction-table"><thead><tr><th><strong>Konjunktion</strong></th><th class="grammar-english" lang="en">English</th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>selvom</td><td class="grammar-english" lang="en"><em>although</em></td><td>Hun cyklede, selvom det regnede.</td></tr><tr><td>skønt</td><td class="grammar-english" lang="en"><em>although</em></td><td>Skønt han var træt, fortsatte han.</td></tr><tr><td>om end</td><td class="grammar-english" lang="en"><em>although</em></td><td>Opgaven er svær, om end interessant.</td></tr><tr><td>til trods for at</td><td class="grammar-english" lang="en"><em>despite the fact that</em></td><td>De kom, til trods for at vejret var dårligt.</td></tr><tr><td>hvorimod</td><td class="grammar-english" lang="en"><em>whereas</em></td><td>Hun elsker kaffe, hvorimod han foretrækker te.</td></tr><tr><td>hvad enten … eller</td><td class="grammar-english" lang="en"><em>whether … or</em></td><td>Vi tager af sted, hvad enten det regner eller sner.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Selvom</strong> indleder en ledsætning. <strong>Men</strong> forbinder to hovedsætninger.</p><p class="grammar-english" lang="en"><em>Selvom introduces a subordinate clause; men links two main clauses.</em></p></aside>
        `
    },
    {
        id: "konjunktion-12",
        titleDa: "Formål og følge",
        titleEn: "Purpose and result",
        content: `
<h3>Formål / Purpose</h3><p lang="da">Formål fortæller, hvorfor nogen gør noget, eller hvilket mål handlingen har.</p><p class="grammar-english" lang="en"><em>Purpose explains why someone does something or what goal the action has.</em></p><div class="grammar-example"><p>Jeg skriver det ned, så jeg kan huske det. · Jeg læser for at lære.</p><p class="grammar-english" lang="en"><em>I write it down so that I can remember it. · I read in order to learn.</em></p></div>
<aside class="grammar-tip"><p lang="da">Samme subjekt: ofte <strong>for at + navnemåde</strong>. Tydeligt subjekt i formålsledsætningen: <strong>så at</strong>.</p><p class="grammar-english" lang="en"><em>With the same subject, use for at + infinitive. With an explicit subject in the purpose clause, use så at.</em></p></aside>
<h3>Følge eller resultat / Result</h3><p lang="da">Den almindelige konstruktion er <strong>så + adjektiv/adverbium + at</strong>.</p><p class="grammar-english" lang="en"><em>A common result construction is så + adjective/adverb + at.</em></p><div class="grammar-example"><p>Han talte så hurtigt, at jeg ikke forstod ham. · Vejret var så dårligt, at kampen blev aflyst.</p><p class="grammar-english" lang="en"><em>He spoke so quickly that I did not understand him. · The weather was so bad that the match was cancelled.</em></p></div>
<aside class="grammar-rule"><p lang="da"><strong>Så at</strong> kan vise et tilsigtet mål. <strong>Så … at</strong> viser et resultat.</p><p class="grammar-english" lang="en"><em>Så at can express an intended purpose; så … at expresses a result.</em></p></aside>
        `
    },
    {
        id: "konjunktion-13",
        titleDa: "Sammenligningskonjunktioner",
        titleEn: "Comparative conjunctions",
        content: `
<p lang="da">Sammenligningskonjunktioner bruges, når vi sammenligner personer, ting, handlinger eller grader.</p><p class="grammar-english" lang="en"><em>Comparative conjunctions compare people, things, actions, or degrees.</em></p>
<table class="grammar-example-table"><thead><tr><th><strong>Konstruktion</strong></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead><tbody>
<tr><td>komparativ + end</td><td>Hun er højere, end jeg er.</td><td class="grammar-english" lang="en"><em>She is taller than I am.</em></td></tr><tr><td>så + adjektiv + som</td><td>Han er lige så gammel som mig.</td><td class="grammar-english" lang="en"><em>He is as old as I am.</em></td></tr><tr><td>som om</td><td>Han taler, som om han ved alt.</td><td class="grammar-english" lang="en"><em>He speaks as if he knows everything.</em></td></tr><tr><td>ligesom</td><td>Hun arbejder ligesom sin mor.</td><td class="grammar-english" lang="en"><em>She works like her mother.</em></td></tr><tr><td>jo … jo/des</td><td>Jo mere du øver, jo bedre bliver du.</td><td class="grammar-english" lang="en"><em>The more you practise, the better you become.</em></td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">I korte sammenligninger kan verbet være underforstået: Han er højere end mig. Mere formelt: Han er højere, end jeg er.</p><p class="grammar-english" lang="en"><em>A verb may be omitted in short comparisons. Include it in more formal language.</em></p></aside>
        `
    },
    {
        id: "konjunktion-14",
        titleDa: "Andre ledsætningsindledere",
        titleEn: "Other subordinate-clause introducers",
        content: `
<p lang="da">Nogle ord indleder ledsætninger som konjunktioner, men tilhører andre ordklasser. Det gælder blandt andet relative pronomener og hv-ord.</p><p class="grammar-english" lang="en"><em>Some words introduce subordinate clauses like conjunctions but belong to other word classes, including relative pronouns and wh-words.</em></p>
<h3>Der og som / Der and som</h3><table class="grammar-bilingual-table"><thead><tr><th><strong>Funktion</strong></th><th><strong>Eksempel</strong></th></tr></thead><tbody><tr><td>Der som subjekt</td><td>En pige, der arbejder i banken.</td></tr><tr><td>Som som subjekt</td><td>En pige, som arbejder i banken.</td></tr><tr><td>Som som objekt</td><td>Bogen, som jeg købte i går.</td></tr><tr><td>Som efter præposition</td><td>Personen, som jeg talte med.</td></tr></tbody></table>
<h3>Hv-ord / Wh-words</h3><p lang="da">Hvem, hvad, hvor, hvordan, hvornår og hvorfor kan indlede indirekte spørgsmål: Jeg ved ikke, hvornår toget kommer.</p><p class="grammar-english" lang="en"><em>Wh-words can introduce indirect questions: I do not know when the train arrives.</em></p>
<h3>Hvis og hvor / Whose and where</h3><div class="grammar-example"><p>Jeg har en veninde, hvis datter læser medicin. · Aarhus er byen, hvor jeg bor.</p><p class="grammar-english" lang="en"><em>I have a friend whose daughter studies medicine. · Aarhus is the city where I live.</em></p></div>
<aside class="grammar-tip"><p lang="da">Det vigtigste er at genkende, at ordene starter en ledsætning, selv om de ikke altid er konjunktioner i snæver grammatisk betydning.</p><p class="grammar-english" lang="en"><em>The key is to recognize that they begin a subordinate clause.</em></p></aside>
        `
    },
    {
        id: "konjunktion-15",
        titleDa: "Ordstilling",
        titleEn: "Word order",
        content: `
<p lang="da">I en hovedsætning står et centraladverbium som <strong>ikke</strong> normalt efter det finitte verbum. I en ledsætning står det normalt mellem subjektet og det finitte verbum.</p><p class="grammar-english" lang="en"><em>In a main clause, ikke normally follows the finite verb. In a subordinate clause, it normally comes between the subject and finite verb.</em></p>
<table class="grammar-example-table"><thead><tr><th><strong>Sætningstype</strong></th><th><strong>Mønster</strong></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>Hovedsætning</td><td>subjekt + finit verbum + ikke</td><td>Han kommer ikke.</td></tr><tr><td>Ledsætning</td><td>konjunktion + subjekt + ikke + finit verbum</td><td>… fordi han ikke kommer.</td></tr><tr><td>Hovedsætning, to verber</td><td>subjekt + finit verbum + ikke + infinit verbum</td><td>Han vil ikke komme.</td></tr><tr><td>Ledsætning, to verber</td><td>konjunktion + subjekt + ikke + finit + infinit verbum</td><td>… fordi han ikke vil komme.</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da">Hovedsætning: verbet før <strong>ikke</strong>. Ledsætning: <strong>ikke</strong> før det finitte verbum.</p><p class="grammar-english" lang="en"><em>Main clause: verb before ikke. Subordinate clause: ikke before the finite verb.</em></p></aside>
<h3>Ledsætning først / Subordinate clause first</h3><p lang="da">Når en ledsætning står først, fylder den første plads i hovedsætningen. Derfor kommer det finitte verbum før subjektet: <strong>Hvis det regner, bliver vi hjemme.</strong></p><p class="grammar-english" lang="en"><em>A leading subordinate clause causes inversion in the main clause: If it rains, we stay home.</em></p>
        `
    },
    {
        id: "konjunktion-16",
        titleDa: "Komma",
        titleEn: "Commas",
        content: `
<p lang="da">Når to helsætninger eller en hovedsætning og en ledsætning forbindes, står der ofte komma mellem dem. Eksemplerne her bruger komma omkring ledsætninger.</p><p class="grammar-english" lang="en"><em>A comma often separates two complete clauses or a main and subordinate clause. These examples use commas around subordinate clauses.</em></p>
<table class="grammar-bilingual-table"><thead><tr><th><strong>Situation</strong></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td>To hovedsætninger</td><td>Hun laver mad, og han vasker op.</td></tr><tr><td>Hovedsætning + ledsætning</td><td>Jeg bliver hjemme, fordi jeg er syg.</td></tr><tr><td>Ledsætning + hovedsætning</td><td>Hvis det regner, bliver vi hjemme.</td></tr><tr><td>To led, ikke to sætninger</td><td>Hun vaskede og strøg tøjet.</td></tr><tr><td>Opremsning</td><td>Hun købte brød, mælk og ost.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Find subjekt og finit verbum:</strong> To sæt med eget subjekt og finit verbum betyder to sætninger. Ét subjekt med to verber kræver ikke automatisk komma.</p><p class="grammar-english" lang="en"><em>Two sets, each with a subject and finite verb, mean two clauses. One subject with two verbs does not automatically require a comma.</em></p></aside>
<table class="grammar-example-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Struktur</strong><em class="grammar-english" lang="en">Structure</em></span></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead><tbody><tr><td>Ét subjekt</td><td>Hun vaskede og strøg tøjet.</td><td class="grammar-english" lang="en"><em>She washed and ironed the clothes.</em></td></tr><tr><td>To subjekter</td><td>Hun vaskede tøjet, og han strøg det.</td><td class="grammar-english" lang="en"><em>She washed the clothes, and he ironed them.</em></td></tr></tbody></table>
        `
    },
    {
        id: "konjunktion-17",
        titleDa: "Hurtig beslutningsguide",
        titleEn: "Quick decision guide",
        content: `
<table class="grammar-example-table grammar-conjunction-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Hvad vil du udtrykke?</strong><em class="grammar-english" lang="en">What do you mean?</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Vælg</strong><em class="grammar-english" lang="en">Choose</em></span></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr><td><span class="grammar-meaning-pair"><span lang="da">Tilføjelse</span><em lang="en">Addition</em></span></td><td>og</td><td>Hun læser, og han skriver.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Modsætning</span><em lang="en">Contrast</em></span></td><td>men</td><td>Jeg er træt, men jeg arbejder.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Valg</span><em lang="en">Choice</em></span></td><td>eller</td><td>Kaffe eller te?</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Forklaring, hovedsætning</span><em lang="en">Explanation, main clause</em></span></td><td>for</td><td>Jeg går, for jeg er træt.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Resultat, hovedsætning</span><em lang="en">Result, main clause</em></span></td><td>så</td><td>Det regnede, så vi blev hjemme.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Oplysning</span><em lang="en">Statement</em></span></td><td>at</td><td>Jeg tror, at hun kommer.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Indirekte spørgsmål</span><em lang="en">Indirect question</em></span></td><td>om</td><td>Jeg ved ikke, om hun kommer.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Tid</span><em lang="en">Time</em></span></td><td>når, da, mens</td><td>Jeg ringer, når jeg kommer.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Årsag, ledsætning</span><em lang="en">Cause, subordinate clause</em></span></td><td>fordi</td><td>Jeg går, fordi jeg er træt.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Betingelse</span><em lang="en">Condition</em></span></td><td>hvis, medmindre</td><td>Vi går, hvis vejret er godt.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Indrømmelse</span><em lang="en">Concession</em></span></td><td>selvom</td><td>Hun gik, selvom det regnede.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Formål</span><em lang="en">Purpose</em></span></td><td>for at, så at</td><td>Jeg læser for at lære.</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Resultat af grad</span><em lang="en">Result of degree</em></span></td><td>så … at</td><td>Han talte så lavt, at jeg intet hørte.</td></tr>
</tbody></table>
        `
    },
    {
        id: "konjunktion-18",
        titleDa: "Typiske fejl og tjekliste",
        titleEn: "Common mistakes and checklist",
        content: `
<table class="grammar-correction-table grammar-correction-table--paired"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Forkert</strong><em class="grammar-english" lang="en">Incorrect</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Korrekt</strong><em class="grammar-english" lang="en">Correct</em></span></th></tr></thead><tbody>
<tr><td class="grammar-result grammar-result--incorrect">… fordi jeg er ikke rask.</td><td class="grammar-result grammar-result--correct">… fordi jeg ikke er rask.</td></tr>
<tr class="grammar-correction-reason"><td colspan="2"><strong lang="da">Forklaring:</strong> I en ledsætning står <em>ikke</em> før det finitte verbum.<br><em class="grammar-english" lang="en">In a subordinate clause, ikke comes before the finite verb.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Hvis det regner, vi bliver hjemme.</td><td class="grammar-result grammar-result--correct">Hvis det regner, bliver vi hjemme.</td></tr>
<tr class="grammar-correction-reason"><td colspan="2"><strong lang="da">Forklaring:</strong> En indledende ledsætning giver inversion i hovedsætningen.<br><em class="grammar-english" lang="en">A leading subordinate clause causes inversion in the main clause.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg ved ikke, at han kommer.</td><td class="grammar-result grammar-result--correct">Jeg ved ikke, om han kommer.</td></tr>
<tr class="grammar-correction-reason"><td colspan="2"><strong lang="da">Forklaring:</strong> Et indirekte ja/nej-spørgsmål bruger <em>om</em>.<br><em class="grammar-english" lang="en">An indirect yes/no question uses om.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">… for jeg ikke har tid.</td><td class="grammar-result grammar-result--correct">… for jeg har ikke tid.</td></tr>
<tr class="grammar-correction-reason"><td colspan="2"><strong lang="da">Forklaring:</strong> Efter <em>for</em> bruges hovedsætningsordstilling.<br><em class="grammar-english" lang="en">For is followed by main-clause word order.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Medmindre det ikke regner …</td><td class="grammar-result grammar-result--correct">Medmindre det regner …</td></tr>
<tr class="grammar-correction-reason"><td colspan="2"><strong lang="da">Forklaring:</strong> <em>Medmindre</em> betyder allerede <em>hvis ikke</em>.<br><em class="grammar-english" lang="en">Medmindre already means unless or if not.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Han talte så hurtigt, fordi jeg ikke forstod ham.</td><td class="grammar-result grammar-result--correct">Han talte så hurtigt, at jeg ikke forstod ham.</td></tr>
<tr class="grammar-correction-reason"><td colspan="2"><strong lang="da">Forklaring:</strong> Konstruktionen <em>så … at</em> viser et resultat.<br><em class="grammar-english" lang="en">The construction så … at expresses a result.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg læser, fordi at jeg vil lære.</td><td class="grammar-result grammar-result--correct">Jeg læser, fordi jeg vil lære.</td></tr>
<tr class="grammar-correction-reason"><td colspan="2"><strong lang="da">Forklaring:</strong> <em>Fordi</em> står normalt ikke sammen med <em>at</em>.<br><em class="grammar-english" lang="en">Fordi is not normally combined with at.</em></td></tr>
</tbody></table>
<h3>Tjek din tekst / Check your text</h3>
<ul class="grammar-checklist">
<li><span lang="da">Har hver ledsætning den rigtige konjunktion?</span><span class="grammar-english" lang="en">Does each subordinate clause use the correct conjunction?</span></li>
<li><span lang="da">Står <em>ikke</em> før det finitte verbum i ledsætninger?</span><span class="grammar-english" lang="en">Does <em>ikke</em> come before the finite verb in subordinate clauses?</span></li>
<li><span lang="da">Har hovedsætningen inversion efter en indledende ledsætning?</span><span class="grammar-english" lang="en">Does the main clause use inversion after an opening subordinate clause?</span></li>
<li><span lang="da">Har du valgt <em>at</em> til en oplysning og <em>om</em> til et indirekte ja/nej-spørgsmål?</span><span class="grammar-english" lang="en">Did you choose <em>at</em> for a statement and <em>om</em> for an indirect yes/no question?</span></li>
</ul>
        `
    },
    
    {
        id: "konjunktion-20",
        titleDa: "Øvelser A–D",
        titleEn: "Exercises A–D",
        content: `
<section class="grammar-exercise"><h3>A. Find konjunktionerne / Find the conjunctions</h3><p>Understreg bindeordene, og skriv, hvad de forbinder.</p><ol><li>Peter og Ulla arbejder sammen.</li><li>Jeg vil gerne med, men jeg har ikke tid.</li><li>Hun bliver hjemme, fordi hun er syg.</li><li>Hvis vejret er godt, tager vi på stranden.</li><li>Jeg ved ikke, om han kommer.</li></ol></section>
<section class="grammar-exercise"><h3>B. Vælg og, men eller eller</h3><ol><li>Vil du have kaffe ___ te?</li><li>Hun er træt, ___ hun fortsætter.</li><li>Peter ___ Maria kommer til festen.</li><li>Skynd dig, ___ vi kommer for sent.</li><li>Skal vi gå, ___ skal vi tage bussen?</li></ol></section>
<section class="grammar-exercise"><h3>C. Vælg for, fordi eller så</h3><ol><li>Jeg går hjem, ___ jeg har ikke mere tid.</li><li>Jeg går hjem, ___ jeg ikke har mere tid.</li><li>Hun var syg, ___ hun blev hjemme.</li><li>Vi tog en taxa, ___ det ikke var muligt at få en bus.</li><li>Det regnede, ___ kampen blev aflyst.</li></ol></section>
<section class="grammar-exercise"><h3>D. At eller om?</h3><ol><li>Jeg tror, ___ han kommer.</li><li>Jeg ved ikke, ___ han kommer.</li><li>Hun spørger, ___ vi har tid.</li><li>Vi håber, ___ vejret bliver godt.</li><li>Kan du huske, ___ døren er låst?</li></ol></section>
        `
    },
    {
        id: "konjunktion-21",
        titleDa: "Øvelser E–I",
        titleEn: "Exercises E–I",
        content: `
<section class="grammar-exercise"><h3>E. Vælg et tidsbindeord / Choose a time conjunction</h3><ol><li>___ jeg var barn, boede jeg på landet. (da / når)</li><li>___ jeg kommer hjem, ringer jeg. (da / når)</li><li>Jeg læser, ___ du laver mad. (mens / fordi)</li><li>Vent her, ___ jeg kommer tilbage. (indtil / selvom)</li><li>Vi gik, ___ filmen var slut. (efter at / hvis)</li></ol></section>
<section class="grammar-exercise"><h3>F. Betingelse eller indrømmelse</h3><ol><li>___ det regner, bliver vi hjemme. (hvis / selvom)</li><li>Vi går tur, ___ det regner. (selvom / fordi)</li><li>Du kan komme med, ___ du er klar. (hvis / mens)</li><li>Vi tager af sted, ___ bussen er forsinket. (selvom / så)</li><li>Jeg køber ikke bilen, ___ prisen bliver lavere. (medmindre / fordi)</li></ol></section>
<section class="grammar-exercise"><h3>G. Ret ordstillingen / Correct the word order</h3><ol><li>Jeg bliver hjemme, fordi jeg er ikke rask.</li><li>Hvis hun har tid, hun kommer i morgen.</li><li>Jeg går hjem, for jeg ikke kan vente.</li><li>Hun siger, at hun kommer måske senere.</li><li>Vi tager en taxa, hvis bussen kommer ikke.</li></ol></section>
<section class="grammar-exercise"><h3>H. Forbind sætningerne / Join the sentences</h3><ol><li>Jeg er træt. Jeg arbejder videre. (men)</li><li>Det regner. Vi bliver hjemme. (så)</li><li>Hun kommer ikke. Hun er syg. (fordi)</li><li>Du ringer. Jeg hjælper dig. (hvis)</li><li>Han var nervøs. Han holdt en god tale. (selvom)</li></ol></section>
<section class="grammar-exercise"><h3>I. Komma eller intet komma?</h3><ol><li>Hun vaskede ___ og strøg tøjet.</li><li>Hun vaskede tøjet ___ og han strøg det.</li><li>Hvis det regner ___ bliver vi hjemme.</li><li>Jeg køber brød ___ mælk og ost.</li><li>Jeg kommer ___ når jeg er færdig.</li></ol></section>
        `
    },
    {
        id: "konjunktion-22",
        titleDa: "Facit A–D",
        titleEn: "Answer key A–D",
        content: `
<section class="grammar-exercise"><h3>A. Find konjunktionerne</h3><ol><li><strong>og</strong> forbinder Peter og Ulla.</li><li><strong>men</strong> forbinder to hovedsætninger.</li><li><strong>fordi</strong> indleder en årsagsledsætning.</li><li><strong>hvis</strong> indleder en betingelsesledsætning.</li><li><strong>om</strong> indleder et indirekte ja/nej-spørgsmål.</li></ol></section>
<section class="grammar-exercise"><h3>B. Og, men eller eller</h3><ol><li>eller</li><li>men</li><li>og</li><li>eller</li><li>eller</li></ol></section>
<section class="grammar-exercise"><h3>C. For, fordi eller så</h3><ol><li><strong>for</strong>: hovedsætningsordstilling.</li><li><strong>fordi</strong>: ledsætningsordstilling.</li><li><strong>så</strong>: resultat.</li><li><strong>fordi</strong> (for kan bruges med ændret ordstilling og stil).</li><li><strong>så</strong>: resultat.</li></ol></section>
<section class="grammar-exercise"><h3>D. At eller om?</h3><ol><li>at</li><li>om</li><li>om</li><li>at</li><li>om</li></ol></section>
        `
    },
    {
        id: "konjunktion-23",
        titleDa: "Facit E–I",
        titleEn: "Answer key E–I",
        content: `
<section class="grammar-exercise"><h3>E. Tidsbindeord</h3><ol><li>Da jeg var barn …</li><li>Når jeg kommer hjem …</li><li>mens</li><li>indtil</li><li>efter at</li></ol></section>
<section class="grammar-exercise"><h3>F. Betingelse eller indrømmelse</h3><ol><li>hvis</li><li>selvom</li><li>hvis</li><li>selvom</li><li>medmindre</li></ol></section>
<section class="grammar-exercise"><h3>G. Ret ordstillingen</h3><ol><li>Jeg bliver hjemme, fordi jeg ikke er rask.</li><li>Hvis hun har tid, kommer hun i morgen.</li><li>Jeg går hjem, for jeg kan ikke vente.</li><li>Hun siger, at hun måske kommer senere.</li><li>Vi tager en taxa, hvis bussen ikke kommer.</li></ol></section>
<section class="grammar-exercise"><h3>H. Forbind sætningerne</h3><ol><li>Jeg er træt, men jeg arbejder videre.</li><li>Det regner, så vi bliver hjemme.</li><li>Hun kommer ikke, fordi hun er syg.</li><li>Hvis du ringer, hjælper jeg dig.</li><li>Selvom han var nervøs, holdt han en god tale.</li></ol></section>
<section class="grammar-exercise"><h3>I. Komma eller intet komma?</h3><ol><li>Intet komma: Hun vaskede og strøg tøjet.</li><li>Komma: Hun vaskede tøjet, og han strøg det.</li><li>Komma: Hvis det regner, bliver vi hjemme.</li><li>Intet komma før og: Jeg køber brød, mælk og ost.</li><li>Komma: Jeg kommer, når jeg er færdig.</li></ol></section>
        `
    },
    {
        id: "konjunktion-24",
        titleDa: "Miniordliste",
        titleEn: "Mini glossary",
        content: `
<table class="grammar-example-table"><thead><tr><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th><th><span class="grammar-paired-label"><strong lang="da">Kort forklaring</strong><em class="grammar-english" lang="en">Short explanation</em></span></th></tr></thead><tbody>
<tr><td>konjunktion / bindeord</td><td class="grammar-english" lang="en"><em>conjunction</em></td><td>forbinder ord, led eller sætninger</td></tr><tr><td>sideordnende</td><td class="grammar-english" lang="en"><em>coordinating</em></td><td>forbinder led på samme niveau</td></tr><tr><td>underordnende</td><td class="grammar-english" lang="en"><em>subordinating</em></td><td>indleder en ledsætning</td></tr><tr><td>hovedsætning</td><td class="grammar-english" lang="en"><em>main clause</em></td><td>kan normalt stå alene</td></tr><tr><td>ledsætning</td><td class="grammar-english" lang="en"><em>subordinate clause</em></td><td>er underordnet en hovedsætning</td></tr><tr><td>helsætning</td><td class="grammar-english" lang="en"><em>complete sentence</em></td><td>indeholder mindst én hovedsætning</td></tr><tr><td>tidskonjunktion</td><td class="grammar-english" lang="en"><em>time conjunction</em></td><td>viser tidspunkt eller rækkefølge</td></tr><tr><td>årsagskonjunktion</td><td class="grammar-english" lang="en"><em>causal conjunction</em></td><td>forklarer hvorfor</td></tr><tr><td>betingelseskonjunktion</td><td class="grammar-english" lang="en"><em>conditional conjunction</em></td><td>viser en betingelse</td></tr><tr><td>indrømmelse</td><td class="grammar-english" lang="en"><em>concession</em></td><td>ændrer ikke resultatet</td></tr><tr><td>formål</td><td class="grammar-english" lang="en"><em>purpose</em></td><td>viser et mål</td></tr><tr><td>følge</td><td class="grammar-english" lang="en"><em>result</em></td><td>viser en konsekvens</td></tr><tr><td>inversion</td><td class="grammar-english" lang="en"><em>inversion</em></td><td>finit verbum før subjektet</td></tr><tr><td>centraladverbium</td><td class="grammar-english" lang="en"><em>central adverb</em></td><td>fx ikke, altid, aldrig, måske</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Din vigtigste vane:</strong> Spørg først, om du forbinder to lige led eller indleder en ledsætning. Vælg derefter efter betydning: tid, årsag, betingelse, modsætning, formål eller resultat.</p><p class="grammar-english" lang="en"><em>First decide whether you connect equal elements or introduce a subordinate clause. Then choose according to meaning.</em></p></aside>
<div class="grammar-example"><p>Jeg bliver hjemme, fordi jeg er træt, men jeg arbejder videre i morgen.</p><p class="grammar-english" lang="en"><em>I am staying home because I am tired, but I will continue working tomorrow.</em></p></div>
        `
    }
];
