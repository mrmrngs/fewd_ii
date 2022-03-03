let userLang = prompt('Please enter your desired language code ("es", "de", "en", or "fr"):').toLowerCase();
if (userLang == 'es') {
    console.log('Hello World translated into Spanish is: Hola Mundo');
} else if (userLang == 'de') {
    console.log('Hello World translated into German is: Hallo Welt');
} else if (userLang == 'fr') {
    console.log('Hello World translated into French is: Bonjour Le Monde');
} else {
    console.log('Hello World');
}