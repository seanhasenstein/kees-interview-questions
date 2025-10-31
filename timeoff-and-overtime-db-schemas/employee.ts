import { ObjectId } from "mongodb";

/**
 * Employees Collection Schema
 *
 * Central employee information shared across all departments.
 * This collection serves as the source of truth for employee data
 * and is referenced by other collections.
 */

const employeesSchema = {
  _id: new ObjectId(), // MongoDB ObjectId
  employeeId: "EMP_001", // Unique employee identifier (company-assigned)
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@kees.com",
  phone: "9205550123",
  department: "Manufacturing",
  role: "Factory Worker",
  hireDate: new Date("2020-01-15"),
  isActive: true, // false if employee has left the company or is retired
  supervisor: new ObjectId(), // Reference to supervisor's employee record
  createdAt: new Date(),
  updatedAt: new Date(),
};

export { employeesSchema };
