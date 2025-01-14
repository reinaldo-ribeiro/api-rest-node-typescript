import express from "express";

export const server = express();

server.get("/", (_, res) => {
  res.send("Olá dev");
});
