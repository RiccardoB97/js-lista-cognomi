//1. chiedi all’utente il cognome
userSurname = prompt('Insert your surname: ')
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
userSurnameCaps = userSurname.charAt(0).toUpperCase() + userSurname.slice(1)
surnameList.push(userSurnameCaps)
//3. stampa la lista ordinata alfabeticamente
surnameList.sort()
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
document.getElementById('position').innerHTML = "The surname you inserted is in position number " + (surnameList.indexOf(userSurnameCaps) + 1);