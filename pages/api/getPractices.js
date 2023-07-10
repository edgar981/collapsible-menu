export default async function getPractices(req, res) {
    try {
        const response = await fetch("https://s2ju1fj7u1.execute-api.us-east-2.amazonaws.com/Prod/api/practices", {
            method: 'GET',
        })

        const data = await response.json();

        res.status(200).json({data});

    } catch (error) {
        res.status(500).send({error: "There was a problem loading the list."})
    }
}