// Save user to Database:
export const saveUser = (user) => {
    const currentUser = {
        email: user.email,
    };

    const url = `${import.meta.env.VITE_API_URL}/users/${user?.email}`;

    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))
};

// Become a host:-
export const becomeHost = async (email) => {
    const currentUser = {
        role: 'host',
    };

    const url =`${import.meta.env.VITE_API_URL}/users/${email}`;

    return fetch(url,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    .then(res => res.json())
};

// Get role (user):-
// export const getRole = async (email) => {
//     const url = `${import.meta.env.VITE_API_URL}/users/${email}`;

//     const response = await fetch(url);
//     const user = await response.json();
//     return user?.role;
// };
// Get role
export const getRole = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`)
    const user = await response.json()
    return user?.role
  }