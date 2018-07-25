const getFlightInfo = require('./getFlightInfo.js');

//test1: se passo un codice di aeroporto e il selettore departure, mi aspetto un array di stringhe con i codici dei voli
test('passing MXP, departure, expect array of departures from MXP', () => {
    expect(getFlightInfo())).toBe();
});

//test2: se passo un codice di aeroporto e il selettore arrival, mi aspetto un array di stringhe con i codici dei voli
test('passing MXP, departure, arrival array of arrival flight from MXP', () => {
    expect(getFlightInfo())).toBe();
});

//test3: se passo un codice di aeroporto e un selettore non riconosciuto, mi aspetto che ritorni "Selettore errato"
test('selector unknown', () => {
    expect(getFlightInfo())).toBe('Wrong selector, try again with [departure] or [arrival].');
});

//test4: se passo un codice di aeroporto non riconosciuto, mi aspetto che ritorni "Codice di aeroporto nn riconosciuto"
test('Unknown airport code', () => {
    expect(getFlightInfo())).toBe('Airport code not recognized, try again.');
});
