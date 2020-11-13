module.exports = function citation(message) {

    let citations = [
        "Un argument extraordinaire avancé sans preuve, peut être rejeté sans preuve !",
        "C'est méchant d'être méchant.",
        "Un argument irréfutable n'est pas un argument valable.",
        "Le destin est un vent fort qui nous oblige à adapter notre voilure, mieux vaut être un marin vigoureux qu'une mouette folle !",
        "Mon pied droit est jaloux de mon pied gauche. Quand l'un avance, l'autre veut le dépasser. Et moi, comme un imbécile, je marche !",
        "Il vaut mieux se taire et passer pour un con plutôt que de parler et de ne laisser aucun doute sur le sujet.",
        "Individualiste jusqu'au bout, redeviens mon pote stp.",
        "Tu peux voler une coco sans te faire ban si c'est toi le gm <:A_Zenitsu_Dab:765931200891846686>",
        "Je suis obèse et je vous baise !?",
        "Je vous le jure, sur le Corail de la Mer !",
        "Les voix du seigneur sont impénétrables.",
        "Les hommes sont toujours sincères. Ils changent de sincérité voilà tout.",
        "Un bon mari ne se souvient jamais de l'âge de sa femme mais de son anniversaire.",
        "Il vaut mieux mobiliser son intelligence sur des conneries que mobiliser sa connerie sur des choses intelligentes."

    ]

    message.channel.send(citations[Math.floor(Math.random() * citations.length)])

}

module.exports.description = "Dis une citation aléatoirement"
module.exports.longDescription = "Les citations sont soit intelligentes, soit drôles, soit incensées \nSi vous en comprenez pas une citation, il y a des refs un peu obscure sur des jeux ou des gens ^^"