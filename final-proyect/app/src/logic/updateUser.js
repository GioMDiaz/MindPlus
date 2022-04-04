import { validators } from 'commons'
const { validateToken, validateString, validateEmail } = validators

function updateUser(token, name, email) {
    validateToken(token)
    validateString(name)
    validateEmail(email)

    return fetch('http://localhost:8080/api/users', {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                // TODO manage happy path
                return
            } else if (status >= 400 && status < 500) {
                // DONE manage client error
                return res.json()
                    .then(payload => {
                        const { error } = payload

                        throw new Error(error)
                    })
            } else if (status >= 500) {
                // DONE manage server error
                throw new Error('server error')
            } else {
                throw new Error('unknown error')
            }
        })
}

export default updateUser