# Vue Boolzapp

## Descrizione
**Vue Boolzapp** è un'applicazione di messaggistica sviluppata con **Vue.js**. Il progetto replica un'app di messaggistica con la possibilità di inviare messaggi, visualizzare una lista di contatti e implementare funzionalità interattive come la ricerca utenti, la visualizzazione dei messaggi e la risposta automatica dell'interlocutore.

Il progetto è suddiviso in più milestone, ognuna delle quali aggiunge nuove funzionalità all'app, migliorandone l'interattività e l'usabilità.

## Funzionalità Principali

### Milestone 1: Replica grafica di un'app di messaggistica
- **Messaggi dell'utente e dell'interlocutore**: I messaggi inviati dall'utente sono visualizzati in verde, mentre quelli inviati dall'interlocutore sono in bianco. Vengono assegnate due classi CSS differenti per ogni tipo di messaggio.
- **Lista contatti dinamica**: Utilizzo della direttiva **v-for** per visualizzare dinamicamente i contatti, mostrando il nome e l'immagine di ciascun contatto.

### Milestone 2: Gestione della conversazione
- **Visualizzazione dei messaggi**: I messaggi relativi al contatto selezionato vengono mostrati dinamicamente nel pannello della conversazione, usando la direttiva **v-for** per iterare sui messaggi.
- **Selezione del contatto**: Cliccando su un contatto, si apre la conversazione con il contatto selezionato.

### Milestone 3: Aggiunta di nuovi messaggi
- **Invio messaggi**: L'utente può scrivere un messaggio nella barra di input. Premi "Enter" per inviarlo e aggiungere il messaggio verde al thread di conversazione.
- **Risposta automatica**: Dopo ogni messaggio inviato, l'interlocutore risponde automaticamente con un messaggio di tipo "ok" che appare dopo 1 secondo.

### Milestone 4: Ricerca utenti
- **Ricerca dinamica**: L'utente può scrivere una parola chiave nell'input di ricerca a sinistra. Solo i contatti il cui nome contiene le lettere inserite saranno visibili. Per esempio, scrivendo “mar” appariranno solo i contatti con nomi come Marco, Matteo e Martina.

### Milestone 5 (Opzionale): Gestione dei messaggi
- **Cancellazione messaggi**: Cliccando su un messaggio, appare un menu a tendina che consente di cancellarlo dalla conversazione.

### Funzionalità aggiuntiva
- **Visualizzazione ora e ultimo messaggio**: Ogni contatto nella lista visualizza l'ora dell'ultimo messaggio inviato e il contenuto del messaggio stesso.

## Tecnologie
- **Vue.js**: Per la gestione dinamica dell'interfaccia utente e l'interazione con i dati.
- **CSS**: Per la stilizzazione dell'interfaccia, inclusa la differenziazione tra i messaggi dell'utente e quelli dell'interlocutore.

## Come Funziona
- I messaggi vengono gestiti e visualizzati dinamicamente in base all'interazione dell'utente.
- Ogni funzionalità è collegata a eventi che aggiornano l'interfaccia in tempo reale (ad esempio, la risposta automatica dell'interlocutore o la ricerca contatti).
- La struttura dell'app è modulare e basata su componenti Vue.js, che permette una gestione chiara e scalabile dell'interfaccia.

