import { ObjectId } from "mongodb";

/**
 * OvertimeSchedule Collection Schema
 *
 * Tracks scheduled and completed overtime shifts for factory workers.
 * Managed by shop supervisors with read access for HR.
 */

const overtimeScheduleSchema = {
  _id: new ObjectId(),
  employeeId: new ObjectId("507c7f79bcf86cd7994f6c0e"), // Reference to Employees collection
  scheduledDate: new Date("2024-11-02"),
  shiftStart: "18:00", // 24-hour format (6:00 PM)
  shiftEnd: "22:00", // 24-hour format (10:00 PM)
  hoursScheduled: 4.0,
  isMandatory: true,
  department: "Sheet Metal Fabrication",
  assignedBy: new ObjectId("507c7f79bcf86cd7994f6c0e"), // Reference to supervisor who scheduled it
  reason: "Rush order for Client XYZ - delivery deadline Nov 5",
  status: "scheduled", // "scheduled", "completed", "cancelled", "no_show"
  actualHoursWorked: null, // Filled in after shift completion
  clockIn: null, // ISODate when employee clocked in
  clockOut: null, // ISODate when employee clocked out
  completedNotes: null, // Any notes about the completed shift
  createdAt: new Date(),
  updatedAt: new Date(),
};

export { overtimeScheduleSchema };
