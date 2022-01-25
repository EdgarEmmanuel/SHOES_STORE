class Left {
    static getData(path){
        return fetch(path)
            .then((response) => {
                return response.json();
            });
    }
}

class UI_LEFT {
    static async displayingCategoriesData(data_path){
        const DATA_PATH = data_path;
        const data = await Left.getData(DATA_PATH);
        let mother = document.querySelector('.categories form');
        data.data.forEach((category) => {
            let label = document.createElement('label');
            label.innerHTML = `
                    ${category.name}
                   <input type="radio" value="${category.matricule}"/>
            `;
            mother.appendChild(label);
        })
    }

    static async fetchPriceData(path){
        const data = await Left.getData(path);
        return {
            max: data.data.max_price,
            min: data.data.min_price,
        };
    }

    static async displayPriceData(data_path){
        const DATA_PATH = data_path;
        const data = await UI_LEFT.fetchPriceData(DATA_PATH);
        let mother = document.querySelector('.price_range form');
        let label = document.createElement('label');
        const min = data.min;
        const max = data.max;
        label.innerHTML = `
              <input type="range" max="${max}" min="${min}" value="50"/>
        `;
        mother.appendChild(label);
    }


    static async getSizeDate(PATH){
        const data =  await Left.getData(PATH);
        return data.data;
    }
    static async displaySizeData(data_path){
        const DATA_PATH = data_path;
        const data = await UI_LEFT.getSizeDate(DATA_PATH);
        let mother = document.querySelector('.size form');

        data.forEach((size) => {
            let label = document.createElement('label');
            label.innerHTML = `<button value="${size.size}">${size.size}</button>`;
            mother.appendChild(label);
        })
    }
}


const CATEGORIES_PATH = "./api/categories.json";
UI_LEFT.displayingCategoriesData(CATEGORIES_PATH);

const PRICE_PATH = "./api/price.json";
UI_LEFT.displayPriceData(PRICE_PATH);

const SIZE_PATH = "./api/shoes_size.json";
UI_LEFT.displaySizeData(SIZE_PATH);
