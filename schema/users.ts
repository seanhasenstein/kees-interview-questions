import { ObjectId } from "mongodb";

/**
 * Users Collection Schema
 *
 * Handles the HR and Shop Supervisor user accounts for system access.
 */

const usersSchema = {
  _id: new ObjectId(),
  username: "jsmith",
  email: "j.smith@kees.com",
  passwordHash: "$2b$10$...", // bcrypt hash
  role: "shop_supervisor", // "hr", "shop_supervisor"
  employeeId: new ObjectId("507c7f79bcf86cd7994f6c0e"), // Reference to Employees collection
  department: "Sheet Metal Fabrication", // Limits data access to specific department
  lastLogin: new Date("2024-10-31T08:15:00Z"),
  accountLocked: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export { usersSchema };
