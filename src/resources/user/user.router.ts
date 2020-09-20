import Router from 'express'
import User from './user.model'

const router = Router()


// Get a user
router.get('/:id', (req, res) => {
    if (User.userIdExists(req.params.id)) {
        res.json(User.getUser(req.params.id))
    }
    else {
        res.status(404).json({
            statusCode: 404,
            message: "User not found"
        })
    }
})

// Delete a user
router.delete('/:id', (req, res) => {
    if (User.userIdExists(req.params.id)) {
        User.deleteUser(req.params.id);
        res.json({
            message: "User Deleted" 
        })
    }
    else {
        res.status(404).json({
            statusCode: 404,
            message: "User not found"
        })
    }
})

// Create a user
router.post('/', (req, res) => {
    if (User.userIdExists(req.body.UserID)) {
        res.json({
            message: "username is taken"
        })
    }

    else {
        const newUser = new User(req.body.UserID, req.body.firstName, req.body.lastName, req.body.email, req.body.password)
        newUser.save()

        res.status(201).json(newUser)   
    }
})

// Update a user
router.patch('/:id', (req, res) => {
    if (User.userIdExists(req.params.id)) {
        const user = User.getUser(req.params.id)
        user?.update(req.body)
        res.json(user)
    }
    else {
        res.json({
            statusCode: 404,
            message: "User not found"
        })
    }
})

export default router