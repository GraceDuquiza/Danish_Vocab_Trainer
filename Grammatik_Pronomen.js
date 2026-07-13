// Grammatik_Pronomen.js
// Bilingual pronoun lessons adapted from Pronomen.docx.

const pronomenGrammarPages = [
    {
        id: "pronomen-1",
        titleDa: "Hvad er et pronomen?",
        titleEn: "What is a pronoun?",
        content: `
<p lang="da">Et pronomen kaldes også et stedord. Det kan erstatte et substantiv eller navn, pege på nogen eller noget, danne et spørgsmål eller forbinde en relativ ledsætning med noget, der allerede er nævnt.</p>
<p class="grammar-english" lang="en"><em>A pronoun can replace a noun or name, point to someone or something, form a question, or connect a relative clause to something already mentioned.</em></p>

<table class="grammar-noun-table grammar-example-table">
<thead><tr><th><span class="grammar-paired-label"><strong lang="da">Funktion</strong><em class="grammar-english" lang="en">Function</em></span></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead>
<tbody>
<tr><td><span class="grammar-paired-label"><strong lang="da">Erstatter person</strong><em class="grammar-english" lang="en">Replaces a person</em></span></td><td>Sofie har en bog. <strong>Hun</strong> læser.</td><td class="grammar-english" lang="en"><em>Sofie has a book. She reads.</em></td></tr>
<tr><td><span class="grammar-paired-label"><strong lang="da">Erstatter ting</strong><em class="grammar-english" lang="en">Replaces a thing</em></span></td><td>Hun læser <strong>den</strong> hver aften.</td><td class="grammar-english" lang="en"><em>She reads it every evening.</em></td></tr>
</tbody>
</table>

<h3>De vigtigste typer / The main types</h3>
<table class="grammar-noun-table grammar-bilingual-table">
<thead><tr><th><span class="grammar-paired-label"><strong lang="da">Type</strong><em class="grammar-english" lang="en">Type</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Eksempler</strong><em class="grammar-english" lang="en">Examples</em></span></th></tr></thead>
<tbody>
<tr><td>Personlige</td><td>jeg, du, han, hun, vi, de</td></tr>
<tr><td>Possessive</td><td>min, mit, mine, sin, sit, sine</td></tr>
<tr><td>Refleksive</td><td>mig, dig, sig, os, jer</td></tr>
<tr><td>Demonstrative</td><td>den, det, denne, dette, disse</td></tr>
<tr><td>Spørgende</td><td>hvem, hvad, hvilken, hvilket, hvilke, hvis</td></tr>
<tr><td>Relative</td><td>som, der, hvis, hvor, hvilket</td></tr>
<tr><td>Ubestemte</td><td>nogen, noget, nogle, ingen, man, hver</td></tr>
<tr><td>Gensidige</td><td>hinanden, hverandre</td></tr>
</tbody>
</table>
        `
    },
    {
        id: "pronomen-2",
        titleDa: "Personlige pronominer",
        titleEn: "Personal pronouns",
        content: `
<p lang="da">Personlige pronominer har forskellige former efter deres funktion. Subjektformen bruges som grundled. Objektformen bruges som direkte eller indirekte objekt og efter en præposition.</p>
<p class="grammar-english" lang="en"><em>Personal pronouns have different forms depending on their function. The subject form is used as the subject; the object form is used as an object and after a preposition.</em></p>

<table class="grammar-noun-table grammar-comparison-table">
<thead><tr><th><strong>Person</strong></th><th><span class="grammar-paired-label"><strong lang="da">Subjekt</strong><em class="grammar-english" lang="en">Subject</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Objekt</strong><em class="grammar-english" lang="en">Object</em></span></th></tr></thead>
<tbody>
<tr class="grammar-comparison-forms"><td>1. ental</td><td>jeg</td><td>mig</td></tr>
<tr class="grammar-comparison-forms"><td>2. ental</td><td>du</td><td>dig</td></tr>
<tr class="grammar-comparison-forms"><td>3. ental</td><td>han / hun</td><td>ham / hende</td></tr>
<tr class="grammar-comparison-forms"><td>1. flertal</td><td>vi</td><td>os</td></tr>
<tr class="grammar-comparison-forms"><td>2. flertal</td><td>I</td><td>jer</td></tr>
<tr class="grammar-comparison-forms"><td>3. flertal</td><td>de</td><td>dem</td></tr>
</tbody>
</table>
<aside class="grammar-tip"><p lang="da"><strong>Store bogstaver:</strong> I er altid med stort. De, Dem og Deres med stort er høflig tiltale.</p><p class="grammar-english" lang="en"><em>I is always capitalized. De, Dem, and Deres with capitals are formal polite forms.</em></p></aside>
        `
    },
    {
        id: "pronomen-3",
        titleDa: "Subjektform eller objektform?",
        titleEn: "Subject or object form?",
        content: `
<p lang="da">Brug jeg, vi og de som subjekt. Brug mig, os og dem som objekt, efter en præposition og i udtryk som <strong>Det er mig</strong>.</p>
<p class="grammar-english" lang="en"><em>Use jeg, vi, and de as subjects. Use mig, os, and dem as objects, after a preposition, and in expressions such as Det er mig.</em></p>

<table class="grammar-noun-table grammar-example-table">
<thead><tr><th><span class="grammar-paired-label"><strong lang="da">Funktion</strong><em class="grammar-english" lang="en">Function</em></span></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead>
<tbody>
<tr><td>Subjekt</td><td><strong>Hun</strong> ringer i morgen.</td><td class="grammar-english" lang="en"><em>She will call tomorrow.</em></td></tr>
<tr><td>Direkte objekt</td><td>Mormor besøgte <strong>os.</strong></td><td class="grammar-english" lang="en"><em>Grandmother visited us.</em></td></tr>
<tr><td>Efter præposition</td><td>Jeg talte med <strong>hende.</strong></td><td class="grammar-english" lang="en"><em>I spoke with her.</em></td></tr>
<tr><td>Prædikativ</td><td>Det er <strong>mig.</strong></td><td class="grammar-english" lang="en"><em>It is me.</em></td></tr>
</tbody>
</table>

<h3>Test ordet alene / Test the pronoun alone</h3>
<p lang="da">Peter og <strong>jeg</strong> skal i biografen → <strong>Jeg</strong> skal i biografen. Lis henter Peter og <strong>mig</strong> → Lis henter <strong>mig</strong>.</p>
<p class="grammar-english" lang="en"><em>Remove the other person. The remaining sentence reveals whether the pronoun is a subject or object.</em></p>

<h3>Vi/os og de/dem foran et andet ord</h3>
<p lang="da"><strong>Vi børn</strong> er subjekt, men efter en præposition hedder det <strong>os børn</strong>. <strong>De unge</strong> er subjekt; <strong>for dem unge</strong> kræver objektform.</p>
<p class="grammar-english" lang="en"><em>Still choose the form from its role: subject form as subject and object form elsewhere.</em></p>
        `
    },
    {
        id: "pronomen-4",
        titleDa: "Possessive pronominer",
        titleEn: "Possessive pronouns",
        content: `
<p lang="da">Possessive pronominer viser ejerskab. Formen bestemmes af det ejede substantivs køn og tal, ikke af ejerens køn.</p>
<p class="grammar-english" lang="en"><em>Possessive pronouns show ownership. Their form is determined by the gender and number of the owned noun, not by the owner's gender.</em></p>

<table class="grammar-noun-table grammar-comparison-table grammar-form-table--four-column">
<thead><tr><th><span class="grammar-paired-label"><strong lang="da">Ejer</strong><em class="grammar-english" lang="en">Owner</em></span></th><th><strong>En-ord</strong></th><th><strong>Et-ord</strong></th><th><strong>Flertal</strong></th></tr></thead>
<tbody>
<tr class="grammar-comparison-forms"><td>jeg</td><td>min bil</td><td>mit hus</td><td>mine bøger</td></tr>
<tr class="grammar-comparison-forms"><td>du</td><td>din bil</td><td>dit hus</td><td>dine bøger</td></tr>
<tr class="grammar-comparison-forms"><td>subjektet</td><td>sin bil</td><td>sit hus</td><td>sine bøger</td></tr>
<tr class="grammar-comparison-forms"><td>vi</td><td>vores bil</td><td>vores hus</td><td>vores bøger</td></tr>
<tr class="grammar-comparison-forms"><td>de</td><td>deres bil</td><td>deres hus</td><td>deres bøger</td></tr>
</tbody>
</table>
<aside class="grammar-rule"><p lang="da"><strong>Ingen bestemt endelse:</strong> Skriv min bil og vores hus, ikke min bilen eller vores huset.</p><p class="grammar-english" lang="en"><em>After a possessive, the noun does not take a definite ending.</em></p></aside>
        `
    },
    {
        id: "pronomen-5",
        titleDa: "Sin, sit, sine eller hans/hendes?",
        titleEn: "Sin, sit, sine or hans/hendes?",
        content: `
<p lang="da">Sin, sit og sine viser tilbage til subjektet i den samme sætning. Hans og hendes viser normalt til en anden person end subjektet.</p>
<p class="grammar-english" lang="en"><em>Sin, sit, and sine refer back to the subject of the same clause. Hans and hendes normally refer to someone other than the subject.</em></p>

<table class="grammar-noun-table grammar-correction-table">
<thead><tr><th><span class="grammar-paired-label"><strong lang="da">Eksempel</strong><em class="grammar-english" lang="en">Example</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Betydning</strong><em class="grammar-english" lang="en">Meaning</em></span></th></tr></thead>
<tbody>
<tr><td>Peter vasker <strong>sin</strong> bil.</td><td class="grammar-english" lang="en"><em>Peter washes his own car.</em></td></tr>
<tr><td>Peter vasker <strong>hans</strong> bil.</td><td class="grammar-english" lang="en"><em>The car belongs to another man.</em></td></tr>
<tr><td>Anna taler med <strong>sin</strong> søster.</td><td class="grammar-english" lang="en"><em>Anna is talking to her own sister.</em></td></tr>
<tr><td>Anna taler med <strong>hendes</strong> søster.</td><td class="grammar-english" lang="en"><em>Anna is talking to another woman's sister.</em></td></tr>
</tbody>
</table>

<table class="grammar-noun-table grammar-comparison-table">
<thead><tr><th><strong>En-ord</strong></th><th><strong>Et-ord</strong></th><th><strong>Flertal</strong></th></tr></thead>
<tbody><tr class="grammar-comparison-forms"><td>sin jakke</td><td>sit tørklæde</td><td>sine sko</td></tr></tbody>
</table>
<aside class="grammar-tip"><p lang="da"><strong>Test:</strong> Tilhører tingen subjektet i samme sætning? Ja → sin/sit/sine. Nej → hans/hendes/deres.</p><p class="grammar-english" lang="en"><em>Does the thing belong to the subject of the same clause? Yes → sin/sit/sine. No → hans/hendes/deres.</em></p></aside>
        `
    },
    {
        id: "pronomen-6",
        titleDa: "Refleksive pronominer og verber",
        titleEn: "Reflexive pronouns and verbs",
        content: `
<p lang="da">Et refleksivt pronomen viser tilbage til subjektet. Subjekt og objekt er den samme person eller gruppe.</p>
<p class="grammar-english" lang="en"><em>A reflexive pronoun refers back to the subject. The subject and object are the same person or group.</em></p>
<table class="grammar-noun-table grammar-exercise-table">
<thead><tr><th><strong>Subjekt</strong></th><th><span class="grammar-paired-label"><strong lang="da">Refleksiv form</strong><em class="grammar-english" lang="en">Reflexive form</em></span></th><th><strong>Eksempel</strong></th></tr></thead>
<tbody>
<tr><td>jeg</td><td>mig</td><td>Jeg vasker mig.</td></tr><tr><td>du</td><td>dig</td><td>Du skynder dig.</td></tr><tr><td>han/hun</td><td>sig</td><td>Hun sætter sig.</td></tr><tr><td>vi</td><td>os</td><td>Vi gemmer os.</td></tr><tr><td>I</td><td>jer</td><td>I glæder jer.</td></tr><tr><td>de</td><td>sig</td><td>De vasker sig.</td></tr>
</tbody></table>
<h3>Almindelige refleksive verber / Common reflexive verbs</h3>
<p lang="da">at vaske sig, barbere sig, sminke sig, sætte sig, skynde sig, glæde sig, føle sig og klare sig.</p>
<p class="grammar-english" lang="en"><em>to wash oneself, shave, put on makeup, sit down, hurry, look forward, feel, and manage.</em></p>
<h3>Ordstilling med ikke / Word order with ikke</h3>
<p lang="da">Hovedsætning: Jeg sætter <strong>mig ikke</strong>. Ledsætning: … fordi jeg <strong>ikke sætter mig</strong>.</p>
<p class="grammar-english" lang="en"><em>Main clause: reflexive pronoun before ikke. Subordinate clause: ikke before the finite verb and reflexive pronoun.</em></p>
        `
    },
    {
        id: "pronomen-7",
        titleDa: "Demonstrative og spørgende pronominer",
        titleEn: "Demonstrative and interrogative pronouns",
        content: `
<p lang="da">Demonstrative pronominer peger på noget. Spørgende pronominer bruges til at spørge om personer, ting, valg eller ejerskab.</p>
<p class="grammar-english" lang="en"><em>Demonstrative pronouns point to something. Interrogative pronouns ask about people, things, choices, or ownership.</em></p>
<table class="grammar-noun-table grammar-bilingual-table">
<thead><tr><th><strong>Form</strong></th><th><span class="grammar-paired-label"><strong lang="da">Brug</strong><em class="grammar-english" lang="en">Use</em></span></th></tr></thead>
<tbody><tr><td>den / denne</td><td>en-ord, ental</td></tr><tr><td>det / dette</td><td>et-ord, ental</td></tr><tr><td>de / disse</td><td>flertal</td></tr></tbody></table>
<table class="grammar-noun-table grammar-example-table">
<thead><tr><th><strong>Pronomen</strong></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead>
<tbody><tr><td>hvem</td><td>Hvem kommer?</td><td class="grammar-english" lang="en"><em>Who is coming?</em></td></tr><tr><td>hvad</td><td>Hvad laver du?</td><td class="grammar-english" lang="en"><em>What are you doing?</em></td></tr><tr><td>hvilken/hvilket/hvilke</td><td>Hvilket hus er dit?</td><td class="grammar-english" lang="en"><em>Which house is yours?</em></td></tr><tr><td>hvis</td><td>Hvis jakke er det?</td><td class="grammar-english" lang="en"><em>Whose jacket is it?</em></td></tr></tbody></table>
        `
    },
    {
        id: "pronomen-8",
        titleDa: "Relative pronominer: som og der",
        titleEn: "Relative pronouns: som and der",
        content: `
<p lang="da">Relative pronominer forbinder en ledsætning med noget foran. Når relativordet er subjekt, kan både som og der ofte bruges. Når det er objekt, bruges som.</p>
<p class="grammar-english" lang="en"><em>Relative pronouns connect a relative clause to something mentioned before. As the relative-clause subject, both som and der are often possible. As an object, use som.</em></p>
<table class="grammar-noun-table grammar-example-table">
<thead><tr><th><span class="grammar-paired-label"><strong lang="da">Funktion</strong><em class="grammar-english" lang="en">Function</em></span></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead>
<tbody><tr><td>Subjekt</td><td>Pigen, <strong>som/der</strong> arbejder her …</td><td class="grammar-english" lang="en"><em>The girl who works here …</em></td></tr><tr><td>Objekt</td><td>Pigen, <strong>som</strong> jeg talte med …</td><td class="grammar-english" lang="en"><em>The girl whom I spoke with …</em></td></tr></tbody></table>
<aside class="grammar-rule"><p lang="da"><strong>Hurtig regel:</strong> Der kan kun være subjekt i en relativ ledsætning. Som kan være subjekt eller objekt.</p><p class="grammar-english" lang="en"><em>Der can only be the subject of a relative clause. Som can be a subject or object.</em></p></aside>
        `
    },
    {
        id: "pronomen-9",
        titleDa: "Hvis, hvor og hvilket",
        titleEn: "Hvis, hvor, and hvilket",
        content: `
<p lang="da"><strong>Hvis</strong> viser ejerskab. <strong>Hvor</strong> viser sted eller tid. <strong>Hvilket</strong> kan vise tilbage til en hel sætning.</p>
<p class="grammar-english" lang="en"><em>Hvis shows possession. Hvor refers to a place or time. Hvilket can refer back to a whole preceding clause.</em></p>
<table class="grammar-noun-table grammar-example-table">
<thead><tr><th><strong>Valg</strong></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead>
<tbody><tr><td>hvis</td><td>En veninde, <strong>hvis</strong> datter er læge.</td><td class="grammar-english" lang="en"><em>A friend whose daughter is a doctor.</em></td></tr><tr><td>hvor</td><td>Byen, <strong>hvor</strong> jeg er født.</td><td class="grammar-english" lang="en"><em>The city where I was born.</em></td></tr><tr><td>som</td><td>Firmaet, <strong>som</strong> jeg arbejder i.</td><td class="grammar-english" lang="en"><em>The company that I work for.</em></td></tr><tr><td>hvilket</td><td>Han taler højt, <strong>hvilket</strong> er irriterende.</td><td class="grammar-english" lang="en"><em>He speaks loudly, which is annoying.</em></td></tr></tbody></table>
<aside class="grammar-tip"><p lang="da">Brug hvor, når betydningen er <strong>i/på stedet eller tidspunktet</strong>. Brug som, når ordet er subjekt, objekt eller del af en præpositionsforbindelse.</p><p class="grammar-english" lang="en"><em>Use hvor for at/in a place or time; use som as a subject, object, or part of a prepositional phrase.</em></p></aside>
        `
    },
    {
        id: "pronomen-10",
        titleDa: "Ubestemte og gensidige pronominer",
        titleEn: "Indefinite and reciprocal pronouns",
        content: `
<p lang="da">Ubestemte pronominer henviser uden præcis identifikation. Nogen og noget bruges ofte i spørgsmål, nægtelser og betingelser. Nogle betyder normalt et faktisk antal.</p>
<p class="grammar-english" lang="en"><em>Indefinite pronouns refer without precise identification. Nogen and noget often appear in questions, negatives, and conditions. Nogle normally means an actual number.</em></p>
<table class="grammar-noun-table grammar-example-table">
<thead><tr><th><strong>Form</strong></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead>
<tbody><tr><td>nogen</td><td>Er der nogen hjemme?</td><td class="grammar-english" lang="en"><em>Is anyone home?</em></td></tr><tr><td>noget</td><td>Har du noget vand?</td><td class="grammar-english" lang="en"><em>Do you have any water?</em></td></tr><tr><td>nogle</td><td>Jeg har nogle venner.</td><td class="grammar-english" lang="en"><em>I have some friends.</em></td></tr><tr><td>ingen/intet</td><td>Ingen kom. Han sagde intet.</td><td class="grammar-english" lang="en"><em>Nobody came. He said nothing.</em></td></tr><tr><td>man</td><td>Man lærer af sine fejl.</td><td class="grammar-english" lang="en"><em>People learn from their mistakes.</em></td></tr></tbody></table>
<h3>Hinanden / Each other</h3><p lang="da">Hinanden viser gensidighed: Per og Mette hjælper <strong>hinanden</strong>. De vasker sig betyder, at hver vasker sig selv; de vasker hinanden betyder, at de vasker de andre.</p><p class="grammar-english" lang="en"><em>Hinanden expresses a reciprocal action. Compare reflexive sig with reciprocal hinanden.</em></p>
        `
    },
    {
        id: "pronomen-11",
        titleDa: "Der eller det?",
        titleEn: "Der or det?",
        content: `
<p lang="da">Det bruges om vejr, tid og upersonlige forhold samt foran en infinitiv eller ledsætning. Der introducerer ofte en ny eller ubestemt person eller ting senere i sætningen.</p>
<p class="grammar-english" lang="en"><em>Det is used for weather, time, impersonal conditions, and before an infinitive or clause. Der often introduces a new or indefinite person or thing later in the sentence.</em></p>
<table class="grammar-noun-table grammar-example-table"><thead><tr><th><strong>Mønster</strong></th><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th></tr></thead><tbody><tr><td>Vejr</td><td><strong>Det</strong> regner.</td><td class="grammar-english" lang="en"><em>It is raining.</em></td></tr><tr><td>Det + infinitiv</td><td><strong>Det</strong> er svært at forstå.</td><td class="grammar-english" lang="en"><em>It is difficult to understand.</em></td></tr><tr><td>Det + ledsætning</td><td><strong>Det</strong> er godt, at du kom.</td><td class="grammar-english" lang="en"><em>It is good that you came.</em></td></tr><tr><td>Nyt subjekt</td><td><strong>Der</strong> står en cykel udenfor.</td><td class="grammar-english" lang="en"><em>There is a bicycle outside.</em></td></tr><tr><td>Nyt subjekt</td><td><strong>Der</strong> bor mange mennesker her.</td><td class="grammar-english" lang="en"><em>Many people live here.</em></td></tr></tbody></table>
        `
    },
    {
        id: "pronomen-12",
        titleDa: "Objektpronominers placering",
        titleEn: "Placement of object pronouns",
        content: `
<p lang="da">Et kort, ubetonet objektpronomen står ofte tidligt i hovedsætningen. Placeringen afhænger af, om verballeddet har ét eller flere verber.</p>
<p class="grammar-english" lang="en"><em>A short unstressed object pronoun often appears early in a main clause. Its placement depends on whether the verb phrase contains one or several verbs.</em></p>
<table class="grammar-noun-table grammar-exercise-table"><thead><tr><th><strong>Type</strong></th><th><strong>Eksempel</strong></th><th><strong>Mønster</strong></th></tr></thead><tbody><tr><td>Substantiv</td><td>Vi møder tit familien.</td><td>verbum + adverbium + substantiv</td></tr><tr><td>Pronomen</td><td>Vi møder dem tit.</td><td>verbum + pronomen + adverbium</td></tr><tr><td>Ét verbum</td><td>Hun viser det ikke.</td><td>verbum + pronomen + ikke</td></tr><tr><td>Modal + infinitiv</td><td>Hun må ikke vide det.</td><td>modal + ikke + infinitiv + pronomen</td></tr><tr><td>Perfektum</td><td>Vi har aldrig mødt dem.</td><td>har + aldrig + participium + pronomen</td></tr></tbody></table>
<p lang="da">Ved to objektpronominer står det indirekte objekt normalt først: Han viste <strong>hende dem</strong> ikke.</p><p class="grammar-english" lang="en"><em>With two object pronouns, the indirect object normally comes first.</em></p>
        `
    },
    {
        id: "pronomen-13",
        titleDa: "Beslutningsguide og typiske fejl",
        titleEn: "Decision guide and common mistakes",
        content: `
<table class="grammar-noun-table grammar-correction-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Spørgsmål</strong><em class="grammar-english" lang="en">Question</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Vælg</strong><em class="grammar-english" lang="en">Choose</em></span></th></tr></thead><tbody><tr><td>Er pronomenet subjekt?</td><td>jeg, vi, de</td></tr><tr><td>Er det objekt eller efter en præposition?</td><td>mig, os, dem</td></tr><tr><td>Tilhører noget subjektet?</td><td>sin, sit, sine</td></tr><tr><td>Gør subjektet noget mod sig selv?</td><td>refleksivt pronomen</td></tr><tr><td>Er relativordet subjekt?</td><td>som eller der</td></tr><tr><td>Er relativordet objekt?</td><td>som</td></tr><tr><td>Betyder det i/på stedet?</td><td>hvor</td></tr><tr><td>Introduceres et nyt subjekt?</td><td>der</td></tr></tbody></table>
<h3>Ret de almindelige fejl / Correct common mistakes</h3>
<table class="grammar-noun-table grammar-correction-table"><thead><tr><th><span class="grammar-paired-label"><strong lang="da">Forkert</strong><em class="grammar-english" lang="en">Incorrect</em></span></th><th><span class="grammar-paired-label"><strong lang="da">Korrekt</strong><em class="grammar-english" lang="en">Correct</em></span></th></tr></thead><tbody><tr><td>Mig kommer i morgen.</td><td>Jeg kommer i morgen.</td></tr><tr><td>Hun taler med jeg.</td><td>Hun taler med mig.</td></tr><tr><td>Peter og mig går.</td><td>Peter og jeg går.</td></tr><tr><td>Hun tog hendes jakke.</td><td>Hun tog sin jakke.</td></tr><tr><td>Pigen, der jeg kender …</td><td>Pigen, som jeg kender …</td></tr><tr><td>Der er svært at forstå.</td><td>Det er svært at forstå.</td></tr><tr><td>Det står en bil udenfor.</td><td>Der står en bil udenfor.</td></tr></tbody></table>
        `
    },

    {
        id: "pronomen-15",
        titleDa: "Øvelser A–D",
        titleEn: "Exercises A–D",
        content: `
<h3>A. Subjekt- eller objektform / Subject or object form</h3><ol><li>(Jeg / Mig) arbejder hjemme.</li><li>Hun ringede til (jeg / mig).</li><li>Peter og (jeg / mig) tager toget.</li><li>Læreren talte med Anna og (jeg / mig).</li><li>(De / Dem) bor på tredje sal.</li><li>Vi inviterede (de / dem) til festen.</li><li>Det er (hun / hende), der har ringet.</li></ol>
<h3>B. Vi/os og de/dem</h3><ol><li>(Vi / Os) studerende mødes kl. 9.</li><li>Der er ingen, der hjælper (vi / os) studerende.</li><li>(De / Dem), der har afleveret, kan gå.</li><li>Vi kontakter (de / dem), der mangler at svare.</li><li>Det er svært for (de / dem) unge.</li></ol>
<h3>C. Possessiver / Possessives</h3><ol><li>Jeg har glemt ___ nøgle. (min/mit/mine)</li><li>Hun har taget ___ tørklæde. (sin/sit/sine)</li><li>Han vasker ___ biler. (sin/sit/sine)</li><li>Anna taler med ___ søster. Søsteren er Annas egen. (sin/hendes)</li><li>Anna taler med ___ søster. Søsteren tilhører Maria. (sin/hendes)</li><li>Vi besøger ___ forældre. (vores/voreses)</li></ol>
<h3>D. Refleksive pronominer / Reflexive pronouns</h3><ol><li>Jeg vasker ___.</li><li>Du skynder ___.</li><li>Han sætter ___.</li><li>Vi glæder ___ til ferien.</li><li>I gemmer ___.</li><li>De føler ___ trætte.</li></ol>
        `
    },
    {
        id: "pronomen-16",
        titleDa: "Øvelser E–I",
        titleEn: "Exercises E–I",
        content: `
<h3>E. Som, der, hvis eller hvor?</h3><ol><li>Pigen, ___ arbejder her, er min søster.</li><li>Pigen, ___ jeg talte med, er min søster.</li><li>Jeg kender en mand, ___ bil er rød.</li><li>Det er huset, ___ jeg voksede op.</li><li>Firmaet, ___ ligger ved havnen, er nyt.</li><li>Firmaet, ___ jeg arbejder i, er nyt.</li></ol>
<h3>F. Nogen, noget eller nogle?</h3><ol><li>Er der ___ hjemme?</li><li>Har du ___ vand?</li><li>Jeg har ___ gode venner i byen.</li><li>Jeg har ikke ___ spørgsmål.</li><li>Der går ___ dage, før du får svar.</li><li>Sig det ikke til ___.</li></ol>
<h3>G. Der eller det?</h3><ol><li>___ regner i dag.</li><li>___ står en cykel udenfor.</li><li>___ er svært at lære udtalen.</li><li>___ bor mange mennesker her.</li><li>___ er godt, at du kom.</li><li>___ er blevet stjålet en computer.</li></ol>
<h3>H. Ret fejlene / Correct the mistakes</h3><ol><li>Mig og Peter skal i biografen.</li><li>Hun gav bogen til jeg.</li><li>Maria tog hendes jakke. Jakken var Marias egen.</li><li>De vasker dem hver morgen. De vasker sig selv.</li><li>Pigen, der jeg kender, bor her.</li><li>Byen, som jeg bor, er lille.</li><li>Jeg har nogle spørgsmål?</li><li>Det står en mand ved døren.</li></ol>
    `
    },
    {
        id: "pronomen-17",
        titleDa: "Facit A–D",
        titleEn: "Answers A–D",
        content: `
<h3>A. Subjekt- eller objektform</h3><ol><li>Jeg</li><li>mig</li><li>jeg</li><li>mig</li><li>De</li><li>dem</li><li>hende</li></ol>
<h3>B. Vi/os og de/dem</h3><ol><li>Vi studerende</li><li>os studerende</li><li>De, der …</li><li>dem, der …</li><li>dem unge</li></ol>
<h3>C. Possessiver</h3><ol><li>min nøgle</li><li>sit tørklæde</li><li>sine biler</li><li>sin søster</li><li>hendes søster</li><li>vores forældre</li></ol>
<h3>D. Refleksive pronominer</h3><ol><li>mig</li><li>dig</li><li>sig</li><li>os</li><li>jer</li><li>sig</li></ol>
        `
    },
    {
        id: "pronomen-18",
        titleDa: "Facit E–H",
        titleEn: "Answers E–H",
        content: `
<h3>E. Relative pronominer</h3><ol><li>som/der</li><li>som</li><li>hvis</li><li>hvor</li><li>som/der</li><li>som</li></ol>
<h3>F. Nogen, noget eller nogle</h3><ol><li>nogen</li><li>noget</li><li>nogle</li><li>nogen</li><li>nogle</li><li>nogen</li></ol>
<h3>G. Der eller det</h3><ol><li>Det regner.</li><li>Der står en cykel.</li><li>Det er svært …</li><li>Der bor mange …</li><li>Det er godt …</li><li>Der er blevet stjålet …</li></ol>
<h3>H. Rettelser</h3><ol><li>Peter og jeg skal i biografen.</li><li>Hun gav bogen til mig.</li><li>Maria tog sin jakke.</li><li>De vasker sig hver morgen.</li><li>Pigen, som jeg kender, bor her.</li><li>Byen, hvor jeg bor, er lille.</li><li>Har jeg nogen spørgsmål? / Jeg har nogle spørgsmål.</li><li>Der står en mand ved døren.</li></ol>
        `
    },
    {
        id: "pronomen-19",
        titleDa: "Miniordliste og sidste tjek",
        titleEn: "Mini glossary and final check",
        content: `
<table class="grammar-noun-table grammar-example-table"><thead><tr><th lang="da">Dansk</th><th class="grammar-english" lang="en">English</th><th><span class="grammar-paired-label"><strong lang="da">Kort forklaring</strong><em class="grammar-english" lang="en">Short explanation</em></span></th></tr></thead><tbody><tr><td>pronomen / stedord</td><td class="grammar-english" lang="en"><em>pronoun</em></td><td>erstatter, peger på eller spørger om et substantiv</td></tr><tr><td>subjektform</td><td class="grammar-english" lang="en"><em>subject form</em></td><td>form brugt som subjekt</td></tr><tr><td>objektform</td><td class="grammar-english" lang="en"><em>object form</em></td><td>form brugt som objekt og efter præposition</td></tr><tr><td>possessivt pronomen</td><td class="grammar-english" lang="en"><em>possessive pronoun</em></td><td>viser ejerskab</td></tr><tr><td>refleksivt pronomen</td><td class="grammar-english" lang="en"><em>reflexive pronoun</em></td><td>viser tilbage til subjektet</td></tr><tr><td>relativt pronomen</td><td class="grammar-english" lang="en"><em>relative pronoun</em></td><td>forbinder en relativ ledsætning</td></tr><tr><td>ubestemt pronomen</td><td class="grammar-english" lang="en"><em>indefinite pronoun</em></td><td>henviser uden præcis identifikation</td></tr><tr><td>foreløbigt subjekt</td><td class="grammar-english" lang="en"><em>dummy subject</em></td><td>der eller det før det egentlige indhold</td></tr></tbody></table>
<aside class="grammar-tip"><p lang="da"><strong>Din vigtigste vane:</strong> Find først pronomenets funktion: subjekt, objekt, ejer, refleksivt led eller relativ forbindelse. Vælg derefter formen.</p><p class="grammar-english" lang="en"><em>First identify the pronoun's function: subject, object, possessor, reflexive element, or relative connection. Then choose the form.</em></p></aside>
        `
    }
];
