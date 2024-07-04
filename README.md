# Laboration 
## Utvecklingsmiljö & Verktyg
Operativsystem: Windows 10
IDE: PhpStorm
Git version: 2.23.0.windows.1
Web browser: Google Chrome
## Syfte
Syftet med laboration 4 var att skapa ett bokningsystem för ett flyg med 18 platser, varav 6 av dessa var förstaklassplatser och resten tillhörde ekonomiklassen. Platserna skulle representeras med 6 rader och 3 kolumner. Platserna skulle ändra färg beroende på om den var tom, bokad eller bara vald för tillfället. Om en bokning är godkänd så skrivs en boardingcard via en ny flik.
En annan viktig del av laborationen var att man skulle använda sig av session storage för att bokningen skulle sparas även om man hoppar mellan alla andra sidor under en session. 
## Genomförande
För att genomföra laborationen började jag med att fixa html-filen, först skapades alla input labels på vänster sida, t.ex.:
```html
<p><label>First name: <br/>
 <input id="nameInput" type="text">
 </label></p>
``` 
Sedan gick jag över till att skapa en tabell på vänstersidan som representerar alla flygstolar. Jag använde många funktioner med if-satser för att bestämma vad som skulle hända beroende på vad användaren väljer att trycka på eller skriva. 
För info om session storage använde jag denna hemsida: https://www.w3schools.com/html/html5_webstorage.asp
Jag använde mig aldrig av Canvas som beskrevs i boken "Internet and World Wide Web How to Program", kapitel 14, däremot hjälpte kapitel 13 som handlade om event handling väldigt mycket, speciellt med name labels, submit och reset. 

Jag uppdaterade så att sessionstorage skulle fungera som det ska, det lilla jag ändrade var att jag ändrade så att boardingcard funktionen kallas efter sessionstorage sparas, därför fungerar det nu till skillnad från tidigare inlämmning.

Märkte ett fel vid rad 173 i JS-filen där det stod i istället för index vilket skapade problem med getSessionStorage. Detta har jag nu fixat
## Diskussion
Det här var den absolut mest innehållsrika laboration och den svåraste i den här kursen. Materialet som finns tillgänglig var bra och enkla att första, vissa delar var dock svårare att helt förstå som session storage där man fick försöka googla fram olika typer av lösning. Session storage i sig är inte komplicerat men att förstå hur den skulle användas blev lite av ett problem i början, Laborationen var också relativt stor med tanke på hur mycket som ska komma med i hemsidan och även ett boardingcard som kräver en ny flik. Det var i slutändan väldigt lärorikt. 

Ändrade så att sessionstorage fungerar nu och även att alla html-dokumenten är validerade. Nu ska man få ett nytt fönster (tab) och sedan hoppa mellan alla sidor och fortfarande ha kvar bokningarna i booking.html.







    