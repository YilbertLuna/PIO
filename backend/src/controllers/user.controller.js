const USERS = []

export const register = (req, res) => {
    
    const { name, email, password} = req.body

    try {
        
        // validate data
        if(!name ||!email ||!password) return res.status(400).json({'error': 'please fill all fields 🟡'})

        // validate email
        if(USERS.find(user => user.email === email)) return res.status(400).json({'error': 'user already exists 🟡'})

        // create user and save
        const newUser = {
            name: name,
            email: email,
            password:  password,
        }

        USERS.push(newUser)

        console.log('Added user successfully 🟢')

        res.status(200)
        res.json({
            name: newUser.name,
            email: newUser.email,
            password:  newUser.password,
        })

    } catch (error) {
        res.status(500).json({'error': `there is an error 🔴 ${error}`})
    }
    
}

export const login = (req, res) => {

    const { email, password } = req.body
    
    try {

        // validate data
        if(!email ||!password) return res.status(400).json({'error': 'please fill all fields 🟡'})

        const user = {
            email: email,
            password: password,
        }
        
        const foundUser = USERS.find(userFound => userFound.email === user.email)

        if(foundUser) {
            console.log('found user successfully 🟢')
            res.status(200).json({foundUser: foundUser})
        } else {
            console.log('user not found 🔴')
            res.send('user not found')
        }

        
    } catch (error) {
         res.status(400).json({ error: `there is an error 🔴 ${error}`})        
    }


}