// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndPoint = 
"https://accounts.spotify.com/authorize?";
const redirectUrl = "http://localhost:3000/";

const clientId = "35b7b56ff5dd412d819d4a5758894e05";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () =>{
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=sachin
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

export const loginUrl = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join( "%20" )}&response_type=token&show_dialog=true`;