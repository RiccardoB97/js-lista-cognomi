//1. chiedi all’utente il cognome
userSurname = prompt('Insert your surname: ')
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
surnameList.push(userSurname)
//3. stampa la lista ordinata alfabeticamente
surnameList.sort()
//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
document.getElementById('position').innerHTML = "The surname you inserted is in position number" + (surnameList.indexOf(userSurname) + 1);