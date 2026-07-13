// Grammatik_Adjektiv.js
// Bilingual lesson pages for Danish adjectives.

const adjektivGrammarPages = [
    {
        id: "adjektiv-1",
        titleDa: "Hvad er et adjektiv?",
        titleEn: "What is an adjective?",
        content: `
<p lang="da">Et adjektiv beskriver en person, en ting, et sted eller en tilstand. Det fortæller for eksempel, hvordan nogen eller noget ser ud, føles eller er.</p>
<p class="grammar-english" lang="en"><em>An adjective describes a person, thing, place, or condition. For example, it tells us how someone or something looks, feels, or is.</em></p>

<h3>To almindelige placeringer / Two common positions</h3>
<table class="grammar-noun-table grammar-example-table">
<thead>
<tr>
<th><span class="grammar-paired-label"><strong lang="da">Placering</strong><em class="grammar-english" lang="en">Position</em></span></th>
<th lang="da">Dansk</th>
<th class="grammar-english" lang="en">English</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="grammar-paired-label"><strong lang="da">Foran substantivet</strong><em class="grammar-english" lang="en">Before the noun</em></span></td>
<td lang="da">en <strong>gammel</strong> cykel</td>
<td class="grammar-english" lang="en"><em>an old bicycle</em></td>
</tr>
<tr>
<td><span class="grammar-paired-label"><strong lang="da">Efter et forbindelsesverbum</strong><em class="grammar-english" lang="en">After a linking verb</em></span></td>
<td lang="da">Cyklen er <strong>gammel</strong>.</td>
<td class="grammar-english" lang="en"><em>The bicycle is old.</em></td>
</tr>
</tbody>
</table>

<aside class="grammar-tip">
<p lang="da"><strong>Husk:</strong> Adjektivet bøjes ofte, så det passer til substantivets køn, tal og bestemthed.</p>
<p class="grammar-english" lang="en"><em>Remember: The adjective often changes to agree with the noun's gender, number, and definiteness.</em></p>
</aside>
        `
    },

    {
        id: "adjektiv-2",
        titleDa: "Bøjning efter køn og tal",
        titleEn: "Agreement in gender and number",
        content: `
<p lang="da">I ubestemt form ental står adjektivet normalt i grundform efter en-ord og får <strong>-t</strong> efter et-ord. I flertal får det normalt <strong>-e</strong>.</p>
<p class="grammar-english" lang="en"><em>In the indefinite singular, the adjective normally uses its base form with common-gender nouns and adds -t with neuter nouns. In the plural, it normally adds -e.</em></p>

<table class="grammar-noun-table grammar-comparison-table">
<thead>
<tr>
<th><span class="grammar-paired-label"><strong lang="da">En-ord</strong><em class="grammar-english" lang="en">Common gender</em></span></th>
<th><span class="grammar-paired-label"><strong lang="da">Et-ord</strong><em class="grammar-english" lang="en">Neuter</em></span></th>
<th><span class="grammar-paired-label"><strong lang="da">Flertal</strong><em class="grammar-english" lang="en">Plural</em></span></th>
</tr>
</thead>
<tbody>
<tr class="grammar-comparison-forms">
<td lang="da">en stor bil</td>
<td lang="da">et stort hus</td>
<td lang="da">store biler og huse</td>
</tr>
<tr class="grammar-comparison-meaning">
<td colspan="3" class="grammar-english" lang="en"><em>a big car · a big house · big cars and houses</em></td>
</tr>
<tr class="grammar-comparison-forms">
<td lang="da">en grøn stol</td>
<td lang="da">et grønt bord</td>
<td lang="da">grønne stole og borde</td>
</tr>
<tr class="grammar-comparison-meaning">
<td colspan="3" class="grammar-english" lang="en"><em>a green chair · a green table · green chairs and tables</em></td>
</tr>
</tbody>
</table>

<h3>Adjektivet efter være og blive / The adjective after være and blive</h3>
<p lang="da">Reglen gælder også, når adjektivet står efter for eksempel <strong>være</strong> eller <strong>blive</strong>: Bilen er stor. Huset er stort. Husene er store.</p>
<p class="grammar-english" lang="en"><em>The same rule applies when the adjective follows verbs such as være (be) or blive (become): The car is big. The house is big. The houses are big.</em></p>
        `
    },

    {
        id: "adjektiv-3",
        titleDa: "Bestemt form",
        titleEn: "The definite form",
        content: `
<p lang="da">Efter <strong>den</strong>, <strong>det</strong> og <strong>de</strong> får adjektivet normalt <strong>-e</strong>. Substantivet står også i bestemt form.</p>
<p class="grammar-english" lang="en"><em>After den, det, and de, the adjective normally adds -e. The noun also appears in its definite form.</em></p>

<table class="grammar-noun-table grammar-comparison-table">
<thead>
<tr>
<th><strong lang="da">Ental, en-ord</strong></th>
<th><strong lang="da">Ental, et-ord</strong></th>
<th><strong lang="da">Flertal</strong></th>
</tr>
</thead>
<tbody>
<tr class="grammar-comparison-forms">
<td lang="da">den røde bil</td>
<td lang="da">det røde hus</td>
<td lang="da">de røde huse</td>
</tr>
<tr class="grammar-comparison-meaning">
<td colspan="3" class="grammar-english" lang="en"><em>the red car · the red house · the red houses</em></td>
</tr>
</tbody>
</table>

<h3>Efter ejestedord og genitiv / After possessives and genitives</h3>
<p lang="da">Efter <strong>min, mit, mine</strong> eller en genitiv bruger man normalt ikke den, det eller de: min nye cykel, vores nye hus, Peters nye arbejde.</p>
<p class="grammar-english" lang="en"><em>After min, mit, mine, or a genitive, den, det, and de are normally omitted: my new bicycle, our new house, Peter's new job.</em></p>

<aside class="grammar-rule">
<p lang="da"><strong>Mønster:</strong> den/det/de + adjektiv på -e + substantiv i bestemt form.</p>
<p class="grammar-english" lang="en"><em>Pattern: den/det/de + adjective ending in -e + noun in the definite form.</em></p>
</aside>
        `
    },

    {
        id: "adjektiv-4",
        titleDa: "Stavning og særlige former",
        titleEn: "Spelling and special forms",
        content: `
<p lang="da">Nogle adjektiver ændrer stavning, når de får <strong>-t</strong> eller <strong>-e</strong>. Lær de hyppigste mønstre sammen med et eksempel.</p>
<p class="grammar-english" lang="en"><em>Some adjectives change spelling when they add -t or -e. Learn the most common patterns together with an example.</em></p>

<table class="grammar-noun-table grammar-comparison-table">
<thead>
<tr>
<th><span class="grammar-paired-label"><strong lang="da">Grundform</strong><em class="grammar-english" lang="en">Base form</em></span></th>
<th><span class="grammar-paired-label"><strong lang="da">Et-form</strong><em class="grammar-english" lang="en">Neuter form</em></span></th>
<th><span class="grammar-paired-label"><strong lang="da">E-form</strong><em class="grammar-english" lang="en">E-form</em></span></th>
</tr>
</thead>
<tbody>
<tr class="grammar-comparison-forms"><td>glad</td><td>gladt</td><td>glade</td></tr>
<tr class="grammar-comparison-forms"><td>grøn</td><td>grønt</td><td>grønne</td></tr>
<tr class="grammar-comparison-forms"><td>ny</td><td>nyt</td><td>nye</td></tr>
<tr class="grammar-comparison-forms"><td>gammel</td><td>gammelt</td><td>gamle</td></tr>
<tr class="grammar-comparison-forms"><td>lille</td><td>lille</td><td>små</td></tr>
</tbody>
</table>

<aside class="grammar-tip">
<p lang="da"><strong>God metode:</strong> Skriv nye adjektiver i tre former, for eksempel grøn – grønt – grønne.</p>
<p class="grammar-english" lang="en"><em>Good method: Write new adjectives in three forms, for example grøn – grønt – grønne.</em></p>
</aside>
        `
    },

    {
        id: "adjektiv-5",
        titleDa: "Gradbøjning",
        titleEn: "Comparison of adjectives",
        content: `
<p lang="da">Når vi sammenligner, bruger vi grundform, komparativ og superlativ. Mange korte adjektiver får <strong>-ere</strong> og <strong>-est</strong>.</p>
<p class="grammar-english" lang="en"><em>When comparing, we use the positive, comparative, and superlative forms. Many short adjectives add -ere and -est.</em></p>

<table class="grammar-noun-table grammar-comparison-table">
<thead>
<tr>
<th><span class="grammar-paired-label"><strong lang="da">Grundform</strong><em class="grammar-english" lang="en">Positive</em></span></th>
<th><span class="grammar-paired-label"><strong lang="da">Komparativ</strong><em class="grammar-english" lang="en">Comparative</em></span></th>
<th><span class="grammar-paired-label"><strong lang="da">Superlativ</strong><em class="grammar-english" lang="en">Superlative</em></span></th>
</tr>
</thead>
<tbody>
<tr class="grammar-comparison-forms"><td>hurtig</td><td>hurtigere</td><td>hurtigst</td></tr>
<tr class="grammar-comparison-forms"><td>billig</td><td>billigere</td><td>billigst</td></tr>
<tr class="grammar-comparison-forms"><td>interessant</td><td>mere interessant</td><td>mest interessant</td></tr>
<tr class="grammar-comparison-forms"><td>god</td><td>bedre</td><td>bedst</td></tr>
<tr class="grammar-comparison-forms"><td>lille</td><td>mindre</td><td>mindst</td></tr>
</tbody>
</table>

<h3>Sammenligning med end / Comparison with end</h3>
<p lang="da">Brug <strong>end</strong> efter komparativ: Min cykel er billigere end din. Denne opgave er mere interessant end den første.</p>
<p class="grammar-english" lang="en"><em>Use end (than) after the comparative: My bicycle is cheaper than yours. This exercise is more interesting than the first one.</em></p>
        `
    },

    {
        id: "adjektiv-6",
        titleDa: "Adjektiv eller adverbium?",
        titleEn: "Adjective or adverb?",
        content: `
<p lang="da">Et adjektiv beskriver et substantiv eller et grundled. Et adverbium beskriver ofte et verbum, et adjektiv eller hele sætningen.</p>
<p class="grammar-english" lang="en"><em>An adjective describes a noun or subject. An adverb often describes a verb, an adjective, or the whole sentence.</em></p>

<table class="grammar-noun-table grammar-example-table">
<thead>
<tr>
<th><span class="grammar-paired-label"><strong lang="da">Funktion</strong><em class="grammar-english" lang="en">Function</em></span></th>
<th lang="da">Dansk</th>
<th class="grammar-english" lang="en">English</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="grammar-paired-label"><strong lang="da">Adjektiv</strong><em class="grammar-english" lang="en">Adjective</em></span></td>
<td lang="da">Hun har en <strong>hurtig</strong>bil.</td>
<td class="grammar-english" lang="en"><em>She has a fast car.</em></td>
</tr>
<tr>
<td><span class="grammar-paired-label"><strong lang="da">Adverbium</strong><em class="grammar-english" lang="en">Adverb</em></span></td>
<td lang="da">Bilen kører <strong>hurtigt.</strong></td>
<td class="grammar-english" lang="en"><em>The car drives fast.</em></td>
</tr>
<tr>
<td><span class="grammar-paired-label"><strong lang="da">Adjektiv</strong><em class="grammar-english" lang="en">Adjective</em></span></td>
<td lang="da">Opgaven er <strong>nem.</strong></td>
<td class="grammar-english" lang="en"><em>The exercise is easy.</em></td>
</tr>
<tr>
<td><span class="grammar-paired-label"><strong lang="da">Adverbium</strong><em class="grammar-english" lang="en">Adverb</em></span></td>
<td lang="da">Hun løser opgaven <strong>nemt.</strong></td>
<td class="grammar-english" lang="en"><em>She solves the exercise easily.</em></td>
</tr>
</tbody>
</table>

<aside class="grammar-rule">
<p lang="da"><strong>Spørg:</strong> Beskriver ordet en ting eller person, eller beskriver det en handling?</p>
<p class="grammar-english" lang="en"><em>Ask: Does the word describe a thing or person, or does it describe an action?</em></p>
</aside>
        `
    },

    {
        id: "adjektiv-7",
        titleDa: "Adjektiver med præposition",
        titleEn: "Adjectives with prepositions",
        content: `
<p lang="da">Mange adjektiver bruges sammen med en bestemt præposition. Det er bedst at lære hele forbindelsen som én enhed.</p>
<p class="grammar-english" lang="en"><em>Many adjectives are used with a particular preposition. It is best to learn the complete expression as one unit.</em></p>

<table class="grammar-noun-table grammar-example-table">
<thead>
<tr>
<th><span class="grammar-paired-label"><strong lang="da">Forbindelse</strong><em class="grammar-english" lang="en">Expression</em></span></th>
<th lang="da">Dansk</th>
<th class="grammar-english" lang="en">English</th>
</tr>
</thead>
<tbody>
<tr><td lang="da"><strong>glad for</strong></td><td lang="da">Jeg er glad for mit arbejde.</td><td class="grammar-english" lang="en"><em>I am happy with my job.</em></td></tr>
<tr><td lang="da"><strong>interesseret i</strong></td><td lang="da">Hun er interesseret i musik.</td><td class="grammar-english" lang="en"><em>She is interested in music.</em></td></tr>
<tr><td lang="da"><strong>bange for</strong></td><td lang="da">Barnet er bange for hunden.</td><td class="grammar-english" lang="en"><em>The child is afraid of the dog.</em></td></tr>
<tr><td lang="da"><strong>god til</strong></td><td lang="da">Han er god til dansk.</td><td class="grammar-english" lang="en"><em>He is good at Danish.</em></td></tr>
<tr><td lang="da"><strong>træt af</strong></td><td lang="da">Vi er trætte af regnen.</td><td class="grammar-english" lang="en"><em>We are tired of the rain.</em></td></tr>
</tbody>
</table>
        `
    },

    {
        id: "adjektiv-8",
        titleDa: "Øvelse A: Vælg den rigtige form",
        titleEn: "Exercise A: Choose the correct form",
        content: `
<p lang="da">Vælg den form, der passer til substantivet.</p>
<p class="grammar-english" lang="en"><em>Choose the form that agrees with the noun.</em></p>

<table class="grammar-noun-table grammar-exercise-table grammar-exercise-table--numbered">
<thead>
<tr>
<th><strong>Nr.</strong></th>
<th><span class="grammar-paired-label"><strong lang="da">Sætning</strong><em class="grammar-english" lang="en">Sentence</em></span></th>
<th><span class="grammar-paired-label"><strong lang="da">Dit svar</strong><em class="grammar-english" lang="en">Your answer</em></span></th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td lang="da">Hun har en ___ jakke. (varm)</td><td></td></tr>
<tr><td>2</td><td lang="da">De bor i et ___ hus. (gammel)</td><td></td></tr>
<tr><td>3</td><td lang="da">Vi købte to ___ stole. (grøn)</td><td></td></tr>
<tr><td>4</td><td lang="da">Det ___ barn sover. (lille)</td><td></td></tr>
<tr><td>5</td><td lang="da">Opgaverne er ___. (svær)</td><td></td></tr>
</tbody>
</table>
        `
    },

    {
        id: "adjektiv-9",
        titleDa: "Øvelse B: Gradbøjning og funktion",
        titleEn: "Exercise B: Comparison and function",
        content: `
        <p class="grammar-english" lang="en"><em>Complete items 1–4 with the correct comparative or superlative. In items 5–8, choose the correct adjective or adverb form.</em></p>
<h3>Gradbøj adjektivet / Compare the adjective</h3>
<p lang="da">1. Denne bog er ___ end den anden. (interessant)</p>
<p lang="da">2. Hvem er den ___ løber på holdet? (hurtig)</p>
<p lang="da">3. Min nye telefon er ___ end min gamle. (god)</p>
<p lang="da">4. Det er byens ___ lejlighed. (lille)</p>

<h3>Adjektiv eller adverbium? / Adjective or adverb?</h3>
<p lang="da">5. Toget er ___. (hurtig)</p>
<p lang="da">6. Toget kører ___. (hurtig)</p>
<p lang="da">7. Hun taler meget ___. (tydelig)</p>
<p lang="da">8. Hendes forklaring er ___. (tydelig)</p>

        `
    },

    {
        id: "adjektiv-10",
        titleDa: "Facit",
        titleEn: "Answer key",
        content: `
<h3>Facit A / Answers A</h3>
<table class="grammar-noun-table grammar-exercise-table grammar-exercise-table--numbered">
<thead>
<tr>
<th><strong>Nr.</strong></th>
<th><span class="grammar-paired-label"><strong lang="da">Svar</strong><em class="grammar-english" lang="en">Answer</em></span></th>
<th><span class="grammar-paired-label"><strong lang="da">Regel</strong><em class="grammar-english" lang="en">Rule</em></span></th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>varm</td><td lang="da">en-ord, ental</td></tr>
<tr><td>2</td><td>gammelt</td><td lang="da">et-ord, ental</td></tr>
<tr><td>3</td><td>grønne</td><td lang="da">flertal</td></tr>
<tr><td>4</td><td>lille</td><td lang="da">særlig form</td></tr>
<tr><td>5</td><td>svære</td><td lang="da">flertal efter være</td></tr>
</tbody>
</table>

<h3>Facit B / Answers B</h3>
<ol>
<li><p lang="da"><strong>mere interessant</strong> – komparativ med mere</p></li>
<li><p lang="da"><strong>hurtigste</strong> – bestemt superlativ efter den</p></li>
<li><p lang="da"><strong>bedre</strong> – uregelmæssig komparativ</p></li>
<li><p lang="da"><strong>mindste</strong> – bestemt superlativ</p></li>
<li><p lang="da"><strong>hurtigt</strong> – adjektivet passer til et-ordet toget</p></li>
<li><p lang="da"><strong>hurtigt</strong> – adverbium, som beskriver kører</p></li>
<li><p lang="da"><strong>tydeligt</strong> – adverbium, som beskriver taler</p></li>
<li><p lang="da"><strong>tydelig</strong> – adjektiv, som beskriver forklaring</p></li>
</ol>
<p class="grammar-english" lang="en"><em>Review the agreement, comparison, and adjective/adverb rules if an answer was difficult.</em></p>
        `
    }
];
