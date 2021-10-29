class ObsessionTodoModel {
    constructor(tache, bouton_valider, bouton_supprimer) {
        this.tache = tache;
        this.bouton_valider = bouton_valider;
        this.bouton_supprimer = bouton_supprimer;
    }

    serialize_obsession_todo_model() {
        obsession_todo_model = {
            "tache" : this.tache,
            "bouton_valider" : this.bouton_valider,
            "bouton_supprimer" : this.bouton_supprimer,
        }
        return obsession_todo_model;
    }
}