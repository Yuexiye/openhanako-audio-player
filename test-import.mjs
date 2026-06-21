import fs from "node:fs";
const files = [
  "routes/player.js",
  "routes/test.js",
  "tools/bus.js",
  "tools/generate_speech.js",
  "tools/play.js",
  "tools/tts-bus.js",
  "tools/tts.js",
];
for (const f of files) {
  try {
    await import(f);
    console.log("OK:", f);
  } catch (e) {
    console.error("FAIL:", f, e.message);
  }
}
