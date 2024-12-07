const jobModel = require('../models/job');

const createJob = async (req, res) => {
    const newJob = new jobModel(req.body);
    const newlySavedJob = await newJob.save();
    res.json({
        "message":"Job Createted Suceesfully...",
        "data":newlySavedJob._id
    })
}

const listJob = async (req, res) => {
    const jobList = await jobModel.find();
    res.json({
        "message":"success",
        "data":jobList
    });
}

const updateJob = async (req, res) => {
    const jobId = req.params.id;
    await jobModel.findByIdAndUpdate(jobId, req.body);
    //await jobModel.findOneAndUpdate(findObj, req.body)
    //await jobModel.updateMany(findObj, req.body)
    res.json({
        "success":"true",
        "message":"Job updated Successfully...."
    });
}

const deleteJob = async (req, res) => {
    const jobId = req.params.id;
    await jobModel.findByIdAndDelete(jobId);
    //await jobModel.findOneAndDelete(findObj, req.body);
    //await jobModel.deleteMany(findObj, req.body);
    res.json({
        "success":"true",
        "message":"Job with id " + jobId + " Deleted Successfully...."
    });
}

const jobController = {
    createJob,
    listJob,
    updateJob,
    deleteJob
}

module.exports = jobController;