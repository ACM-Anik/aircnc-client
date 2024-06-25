// Save user to Database:
export const saveUser = (user) => {
    const currentUser = {
        email: user.email,
    }

    fetch(`${import.meta.env.VITE_API_URL}/${user?.email}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    .then(res => res.json())
    .then(data => console.log(data))
};