import model from "./model.js";
export const createModule = (module) => {
    return model.create(module);
}

export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const findModuleByCourse = (courseNumber) => model.find({ course : courseNumber });
export const findModuleByName = (name) =>  model.findOne({ name: name });

export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });