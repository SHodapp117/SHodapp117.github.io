fetch('https://github.com/SHodapp117/SHodapp117.github.io/blob/master/templeproject/data/temples.json')
    .then(
        result => {
            return result.json();
        }
    )
    .then(
        resultJSON => {
            let temples = resultJSON.temples;

            temples.forEach (
                temple => {
                    if (temple.name === 'Ogden') {
                        document.querySelector('#ogdenName').textContent = temple.name;
                        document.querySelector('#ogdenAddress').textContent = temple.address;
                        document.querySelector('#ogdenPhone').textContent = `Phone Number: ${temple.phone}`;
                        document.querySelector('#ogdenEmail').textContent = `Email: ${temple.email}`;
                        document.querySelector('#ogdenServices').textContent = `Services Offered: ${temple.services}`;
                        document.querySelector('#ogdenClosures').textContent = `Clousures: ${temple.closures}`;
                        document.querySelector('#ogdenDiscription').textContent = `Discription: ${temple.description}`;
                        document.querySelector('#ogdenSession').textContent = `Sessions: ${temple.session_schedule}`;
                        document.querySelector('#ogdenHistory').textContent = `Temple History: ${temple.history}`;
                }
                else if (temple.name === 'Salt Lake') {
                        document.querySelector('#slName').textContent = temple.name;
                        document.querySelector('#slAddress').textContent = temple.address;
                        document.querySelector('#slPhone').textContent = `Phone Number: ${temple.phone}`;
                        document.querySelector('#slEmail').textContent = `Email: ${temple.email}`;
                        document.querySelector('#slServices').textContent = `Services Offered: ${temple.services}`;
                        document.querySelector('#slClosures').textContent = `Clousures: ${temple.closures}`;
                        document.querySelector('#slDiscription').textContent = `Discription: ${temple.description}`;
                        document.querySelector('#slSession').textContent = `Sessions: ${temple.session_schedule}`;
                        document.querySelector('#slHistory').textContent = `Temple History: ${temple.history}`;
                }
                else if (town.name === 'Bountiful') {
                        document.querySelector('#BountifulName').textContent = temple.name;
                        document.querySelector('#BountifulAddress').textContent = temple.address;
                        document.querySelector('#BountifulPhone').textContent = `Phone Number: ${temple.phone}`;
                        document.querySelector('#BountifulEmail').textContent = `Email: ${temple.email}`;
                        document.querySelector('#BountifulServices').textContent = `Services Offered: ${temple.services}`;
                        document.querySelector('#BountifulClosures').textContent = `Clousures: ${temple.closures}`;
                        document.querySelector('#BountifulDiscription').textContent = `Discription: ${temple.description}`;
                        document.querySelector('#BountifulSession').textContent = `Sessions: ${temple.session_schedule}`;
                        document.querySelector('#BountifulHistory').textContent = `Temple History: ${temple.history}`;
                    }
                else if (town.name === 'Brigham City') {
                        document.querySelector('#bcName').textContent = temple.name;
                        document.querySelector('#bcAddress').textContent = temple.address;
                        document.querySelector('#bcPhone').textContent = `Phone Number: ${temple.phone}`;
                        document.querySelector('#bcEmail').textContent = `Email: ${temple.email}`;
                        document.querySelector('#bcServices').textContent = `Services Offered: ${temple.services}`;
                        document.querySelector('#bcClosures').textContent = `Clousures: ${temple.closures}`;
                        document.querySelector('#bcDiscription').textContent = `Discription: ${temple.description}`;
                        document.querySelector('#bcSession').textContent = `Sessions: ${temple.session_schedule}`;
                        document.querySelector('#bcHistory').textContent = `Temple History: ${temple.history}`;
                    }
            
            })
        }
    );