import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };

  const findAllModules = async (req, res) => {
    const {cid} = req.params;
    console.log("cid is:", cid);
    const modules = await dao.findModuleByCourse(cid);
    console.log("modules is:", modules);
    res.json(modules);
  };

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
  };

  const findModuleByName = async (req, res) => {
    const module = await dao.findModuleByName(req.params.name);
    res.json(module);
  };

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  };

  const deleteModule = async (req, res) => {
    console.log("deleteModule");
    console.log("mid is:", req.params.mid)
    const {mid} = req.params;
    const module = await dao.deleteModule(mid);
    res.json(200);
  };

  app.get("/api/courses/:cid/modules", findAllModules);
  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules/:moduleId", findModuleById);
  app.get("/api/courses/:cid/modules/:name", findModuleByName);
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);

}

