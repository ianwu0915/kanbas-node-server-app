import model from "./model.js";
export const createUser = (user) => {
  return model.create(user);
} 

export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>  model.findOne({ username: username });
export const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role })
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });

export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
      $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
    });
  };
  
export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });

//DAOs implement an interface between an application and the low level database access, providing a high level API to the rest of the application hiding the details and idiosyncrasies of using a particular database vendor. 
// implements this encapsulation and abstraction principle by grouping data access by data type or collection. The following Users/dao.js implements various CRUD operations for the users collection written in terms of the low level Mongoose model operations.
// The DAOs are used by the routes to implement the business logic. The routes are the entry points to the application and the DAOs are the exit points to the database. The routes are responsible for parsing the request, calling the appropriate DAO function, and sending the response back to the client.
