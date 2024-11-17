import Assignment from "../Models/Assignment.js";

export const viewAssignments = async (req, res) => {
  const adminUsername = req.userData.username;

  try {
    const assignments = await Assignment.find({ admin: adminUsername });
    res.json(assignments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const acceptAssignment = async (req, res) => {
  const { id } = req.params;

  try {
    const assignment = await Assignment.findById(id);
    if (!assignment) {
      return res.status(404).json({ msg: "Assignment not found" });
    }

    assignment.status = "accepted";
    await assignment.save();
    res.json({ msg: "Assignment accepted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const rejectAssignment = async (req, res) => {
  const { id } = req.params;

  try {
    const assignment = await Assignment.findById(id);
    if (!assignment) {
      return res.status(404).json({ msg: "Assignment not found" });
    }

    assignment.status = "rejected";
    await assignment.save();
    res.json({ msg: "Assignment rejected" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};
