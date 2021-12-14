export class RegisterUser{
    constructor(public id: Number, 
        public firstname: String, 
        public lastname: String,
        public email: String,
        public password: String,
        public watcherType: String,
        public orgName: String,
        public dateJoined: Date){}
}