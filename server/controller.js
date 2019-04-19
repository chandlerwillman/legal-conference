module.exports = {
    getAllEvents: (req,res) => {
        const db = req.app.get('db');

        db.get_events()
            .then((then) => {
                res.status(200).send(events);
            }).catch((error) => {
                console.log('getAllEvents: ', error);
            });
    },

    createEvent: (req,res) => {
        const db = req.app.get('db');
        const { title, website_url, img, description, size } = req.body;

        db.create_event([title, website_url, img, description, size])
            .then((dbResponse) => {
                res.status(200).send('Created event');
            }).catch((error) => {
                console.log('createEvent:', error);
            });
    },

    deleteEvent: (req,res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_event([id])
            .then((dbResponse) => {
                res.status(200).send('Deleted');
            }).catch((error) => {
                console.log('deleteEvent:', error)
            });
    },
}