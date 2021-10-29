class AgendaTodoModel {
    constructor(titre, date, heure, categorie) {
        this.titre = titre;
        this.date = date;
        this.heure = heure;
        this.categorie = categorie;
    }

    serialize_agenda_model() {
        agenda_model = {
            "titre" : this.titre,
            "date" : this.date,
            "heure" : this.heure,
            "categorie" : this.categorie,
        }
        return agenda_model;
    }
}