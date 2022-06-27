
/**
 * Deklaration der Variablen
 */
let index;
let mathe = undefined;

/**
 * Ausgabe zeigen
 */
function showUI(){
    //Identification
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `Vorname: ${mathe.Vorname}<br>`+
        `Name: ${mathe.Name}<br>`+
        `Alter: ${mathe.Alter}`;

//Ausbildung
    htmlObj = document.getElementById("ausbildung");
    htmlObj.innerHTML =
        `Studium: ${mathe.betrieb.Studium}<br>`+
        `Studiengang: ${mathe.betrieb.Studiengang}<br>`+
        `Note: ${mathe.betrieb.Note}`;

    //Lieblingsthemen
    htmlObj = document.getElementById("lieblingsthemen");
    //clear
    htmlObj.innerHTML = "";
    //set
    mathe.courses.lieblingsthemen.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });



    let fach = "EFZ Abschluss";
    if (mathe.new){
        fach = "Gymnasium Abschluss";
    }
    htmlObj = document.getElementById("allgemeinTitle");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML += " " + fach;


    htmlObj = document.getElementById("allgemein");
    //clear
    htmlObj.innerHTML = "";
    //set
    let faecherListe = mathe.courses.allgemein;
    for (let i=0;i<faecherListe.length; i++){
        htmlObj.innerHTML += `${faecherListe[i]}<br>`;
    };

}



/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index === undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (matheListe.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    mathe = matheListe[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index === undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    mathe = matheListe[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (mathe === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    mathe = matheListe[index];
    //zeige den Eintrag
    showUI();
}
