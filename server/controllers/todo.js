const TODO = require('../models/todo');

exports.getAllTODO = async (req, res) => {
    try {
        const TODOS = await TODO.find();
        return res.status(200).json(TODOS);
    } catch (err) {
        return res.status(404).json({ message: "Todo not found", error: err.message });
    }
};

exports.postCreateTODO = async (req, res) => {
    try {
        const data = await TODO.create(req.body);
        return res.status(200).json({ message: "Todo added successfully", data });
    }
    catch (err) {
        return res.status(400).json({ message: "Failed to add todo", error: err.message });
    }
};

exports.putUpdateTODO = async (req, res) => {
    try {
        const data = await TODO.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({ message: "Todo updated successfully", data });
    }
    catch (err) {
        return res.status(400).json({ message: "Failed to add todo", error: err.message });
    }
};

exports.deleteTODO = async (req, res) => {
    try {
        const data = await TODO.findByIdAndRemove(req.params.id);
        return res.status(200).json({ message: "todo deleted successfully", data });
    }
    catch(err){
       return res.status(400).json({ message: "Not Deleted", error: err.message })
    }
}
