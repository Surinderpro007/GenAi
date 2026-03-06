import mongoose from "mongoose";

/**
 * - Job description schema :String
 * - Resume text : String
 * - Self-description: String
 * - matchScore : Number
 * 
 *  Technical Queshions :
 *          [{
 *          queshion: "",
 *          Intenshion: "",
 *          answer: ""
 *              }]
 * - Behiviour Queshions :
 *          [{
 *          queshion: "",
 *          Intenshion: "",
 *          answer: ""
 *              }]
 * - Skill Gap :[
 *          {
 *              skill:'',
 *                serverity:{
 *                  type: String
 *                  enum:['low', 'medium', 'high']
 *                  }
 *              }
 *          ]
 * - Prepration plan :[
 *          {
 *          day: Number, 
 *          focus: String,         
 *          tasks: [String]         
 * }         
 * ]
 */

const technicalQueshionSchema = new mongoose.Schema({
    queshion: {
        type: String,
        require: [true, "Technical queshion is required"]
    },
    intention: {
        type: String,
        require: [true, "Intention is required"]
    }, 
    answer: {
        type: String,
        require: [true, "Answer is required"]
    }, 

},{
    _id: false
})

const behavioralQueshionSchema = new mongoose.Schema({
    queshion: {
        type: String,
        require: [true, "Technical queshion is required"]
    },
    intenshion: {
        type: String,
        require: [true, "Intenshion is required"]
    }, 
    answer: {
        type: String,
        require: [true, "Answer is required"]
    }, 

},{
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        require: [true, "Technical queshion is required"]
    },
    severity: {
        type: String,
        enum:['low', 'medium', 'high'],
        require: [true, "Severity is required"]
    }, 
},{
    _id: false
})


const preprationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        require: [true, "Day is required"]
    },
    focus: {
        type: String,
        require: [true, "Focus is required"]
    }, 
    tasks: [{
        type: String,
        require: [true, "Task is required"]
    }, ]
},{
    _id: false
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        require: [true, 'Job Description is Required']
    },
    resume: {
        type: String
    },
    selfDescription: {
        type: String
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQueshions: [technicalQueshionSchema], 
    behavioralQueshion : [behavioralQueshioSchema],
    skillGap : [skillGapSchema],
    preprationPlan : [preprationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }

},{
    timestamps: true
})


const interviewReportModel = mongoose.model("interviewReport", interviewReportSchema)

module.exports = {
    interviewReportModel
}
