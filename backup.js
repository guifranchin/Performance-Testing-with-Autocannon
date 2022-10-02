const app = require(`express`)();
const autocannon = require(`autocannon`);
const bodyParser = require("body-parser");

const dataset = new Map();

const { v4 } = require("uuid");
app.use(bodyParser.json());

app.get("/test/:id", async (req, res, next) => {
  const { params } = req;
  const data = dataset.get(params.id);

  if (!data) {
    return res
      .status(402)
      .send({ message: "processamento nao finalizado ou nao encontrado" });
  }
  return res.send(data);
});

app.post("/test", async (req, res, next) => {
  try {
    const { body } = req;
    const payload = {
      url: body.url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: body.authorization
      },
      connection: body.connection,
      amount: 10,
      duration: body.duration,
      pipelining: body.pipelining,
      method: body.method,
      body: JSON.stringify(body.body)
    };


    const id = v4();
    res.send({ id });

    const result = await autocannon(payload);
    dataset.set(id, result);

  } catch (error) {
    return res.send(error);
  }
});

app.listen(3000, (err) => console.log(err));