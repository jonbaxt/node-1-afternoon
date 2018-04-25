let messages = [];
let id = 0;

module.exports = {
    create: ( req, res ) => {       //SET
        const { text, time } = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send( messages );
    },
    read: ( req, res ) => {         //GET
        res.status(200).send( messages );
    },
    update: ( req, res ) => {       //SET
        let index = null;
        messages.forEach( (indMessage, i) => {
            if(indMessage.id === Number(req.params.id)) index = i;
        })
        messages[index] = {
            id: messages[index].id,
            text: req.body.text,
            time: req.body.time
        }
        res.status(200).send( messages );
    },
    delete: (req, res) => {
        let index = null;
        messages.forEach( (indMessage, i) => {
            if(indMessage.id === Number(req.params.id)) index = i;
        })
        messages.splice(index, 1);
        res.status(200).send( messages );
    }
}