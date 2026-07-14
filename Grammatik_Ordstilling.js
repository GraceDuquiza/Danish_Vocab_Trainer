// Bilingual grammar lesson adapted from Ordstilling.docx.
// Loaded as a classic script before script.js.
const ordstillingGrammarPages = [
    
    {
        id: "ordstilling-1",
        titleDa: "Hvad er ordstilling?",
        titleEn: "What is word order?",
        content: `
<div class="grammar-text-pair"><p lang="da">Ordstilling er den rækkefølge, som sætningsleddene står i. Dansk har forholdsvis faste pladser for det finitte verbum, subjektet og centraladverbierne. Andre led kan flyttes for at skabe fokus.</p><p class="grammar-english" lang="en"><em>Word order is the sequence of sentence elements. Danish has fairly fixed positions for the finite verb, subject, and central adverbs. Other elements can move to create emphasis.</em></p></div>
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Fokus / Focus</th><th class="grammar-danish-column" lang="da">Dansk</th><th class="grammar-english-column" lang="en">English</th></tr></thead><tbody>
<tr><th class="grammar-shared-column" scope="row">Neutral</th><td class="grammar-danish-column">Jeg læser bogen i dag.</td><td class="grammar-english-column grammar-english" lang="en"><em>I am reading the book today.</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">Tid / Time</th><td class="grammar-danish-column">I dag læser jeg bogen.</td><td class="grammar-english-column grammar-english" lang="en"><em>Today I am reading the book.</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">Objekt / Object</th><td class="grammar-danish-column">Bogen læser jeg i dag.</td><td class="grammar-english-column grammar-english" lang="en"><em>The book is what I am reading today.</em></td></tr>
</tbody></table>
<aside class="grammar-tip"><div class="grammar-text-pair"><p lang="da">Når et andet led end subjektet står først i en hovedsætning, står det finitte verbum stadig på anden plads.</p><p class="grammar-english" lang="en"><em>When an element other than the subject comes first in a main clause, the finite verb still occupies the second position.</em></p></div></aside>
        `
    },
    {
        id: "ordstilling-2",
        titleDa: "Sætningsled: de vigtigste byggesten",
        titleEn: "Sentence elements: the main building blocks",
        content: `
<div class="grammar-text-pair"><p lang="da">Ordstilling handler om sætningsleddenes funktion, ikke kun om ordklasser. Et sætningsled kan bestå af ét ord eller mange ord.</p><p class="grammar-english" lang="en"><em>Word order concerns the function of sentence elements, not only word classes. An element may consist of one word or many words.</em></p></div>
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Led / Element</th><th class="grammar-danish-column" lang="da">Dansk funktion</th><th class="grammar-english-column" lang="en">English function</th></tr></thead><tbody>
<tr><th class="grammar-shared-column" scope="row">S</th><td class="grammar-danish-column">subjekt: hvem eller hvad?</td><td class="grammar-english-column grammar-english" lang="en"><em>subject: who or what?</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">V</th><td class="grammar-danish-column">verbal: hvad gør eller er subjektet?</td><td class="grammar-english-column grammar-english" lang="en"><em>verb phrase: what does or is the subject?</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">DO / IO</th><td class="grammar-danish-column">direkte / indirekte objekt</td><td class="grammar-english-column grammar-english" lang="en"><em>direct / indirect object</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">SP / OP</th><td class="grammar-danish-column">subjekts- / objektsprædikativ</td><td class="grammar-english-column grammar-english" lang="en"><em>subject / object complement</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">A / K</th><td class="grammar-danish-column">adverbial / konjunktional</td><td class="grammar-english-column grammar-english" lang="en"><em>adverbial / conjunction element</em></td></tr>
</tbody></table>
<section class="grammar-example"><p lang="da"><strong>Maria gav sin ven en bog i går.</strong><br>S = Maria; V = gav; IO = sin ven; DO = en bog; A = i går.</p><p class="grammar-english" lang="en"><em>Maria gave her friend a book yesterday.</em></p></section>
        `
    },
    {
        id: "ordstilling-3",
        titleDa: "Finitte og infinitte verber",
        titleEn: "Finite and non-finite verbs",
        content: `
<div class="grammar-text-pair"><p lang="da">Det finitte verbum viser tid eller bydemåde. Nutid, datid og imperativ er finitte former. Navnemåde og tillægsformer er infinitte.</p><p class="grammar-english" lang="en"><em>The finite verb shows tense or the imperative. Present, past, and imperative forms are finite; infinitives and participles are non-finite.</em></p></div>
<table class="grammar-bilingual-table"><thead><tr><th lang="da">Dansk</th><th lang="en">English</th></tr></thead><tbody>
<tr><td><strong>Finit:</strong> spiser, spiste, spis</td><td class="grammar-english" lang="en"><em>Finite: present, past, imperative</em></td></tr>
<tr><td><strong>Infinit:</strong> spise, spist, spisende</td><td class="grammar-english" lang="en"><em>Non-finite: infinitive and participles</em></td></tr>
</tbody></table>
<section class="grammar-example"><p lang="da">Hun <strong>har</strong> ikke <strong>læst</strong> bogen. <em>Har</em> er finit; <em>læst</em> er infinit.</p><p class="grammar-english" lang="en"><em>She has not read the book. Har is finite; læst is non-finite.</em></p></section>
<aside class="grammar-tip"><p lang="da">Find altid det finitte verbum først.</p><p class="grammar-english" lang="en"><em>Always find the finite verb first.</em></p></aside>
        `
    },
    {
        id: "ordstilling-4",
        titleDa: "Hovedsætning, ledsætning og helsætning",
        titleEn: "Main, subordinate, and complete clauses",
        content: `
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Type</th><th class="grammar-danish-column" lang="da">Dansk</th><th class="grammar-english-column" lang="en">English</th></tr></thead><tbody>
<tr><th class="grammar-shared-column" scope="row">Hovedsætning / Main clause</th><td class="grammar-danish-column">Kan normalt stå alene: Peter løber hjem.</td><td class="grammar-english-column grammar-english" lang="en"><em>Can normally stand alone: Peter runs home.</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">Ledsætning / Subordinate clause</th><td class="grammar-danish-column">Er underordnet: … fordi Peter ikke har tid.</td><td class="grammar-english-column grammar-english" lang="en"><em>Depends on a main clause: … because Peter has no time.</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">Helsætning / Complete sentence</th><td class="grammar-danish-column">Peter løber hjem, fordi han ikke har tid.</td><td class="grammar-english-column grammar-english" lang="en"><em>Peter runs home because he has no time.</em></td></tr>
</tbody></table>
<table class="grammar-bilingual-table"><thead><tr><th>Hovedsætning</th><th>Ledsætning</th></tr></thead><tbody><tr><td>finit verbum + <strong>ikke</strong><br>Peter kommer ikke.</td><td>subjekt + <strong>ikke</strong> + finit verbum<br>… fordi Peter ikke kommer.</td></tr></tbody></table>
<aside class="grammar-rule"><p lang="da"><strong>Ikke-testen:</strong> <em>ikke</em> står normalt efter det finitte verbum i en hovedsætning, men før det i en ledsætning.</p><p class="grammar-english" lang="en"><em>Ikke normally follows the finite verb in a main clause but precedes it in a subordinate clause.</em></p></aside>
        `
    },
    {
        id: "ordstilling-5",
        titleDa: "V2-reglen i hovedsætninger",
        titleEn: "The V2 rule in main clauses",
        content: `
<div class="grammar-text-pair"><p lang="da">V2 betyder, at det finitte verbum står på anden <strong>syntaktiske plads</strong> i en hovedsætning. Første plads kan være ét langt sætningsled.</p><p class="grammar-english" lang="en"><em>V2 means that the finite verb occupies the second syntactic position in a main clause. The first position may contain one long sentence element.</em></p></div>
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Første plads / First position</th><th class="grammar-danish-column">Finit verbum</th><th class="grammar-english-column">Resten / Remainder</th></tr></thead><tbody>
<tr><td class="grammar-shared-column">Jeg</td><td class="grammar-danish-column">arbejder</td><td class="grammar-english-column">hjemme i dag.</td></tr>
<tr><td class="grammar-shared-column">I dag</td><td class="grammar-danish-column">arbejder</td><td class="grammar-english-column">jeg hjemme.</td></tr>
<tr><td class="grammar-shared-column">Efter den lange ferie</td><td class="grammar-danish-column">begyndte</td><td class="grammar-english-column">hun på arbejde igen.</td></tr>
<tr><td class="grammar-shared-column">Den nye bog fra biblioteket</td><td class="grammar-danish-column">har</td><td class="grammar-english-column">jeg allerede læst.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><em>Efter den lange ferie</em> er ét samlet tidsadverbial og fylder kun første plads.</p><p class="grammar-english" lang="en"><em>Efter den lange ferie is one complete time adverbial and occupies only the first position.</em></p></aside>
        `
    },
    {
        id: "ordstilling-6",
        titleDa: "Ligefrem ordstilling",
        titleEn: "Subject-first word order",
        content: `
<div class="grammar-text-pair"><p lang="da">Når subjektet står først, kaldes ordstillingen ligefrem. Det finitte verbum kommer umiddelbart efter subjektet.</p><p class="grammar-english" lang="en"><em>When the subject comes first, the order is subject-first. The finite verb immediately follows the subject.</em></p></div>
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Mønster / Pattern</th><th class="grammar-danish-column">Før verbalkæden</th><th class="grammar-english-column">Efter verbalkæden</th></tr></thead><tbody>
<tr><td class="grammar-shared-column">S + V1 + A + V2 + O + Slut-A</td><td class="grammar-danish-column">Jeg har ikke læst</td><td class="grammar-english-column">bogen endnu.</td></tr>
<tr><td class="grammar-shared-column">S + V1 + A + O + Slut-A</td><td class="grammar-danish-column">Jeg læser ofte</td><td class="grammar-english-column">bøger om aftenen.</td></tr>
<tr><td class="grammar-shared-column">S + V1 + A + V2 + O + Slut-A</td><td class="grammar-danish-column">Vi vil måske købe</td><td class="grammar-english-column">en bil næste år.</td></tr>
</tbody></table>
        `
    },
    {
        id: "ordstilling-7",
        titleDa: "Omvendt ordstilling og forfeltet",
        titleEn: "Inversion and the first position",
        content: `
<div class="grammar-text-pair"><p lang="da">Når et andet led end subjektet står først, kommer det finitte verbum før subjektet. Dette kaldes inversion.</p><p class="grammar-english" lang="en"><em>When an element other than the subject comes first, the finite verb precedes the subject. This is inversion.</em></p></div>
<table class="grammar-example-table grammar-focus-example-table"><thead><tr><th lang="da">Første led</th><th class="grammar-english" lang="en">Focus</th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><th scope="row" lang="da">Tid</th><td class="grammar-english" lang="en"><em>when</em></td><td>I morgen kommer hun tidligt.</td></tr>
<tr><th scope="row" lang="da">Sted</th><td class="grammar-english" lang="en"><em>where</em></td><td>I Aarhus bor min søster.</td></tr>
<tr><th scope="row" lang="da">Objekt</th><td class="grammar-english" lang="en"><em>what</em></td><td>Den bog har jeg læst.</td></tr>
<tr><th scope="row" lang="da">Ledsætning</th><td class="grammar-english" lang="en"><em>time or condition</em></td><td>Når jeg kommer hjem, laver jeg mad.</td></tr>
</tbody></table>
<section class="grammar-correction"><p><del>I dag jeg har ikke tid.</del></p><p><strong>I dag har jeg ikke tid.</strong></p><p class="grammar-english" lang="en"><em>The finite verb remains second; the subject follows it.</em></p></section>
        `
    },
    {
        id: "ordstilling-8",
        titleDa: "Centraladverbier i hovedsætninger",
        titleEn: "Central adverbs in main clauses",
        content: `
<div class="grammar-text-pair"><p lang="da">Centraladverbier står tæt på verballedet: <em>ikke, aldrig, altid, ofte, sjældent, måske, gerne, nok, jo</em> og <em>selvfølgelig</em>.</p><p class="grammar-english" lang="en"><em>Central adverbs occur close to the verb phrase: ikke, aldrig, altid, often, rarely, perhaps, gladly, probably, indeed, and of course.</em></p></div>
<table class="grammar-example-table grammar-focus-example-table"><thead><tr><th lang="da">Verballed</th><th class="grammar-english" lang="en">Focus</th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><th scope="row" lang="da">Ét verbum</th><td class="grammar-english" lang="en"><em>Adverb after the finite verb</em></td><td><span>Hun kommer <strong>ikke</strong> i morgen.</span></td></tr>
<tr><th scope="row" lang="da">Flere verber</th><td class="grammar-english" lang="en"><em>Adverb between finite and non-finite verbs</em></td><td><span>Hun har <strong>aldrig</strong> været i Norge.</span></td></tr>
<tr><th scope="row" lang="da">Måske først</th><td class="grammar-english" lang="en"><em>Initial måske triggers inversion</em></td><td><span>Måske kommer hun i morgen.</span></td></tr>
</tbody></table>
        `
    },
    {
        id: "ordstilling-9",
        titleDa: "Ledsætningsordstilling",
        titleEn: "Subordinate-clause word order",
        content: `
<div class="grammar-text-pair"><p lang="da">I en ledsætning står konjunktionen først, derefter subjektet, centraladverbiet og det finitte verbum. Rækkefølgen kaldes ofte SAV.</p><p class="grammar-english" lang="en"><em>In a subordinate clause, the conjunction is followed by the subject, central adverb, and finite verb. This is often called SAV.</em></p></div>
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">K + S + A + V</th><th class="grammar-danish-column">Verbalkæde</th><th class="grammar-english-column">Resten</th></tr></thead><tbody>
<tr><td class="grammar-shared-column">fordi + jeg + ikke + har</td><td class="grammar-danish-column">læst</td><td class="grammar-english-column">bogen endnu</td></tr>
<tr><td class="grammar-shared-column">at + hun + måske + vil</td><td class="grammar-danish-column">komme</td><td class="grammar-english-column">i morgen</td></tr>
<tr><td class="grammar-shared-column">hvis + de + aldrig + har</td><td class="grammar-danish-column">set</td><td class="grammar-english-column">filmen før</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da">Ingen almindelig inversion i ledsætningen: … fordi hun i dag ikke har tid.</p><p class="grammar-english" lang="en"><em>No ordinary inversion occurs in the subordinate clause.</em></p></aside>
        `
    },
    {
        id: "ordstilling-10",
        titleDa: "Ledsætning først",
        titleEn: "A subordinate clause first",
        content: `
<div class="grammar-text-pair"><p lang="da">Når en ledsætning står først, fylder hele ledsætningen første plads. Det finitte verbum følger straks efter kommaet, og subjektet kommer bagefter.</p><p class="grammar-english" lang="en"><em>When a subordinate clause comes first, the whole clause occupies the first position. The finite verb follows the comma, then the subject.</em></p></div>
<table class="grammar-bilingual-table"><thead><tr><th>Ledsætning først</th><th>Hovedsætning med inversion</th></tr></thead><tbody>
<tr><td>Når jeg kommer hjem,</td><td>laver jeg mad.</td></tr><tr><td>Hvis det regner,</td><td>bliver vi hjemme.</td></tr><tr><td>Fordi hun var syg,</td><td>kom hun ikke på arbejde.</td></tr><tr><td>Selvom han var træt,</td><td>fortsatte han.</td></tr>
</tbody></table>
<section class="grammar-correction"><p><del>Hvis det regner, vi bliver hjemme.</del></p><p><strong>Hvis det regner, bliver vi hjemme.</strong></p><p class="grammar-english" lang="en"><em>An initial subordinate clause triggers inversion in the main clause.</em></p></section>
        `
    },
    {
        id: "ordstilling-11",
        titleDa: "Spørgsmål",
        titleEn: "Questions",
        content: `
<h3>Ja/nej-spørgsmål / Yes/no questions</h3><div class="grammar-text-pair"><p lang="da">Et ja/nej-spørgsmål begynder normalt med det finitte verbum og derefter subjektet.</p><p class="grammar-english" lang="en"><em>A yes/no question normally begins with the finite verb, followed by the subject.</em></p></div>
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Mønster</th><th class="grammar-danish-column">Start</th><th class="grammar-english-column">Resten</th></tr></thead><tbody><tr><td class="grammar-shared-column">V + S</td><td class="grammar-danish-column">Kommer du</td><td class="grammar-english-column">i morgen?</td></tr><tr><td class="grammar-shared-column">V1 + S + A + V2</td><td class="grammar-danish-column">Har hun ikke set</td><td class="grammar-english-column">filmen endnu?</td></tr></tbody></table>
<h3>Hv-spørgsmål / Wh-questions</h3><div class="grammar-text-pair"><p lang="da">Hvis hv-leddet ikke er subjekt, bruges hv-led + V + S: <strong>Hvor bor du?</strong> Hvis hv-ordet er subjekt, kommer intet ekstra subjekt: <strong>Hvem kommer?</strong></p><p class="grammar-english" lang="en"><em>If the wh-element is not the subject, use wh + V + S. If the wh-word is the subject, do not add another subject.</em></p></div>
        `
    },
    {
        id: "ordstilling-12",
        titleDa: "Direkte og indirekte spørgsmål",
        titleEn: "Direct and indirect questions",
        content: `
<div class="grammar-text-pair"><p lang="da">Et direkte spørgsmål er en hovedsætning. Et indirekte spørgsmål er en ledsætning og har ledsætningsordstilling.</p><p class="grammar-english" lang="en"><em>A direct question is a main clause. An indirect question is a subordinate clause and uses subordinate-clause word order.</em></p></div>
<table class="grammar-bilingual-table"><thead><tr><th>Direkte spørgsmål</th><th>Indirekte spørgsmål</th></tr></thead><tbody>
<tr><td>Hvor bor han?</td><td>Jeg ved ikke, hvor han bor.</td></tr><tr><td>Kommer hun i morgen?</td><td>Jeg ved ikke, om hun kommer i morgen.</td></tr><tr><td>Hvorfor er han ikke her?</td><td>Kan du forklare, hvorfor han ikke er her?</td></tr><tr><td>Har de set filmen?</td><td>Hun spørger, om de har set filmen.</td></tr>
</tbody></table>
<section class="grammar-correction"><p><del>Jeg ved ikke, hvor bor han.</del></p><p><strong>Jeg ved ikke, hvor han bor.</strong></p><p class="grammar-english" lang="en"><em>Indirect questions use subordinate-clause order.</em></p></section>
        `
    },
    {
        id: "ordstilling-13",
        titleDa: "Placering af objekter",
        titleEn: "Placement of objects",
        content: `
<div class="grammar-text-pair"><p lang="da">Det direkte objekt står normalt efter hele verballedet og centraladverbiet. Når begge objekter er substantivgrupper, står det indirekte objekt normalt først.</p><p class="grammar-english" lang="en"><em>The direct object normally follows the complete verb phrase and central adverb. When both objects are noun phrases, the indirect object normally comes first.</em></p></div>
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Mønster</th><th class="grammar-danish-column">Dansk</th><th class="grammar-english-column">English</th></tr></thead><tbody>
<tr><td class="grammar-shared-column">S + V + A + DO</td><td class="grammar-danish-column">Jeg læser ofte avisen.</td><td class="grammar-english-column grammar-english" lang="en"><em>I often read the newspaper.</em></td></tr>
<tr><td class="grammar-shared-column">S + V1 + A + V2 + DO</td><td class="grammar-danish-column">Hun har ikke købt bilen.</td><td class="grammar-english-column grammar-english" lang="en"><em>She has not bought the car.</em></td></tr>
<tr><td class="grammar-shared-column">S + V + IO + DO</td><td class="grammar-danish-column">Hun gav sin søster en bog.</td><td class="grammar-english-column grammar-english" lang="en"><em>She gave her sister a book.</em></td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">IO kan ofte omskrives med <em>til</em> eller <em>for</em>: Hun gav en bog til sin søster.</p><p class="grammar-english" lang="en"><em>The indirect object can often be rephrased with til or for.</em></p></aside>
        `
    },
    {
        id: "ordstilling-14",
        titleDa: "Pronominale objekter",
        titleEn: "Pronoun objects",
        content: `
<div class="grammar-text-pair"><p lang="da">Et kort, ubetonet objektpronomen står i en simpel hovedsætning ofte før centraladverbiet.</p><p class="grammar-english" lang="en"><em>In a simple main clause, a short unstressed object pronoun often precedes the central adverb.</em></p></div>
<table class="grammar-bilingual-table"><thead><tr><th>Substantivisk objekt</th><th>Pronominalt objekt</th></tr></thead><tbody>
<tr><td>Jeg ser ikke Peter.</td><td>Jeg ser ham ikke.</td></tr><tr><td>Vi møder sjældent naboerne.</td><td>Vi møder dem sjældent.</td></tr><tr><td>Hun viste ikke sin søster billederne.</td><td>Hun viste hende dem ikke.</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da">Med et finit og et infinit verbum står objektet ofte efter det infinitte verbum: Hun må ikke vide det. Vi har aldrig mødt dem.</p><p class="grammar-english" lang="en"><em>With a finite and non-finite verb, the object often follows the non-finite verb.</em></p></aside>
        `
    },
    {
        id: "ordstilling-15",
        titleDa: "Prædikativer",
        titleEn: "Predicatives",
        content: `
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Type</th><th class="grammar-danish-column">Dansk</th><th class="grammar-english-column">English</th></tr></thead><tbody>
<tr><th class="grammar-shared-column" scope="row">Subjektsprædikativ</th><td class="grammar-danish-column">Beskriver subjektet: Huset er stort. Hun blev læge.</td><td class="grammar-english-column grammar-english" lang="en"><em>Describes the subject: The house is large. She became a doctor.</em></td></tr>
<tr><th class="grammar-shared-column" scope="row">Objektsprædikativ</th><td class="grammar-danish-column">Beskriver objektet: Vi malede huset rødt.</td><td class="grammar-english-column grammar-english" lang="en"><em>Describes the object: We painted the house red.</em></td></tr>
</tbody></table>
<table class="grammar-bilingual-table"><tbody><tr><td>S + V + SP</td><td>Hun er glad.</td></tr><tr><td>S + V + DO + OP</td><td>Vi malede væggen hvid.</td></tr></tbody></table>
        `
    },
    {
        id: "ordstilling-16",
        titleDa: "Slutadverbialer: måde, sted og tid",
        titleEn: "Final adverbials: manner, place, and time",
        content: `
<div class="grammar-text-pair"><p lang="da">Måde, sted og tid står ofte i slutfeltet. En neutral rækkefølge kan være måde – sted – tid, men dansk tillader variation efter fokus og rytme.</p><p class="grammar-english" lang="en"><em>Manner, place, and time often occur in the final field. A neutral order may be manner–place–time, but Danish permits variation according to focus and rhythm.</em></p></div>
<table class="grammar-example-table grammar-focus-example-table"><thead><tr><th lang="da">Type</th><th class="grammar-english" lang="en">Focus</th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><th scope="row" lang="da">Måde – Hvordan?</th><td class="grammar-english" lang="en"><em>Manner – How?</em></td><td>Hun arbejder koncentreret.</td></tr><tr><th scope="row" lang="da">Sted – Hvor?</th><td class="grammar-english" lang="en"><em>Place – Where?</em></td><td>Hun arbejder på biblioteket.</td></tr><tr><th scope="row" lang="da">Tid – Hvornår?</th><td class="grammar-english" lang="en"><em>Time – When?</em></td><td>Hun arbejder om aftenen.</td></tr><tr><th scope="row" lang="da">Kombination</th><td class="grammar-english" lang="en"><em>Combination</em></td><td>Hun arbejder koncentreret på biblioteket om aftenen.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">Flyttes tid eller sted først, bruges inversion: Om aftenen arbejder hun på biblioteket.</p><p class="grammar-english" lang="en"><em>Moving time or place first triggers inversion.</em></p></aside>
        `
    },
    {
        id: "ordstilling-17",
        titleDa: "Relativsætninger",
        titleEn: "Relative clauses",
        content: `
<div class="grammar-text-pair"><p lang="da">Relativsætninger beskriver et substantiv eller pronomen. De indledes ofte med <em>som</em> eller <em>der</em> og har ledsætningsordstilling.</p><p class="grammar-english" lang="en"><em>Relative clauses describe a noun or pronoun. They often begin with som or der and use subordinate-clause word order.</em></p></div>
<table class="grammar-example-table grammar-focus-example-table"><thead><tr><th lang="da">Indleder</th><th class="grammar-english" lang="en">Function</th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><th scope="row" lang="da">der</th><td class="grammar-english" lang="en"><em>relative subject</em></td><td>Jeg kender en mand, der ikke ryger.</td></tr><tr><th scope="row" lang="da">som</th><td class="grammar-english" lang="en"><em>relative subject</em></td><td>Jeg kender en mand, som ikke ryger.</td></tr><tr><th scope="row" lang="da">som</th><td class="grammar-english" lang="en"><em>relative object</em></td><td>Det er bogen, som jeg ikke har læst.</td></tr><tr><th scope="row" lang="da">udeladt som</th><td class="grammar-english" lang="en"><em>omitted relative object</em></td><td>Det er bogen, jeg ikke har læst.</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da">Når <em>der</em> er relativt subjekt, bruges intet ekstra subjekt: en pige, der arbejder her.</p><p class="grammar-english" lang="en"><em>When der is the relative subject, no additional subject follows.</em></p></aside>
        `
    },
    {
        id: "ordstilling-18",
        titleDa: "Direkte og indirekte tale",
        titleEn: "Direct and indirect speech",
        content: `
<div class="grammar-text-pair"><p lang="da">I direkte tale gengives de præcise ord. I indirekte tale bliver den citerede sætning en ledsætning, og ordstillingen ændres.</p><p class="grammar-english" lang="en"><em>Direct speech reproduces exact words. In indirect speech, the quoted sentence becomes a subordinate clause and its word order changes.</em></p></div>
<table class="grammar-bilingual-table"><thead><tr><th>Direkte tale</th><th>Indirekte tale</th></tr></thead><tbody>
<tr><td>Hun siger: “Jeg kommer ikke.”</td><td>Hun siger, at hun ikke kommer.</td></tr><tr><td>Han spørger: “Kommer du?”</td><td>Han spørger, om jeg kommer.</td></tr><tr><td>Hun spørger: “Hvor bor han?”</td><td>Hun spørger, hvor han bor.</td></tr><tr><td>Peter siger: “Jeg har aldrig set den.”</td><td>Peter siger, at han aldrig har set den.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">Kontrollér konjunktion eller spørgeord, ordstilling, pronomen og eventuelt tid.</p><p class="grammar-english" lang="en"><em>Check the conjunction or question word, word order, pronouns, and sometimes tense.</em></p></aside>
        `
    },
    {
        id: "ordstilling-19",
        titleDa: "Det og der",
        titleEn: "Det and der",
        content: `
<div class="grammar-text-pair"><p lang="da"><em>Det</em> bruges som formelt subjekt ved vejr, tid, generelle forhold og når indholdet følger senere. <em>Der</em> introducerer ofte en ny eller ubestemt person eller ting.</p><p class="grammar-english" lang="en"><em>Det is a formal subject for weather, time, general conditions, or later content. Der often introduces a new or indefinite person or thing.</em></p></div>
<table class="grammar-bilingual-table"><thead><tr><th>Det</th><th>Der</th></tr></thead><tbody>
<tr><td>Det er koldt.</td><td>Der er en kat i haven.</td></tr><tr><td>Det er vigtigt at øve sig.</td><td>Der ligger en bog på bordet.</td></tr><tr><td>Det er dejligt, at du er her.</td><td>Der bor mange studerende her.</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da">Begge står på subjektets plads. Ved inversion: I haven står der en cykel. I dag er det koldt.</p><p class="grammar-english" lang="en"><em>Both occupy the subject position. Under inversion, they follow the finite verb.</em></p></aside>
        `
    },
    {
        id: "ordstilling-20",
        titleDa: "Fremhævelse og fokus",
        titleEn: "Emphasis and focus",
        content: `
<h3>Fronting</h3><div class="grammar-text-pair"><p lang="da">Et led kan flyttes først for at blive fremhævet. V2-reglen gælder stadig: Ham kender jeg ikke. På fredag skal jeg til tandlægen.</p><p class="grammar-english" lang="en"><em>An element can move first for emphasis. The V2 rule still applies.</em></p></div>
<h3>Det er … der/som / Cleft sentences</h3>
<table class="grammar-bilingual-table"><thead><tr><th>Neutral</th><th>Fremhævet / Emphasised</th></tr></thead><tbody>
<tr><td>Bodil lavede tegningerne.</td><td>Det var Bodil, der lavede tegningerne.</td></tr><tr><td>Picasso malede billedet.</td><td>Det er det billede, som Picasso malede.</td></tr><tr><td>Jeg skal til tandlæge på fredag.</td><td>Det er på fredag, jeg skal til tandlæge.</td></tr><tr><td>Jeg tænker på dig.</td><td>Det er dig, jeg tænker på.</td></tr>
</tbody></table>
        `
    },
    {
        id: "ordstilling-21",
        titleDa: "Ellipse og korte svar",
        titleEn: "Ellipsis and short answers",
        content: `
<div class="grammar-text-pair"><p lang="da">I samtaler udelader vi ofte led, som er tydelige fra sammenhængen. Det fulde sætningsmønster er stadig underforstået.</p><p class="grammar-english" lang="en"><em>In conversation, we often omit elements that are clear from context. The complete sentence pattern is still understood.</em></p></div>
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Kort ytring</th><th class="grammar-danish-column">Underforstået sætning</th><th class="grammar-english-column">English</th></tr></thead><tbody>
<tr><td class="grammar-shared-column">Hjem.</td><td class="grammar-danish-column">Jeg skal hjem.</td><td class="grammar-english-column grammar-english" lang="en"><em>Home. / I am going home.</em></td></tr><tr><td class="grammar-shared-column">Jens.</td><td class="grammar-danish-column">Jens har taget blyanten.</td><td class="grammar-english-column grammar-english" lang="en"><em>Jens took the pencil.</em></td></tr><tr><td class="grammar-shared-column">Ikke i dag.</td><td class="grammar-danish-column">Jeg kan ikke i dag.</td><td class="grammar-english-column grammar-english" lang="en"><em>Not today.</em></td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">Lær først den fulde sætning. Brug derefter korte svar, når sammenhængen er tydelig.</p><p class="grammar-english" lang="en"><em>Learn the complete sentence first, then use short answers when the context is clear.</em></p></aside>
        `
    },
    {
        id: "ordstilling-22",
        titleDa: "Hurtig beslutningsguide",
        titleEn: "Quick decision guide",
        content: `
<table class="grammar-example-table"><thead><tr><th class="grammar-shared-column">Spørgsmål / Question</th><th class="grammar-danish-column">Regel / Rule</th><th class="grammar-english-column">Eksempel</th></tr></thead><tbody>
<tr><td class="grammar-shared-column">Hovedsætning?</td><td class="grammar-danish-column">V2</td><td class="grammar-english-column">I dag kommer hun.</td></tr><tr><td class="grammar-shared-column">Subjekt først?</td><td class="grammar-danish-column">S + V</td><td class="grammar-english-column">Hun kommer i dag.</td></tr><tr><td class="grammar-shared-column">Andet led først?</td><td class="grammar-danish-column">Led + V + S</td><td class="grammar-english-column">I dag kommer hun.</td></tr><tr><td class="grammar-shared-column">Ledsætning?</td><td class="grammar-danish-column">K + S + A + V</td><td class="grammar-english-column">fordi hun ikke kommer</td></tr><tr><td class="grammar-shared-column">Ledsætning først?</td><td class="grammar-danish-column">komma + V + S</td><td class="grammar-english-column">Hvis hun kommer, bliver jeg glad.</td></tr><tr><td class="grammar-shared-column">Ja/nej-spørgsmål?</td><td class="grammar-danish-column">V + S</td><td class="grammar-english-column">Kommer hun?</td></tr><tr><td class="grammar-shared-column">Hv-spørgsmål?</td><td class="grammar-danish-column">Hv + V + S</td><td class="grammar-english-column">Hvor bor hun?</td></tr><tr><td class="grammar-shared-column">Indirekte spørgsmål?</td><td class="grammar-danish-column">ledsætningsordstilling</td><td class="grammar-english-column">Jeg ved ikke, hvor hun bor.</td></tr><tr><td class="grammar-shared-column">Noget ubestemt?</td><td class="grammar-danish-column">der + V + egentligt S</td><td class="grammar-english-column">Der står en bil udenfor.</td></tr>
</tbody></table>
        `
    },
    {
        id: "ordstilling-23",
        titleDa: "Typiske fejl og tjekliste",
        titleEn: "Common mistakes and checklist",
        content: `
<table class="grammar-correction-table grammar-correction-table--paired"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Forkert</strong><em class="grammar-english" lang="en">Incorrect</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Korrekt</strong><em class="grammar-english" lang="en">Correct</em></span></th></tr></thead><tbody>
<tr><td class="grammar-result grammar-result--incorrect">I dag jeg arbejder hjemme.</td><td class="grammar-result grammar-result--correct">I dag arbejder jeg hjemme.</td></tr><tr class="grammar-correction-reason"><td colspan="2"><span lang="da">V2 efter et foranstillet tidsled.</span><em lang="en">Use V2 after a fronted time expression.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Hun ikke kommer i morgen.</td><td class="grammar-result grammar-result--correct">Hun kommer ikke i morgen.</td></tr><tr class="grammar-correction-reason"><td colspan="2"><span lang="da">I en hovedsætning står det finitte verbum før <strong>ikke</strong>.</span><em lang="en">In a main clause, the finite verb precedes ikke.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">… fordi hun kommer ikke.</td><td class="grammar-result grammar-result--correct">… fordi hun ikke kommer.</td></tr><tr class="grammar-correction-reason"><td colspan="2"><span lang="da">I en ledsætning står <strong>ikke</strong> før det finitte verbum.</span><em lang="en">In a subordinate clause, ikke precedes the finite verb.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Hvis det regner, vi bliver hjemme.</td><td class="grammar-result grammar-result--correct">Hvis det regner, bliver vi hjemme.</td></tr><tr class="grammar-correction-reason"><td colspan="2"><span lang="da">En indledende ledsætning giver inversion.</span><em lang="en">An opening subordinate clause triggers inversion.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg ved ikke, hvor bor han.</td><td class="grammar-result grammar-result--correct">Jeg ved ikke, hvor han bor.</td></tr><tr class="grammar-correction-reason"><td colspan="2"><span lang="da">Indirekte spørgsmål har ledsætningsordstilling.</span><em lang="en">Indirect questions use subordinate-clause order.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg har set ikke filmen.</td><td class="grammar-result grammar-result--correct">Jeg har ikke set filmen.</td></tr><tr class="grammar-correction-reason"><td colspan="2"><span lang="da">Centraladverbiet står mellem V1 og V2.</span><em lang="en">The central adverb occurs between V1 and V2.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Det er mange mennesker her.</td><td class="grammar-result grammar-result--correct">Der er mange mennesker her.</td></tr><tr class="grammar-correction-reason"><td colspan="2"><span lang="da"><strong>Der</strong> introducerer et ubestemt egentligt subjekt.</span><em lang="en">Der introduces an indefinite real subject.</em></td></tr>
</tbody></table>
        `
    },
    
    {
        id: "ordstilling-25-a",
        titleDa: "Øvelser A–E",
        titleEn: "Exercises A–E",
        content: `
<section class="grammar-exercise"><h3>A. Find subjekt og finit verbum</h3><ol><li>Min ven arbejder på et hotel.</li><li>I morgen skal vi besøge København.</li><li>Hun har aldrig været i Sverige.</li><li>Når bussen kommer, stiger vi på.</li><li>Der står en mand ved døren.</li></ol></section>
<section class="grammar-exercise"><h3>B. Ligefrem eller inversion?</h3><ol><li>Jeg / arbejder / hjemme / i dag.</li><li>I dag / jeg / arbejder / hjemme.</li><li>På stationen / mange mennesker / venter.</li><li>Den film / har / jeg / ikke / set.</li><li>Heldigvis / fandt / vi / nøglerne.</li></ol></section>
<section class="grammar-exercise"><h3>C. Placér centraladverbiet</h3><ol><li>Hun kommer i morgen. (ikke)</li><li>Vi har set filmen. (aldrig)</li><li>De vil spise sammen. (gerne)</li><li>Jeg arbejder hjemme. (ofte)</li><li>Han kan forstå spørgsmålet. (måske)</li></ol></section>
<section class="grammar-exercise"><h3>D. Hovedsætning eller ledsætning?</h3><p>Placér <em>ikke</em>: Hun kommer i morgen. / Jeg ved, at hun kommer i morgen. / Vi køber bilen. / … fordi vi køber bilen.</p></section>
<section class="grammar-exercise"><h3>E. Ledsætning først</h3><ol><li>Hvis det regner / vi / hjemme / bliver.</li><li>Når jeg kommer hjem / jeg / mad / laver.</li><li>Fordi hun er syg / hun / ikke / arbejder.</li><li>Selvom han var træt / han / videre / fortsatte.</li></ol></section>
        `
    },
    {
        id: "ordstilling-25-b",
        titleDa: "Øvelser F–K",
        titleEn: "Exercises F–K",
        content: `
<section class="grammar-exercise"><h3>F. Lav spørgsmål</h3><ol><li>Du kommer i morgen. → ja/nej-spørgsmål</li><li>Hun bor i Aarhus. → spørg om sted</li><li>Peter købte bilen. → spørg om objektet</li><li>Maria kommer i morgen. → spørg om subjektet</li></ol></section>
<section class="grammar-exercise"><h3>G. Direkte til indirekte spørgsmål</h3><ol><li>Hvor bor han? → Jeg ved ikke, …</li><li>Kommer hun i morgen? → Peter spørger, …</li><li>Hvorfor er de ikke her? → Kan du forklare, …</li></ol></section>
<section class="grammar-exercise"><h3>H. Objekter</h3><ol><li>Hun gav / en bog / sin søster.</li><li>Jeg ser / ikke / ham.</li><li>Vi har / dem / aldrig / mødt.</li><li>Hun viste / dem / ikke / hende.</li></ol></section>
<section class="grammar-exercise"><h3>I. Det eller der?</h3><ol><li>___ regner i dag.</li><li>___ står en bil udenfor.</li><li>___ er vigtigt at læse hver dag.</li><li>I haven ligger ___ en bold.</li></ol></section>
<section class="grammar-exercise"><h3>J. Ret fejlene</h3><ol><li>I morgen jeg skal arbejde.</li><li>Hun ikke har tid.</li><li>Jeg tror, at hun kommer ikke.</li><li>Hvis han ringer, jeg svarer.</li><li>Jeg ved ikke, hvor arbejder hun.</li><li>Der mange mennesker er i byen.</li></ol></section>
        `
    },
    {
        id: "ordstilling-26-a",
        titleDa: "Facit A–E",
        titleEn: "Answer key A–E",
        content: `
<section class="grammar-exercise"><h3>A. Subjekt og finit verbum</h3><ol><li>S: Min ven; V1: arbejder.</li><li>S: vi; V1: skal.</li><li>S: Hun; V1: har.</li><li>LS: S bussen, V1 kommer. HS: V1 stiger, S vi.</li><li>Foreløbigt S: Der; V1: står; egentligt S: en mand.</li></ol></section>
<section class="grammar-exercise"><h3>B. Ligefrem eller inversion?</h3><ol><li>Jeg arbejder hjemme i dag.</li><li>I dag arbejder jeg hjemme.</li><li>På stationen venter mange mennesker.</li><li>Den film har jeg ikke set.</li><li>Heldigvis fandt vi nøglerne.</li></ol></section>
<section class="grammar-exercise"><h3>C. Centraladverbier</h3><ol><li>Hun kommer ikke i morgen.</li><li>Vi har aldrig set filmen.</li><li>De vil gerne spise sammen.</li><li>Jeg arbejder ofte hjemme.</li><li>Han kan måske forstå spørgsmålet. / Måske kan han forstå spørgsmålet.</li></ol></section>
<section class="grammar-exercise"><h3>D. Hovedsætning eller ledsætning?</h3><p>Hun kommer ikke. / … at hun ikke kommer. / Vi køber ikke bilen. / … fordi vi ikke køber bilen.</p></section>
<section class="grammar-exercise"><h3>E. Ledsætning først</h3><ol><li>Hvis det regner, bliver vi hjemme.</li><li>Når jeg kommer hjem, laver jeg mad.</li><li>Fordi hun er syg, arbejder hun ikke.</li><li>Selvom han var træt, fortsatte han videre.</li></ol></section>
        `
    },
    {
        id: "ordstilling-26-b",
        titleDa: "Facit F–J",
        titleEn: "Answer key F–J",
        content: `
<section class="grammar-exercise"><h3>F. Spørgsmål</h3><ol><li>Kommer du i morgen?</li><li>Hvor bor hun?</li><li>Hvad købte Peter?</li><li>Hvem kommer i morgen?</li></ol></section>
<section class="grammar-exercise"><h3>G. Indirekte spørgsmål</h3><ol><li>Jeg ved ikke, hvor han bor.</li><li>Peter spørger, om hun kommer i morgen.</li><li>Kan du forklare, hvorfor de ikke er her?</li></ol></section>
<section class="grammar-exercise"><h3>H. Objekter</h3><ol><li>Hun gav sin søster en bog.</li><li>Jeg ser ham ikke.</li><li>Vi har aldrig mødt dem.</li><li>Hun viste hende dem ikke.</li></ol></section>
<section class="grammar-exercise"><h3>I. Det eller der?</h3><ol><li>Det regner i dag.</li><li>Der står en bil udenfor.</li><li>Det er vigtigt at læse hver dag.</li><li>I haven ligger der en bold.</li></ol></section>
<section class="grammar-exercise"><h3>J. Ret fejlene</h3><ol><li>I morgen skal jeg arbejde.</li><li>Hun har ikke tid.</li><li>Jeg tror, at hun ikke kommer.</li><li>Hvis han ringer, svarer jeg.</li><li>Jeg ved ikke, hvor hun arbejder.</li><li>Der er mange mennesker i byen.</li></ol></section>
        `
    },
    {
        id: "ordstilling-27",
        titleDa: "Miniordliste",
        titleEn: "Mini glossary",
        content: `
<table class="grammar-glossary-table"><thead><tr><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th><th lang="da">Kort forklaring</th><th class="grammar-english" lang="en">Short explanation</th></tr></thead><tbody>
<tr><th scope="row" lang="da">ordstilling</th><td class="grammar-english" lang="en"><em>word order</em></td><td lang="da">rækkefølgen af sætningsled</td><td class="grammar-english" lang="en"><em>the sequence of sentence elements</em></td></tr>
<tr><th scope="row" lang="da">sætningsled</th><td class="grammar-english" lang="en"><em>sentence element</em></td><td lang="da">ord eller gruppe med en funktion</td><td class="grammar-english" lang="en"><em>a word or group with a function</em></td></tr>
<tr><th scope="row" lang="da">finit verbum</th><td class="grammar-english" lang="en"><em>finite verb</em></td><td lang="da">viser tid eller bydemåde</td><td class="grammar-english" lang="en"><em>shows tense or the imperative</em></td></tr>
<tr><th scope="row" lang="da">hovedsætning</th><td class="grammar-english" lang="en"><em>main clause</em></td><td lang="da">kan normalt stå alene</td><td class="grammar-english" lang="en"><em>can normally stand alone</em></td></tr>
<tr><th scope="row" lang="da">ledsætning</th><td class="grammar-english" lang="en"><em>subordinate clause</em></td><td lang="da">er underordnet en hovedsætning</td><td class="grammar-english" lang="en"><em>depends on a main clause</em></td></tr>
<tr><th scope="row" lang="da">V2-regel</th><td class="grammar-english" lang="en"><em>V2 rule</em></td><td lang="da">finit verbum på anden syntaktiske plads</td><td class="grammar-english" lang="en"><em>finite verb in the second syntactic position</em></td></tr>
<tr><th scope="row" lang="da">inversion</th><td class="grammar-english" lang="en"><em>inversion</em></td><td lang="da">finit verbum før subjekt</td><td class="grammar-english" lang="en"><em>finite verb before the subject</em></td></tr>
<tr><th scope="row" lang="da">centraladverbium</th><td class="grammar-english" lang="en"><em>central adverb</em></td><td lang="da">fx ikke, altid, aldrig, måske</td><td class="grammar-english" lang="en"><em>for example ikke, altid, aldrig, måske</em></td></tr>
<tr><th scope="row" lang="da">foreløbigt subjekt</th><td class="grammar-english" lang="en"><em>provisional subject</em></td><td lang="da">fx der før det egentlige subjekt</td><td class="grammar-english" lang="en"><em>for example der before the real subject</em></td></tr>
<tr><th scope="row" lang="da">ellipse</th><td class="grammar-english" lang="en"><em>ellipsis</em></td><td lang="da">underforstået udeladelse</td><td class="grammar-english" lang="en"><em>an understood omission</em></td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da"><strong>Din vigtigste vane:</strong> Find altid det finitte verbum og subjektet. Spørg derefter: hovedsætning eller ledsætning?</p><p class="grammar-english" lang="en"><em>Your most important habit: always find the finite verb and subject, then decide whether the clause is main or subordinate.</em></p></aside>
        `
    }
];
