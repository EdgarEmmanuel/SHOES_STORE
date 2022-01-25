class Helper{
    static getData(path){
        return fetch(path)
            .then((response) => {
                return response.json();
            });
    }
}

class UI {
    static async displayingData(){
        const DATA_PATH = "./api/data.json";
        const data = await Helper.getData(DATA_PATH);
        console.log(data.data);
    }
}

//UI.displayingData();



