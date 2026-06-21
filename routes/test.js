export default function(app, ctx) {
  app.get("/test", (c) => c.json({ ok: true, route: "test" }));
}
