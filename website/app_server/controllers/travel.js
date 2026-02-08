// Module 5 — use API instead of local JSON file

module.exports.travel = async function (req, res) {
  try {
    const tripsEndpoint = 'http://localhost:3000/api/trips';

    const response = await fetch(tripsEndpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      return res.status(response.status).send('API request failed');
    }

    const json = await response.json();

    // extra error checks (guide requirement)
    if (!Array.isArray(json)) {
      return res.status(500).send('API did not return an array');
    }

    if (json.length === 0) {
      return res.status(404).send('No trips found in database');
    }

    res.render('travel', {
      title: 'Travlr Getaways',
      trips: json
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
};
