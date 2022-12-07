export interface INewMember {
  [index: string]: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  gender: string;
  dateofbirth: string;
  countryname: string;
  currentpsfworker: string;
  regionname: string;
  departmentname: string;
  cellname: string;
  nationalhodname: string;
  nationalrepname: string;
  experiencename: string;
  experiencedescription: string;
  understandpurpose: string;
  voterscardexist: string;
  agreementsigned: string;
  whyjoinpsf: string;
  additionalinformation: string;
}

export interface IFeedBack {
  [index: string]: string;
  fullname: string;
  phonenumber: string;
  email: string;
  messagetype: string;
  description: string;
}

