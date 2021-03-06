import path from "path";
import cors from "cors";
import http from "http";
import express from "express";

const PORT = process.env.PORT || 3333;
const HOST = `http://localhost:${PORT}`;

const app = express();
app.use(cors());
const __dirname = path.resolve();
app.use("/static", express.static(path.resolve(__dirname, "public")));

app.use("/catalog", (request, response) => {
  const musics = [
    {
      artist: "Nirvana",
      name: "Smells like teen spirit",
      duration: "00:05:01",
      cover: `${HOST}/static/covers/nirvana_smells_like_teen_spirit.jpg`,
      url: `${HOST}/static/musics/nirvana_smells_like_teen_spirit.mp3`,
    },
    {
      artist: "Sound1",
      name: "Sound1",
      duration: "00:00:03",
      cover: `${HOST}/static/covers/nirvana_smells_like_teen_spirit.jpg`,
      url: `${HOST}/static/musics/Sound1.wav`,
    },
    {
      artist: "Sound2",
      name: "Sound2",
      duration: "00:00:03",
      cover: `${HOST}/static/covers/nirvana_smells_like_teen_spirit.jpg`,
      url: `${HOST}/static/musics/Sound2.wav`,
    },
    {
      artist: "Sound3",
      name: "Sound3",
      duration: "00:00:03",
      cover: `${HOST}/static/covers/nirvana_smells_like_teen_spirit.jpg`,
      url: `${HOST}/static/musics/Sound3.mp3`,
    },
    
    {
      artist: "Metallica",
      name: "Nothing else matters",
      duration: "00:06:29",
      cover: `${HOST}/static/covers/metallica_nothing_else_matters.jpg`,
      url: `${HOST}/static/musics/metallica_nothing_else_matters.mp3`,
    },
    {
      artist: "Sound4",
      name: "Sound4",
      duration: "00:06:29",
      cover: `${HOST}/static/covers/metallica_nothing_else_matters.jpg`,
      url: `${HOST}/static/musics/Sound4.wav`,
    },
    {
      artist: "Sound5",
      name: "Sound5",
      duration: "00:06:29",
      cover: `${HOST}/static/covers/metallica_nothing_else_matters.jpg`,
      url: `${HOST}/static/musics/Sound5.wav`,
    },
    {
      artist: "Sound6",
      name: "Sound6",
      duration: "00:06:29",
      cover: `${HOST}/static/covers/metallica_nothing_else_matters.jpg`,
      url: `${HOST}/static/musics/Sound6.wav`,
    },
  ];

  return response.json({
    amount: musics.length,
    musics,
  });
});

app.use("*", (request, response) =>
  response.status(404).json({ message: "Oops, nothing to show here." })
);

const server = http.createServer(app);

server.listen(3333, () => console.log(`Serve is running at ${HOST}`));
