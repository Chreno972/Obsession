class TrelloTodoModel {
    constructor(titre, status=[], date_fin, valeurs_checklist=[]) {
        this.titre = titre;
        this.status = status;
        this.date_fin = date_fin;
        this.valeurs_checklist = valeurs_checklist;
    }

    serialize_trello_model() {
        trello_model = {
            "titre" : this.titre,
            "status" : this.status,
            "date_fin" : this.date_fin,
            "valeurs_checklist" : this.valeurs_checklist,
        }
        return trello_model;
    }
}