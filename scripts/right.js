class Right{
    static getData(path){
        return fetch(path)
            .then((response) => {
                return response.json();
            });
    }
}

class UI_RIGHT{

    static async getShoesDataFromApi(path){
        const data = await Right.getData(path);
        return data.data;
    }

    static formatToHtml(oneShoe){
        return `
                <div class="top">
                            <h1>${oneShoe.name}</h1>
                            <h5>${oneShoe.mark}</h5>
                        </div>
                        <div class="middle">
                            <img src="${oneShoe.image_path}" alt="${oneShoe.name}"/>
                        </div>
                        <div class="bottom">
                            <div class="left">
                                <h5>Price</h5>
                                ${oneShoe.price} Euros
                            </div>
                            <div class="right">
                                <div class="one_image_min">
                                    <img src="${oneShoe.miniatures[0].url}" alt=""/>
                                </div>
                                <div class="one_image_min">
                                    <img src="${oneShoe.miniatures[1].url}" alt=""/>
                                </div>
                            </div>
                        </div>
                `;
    }

    static async getShoesData(data_path){
        const DATA_PATH = data_path;
        const data = await this.getShoesDataFromApi(DATA_PATH);
        let mother = document.querySelector('.right .shoes .data');
        data.forEach((oneShoe) => {
            let div = document.createElement('div');
            div.innerHTML = this.formatToHtml(oneShoe);
            div.classList.add('one_shoes');
            mother.appendChild(div);
        })


    }

}

const PATH = "./api/shoes.json";
UI_RIGHT.getShoesData(PATH);
