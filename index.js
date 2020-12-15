var apiCovid = "https://api.covid19api.com/summary";

var arrayApi = [];



const consumoApi = () => {


    fetch(apiCovid)
        .then(response => response.json())
        .then(data => {
            let respuestaJson = data.Countries;

            console.log(respuestaJson);

            arrayApi = respuestaJson;

            //data = data.data;

            globalApi = respuestaJson;

            document.querySelector("#tabla").innerHTML = "";

            for(const iterator of respuestaJson){
                
                document.querySelector("#tabla").innerHTML +=  mostrarTabla(iterator);
            }


            


        })

}


const mostrarTabla = (iterator) => {
    //for (const iterator of respuestaJson) {


return `
    
    
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                
                <th scope="col">PAISES</th>
                <th scope="col">MUERTES</th>
                <th scope="col">NUEVAS MUERTES</th>
                <th scope="col">CONFIRMADOS</th>
                <th scope="col">TOTAL DE RECUPERADOS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                
                <td>${iterator.Country}</td>
                <td>${iterator.TotalDeaths}</td>
                <td>${iterator.NewDeaths}</td>
                <td>${iterator.TotalConfirmed}</td>
                <td>${iterator.TotalRecovered}</td>
            </tr>
            </tr>
        </tbody>
    </table>
    
    `
    
    //}
}


const globalData = () => {
    fetch(apiCovid)
        .then(response => response.json())
        .then(data => {
            let respuestaJson = data.Global;


            console.log(respuestaJson);



            document.querySelector("#global").innerHTML = `
        <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        
                        <th scope="col">CONFIRMADOS</th>
                        <th scope="col">MUERTES</th>
                        <th scope="col">RECUPERADOS</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>${respuestaJson.TotalConfirmed}</td>
                        <td>${respuestaJson.TotalDeaths}</td>
                        <td>${respuestaJson.TotalRecovered}</td>
                        
                    </tr>
                    </tr>
                </tbody>
            </table>
        `





        })


}






const buscarPais = (event) => {

    //debugger;

    valorCaja = event.value;
    let encontroPais = false;


    console.log(event.value);

    document.querySelector("#tabla").innerHTML = "";

    

    for (const iterator of arrayApi) {
        if (iterator.Country.toUpperCase().indexOf(valorCaja.toUpperCase()) !== -1) {
            encontroPais = true;

            document.querySelector("#tabla").innerHTML += mostrarTabla(iterator);
        }
        
    }

    if (encontroPais == false) {
        for(const iterator of arrayApi){
            document.querySelector("#tabla").innerHTML += mostrarTabla(iterator);
    
        }
    }
}






consumoApi();

globalData();

