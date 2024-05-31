// machinepursecontroller.js
const MachinePurse = require('../model/machinePurse');

async function saveMachineAndPurseData(req, res) {
  try {
    const machineAndPurseList = req.body;
    const savedData = [];

    for (const item of machineAndPurseList) {
      // Check if an entry with the same machine and purse exists
      const existingEntry = await MachinePurse.findOne({ machine: item.machine, purse: item.purse });

      // If the entry doesn't exist, save it
      if (!existingEntry) {
        const newPurseData = new MachinePurse({
          machine: item.machine,
          purse: item.purse,
        });
        const savedItem = await newPurseData.save();
        savedData.push(savedItem.toObject()); // Convert to plain JavaScript object
      }
    }

    console.log('All data saved successfully:', savedData);
    res.json(savedData);
  } catch (error) {
    console.error('Error saving data:', error.message);
    res.status(500).json({ message: error.message });
  }
}
async function updateMachineAndPurse(req, res) {
  try {
    const id = req.params.id;
    const updatedPurse = req.body.purse;

    const updatedEntry = await MachinePurse.findByIdAndUpdate(id, { purse: updatedPurse }, { new: true });
    if (!updatedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    console.log('Item updated successfully:', updatedEntry);
    res.status(200).json(updatedEntry);
  } catch (error) {
    console.error('Error updating item:', error.message);
    res.status(500).json({ error: error.message });
  }
}


module.exports = { saveMachineAndPurseData,updateMachineAndPurse };
