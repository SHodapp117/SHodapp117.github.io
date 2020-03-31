fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(
        result => {
            return result.json();
        }
    )
    .then(
        resultJSON => {
            let towns = resultJSON.towns;

            towns.forEach (
                town => {
                    if (town.name === 'Fish Haven') {
                        document.querySelector('#fishName').textContent = town.name;
                        document.querySelector('#fishMotto').textContent = town.motto;
                        document.querySelector('#fishFounded').textContent = `Year Founded: ${town.yearFounded}`;
                        document.querySelector('#fishPopulation').textContent = `Population: ${town.currentPopulation}`;
                        document.querySelector('#fishAnnualRain').textContent = `Annual Rainfall: ${town.averageRainfall}`;
                        document.querySelector('#fishHavenImg').setAttribute('src', `images/${town.photo}`);
                        document.querySelector('#fishHavenImg').setAttribute('alt', town.name);
                }
                else if (town.name === 'Preston') {
                        document.querySelector('#prestonName').textContent = town.name;
                        document.querySelector('#prestonMotto').textContent = town.motto;
                        document.querySelector('#prestonFounded').textContent = `Year Founded: ${town.yearFounded}`;
                        document.querySelector('#prestonPopulation').textContent = `Population: ${town.currentPopulation}`;
                        document.querySelector('#prestonAnnualRain').textContent = `Annual Rainfall: ${town.averageRainfall}`;
                        document.querySelector('#prestonImg').setAttribute('src', `images/${town.photo}`);
                        document.querySelector('#prestonImg').setAttribute('alt', town.name);
                }
                else if (town.name === 'Soda Springs') {
                        document.querySelector('#ssName').textContent = town.name;
                        document.querySelector('#ssMotto').textContent = town.motto;
                        document.querySelector('#ssFounded').textContent = `Year Founded: ${town.yearFounded}`;
                        document.querySelector('#ssPopulation').textContent = `Population: ${town.currentPopulation}`;
                        document.querySelector('#ssAnnualRain').textContent = `Annual Rainfall: ${town.averageRainfall}`;
                        document.querySelector('#ssImg').setAttribute('src', `images/${town.photo}`);
                        document.querySelector('#ssImg').setAttribute('alt', town.name);
                }
            
            })
        }
    );