const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs";
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

/*A ideia deste exercício é pegar maps,
Como glove box é uma palavra separada, eu usei colchetes
pra poder buscar o objeto */