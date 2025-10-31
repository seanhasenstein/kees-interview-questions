import { ObjectId } from "mongodb";

/**
 * TimeOff Collection Schema
 *
 * Tracks employee vacation, sick days, and other time off.
 * Managed by HR department with read access for shop supervisors.
 */

const timeOffSchema = {
  _id: new ObjectId(),
  employeeId: new ObjectId("507c7f79bcf86cd7994f6c0e"), // Reference to Employees collection
  timeOffType: "vacation", // "vacation", "sick"
  startDate: new Date("2024-11-15"),
  endDate: new Date("2024-11-15"), // Same as startDate for single day
  duration: "full_day", // "full_day", "am" (morning), "pm" (afternoon)
  status: "approved", // "pending", "approved", "denied", "cancelled"
  requestedDate: new Date("2024-10-20"),
  approvedBy: new ObjectId("507c7f79bcf86cd7994f6c0e"), // Reference to HR user who approved
  approvedDate: new Date("2024-10-21"),
  notes: "...",
  createdAt: new Date("2024-10-20"),
  updatedAt: new Date("2024-10-21"),
};
