import { EmployeeLeave } from "../models/models.employeeLeave.js";
import { EmployeeSalary } from "../models/models.EmployeeSalaree.js";
import { Project } from "../models/models.project.js";
import { User } from "../models/user.model.js";

const addSalary = async (req, res) => {
  try {
    const { startDate, endDate, salaryAmount } = req.body;
    //console.log(req.body);
    const user = await User.findById(req?.user?._id);
    if (!user)
      return res
        .status(400)
        .json({ message: "Employee not found in the database" });
    const userId = user._id;
    //console.log(userId);
    const newSalary = await EmployeeSalary.create({
      startDate,
      endDate,
      userId,
      salaryAmount,
    });
    if (!newSalary)
      return res.status(500).json({ message: "Internal server error" });
    return res
      .status(200)
      .json({ message: `New Salary credited successfully to ${username}` });
  } catch (error) {
    //console.log("Nikhil");
    //console.log(error);
    return res.status(400).send(error);
  }
};

const addLeave = async (req, res) => {
  try {
    const { reason, status, startDate, endDate } = req.body;
    const user = await User.findById(req?.user?._id);
    if (!user)
      return res
        .status(400)
        .json({ message: "Employee not found in the database" });
    const userId = user._id;
    const newLeave = await EmployeeLeave.create({
      startDate,
      endDate,
      userId,
      status,
      reason,
    });
    if (!newLeave)
      return res.status(500).json({ message: "Internal server error" });
    return res
      .status(200)
      .json({ message: `New Leave updated successfully to ${username}` });
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getEmployeesList = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) res.status(400).json({ message: "employees not found" });
    return res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getSalareeDetails = async (req, res) => {
  try {
    const salarees = await EmployeeSalary.find();
    if (!salarees)
      return res.status(400).json({ message: "No employees salarees found" });
    res.status(200).json({ salarees: salarees });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const addProject = async (req, res) => {
  try {
    const {
      projectTitle,
      clientName,
      projectType,
      username,
      developingPlatform,
      databaseTechnology,
      projectDescription,
    } = req.body;
    if (!projectTitle) {
      res.status(400).json({ message: "project Name is required" });
    }
    if (!clientName) {
      res.status(400).json({ message: "clientName is required" });
    }
    if (!projectType) {
      res.status(400).json({ message: "projectType is required" });
    }
    if (!username) {
      res.status(400).json({ message: "projectManager is required" });
    }
    if (!databaseTechnology) {
      res.status(400).json({ message: "databaseTechnology is required" });
    }
    if (!developingPlatform) {
      res.status(400).json({ message: "developingPlatform is required" });
    }
    if (!projectDescription) {
      res.status(400).json({ message: "projectDescription is required" });
    }
    const user = await User.findOne({ username });
    const newProject = await Project.create({
      projectTitle,
      clientName,
      projectType,
      projectManager: user,
      developingPlatform,
      databaseTechnology,
      projectDescription,
    });
    if (!newProject)
      res.status(400).json({ message: "project is not created" });
    res.status(200).json({ message: "project created successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getProjectList = async (req, res) => {
  try {
    const projects = await Project.find();
    if (!projects) res.status(400).json({ message: "projects not found" });
    res.status(200).json({ projects: projects });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export {
  addSalary,
  addLeave,
  getEmployeesList,
  getSalareeDetails,
  addProject,
  getProjectList,
};
