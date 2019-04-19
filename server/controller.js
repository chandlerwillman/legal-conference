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
}