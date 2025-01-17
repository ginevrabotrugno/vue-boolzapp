console.log('BONUS');

const { createApp } = Vue;
const dt = luxon.DateTime; 
console.log(dt);

createApp ({
    data() {
        return {
            showSplash: true,
            me: {
                name: 'Ginevra',
                avatar: 'img/avataaars-1.png',
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avataaars-2.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avataaars-3.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avataaars-4.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avataaars-5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avataaars-6.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avataaars-7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avataaars-8.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avataaars-9.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            selectedContactIndex: null,
            newMessage: '',
            openMessageOptions: [],
            searchKeyword: '',
            statusText: 'online', // testo di stato iniziale
            typingTimeout: null, // per gestire il timeout dello "sta scrivendo..."
            lastAccess: '', // per memorizzare l'ultimo accesso
            isDropdownOpen: false,
            showAddContactPopup: false,
            newContact: {
                name: '',
                avatar: ''
            },
        }
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchKeyword.toLowerCase());
            });
        }
    },
    methods: {
        selectContact(index) {
            this.selectedContactIndex = index;
        },
        sendMessage() {
            // Verifica che il messaggio non sia vuoto o composto solo da spazi
            if (this.newMessage.trim() === '') {
                return;
            }
            const activeContact = this.contacts[this.selectedContactIndex];
            const now = dt.now().toFormat('dd/MM/yyyy HH:mm:ss');
            activeContact.messages.push({
                date: now,
                message: this.newMessage,
                status: 'sent'
            });
            this.newMessage = ''; 

            // Aggiorna lo stato a "sta scrivendo..."
            this.statusText = 'sta scrivendo...';
            
            // Scorrimento automatico verso l'ultimo messaggio
            this.$nextTick(() => {
                this.scrollToBottom();
            });

            setTimeout(() => {
                const nowResponse = dt.now().toFormat('dd/MM/yyyy HH:mm:ss');
                
                // Esegui la richiesta Axios per ottenere una scusa dall'API
                axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
                    .then(result => {
                        activeContact.messages.push({
                            date: nowResponse,
                            message: result.data.response, 
                            status: 'received'
                        });

                        // Imposta lo stato su "online"
                        this.statusText = 'online';

                        // Mantieni lo stato "online" per 2 secondi
                        setTimeout(() => {
                            // Imposta l'ultimo accesso
                            this.lastAccess = dt.fromFormat(nowResponse, 'dd/MM/yyyy HH:mm:ss').toFormat('HH:mm');
                            this.statusText = `ultimo accesso alle ${this.lastAccess}`;
                        }, 2000);

                        // Scorrimento automatico verso l'ultimo messaggio
                        this.$nextTick(() => {
                            this.scrollToBottom();
                        });

                    })
                    .catch(error => {
                        console.error('Errore nella richiesta API:', error);
                        // Nel caso di errore, inserisci comunque un messaggio di fallback
                        activeContact.messages.push({
                            date: nowResponse,
                            message: 'Mi dispiace, non ho capito.',
                            status: 'received'
                        });

                        // Imposta lo stato su "online"
                        this.statusText = 'online';

                        // Mantieni lo stato "online" per 2 secondi
                        setTimeout(() => {
                            // Imposta l'ultimo accesso
                            this.lastAccess = dt.fromFormat(nowResponse, 'dd/MM/yyyy HH:mm:ss').toFormat('HH:mm');
                            this.statusText = `ultimo accesso alle ${this.lastAccess}`;
                        }, 2000);

                    });

            }, 1000);
        },
        formatMessageDate(dateTimeString) {
            return dt.fromFormat(dateTimeString, 'dd/MM/yyyy HH:mm:ss').toFormat('HH:mm');
        },
        // Metodo per mostrare/nascondere il menu a tendina
        toggleMessageOptions(msgIndex) {
            const index = this.openMessageOptions.indexOf(msgIndex);
            if (index === -1) {
                // Messaggio non aperto, aggiungi l'indice all'array
                this.openMessageOptions.push(msgIndex);
            } else {
                // Messaggio già aperto, rimuovi l'indice dall'array
                this.openMessageOptions.splice(index, 1);
            }
        },
        isMessageOptionsOpen(msgIndex) {
            return this.openMessageOptions.includes(msgIndex);
        },
        // Metodo per cancellare un messaggio
        deleteMessage(msgIndex) {
            // Rimuove il messaggio dall'array dei messaggi del contatto attivo
            this.contacts[this.selectedContactIndex].messages.splice(msgIndex, 1);
        },
        getLastMessage(contact) {
            if (contact.messages.length > 0) {
                return contact.messages[contact.messages.length - 1].message;
            }
            return "";
        },
        formatLastMessageTime(contact) {
            if (contact.messages.length > 0) {
                const lastMessage = contact.messages[contact.messages.length - 1];
                return this.formatMessageDate(lastMessage.date);
            }
            return "";
        },
        deleteAllMessages() {
            const activeContact = this.contacts[this.selectedContactIndex];
            activeContact.messages = []; 
        },
        deleteChat() {
            // Remove the entire contact from the contacts array
            this.contacts.splice(this.selectedContactIndex, 1);
        },
        addContact() {
            if (this.newContact.name.trim() && this.newContact.avatar.trim()) {
                this.contacts.push({
                    name: this.newContact.name,
                    avatar: this.newContact.avatar,
                    messages: []
                });
                this.newContact.name = '';
                this.newContact.avatar = '';
                this.showAddContactPopup = false;
            } else {
                alert('Per favore, inserisci un nome e un link all\'icona validi.');
            }
        },
        // Modifica il metodo che visualizza il popup
        showAddContactForm() {
            this.showAddContactPopup = true;
        },

        scrollToBottom() {
            const chatContainer = this.$refs.chatContainer;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        },
    }, 
    mounted() {
        // Imposta showSplash su false dopo 1 secondo
        setTimeout(() => {
            this.showSplash = false;
        }, 1000);
        console.log(this.showSplash);
    },



}).mount('#app');