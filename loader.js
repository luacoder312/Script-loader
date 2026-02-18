export default async function handler(req, res) {
  const response = await fetch("https://raw.githubusercontent.com/luacoder312/Script-loader/main/script.lua");
  const text = await response.text();
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(text);
}
