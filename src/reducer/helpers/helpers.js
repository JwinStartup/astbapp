import { store, authActions } from '../store/store_index.js';

export const history = {
    navigate: null,
    location: null
};

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function  request (method) {
    return (url, body) => {
        console.log(url)
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            console.log('ok')
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        console.log(body,requestOptions)


        return  fetch(url,requestOptions).then(handleResponse);
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const token = authToken();
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith('https://astrainingbusiness-crud.onrender.com');
    console.log(token,isApiUrl)
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `astraining ${token}` };
    } else {
        return {};
    }
}

function authToken() {
    return store.getState().auth.token;
}

function handleResponse(response) {
  console.log(response)
    return response.text().then(text => {
      const data =JSON.parse(text) || text  ;
        console.log(data)

        if (!response.ok) {
            if ([401, 403].includes(response.status) && authToken()) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                const logout = () => store.dispatch(authActions.logout());
                logout();
            }
        
         //   const error = (data && data.message) || response.statusText;
           // return Promise.reject(error);
        }

        return data;
    });
}
