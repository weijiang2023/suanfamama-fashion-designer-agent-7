import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// In-memory storage for sketches (in production, use a database)
const sketches = new Map();

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "fashion-designer-agent", version: "0.1.0" });
});

// API endpoint to save a sketch
app.post("/api/sketches", (req: Request, res: Response) => {
  try {
    const { id, name, data, projectId } = req.body;
    const sketch = {
      id,
      name,
      data,
      projectId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    sketches.set(id, sketch);
    res.json({ success: true, sketch });
  } catch (error) {
    res.status(500).json({ error: "Failed to save sketch" });
  }
});

// API endpoint to get a sketch
app.get("/api/sketches/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const sketch = sketches.get(id);
  
  if (!sketch) {
    return res.status(404).json({ error: "Sketch not found" });
  }
  
  res.json({ sketch });
});

// API endpoint to list all sketches for a project
app.get("/api/projects/:projectId/sketches", (req: Request, res: Response) => {
  const { projectId } = req.params;
  const projectSketches = Array.from(sketches.values())
    .filter(sketch => sketch.projectId === projectId)
    .map(sketch => ({
      id: sketch.id,
      name: sketch.name,
      createdAt: sketch.createdAt,
      updatedAt: sketch.updatedAt
    }));
  
  res.json({ sketches: projectSketches });
});

// API endpoint to delete a sketch
app.delete("/api/sketches/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = sketches.delete(id);
  
  if (!deleted) {
    return res.status(404).json({ error: "Sketch not found" });
  }
  
  res.json({ success: true });
});

// Serve the main canvas page
app.get("/canvas", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/canvas.html"));
});

// Serve the landing page
app.get("/", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Fashion Designer Agent API listening on http://localhost:${port}`);
  console.log(`Canvas available at http://localhost:${port}/canvas`);
});


