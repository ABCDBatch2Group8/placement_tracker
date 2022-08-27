export class JobModel {
    constructor(
        public jobid: String,
        public position: String,
        public jd_text: String,
        public number: String,
        public salary: String,
        public location: String,
        public start_date: Date,
        public end_date: Date
    ){}
}