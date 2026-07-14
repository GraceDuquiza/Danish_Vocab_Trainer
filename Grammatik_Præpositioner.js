// Grammatik_Præpositioner.js
// Bilingual preposition lessons adapted from Praepositioner.docx.

const praepositionGrammarPages = [
    {
        id: "praeposition-1",
        titleDa: "Hvad er en præposition?",
        titleEn: "What is a preposition?",
        content: `
<p lang="da">En præposition kaldes også et forholdsord. Den viser et forhold mellem personer, ting, steder, tider eller handlinger. Præpositioner bøjes ikke.</p>
<p class="grammar-english" lang="en"><em>A preposition shows a relationship between people, objects, places, times, or actions. Prepositions do not inflect.</em></p>
<table class="grammar-example-table grammar-preposition-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Forhold</strong><em class="grammar-english" lang="en">Relationship</em></span></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead><tbody>
<tr><td><span class="grammar-meaning-pair"><span lang="da">Sted</span><em lang="en">Place</em></span></td><td>Bogen ligger på bordet.</td><td class="grammar-english" lang="en"><em>The book is on the table.</em></td></tr>
<tr><td><span class="grammar-meaning-pair"><span lang="da">Retning</span><em lang="en">Direction</em></span></td><td>Hun går til stationen.</td><td class="grammar-english" lang="en"><em>She walks to the station.</em></td></tr>
<tr><td><span class="grammar-meaning-pair"><span lang="da">Tid</span><em lang="en">Time</em></span></td><td>Vi mødes om en time.</td><td class="grammar-english" lang="en"><em>We will meet in an hour.</em></td></tr>
<tr><td><span class="grammar-meaning-pair"><span lang="da">Oprindelse</span><em lang="en">Origin</em></span></td><td>Brevet er fra kommunen.</td><td class="grammar-english" lang="en"><em>The letter is from the municipality.</em></td></tr>
<tr><td><span class="grammar-meaning-pair"><span lang="da">Selskab</span><em lang="en">Company</em></span></td><td>Jeg rejser med min ven.</td><td class="grammar-english" lang="en"><em>I am travelling with my friend.</em></td></tr>
<tr><td><span class="grammar-meaning-pair"><span lang="da">Emne</span><em lang="en">Topic</em></span></td><td>Vi taler om filmen.</td><td class="grammar-english" lang="en"><em>We are talking about the film.</em></td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Hurtig test:</strong> En præposition står ofte foran et ord eller en gruppe ord: på bordet, med hende, efter arbejdet.</p><p class="grammar-english" lang="en"><em>A preposition often comes before a word or phrase.</em></p></aside>
        `
    },
    {
        id: "praeposition-2",
        titleDa: "Præposition og styrelse",
        titleEn: "Preposition and complement",
        content: `
<p lang="da">Det ord eller den gruppe, som står efter præpositionen, kaldes præpositionens <strong>styrelse</strong>. Præpositionen og styrelsen danner tilsammen et præpositionsled.</p><p class="grammar-english" lang="en"><em>The word or phrase following the preposition is its complement. Together they form a prepositional phrase.</em></p>
<table class="grammar-preposition-table"><thead><tr><th><strong>Præposition</strong></th><th><span class="grammar-paired-label"><strong lang="da">Styrelse</strong><em class="grammar-english" lang="en">Complement</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Hele leddet</strong><em class="grammar-english" lang="en">Complete phrase</em></span></th></tr></thead><tbody>
<tr><td>på</td><td>bordet</td><td>på bordet</td></tr><tr><td>med</td><td>min ven</td><td>med min ven</td></tr><tr><td>efter</td><td>arbejdet</td><td>efter arbejdet</td></tr><tr><td>for</td><td>at lære dansk</td><td>for at lære dansk</td></tr><tr><td>på</td><td>om han kommer</td><td>på, om han kommer</td></tr>
</tbody></table>
<div class="grammar-example"><p lang="da">Bogen ligger <strong>på det lille bord</strong>. Præposition: på. Styrelse: det lille bord.</p><p class="grammar-english" lang="en"><em>The book is on the small table. Preposition: på. Complement: det lille bord.</em></p></div>
<aside class="grammar-rule"><p lang="da">Præpositionen er kun det lille ord. Hele forbindelsen kaldes et præpositionsled: i + København = i København.</p><p class="grammar-english" lang="en"><em>The preposition is only the small word; the full combination is the prepositional phrase.</em></p></aside>
        `
    },
    {
        id: "praeposition-3",
        titleDa: "Hvad kan stå efter en præposition?",
        titleEn: "What can follow a preposition?",
        content: `
<p lang="da">Styrelsen kan være et substantiv, et pronomen, en navnemåde eller en ledsætning.</p><p class="grammar-english" lang="en"><em>The complement can be a noun, pronoun, infinitive, or clause.</em></p>
<table class="grammar-example-table grammar-preposition-table"><thead><tr><th><strong>Type</strong></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead><tbody>
<tr><td>Substantiv</td><td>Børnene kom hjem fra børnehaven.</td><td class="grammar-english" lang="en"><em>The children came home from kindergarten.</em></td></tr><tr><td>Pronomen</td><td>Ulla ventede på ham.</td><td class="grammar-english" lang="en"><em>Ulla waited for him.</em></td></tr><tr><td>Infinitiv</td><td>Hun er bange for at gå alene.</td><td class="grammar-english" lang="en"><em>She is afraid of walking alone.</em></td></tr><tr><td>At-ledsætning</td><td>Vi venter på, at han kommer.</td><td class="grammar-english" lang="en"><em>We are waiting for him to come.</em></td></tr><tr><td>Indirekte spørgsmål</td><td>Hun tænker på, om han har tid.</td><td class="grammar-english" lang="en"><em>She is wondering whether he has time.</em></td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">Når styrelsen er en ledsætning, bruger eksemplerne i denne guide komma: på, at …; på, om …</p><p class="grammar-english" lang="en"><em>When the complement is a clause, this guide places a comma before it.</em></p></aside>
        `
    },
    {
        id: "praeposition-4",
        titleDa: "Præpositioner for sted",
        titleEn: "Prepositions of place",
        content: `
<p lang="da">Stedspræpositioner fortæller, hvor en person eller ting befinder sig.</p><p class="grammar-english" lang="en"><em>Prepositions of place show where a person or object is located.</em></p>
<table class="grammar-preposition-table grammar-preposition-detail-table"><thead><tr><th><strong>Præposition</strong></th><th><span class="grammar-paired-label"><strong lang="da">Dansk</strong><em class="grammar-english" lang="en">English</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><td>i</td><td><span class="grammar-meaning-pair"><span lang="da">inde i et område</span><em lang="en">inside an area</em></span></td><td>Børnene er i huset.</td></tr><tr><td>på</td><td><span class="grammar-meaning-pair"><span lang="da">flade eller aktivitet</span><em lang="en">surface or activity</em></span></td><td>Koppen står på bordet.</td></tr><tr><td>ved</td><td><span class="grammar-meaning-pair"><span lang="da">tæt på et punkt</span><em lang="en">near a point</em></span></td><td>Vi mødes ved stationen.</td></tr><tr><td>hos</td><td><span class="grammar-meaning-pair"><span lang="da">hos person eller fagperson</span><em lang="en">at a person's place</em></span></td><td>Jeg er hos lægen.</td></tr><tr><td>under</td><td><span class="grammar-meaning-pair"><span lang="da">lavere end</span><em lang="en">below</em></span></td><td>Tasken står under bordet.</td></tr><tr><td>over</td><td><span class="grammar-meaning-pair"><span lang="da">højere end</span><em lang="en">above</em></span></td><td>Lampen hænger over bordet.</td></tr><tr><td>foran / bag</td><td><span class="grammar-meaning-pair"><span lang="da">forside / bagside</span><em lang="en">in front / behind</em></span></td><td>Bilen holder foran huset.</td></tr><tr><td>mellem</td><td><span class="grammar-meaning-pair"><span lang="da">ting på hver side</span><em lang="en">between items</em></span></td><td>Stolen står mellem bordet og vinduet.</td></tr><tr><td>blandt</td><td><span class="grammar-meaning-pair"><span lang="da">inde i en gruppe</span><em lang="en">among a group</em></span></td><td>Hun stod blandt vennerne.</td></tr>
</tbody></table>
        `
    },
    {
        id: "praeposition-5",
        titleDa: "I, på, hos og ved",
        titleEn: "I, på, hos, and ved",
        content: `
<p lang="da">Valget følger ofte faste danske mønstre. Reglerne hjælper, men hele udtryk og lokale undtagelser skal også læres.</p><p class="grammar-english" lang="en"><em>The choice often follows fixed Danish patterns. Learn complete expressions and local exceptions too.</em></p>
<table class="grammar-preposition-table grammar-preposition-detail-table"><thead><tr><th><strong>Præposition</strong></th><th><span class="grammar-paired-label"><strong lang="da">Dansk</strong><em class="grammar-english" lang="en">English</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempler</strong><em class="grammar-english" lang="en">Examples</em></span></th></tr></thead><tbody>
<tr><td>i</td><td><span class="grammar-meaning-pair"><span lang="da">lande, byer, rum, beholdere</span><em lang="en">countries, cities, rooms, containers</em></span></td><td>i Danmark, i Aarhus, i huset, i bilen</td></tr><tr><td>på</td><td><span class="grammar-meaning-pair"><span lang="da">flader, øer, aktiviteter</span><em lang="en">surfaces, islands, activities</em></span></td><td>på bordet, på Fyn, på arbejde</td></tr><tr><td>hos</td><td><span class="grammar-meaning-pair"><span lang="da">person eller fagperson</span><em lang="en">person or professional</em></span></td><td>hos mine forældre, hos tandlægen</td></tr><tr><td>ved</td><td><span class="grammar-meaning-pair"><span lang="da">tæt på et punkt</span><em lang="en">near a specific point</em></span></td><td>ved indgangen, ved stationen</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Lær hele udtrykket:</strong> på universitetet, ved universitetet og til universitetet har forskellige betydninger.</p><p class="grammar-english" lang="en"><em>Learn the whole expression together with its meaning.</em></p></aside>
        `
    },
    {
        id: "praeposition-6",
        titleDa: "Retning og bevægelse",
        titleEn: "Direction and movement",
        content: `
<p lang="da">Retningspræpositioner viser målet, udgangspunktet eller vejen for en bevægelse.</p><p class="grammar-english" lang="en"><em>Prepositions of direction show a destination, origin, or path.</em></p>
<table class="grammar-preposition-table grammar-preposition-detail-table"><thead><tr><th><strong>Præposition</strong></th><th><span class="grammar-paired-label"><strong lang="da">Dansk</strong><em class="grammar-english" lang="en">English</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><td>til</td><td><span class="grammar-meaning-pair"><span lang="da">mål</span><em lang="en">destination</em></span></td><td>Hun går til stationen.</td></tr><tr><td>fra</td><td><span class="grammar-meaning-pair"><span lang="da">udgangspunkt</span><em lang="en">origin</em></span></td><td>Han kommer fra Odense.</td></tr><tr><td>mod / imod</td><td><span class="grammar-meaning-pair"><span lang="da">i retning af</span><em lang="en">towards</em></span></td><td>Bilen kører mod centrum.</td></tr><tr><td>gennem</td><td><span class="grammar-meaning-pair"><span lang="da">fra side til side</span><em lang="en">through</em></span></td><td>Vi gik gennem parken.</td></tr><tr><td>forbi</td><td><span class="grammar-meaning-pair"><span lang="da">passerer et sted</span><em lang="en">past a place</em></span></td><td>Bussen kører forbi skolen.</td></tr><tr><td>over / langs</td><td><span class="grammar-meaning-pair"><span lang="da">hen over / følger en kant</span><em lang="en">across / along</em></span></td><td>Vi går over gaden og langs stranden.</td></tr><tr><td>ind i / ud af</td><td><span class="grammar-meaning-pair"><span lang="da">bevægelse ind / ud</span><em lang="en">movement in / out</em></span></td><td>Hun går ind i huset. Han går ud af bilen.</td></tr><tr><td>hen til</td><td><span class="grammar-meaning-pair"><span lang="da">frem til et punkt</span><em lang="en">up to a point</em></span></td><td>Kom hen til mig.</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da"><strong>Hjem og hjemme:</strong> Jeg går hjem (retning). Jeg er hjemme (sted). Brug normalt ikke til foran hjem.</p><p class="grammar-english" lang="en"><em>Use hjem for direction and hjemme for location. Normally omit til before hjem.</em></p></aside>
        `
    },
    {
        id: "praeposition-7",
        titleDa: "Præpositioner for tid",
        titleEn: "Prepositions of time",
        content: `
<p lang="da">Tidspræpositioner viser et tidspunkt, en periode, en begyndelse eller en afslutning.</p><p class="grammar-english" lang="en"><em>Prepositions of time express a point, period, beginning, or ending.</em></p>
<table class="grammar-preposition-table grammar-preposition-detail-table"><thead><tr><th><strong>Præposition</strong></th><th><span class="grammar-paired-label"><strong lang="da">Dansk</strong><em class="grammar-english" lang="en">English</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><td>i</td><td><span class="grammar-meaning-pair"><span lang="da">måned, år, del af dagen, varighed</span><em lang="en">month, year, part of day, duration</em></span></td><td>i juli, i 2026, i morges, i to timer</td></tr><tr><td>på</td><td><span class="grammar-meaning-pair"><span lang="da">ugedag eller plan</span><em lang="en">weekday or plan</em></span></td><td>på mandag, på fredag aften</td></tr><tr><td>om</td><td><span class="grammar-meaning-pair"><span lang="da">fremtid eller gentagelse</span><em lang="en">future or repetition</em></span></td><td>om en time, om morgenen</td></tr><tr><td>for … siden</td><td><span class="grammar-meaning-pair"><span lang="da">tid tilbage fra nu</span><em lang="en">ago</em></span></td><td>for tre år siden</td></tr><tr><td>siden</td><td><span class="grammar-meaning-pair"><span lang="da">begyndelse frem til nu</span><em lang="en">since a starting point</em></span></td><td>siden 2024</td></tr><tr><td>fra … til</td><td><span class="grammar-meaning-pair"><span lang="da">start og slutning</span><em lang="en">start and end</em></span></td><td>fra klokken 8 til 16</td></tr><tr><td>før / efter</td><td><span class="grammar-meaning-pair"><span lang="da">tidligere / senere</span><em lang="en">before / after</em></span></td><td>før mødet, efter arbejdet</td></tr><tr><td>under / inden</td><td><span class="grammar-meaning-pair"><span lang="da">i løbet af / senest før</span><em lang="en">during / by</em></span></td><td>under mødet, inden fredag</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">Lær faste tidsudtryk som hele forbindelser: i går, i nat, på fredag, om morgenen og til sommer.</p><p class="grammar-english" lang="en"><em>Learn fixed time expressions as complete phrases.</em></p></aside>
        `
    },
    {
        id: "praeposition-8",
        titleDa: "Varighed, fremtid og fortid",
        titleEn: "Duration, future, and past",
        content: `
<table class="grammar-example-table grammar-preposition-table"><thead><tr><th><strong>Mønster</strong></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead><tbody>
<tr><td><span class="grammar-meaning-pair"><span lang="da">i + varighed</span><em lang="en">for a duration</em></span></td><td>Jeg har boet i Danmark i fem år.</td><td class="grammar-english" lang="en"><em>I have lived in Denmark for five years.</em></td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">om + fremtid</span><em lang="en">in a future period</em></span></td><td>Toget kommer om ti minutter.</td><td class="grammar-english" lang="en"><em>The train will arrive in ten minutes.</em></td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">for … siden</span><em lang="en">ago</em></span></td><td>Jeg flyttede hertil for tre år siden.</td><td class="grammar-english" lang="en"><em>I moved here three years ago.</em></td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">siden + startpunkt</span><em lang="en">since a starting point</em></span></td><td>Jeg har arbejdet her siden januar.</td><td class="grammar-english" lang="en"><em>I have worked here since January.</em></td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">på + tidsforbrug</span><em lang="en">completed within</em></span></td><td>Hun læste bogen på to dage.</td><td class="grammar-english" lang="en"><em>She read the book in two days.</em></td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Sammenlign:</strong> Jeg læste i to timer = aktiviteten varede to timer. Jeg læste bogen på to timer = bogen blev færdig.</p><p class="grammar-english" lang="en"><em>Compare duration with the time used to complete something.</em></p></aside>
        `
    },
    {
        id: "praeposition-9",
        titleDa: "Oversigt over almindelige præpositioner",
        titleEn: "Overview of common prepositions",
        content: `
<table class="grammar-preposition-table grammar-preposition-detail-table"><thead><tr><th><strong>Præposition</strong></th><th><span class="grammar-paired-label"><strong lang="da">Dansk</strong><em class="grammar-english" lang="en">English</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><td>af</td><td><span class="grammar-meaning-pair"><span lang="da">oprindelse, materiale, del</span><em lang="en">origin, material, part</em></span></td><td>et bord af træ; en af vennerne</td></tr><tr><td>efter</td><td><span class="grammar-meaning-pair"><span lang="da">senere end, søgen</span><em lang="en">after, search</em></span></td><td>efter mødet; lede efter nøgler</td></tr><tr><td>for</td><td><span class="grammar-meaning-pair"><span lang="da">fordel, formål</span><em lang="en">benefit, purpose</em></span></td><td>kæmpe for frihed; for at lære</td></tr><tr><td>fra / til</td><td><span class="grammar-meaning-pair"><span lang="da">udgangspunkt / mål</span><em lang="en">origin / destination</em></span></td><td>fra København; til skolen</td></tr><tr><td>med</td><td><span class="grammar-meaning-pair"><span lang="da">selskab, middel</span><em lang="en">company, means</em></span></td><td>med Anna; med tog</td></tr><tr><td>mod</td><td><span class="grammar-meaning-pair"><span lang="da">retning, opposition</span><em lang="en">direction, opposition</em></span></td><td>mod nord; kæmpe mod sygdom</td></tr><tr><td>om</td><td><span class="grammar-meaning-pair"><span lang="da">emne, tid</span><em lang="en">topic, time</em></span></td><td>tale om filmen; om en time</td></tr><tr><td>over / under</td><td><span class="grammar-meaning-pair"><span lang="da">højere / lavere</span><em lang="en">above / below</em></span></td><td>over bordet; under stolen</td></tr><tr><td>på</td><td><span class="grammar-meaning-pair"><span lang="da">flade, aktivitet, dag</span><em lang="en">surface, activity, day</em></span></td><td>på bordet; på arbejde; på fredag</td></tr><tr><td>ved</td><td><span class="grammar-meaning-pair"><span lang="da">tæt på, ved hjælp af</span><em lang="en">near, by means of</em></span></td><td>ved døren; ved at øve</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da">En præposition kan have flere betydninger. Oversættelsen afhænger af sammenhængen, så lær hele udtrykket.</p><p class="grammar-english" lang="en"><em>A preposition can have several meanings. Learn the complete phrase in context.</em></p></aside>
        `
    },
    {
        id: "praeposition-10",
        titleDa: "Sammensatte præpositioner",
        titleEn: "Multi-word prepositions",
        content: `
<p lang="da">Nogle præpositioner består af flere ord og fungerer som én fast enhed.</p><p class="grammar-english" lang="en"><em>Some prepositions consist of several words and function as one fixed unit.</em></p>
<table class="grammar-fixed-combination-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Fast forbindelse</strong><em class="grammar-english" lang="en">Fixed combination and meaning</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">på grund af</span><em lang="en">because of</em></span></th><td>Kampen blev aflyst på grund af regnen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">i stedet for</span><em lang="en">instead of</em></span></th><td>Vi tog toget i stedet for bilen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">ved siden af</span><em lang="en">next to</em></span></th><td>Hun sidder ved siden af mig.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">i nærheden af</span><em lang="en">near</em></span></th><td>Der ligger en butik i nærheden af stationen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">i løbet af</span><em lang="en">during</em></span></th><td>Jeg ringer i løbet af dagen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">på trods af</span><em lang="en">despite</em></span></th><td>De gik ud på trods af regnen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">i forhold til</span><em lang="en">in relation to</em></span></th><td>Prisen er høj i forhold til kvaliteten.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">i forbindelse med</span><em lang="en">in connection with</em></span></th><td>Vejen er lukket i forbindelse med arbejdet.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">sammen med</span><em lang="en">together with</em></span></th><td>Jeg rejser sammen med min familie.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">ved hjælp af</span><em lang="en">with the help of</em></span></th><td>Vi løste opgaven ved hjælp af en app.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">Mange sammensatte præpositioner slutter på <strong>af</strong>. Hele udtrykket styrer næste led.</p><p class="grammar-english" lang="en"><em>Many multi-word prepositions end in af. The complete expression governs the following phrase.</em></p></aside>
        `
    },
    {
        id: "praeposition-11",
        titleDa: "Verbum + præposition",
        titleEn: "Verb + preposition",
        content: `
<p lang="da">Mange verber bruges med en bestemt præposition. Lær verbet og præpositionen som én enhed.</p><p class="grammar-english" lang="en"><em>Many verbs take a particular preposition. Learn the combination as one unit.</em></p>
<table class="grammar-fixed-combination-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Fast forbindelse</strong><em class="grammar-english" lang="en">Fixed combination and meaning</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">lede efter</span><em lang="en">look for</em></span></th><td>Jeg leder efter mine nøgler.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">vente på</span><em lang="en">wait for</em></span></th><td>Vi venter på bussen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">interessere sig for</span><em lang="en">be interested in</em></span></th><td>Han interesserer sig for historie.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">regne med</span><em lang="en">count on</em></span></th><td>Du kan regne med mig.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">bede om</span><em lang="en">ask for</em></span></th><td>Jeg vil bede om hjælp.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">finde ud af</span><em lang="en">find out</em></span></th><td>Jeg skal finde ud af det.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">passe på</span><em lang="en">watch out for</em></span></th><td>Pas på bilen!</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">synes om</span><em lang="en">like</em></span></th><td>Jeg synes om hendes idé.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">handle om</span><em lang="en">be about</em></span></th><td>Bogen handler om en familie.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">tænke på / over</span><em lang="en">think about / consider</em></span></th><td>Jeg tænker på dig / over dit forslag.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Spørge efter</strong> en person eller ting. <strong>Spørge om</strong> information om et emne.</p><p class="grammar-english" lang="en"><em>Use spørge efter when seeking someone or something; spørge om when asking about a topic.</em></p></aside>
        `
    },
    {
        id: "praeposition-12",
        titleDa: "Adjektiv + præposition",
        titleEn: "Adjective + preposition",
        content: `
<p lang="da">Adjektiver kan kræve en bestemt præposition. Lær hele forbindelsen med et eksempel.</p><p class="grammar-english" lang="en"><em>Adjectives may require a particular preposition. Learn the complete combination.</em></p>
<table class="grammar-fixed-combination-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Fast forbindelse</strong><em class="grammar-english" lang="en">Fixed combination and meaning</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">træt af</span><em lang="en">tired of</em></span></th><td>Jeg er træt af at vente.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">glad for</span><em lang="en">happy about</em></span></th><td>Hun er glad for sin gave.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">bange for</span><em lang="en">afraid of</em></span></th><td>Han er bange for hunde.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">sikker på</span><em lang="en">sure of</em></span></th><td>Jeg er sikker på svaret.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">interesseret i</span><em lang="en">interested in</em></span></th><td>Hun er interesseret i musik.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">vred på / over</span><em lang="en">angry with / about</em></span></th><td>Vred på sin bror / over beslutningen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">god / dårlig til</span><em lang="en">good / bad at</em></span></th><td>Han er god til dansk.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">stolt af</span><em lang="en">proud of</em></span></th><td>De er stolte af deres datter.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">klar til</span><em lang="en">ready to</em></span></th><td>Vi er klar til at gå.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">enig med / i</span><em lang="en">agree with a person / idea</em></span></th><td>Enig med dig / i forslaget.</td></tr>
</tbody></table>
<aside class="grammar-rule"><p lang="da">Ved <strong>vred</strong> og <strong>sur</strong> bruges ofte på om personen og over om sagen.</p><p class="grammar-english" lang="en"><em>With vred and sur, på often refers to a person and over to an issue.</em></p></aside>
        `
    },
    {
        id: "praeposition-13",
        titleDa: "Substantiv + præposition",
        titleEn: "Noun + preposition",
        content: `
<p lang="da">Nogle substantiver indgår i faste forbindelser med præpositioner.</p><p class="grammar-english" lang="en"><em>Some nouns form fixed combinations with prepositions.</em></p>
<table class="grammar-fixed-combination-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Fast forbindelse</strong><em class="grammar-english" lang="en">Fixed combination and meaning</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">interesse for</span><em lang="en">interest in</em></span></th><td>Hun har stor interesse for sprog.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">behov for</span><em lang="en">need for</em></span></th><td>Der er behov for flere boliger.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">mulighed for</span><em lang="en">opportunity to</em></span></th><td>Vi har mulighed for at deltage.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">grund til</span><em lang="en">reason for</em></span></th><td>Der er ingen grund til bekymring.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">svar på</span><em lang="en">answer to</em></span></th><td>Jeg kender ikke svaret på spørgsmålet.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">forskel på</span><em lang="en">difference between</em></span></th><td>Hvad er forskellen på de to ord?</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">fordel ved</span><em lang="en">advantage of</em></span></th><td>Fordelen ved cyklen er prisen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">problem med</span><em lang="en">problem with</em></span></th><td>Der er et problem med computeren.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">invitation til</span><em lang="en">invitation to</em></span></th><td>Vi fik en invitation til festen.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">erfaring med</span><em lang="en">experience with</em></span></th><td>Hun har erfaring med kundeservice.</td></tr>
</tbody></table>
        `
    },
    {
        id: "praeposition-14",
        titleDa: "Pronominer efter præpositioner",
        titleEn: "Pronouns after prepositions",
        content: `
<p lang="da">Efter en præposition bruger man objektformen: mig, dig, ham, hende, os, jer og dem.</p><p class="grammar-english" lang="en"><em>After a preposition, use the object form of a personal pronoun.</em></p>
<table class="grammar-comparison-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Subjektform</strong><em class="grammar-english" lang="en">Subject form</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Objektform</strong><em class="grammar-english" lang="en">After a preposition</em></span></th><th><strong>Eksempel</strong></th></tr></thead><tbody>
<tr class="grammar-comparison-forms"><td>jeg</td><td>mig</td><td>Kom med mig.</td></tr><tr class="grammar-comparison-forms"><td>du</td><td>dig</td><td>Jeg taler med dig.</td></tr><tr class="grammar-comparison-forms"><td>han / hun</td><td>ham / hende</td><td>Brevet er til hende.</td></tr><tr class="grammar-comparison-forms"><td>vi / I / de</td><td>os / jer / dem</td><td>Hun arbejder sammen med dem.</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Ikke:</strong> mellem dig og jeg. <strong>Korrekt:</strong> mellem dig og mig.</p><p class="grammar-english" lang="en"><em>Both pronouns following mellem use the object form.</em></p></aside>
        `
    },
    {
        id: "praeposition-15",
        titleDa: "Præpositionen sidst i sætningen",
        titleEn: "Preposition at the end of a sentence",
        content: `
<p lang="da">På dansk kan en præposition naturligt stå sidst, når styrelsen er underforstået, står tidligere eller er et spørgeord.</p><p class="grammar-english" lang="en"><em>In Danish, a preposition can naturally appear at the end when its complement is understood, appears earlier, or is a question word.</em></p>
<table class="grammar-preposition-table"><thead><tr><th><strong>Situation</strong></th><th><strong>Eksempel</strong></th><th><span class="grammar-paired-label"><strong lang="da">Underforstået led</strong><em class="grammar-english" lang="en">Understood phrase</em></span></th></tr></thead><tbody>
<tr><td>Styrelsen er underforstået</td><td>Vil du med?</td><td>med mig/os</td></tr><tr><td>Spørgsmål</td><td>Hvem taler du med?</td><td>med hvem</td></tr><tr><td>Leddet står først</td><td>Den by har jeg boet i.</td><td>i den by</td></tr><tr><td>Relativ sætning</td><td>Det er bogen, jeg talte om.</td><td>om bogen</td></tr><tr><td>Fast forbindelse</td><td>Hør efter!</td><td>efter det, der siges</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da">Formelt kan man skrive <strong>Med hvem taler du?</strong> I almindeligt dansk er <strong>Hvem taler du med?</strong> naturligt.</p><p class="grammar-english" lang="en"><em>Formal Danish may place the preposition first, but sentence-final placement is natural in ordinary Danish.</em></p></aside>
        `
    },
    {
        id: "praeposition-16",
        titleDa: "Adverbial eller præpositionsobjekt?",
        titleEn: "Adverbial or prepositional object?",
        content: `
<p lang="da">Et præpositionsled kan fortælle om sted eller tid, fuldende et verbum eller beskrive et substantiv.</p><p class="grammar-english" lang="en"><em>A prepositional phrase can express place or time, complete a verb, or modify a noun.</em></p>
<table class="grammar-fixed-combination-table grammar-function-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Funktion</strong><em class="grammar-english" lang="en">Function and meaning</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Spørgsmål og eksempel</strong><em class="grammar-english" lang="en">Question and example</em></span></th></tr></thead><tbody>
<tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">Adverbial: sted</span><em lang="en">Place adverbial</em></span></th><td><strong>Hvor?</strong> Bogen ligger på bordet.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">Adverbial: tid</span><em lang="en">Time adverbial</em></span></th><td><strong>Hvornår?</strong> Toget kommer om en time.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">Adverbial: måde eller middel</span><em lang="en">Manner or means adverbial</em></span></th><td><strong>Hvordan?</strong> Vi rejser med tog.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">Præpositionsobjekt</span><em lang="en">Prepositional object</em></span></th><td><strong>Hvem/hvad + fast verbum?</strong> Jeg tænker på Laura.</td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">Del af en substantivgruppe</span><em lang="en">Part of a noun phrase</em></span></th><td><strong>Hvilken person/ting?</strong> Pigen med det lyse hår smiler.</td></tr>
</tbody></table>
<h3>Samme præposition, forskellig funktion / Same preposition, different function</h3>
<table class="grammar-fixed-combination-table"><tbody><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">Præpositionsobjekt</span><em lang="en">Prepositional object</em></span></th><td>Peter venter på sin bror.<span class="grammar-english" lang="en">Who is Peter waiting for?</span></td></tr><tr><th scope="row"><span class="grammar-fixed-heading"><span lang="da">Stedsadverbial</span><em lang="en">Place adverbial</em></span></th><td>Peter venter på stationen.<span class="grammar-english" lang="en">Where is Peter waiting?</span></td></tr></tbody></table>
        `
    },
    {
        id: "praeposition-17",
        titleDa: "Hurtig beslutningsguide",
        titleEn: "Quick decision guide",
        content: `
<table class="grammar-preposition-table grammar-decision-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Hvad vil du udtrykke?</strong><em class="grammar-english" lang="en">What do you mean?</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Typisk valg</strong><em class="grammar-english" lang="en">Typical choice</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th></tr></thead><tbody>
<tr><td><span class="grammar-meaning-pair"><span lang="da">Inde i rum, by eller land</span><em lang="en">Inside a room, city, or country</em></span></td><td>i</td><td>i huset, i Aarhus</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Flade eller aktivitet</span><em lang="en">Surface or activity</em></span></td><td>på</td><td>på bordet, på arbejde</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Person eller fagperson</span><em lang="en">Person or professional</em></span></td><td>hos</td><td>hos min ven, hos lægen</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Tæt ved et punkt</span><em lang="en">Near a point</em></span></td><td>ved</td><td>ved døren</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Destination / udgangspunkt</span><em lang="en">Destination / origin</em></span></td><td>til / fra</td><td>til skolen, fra Odense</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Varighed / fremtid</span><em lang="en">Duration / future</em></span></td><td>i / om</td><td>i tre timer, om ti minutter</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Fortid / startpunkt</span><em lang="en">Past / starting point</em></span></td><td>for … siden / siden</td><td>for to år siden, siden mandag</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Fast forbindelse</span><em lang="en">Fixed combination</em></span></td><td>lær hele udtrykket</td><td>vente på, glad for</td></tr><tr><td><span class="grammar-meaning-pair"><span lang="da">Pronomen</span><em lang="en">Pronoun</em></span></td><td>objektform</td><td>med mig, til hende</td></tr>
</tbody></table>
        `
    },
    {
        id: "praeposition-18",
        titleDa: "Typiske fejl og tjekliste",
        titleEn: "Common mistakes and checklist",
        content: `
<table class="grammar-correction-table grammar-correction-table--paired"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Forkert</strong><em class="grammar-english" lang="en">Incorrect</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Korrekt</strong><em class="grammar-english" lang="en">Correct</em></span></th></tr></thead><tbody>
<tr><td class="grammar-result grammar-result--incorrect">Jeg bor på Danmark.</td><td class="grammar-result grammar-result--correct">Jeg bor i Danmark.</td></tr><tr class="grammar-correction-reason"><td colspan="2">Lande bruges normalt med i.<br><em lang="en">Countries normally use i.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg går til hjem.</td><td class="grammar-result grammar-result--correct">Jeg går hjem.</td></tr><tr class="grammar-correction-reason"><td colspan="2">Hjem bruges normalt uden til.<br><em lang="en">Hjem normally omits til.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg er hjem.</td><td class="grammar-result grammar-result--correct">Jeg er hjemme.</td></tr><tr class="grammar-correction-reason"><td colspan="2">Hjem viser retning; hjemme viser sted.<br><em lang="en">Hjem expresses direction; hjemme expresses location.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Vi ses i mandag.</td><td class="grammar-result grammar-result--correct">Vi ses på mandag.</td></tr><tr class="grammar-correction-reason"><td colspan="2">En fremtidig ugedag bruger på.<br><em lang="en">A future weekday uses på.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg kommer i en time.</td><td class="grammar-result grammar-result--correct">Jeg kommer om en time.</td></tr><tr class="grammar-correction-reason"><td colspan="2">Om viser fremtid efter en periode.<br><em lang="en">Om expresses a future time after a period.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg har boet her siden fem år.</td><td class="grammar-result grammar-result--correct">Jeg har boet her i fem år.</td></tr><tr class="grammar-correction-reason"><td colspan="2">Varighed bruger i; siden kræver et startpunkt.<br><em lang="en">Duration uses i; siden requires a starting point.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Jeg venter til bussen.</td><td class="grammar-result grammar-result--correct">Jeg venter på bussen.</td></tr><tr class="grammar-correction-reason"><td colspan="2">Fast forbindelse: vente på.<br><em lang="en">The fixed combination is vente på.</em></td></tr>
<tr><td class="grammar-result grammar-result--incorrect">Mellem dig og jeg.</td><td class="grammar-result grammar-result--correct">Mellem dig og mig.</td></tr><tr class="grammar-correction-reason"><td colspan="2">Brug objektform efter en præposition.<br><em lang="en">Use the object form after a preposition.</em></td></tr>
</tbody></table>
        `
    },
    
    {
        id: "praeposition-20",
        titleDa: "Øvelser A–E",
        titleEn: "Exercises A–E",
        content: `
<section class="grammar-exercise"><h3>A. Find præposition og styrelse</h3><ol><li>Bogen ligger på det store bord.</li><li>Hun rejser med sin søster.</li><li>Vi mødes efter arbejdet.</li><li>Han er bange for at flyve.</li><li>Jeg tænker på, om hun kommer.</li></ol></section>
<section class="grammar-exercise"><h3>B. I, på, hos eller ved?</h3><ol><li>Hun bor ___ Aarhus.</li><li>Bogen ligger ___ bordet.</li><li>Jeg har en tid ___ lægen.</li><li>Vi mødes ___ stationen.</li><li>De er ___ arbejde.</li><li>Han sidder ___ bilen.</li><li>Hun bor ___ Fyn.</li><li>Vi spiser ___ mine forældre.</li></ol></section>
<section class="grammar-exercise"><h3>C. Retning</h3><ol><li>Vi kører ___ København.</li><li>Hun kommer ___ Sverige.</li><li>Bussen kører ___ skolen.</li><li>De gik ___ parken.</li><li>Toget kører ___ nord.</li></ol></section>
<section class="grammar-exercise"><h3>D. Tidsudtryk</h3><ol><li>Vi ses ___ fredag.</li><li>Toget kommer ___ ti minutter.</li><li>Jeg har boet her ___ tre år.</li><li>Hun flyttede hertil ___ to år siden.</li><li>Jeg har arbejdet her ___ januar.</li><li>Vi arbejder ___ klokken 8 ___ 16.</li><li>Han læste bogen ___ to dage.</li></ol></section>
<section class="grammar-exercise"><h3>E. Fast præposition</h3><ol><li>Jeg venter (på / til) bussen.</li><li>Hun interesserer sig (i / for) kunst.</li><li>Vi taler (om / med) problemet.</li><li>Kan jeg regne (med / på) dig?</li><li>Han leder (efter / om) sine nøgler.</li><li>Hun spurgte (efter / om) prisen.</li><li>Bogen handler (om / med) en familie.</li><li>Jeg tænker (på / over) dig.</li></ol></section>
        `
    },
    {
        id: "praeposition-21",
        titleDa: "Øvelser F–J",
        titleEn: "Exercises F–J",
        content: `
<section class="grammar-exercise"><h3>F. Adjektiv + præposition</h3><ol><li>Hun er glad ___ gaven.</li><li>Jeg er interesseret ___ dansk.</li><li>Han er vred ___ sin bror.</li><li>Hun er vred ___ beslutningen.</li><li>Vi er klar ___ at gå.</li><li>Jeg er enig ___ dig.</li><li>De er stolte ___ deres børn.</li></ol></section>
<section class="grammar-exercise"><h3>G. Pronomenform</h3><ol><li>Kom med (jeg / mig).</li><li>Hun venter på (han / ham).</li><li>Brevet er til (hun / hende).</li><li>De bor ved siden af (vi / os).</li><li>Mellem dig og (jeg / mig) er det en hemmelighed.</li><li>Jeg arbejder sammen med (de / dem).</li></ol></section>
<section class="grammar-exercise"><h3>H. Adverbial eller præpositionsobjekt?</h3><ol><li>Hun bor i København.</li><li>Hun tænker på København.</li><li>Peter venter på sin ven.</li><li>Peter venter på stationen.</li><li>Toget kommer om en time.</li></ol></section>
<section class="grammar-exercise"><h3>I. Ret fejlene</h3><ol><li>Jeg bor på Danmark.</li><li>Vi ses i mandag.</li><li>Han kommer i en time.</li><li>Jeg har boet her siden fire år.</li><li>Hun er interesseret på musik.</li><li>Jeg venter til min ven.</li><li>Jeg går til hjem nu.</li><li>Mellem dig og jeg er der ingen problemer.</li></ol></section>
<section class="grammar-exercise"><h3>J. Skriv selv</h3><p>Skriv én sætning med hver: sted, retning, tid, verbum + præposition og adjektiv + præposition.</p><p class="grammar-english" lang="en"><em>Write one sentence for each category.</em></p></section>
        `
    },
    {
        id: "praeposition-22",
        titleDa: "Facit A–E",
        titleEn: "Answer key A–E",
        content: `
<section class="grammar-exercise"><h3>A. Præposition og styrelse</h3><ol><li>på – det store bord</li><li>med – sin søster</li><li>efter – arbejdet</li><li>for – at flyve</li><li>på – om hun kommer</li></ol></section>
<section class="grammar-exercise"><h3>B. I, på, hos eller ved?</h3><ol><li>i Aarhus</li><li>på bordet</li><li>hos lægen</li><li>ved stationen</li><li>på arbejde</li><li>i bilen</li><li>på Fyn</li><li>hos mine forældre</li></ol></section>
<section class="grammar-exercise"><h3>C. Retning</h3><ol><li>til København</li><li>fra Sverige</li><li>forbi skolen</li><li>gennem parken</li><li>mod nord</li></ol></section>
<section class="grammar-exercise"><h3>D. Tidsudtryk</h3><ol><li>på fredag</li><li>om ti minutter</li><li>i tre år</li><li>for to år siden</li><li>siden januar</li><li>fra klokken 8 til 16</li><li>på to dage</li></ol></section>
<section class="grammar-exercise"><h3>E. Fast præposition</h3><ol><li>vente på</li><li>interessere sig for</li><li>tale om</li><li>regne med</li><li>lede efter</li><li>spørge om prisen</li><li>handle om</li><li>tænke på dig</li></ol></section>
        `
    },
    {
        id: "praeposition-23",
        titleDa: "Facit F–I",
        titleEn: "Answer key F–I",
        content: `
<section class="grammar-exercise"><h3>F. Adjektiv + præposition</h3><ol><li>glad for</li><li>interesseret i</li><li>vred på sin bror</li><li>vred over beslutningen</li><li>klar til</li><li>enig med</li><li>stolte af</li></ol></section>
<section class="grammar-exercise"><h3>G. Pronomenform</h3><ol><li>mig</li><li>ham</li><li>hende</li><li>os</li><li>mig</li><li>dem</li></ol></section>
<section class="grammar-exercise"><h3>H. Adverbial eller præpositionsobjekt?</h3><ol><li>i København – stedsadverbial</li><li>på København – præpositionsobjekt til tænke på</li><li>på sin ven – præpositionsobjekt til vente på</li><li>på stationen – stedsadverbial</li><li>om en time – tidsadverbial</li></ol></section>
<section class="grammar-exercise"><h3>I. Ret fejlene</h3><ol><li>Jeg bor i Danmark.</li><li>Vi ses på mandag.</li><li>Han kommer om en time.</li><li>Jeg har boet her i fire år.</li><li>Hun er interesseret i musik.</li><li>Jeg venter på min ven.</li><li>Jeg går hjem nu.</li><li>Mellem dig og mig er der ingen problemer.</li></ol></section>
        `
    },
    {
        id: "praeposition-24",
        titleDa: "Miniordliste",
        titleEn: "Mini glossary",
        content: `
<table class="grammar-example-table grammar-preposition-table"><thead><tr><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th><th><span class="grammar-paired-label"><strong lang="da">Kort forklaring</strong><em class="grammar-english" lang="en">Short explanation</em></span></th></tr></thead><tbody>
<tr><td>præposition / forholdsord</td><td class="grammar-english" lang="en"><em>preposition</em></td><td>viser et forhold mellem led</td></tr><tr><td>styrelse</td><td class="grammar-english" lang="en"><em>complement</em></td><td>ord eller gruppe efter præpositionen</td></tr><tr><td>præpositionsled</td><td class="grammar-english" lang="en"><em>prepositional phrase</em></td><td>præposition + styrelse</td></tr><tr><td>stedsadverbial</td><td class="grammar-english" lang="en"><em>place adverbial</em></td><td>fortæller hvor</td></tr><tr><td>tidsadverbial</td><td class="grammar-english" lang="en"><em>time adverbial</em></td><td>fortæller hvornår</td></tr><tr><td>præpositionsobjekt</td><td class="grammar-english" lang="en"><em>prepositional object</em></td><td>fast led efter et verbum</td></tr><tr><td>retning</td><td class="grammar-english" lang="en"><em>direction</em></td><td>fortæller hvorhen eller hvorfra</td></tr><tr><td>varighed</td><td class="grammar-english" lang="en"><em>duration</em></td><td>fortæller hvor længe</td></tr><tr><td>fast forbindelse</td><td class="grammar-english" lang="en"><em>fixed combination</em></td><td>ord der normalt bruges sammen</td></tr><tr><td>objektform</td><td class="grammar-english" lang="en"><em>object form</em></td><td>mig, dig, ham, hende, os, jer, dem</td></tr>
</tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Din vigtigste vane:</strong> Lær ikke præpositionen alene. Lær hele udtrykket: vente på bussen, interesseret i musik, på mandag, i Danmark og hos lægen.</p><p class="grammar-english" lang="en"><em>Do not learn the preposition alone. Learn the complete phrase.</em></p></aside>
<div class="grammar-example"><p>Jeg venter på bussen ved stationen, fordi jeg skal til Aarhus.</p><p class="grammar-english" lang="en"><em>I am waiting for the bus at the station because I am going to Aarhus.</em></p></div>
        `
    }
];
