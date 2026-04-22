export default async function handler(req, res) {
  const { origem, destino } = JSON.parse(req.body);

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origem}&destinations=${destino}&key=${process.env.AIzaSyDqGUy66rCEEXhSxcwWvQ6x0QnWhIHF33M}`
  );

  const data = await response.json();

  const metros = data.rows[0].elements[0].distance.value;
  const km = metros / 1000;

  res.json({ km });
}
