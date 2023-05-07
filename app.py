from flask import Flask, request, url_for, render_template, send_from_directory


app = Flask(__name__) 



@app.route('/') 
def index(): 
    title = "Online Narzędzia"
    metaData = "narzędzia online, funkcje tekstowe, generatory it, dane testowe, konwertery, pomoc online"
    metaKeys = "generatory danych , kalkulator online, generator iban, zmiana tekstu, dane testowe, generator pesel, konwerter online"
    return render_template('index.html', title = title, metaData = metaData, metaKeys = metaKeys)

@app.route('/sitemap.xml')
def static_from_root():
    return send_from_directory(app.static_folder, request.path[1:])

@app.route('/generator_PESEL') 
def pesel(): 
    title = "generator numeru PESEL"
    metaData = "Potrzebujasz numeru PESEL do testów lub przykładu?"
    metaKeys = "generator pesel , pesel do testów, pesel przykład, pesel losowy, numer pesel"
    return render_template('pesel.html', title = title,metaKeys = metaKeys,metaData =metaData)


@app.route('/generator_REGON') 
def regon(): 
    title = "generator numeru regon"
    metaData = "Potrzebujasz numeru Regon do testów lub przykładu?"
    metaKeys = "generator REGON , REGON do testów, REGON przykład, REGON losowy, numer REGON"
    return render_template('regon.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/generator_IBAN') 
def numberIBAN(): 
    title = "generator numeru IBAN"
    metaKeys = "Potrzebujasz numeru konta IBAN do testów lub przykładu?"
    metaData = "generator numeru konta ,generator IBAN, IBAN do testów, IBAN przykład, IBAN losowy, numer IBAN"
    return render_template('iban_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/generator_NIP') 
def numberNIP(): 
    title = "generator numeru NIP"
    metaKeys = "Potrzebujasz numeru NIP do testów lub przykładu?"
    metaData = "generator numeru NIP ,generator NIP, NIP do testów, NIP przykład, NIP losowy, numer NIP"
    return render_template('nip_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/generator_NDO') 
def numberNDO(): 
    title = "generator numeru dowodu osobistego"
    metaKeys = "Potrzebujasz numeru dowodu osobistego do testów lub przykładu?"
    metaData = "generator numeru dowodu osobistego ,generator dowodu osobistego, numer dowodu osobistego do testów, numer dowodu osobistego przykład, numer dowodu osobistego losowy, numer dowodu osobistego"
    return render_template('NDO_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/walidacja_numeru_PESEL') 
def walidacjaPESEL(): 
    title = "Sprawdź numer PESEL"
    metaKeys = "Potrzebujasz sprawdzić poprawność numeru PESEL i datę urodzenia z PESEL?"
    metaData = "walidacja numeru PESEL ,Poprawność PESEL, PESEL test,  data urodzenia z PESEL"
    return render_template('peselValidate_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/osoba_testowa') 
def osobaTestowa(): 
    title = "Dane osobowe do testów"
    metaKeys = "Potrzebujasz przykładowych danych osobowych do testów?"
    metaData = "losowe dane osobawe, osoba do testów, generator osoby"
    return render_template('synthPersont_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)



@app.route('/male_na_wielkie') 
def maleNaWielkie(): 
    title = "Małe litery na wielkie, odwróć capslock"
    metaKeys = "Potrzebujasz zamienić tekst na wielkie litery (jak z właczonym Capslockiem)?"
    metaData = "małe na duże, wielkie litery, capslock, małe litery"
    return render_template('capslockOff_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/wielkie_na_male') 
def wielkieNaMale(): 
    title = "Wielkie litery na małe. włącz capslock"
    metaKeys = "Potrzebujasz zamienić tekst na małe litery (odwróć Capslock)?"
    metaData = "duże na małe, wielkie litery, capslock, małe litery"
    return render_template('capslockOn_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/ilosc_znakow') 
def liczbaZnakow(): 
    title = "Liczba liter w tekście"
    metaKeys = "Potrzebujasz sprawdzić długość tekstu? Ile ma liter i cyfr?"
    metaData = "policz znaki, długość tekstu, ile znaków, ile liter, ile cyfr"
    return render_template('countCharacters_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/ilosc_slow') 
def liczbaSlow(): 
    title = "Liczba słów w tekście"
    metaKeys = "Potrzebujasz ilość słów w tekście?"
    metaData = "policz słowa, długość tekstu, ile słów w zdaniu"
    return render_template('countWords_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/odwroc_tekst') 
def odwrocTekst(): 
    title = "Odwróć kolejność tekstu"
    metaKeys = "Potrzebujasz zmienić kolejność liter?"
    metaData = "odwróć tekst, odwrotny tekst, reverse text"
    return render_template('reverseText_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/konwertuj_na_szesnastkowey hex') 
def tekstNa16(): 
    title = "Konwertuj tekst na szesnastkowy hex"
    metaKeys = "Potrzebujasz zmienić tekst na szesnastkowy hex?"
    metaData = "tekst na hex, hex, tekst szesnastkowy"
    return render_template('hexicdecimal_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/konwertuj_na_binarny') 
def tekstNaBIN(): 
    title = "Konwertuj tekst na binarny"
    metaKeys = "Potrzebujasz zmienić tekst na binarny?"
    metaData = "tekst na binarny,  system binarny"
    return render_template('binaryToString_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)

@app.route('/przelicz_temperature') 
def temperatureConverter(): 
    title = "Przelicz temperaturę na różne skale - Kelvin, Celsjusz, Fahrenheit, Rankine"
    metaKeys = "Potrzebujasz zamienić temperaturę na inną skalę - Fahrenheit, Kelvin, Celsjusz, Rankine?"
    metaData = "konwerter temperatur, kalkulator temperatur, przelicznik temperatur, Kelvin, Rankine, Fahrenheit, Celsjusz"
    return render_template('temperature_temp.html', title = title, metaKeys = metaKeys,metaData =metaData)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)