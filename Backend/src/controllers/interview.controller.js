const pdfParse = require("pdf-parse")
const genrateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")

async function genrateInterviewReportController(req, res) {

   const resumeContent = await (new pdfParse. PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const {selfDescription, jobDescription} = req.body 

    const interviewReportbyAi = await genrateInterviewReport({resume:resumeContent, selfDescription, jobDescription})

    const inetrViewReport = await interviewReportModel.create({
        resume:resumeContent, 
        selfDescription, 
        jobDescription,
        ...interviewReportbyAi
    })

    res.status(201).json({
        message: "Interview Report Genrated Succesfully.",
        inetrViewReport
    })

}

module.exports={
genrateInterviewReportController
}