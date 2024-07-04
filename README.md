# Laboration 
## Utvecklingsmilj� & Verktyg
Operativsystem: Windows 10
IDE: PhpStorm
Git version: 2.23.0.windows.1
Web browser: Google Chrome
## Syfte
Syftet med laboration 4 var att skapa ett bokningsystem f�r ett flyg med 18 platser, varav 6 av dessa var f�rstaklassplatser och resten tillh�rde ekonomiklassen. Platserna skulle representeras med 6 rader och 3 kolumner. Platserna skulle �ndra f�rg beroende p� om den var tom, bokad eller bara vald f�r tillf�llet. Om en bokning �r godk�nd s� skrivs en boardingcard via en ny flik.
En annan viktig del av laborationen var att man skulle anv�nda sig av session storage f�r att bokningen skulle sparas �ven om man hoppar mellan alla andra sidor under en session. 
## Genomf�rande
F�r att genomf�ra laborationen b�rjade jag med att fixa html-filen, f�rst skapades alla input labels p� v�nster sida, t.ex.:
```html
<p><label>First name: <br/>
 <input id="nameInput" type="text">
 </label></p>
``` 
Sedan gick jag �ver till att skapa en tabell p� v�nstersidan som representerar alla flygstolar. Jag anv�nde m�nga funktioner med if-satser f�r att best�mma vad som skulle h�nda beroende p� vad anv�ndaren v�ljer att trycka p� eller skriva. 
F�r info om session storage anv�nde jag denna hemsida: https://www.w3schools.com/html/html5_webstorage.asp
Jag anv�nde mig aldrig av Canvas som beskrevs i boken "Internet and World Wide Web How to Program", kapitel 14, d�remot hj�lpte kapitel 13 som handlade om event handling v�ldigt mycket, speciellt med name labels, submit och reset. 

Jag uppdaterade s� att sessionstorage skulle fungera som det ska, det lilla jag �ndrade var att jag �ndrade s� att boardingcard funktionen kallas efter sessionstorage sparas, d�rf�r fungerar det nu till skillnad fr�n tidigare inl�mmning.

M�rkte ett fel vid rad 173 i JS-filen d�r det stod i ist�llet f�r index vilket skapade problem med getSessionStorage. Detta har jag nu fixat
## Diskussion
Det h�r var den absolut mest inneh�llsrika laboration och den sv�raste i den h�r kursen. Materialet som finns tillg�nglig var bra och enkla att f�rsta, vissa delar var dock sv�rare att helt f�rst� som session storage d�r man fick f�rs�ka googla fram olika typer av l�sning. Session storage i sig �r inte komplicerat men att f�rst� hur den skulle anv�ndas blev lite av ett problem i b�rjan, Laborationen var ocks� relativt stor med tanke p� hur mycket som ska komma med i hemsidan och �ven ett boardingcard som kr�ver en ny flik. Det var i slut�ndan v�ldigt l�rorikt. 

�ndrade s� att sessionstorage fungerar nu och �ven att alla html-dokumenten �r validerade. Nu ska man f� ett nytt f�nster (tab) och sedan hoppa mellan alla sidor och fortfarande ha kvar bokningarna i booking.html.







    