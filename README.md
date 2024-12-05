Solar System Project is a web-based application that lets users explore the solar system. It displays detailed information about each planet, including temperature, distance from the Sun, orbital period, and moons. The project also features an animated view of the solar system, where planets orbit the Sun, and Earth's moon orbits around Earth. The app is built using HTML, CSS, and JavaScript, and allows users to search for planets and view their details interactively.The project uses a third-party API to fetch information about planets in the solar system. The API provides data on various celestial bodies, including planets, their temperatures, distances, moons, and orbital periods. The data is fetched using HTTP requests and displayed interactively on the web page. The API endpoint used in the project is:

API Endpoint for Fetching Planet Data:
https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies
The API requires an API key, which is fetched using a POST request to the following endpoint:

API Key Endpoint:
https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys
Once the API key is obtained, it is included in the header of the GET request to fetch planet data.
