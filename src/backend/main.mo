import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type EnrollmentApplication = {
    fullName : Text;
    email : Text;
    phoneNumber : Text;
    dateOfBirth : Text;
    previousSchool : Text;
    gradeLevel : Text;
    submissionTimestamp : Time.Time;
  };

  type StudentQuestion = {
    name : Text;
    email : Text;
    phoneNumber : Text;
    question : Text;
    submissionTimestamp : Time.Time;
  };

  let applications = List.empty<EnrollmentApplication>();
  let questions = List.empty<StudentQuestion>();

  public shared ({ caller }) func submitApplication(
    fullName : Text,
    email : Text,
    phoneNumber : Text,
    dateOfBirth : Text,
    previousSchool : Text,
    gradeLevel : Text,
  ) : async () {
    let application : EnrollmentApplication = {
      fullName;
      email;
      phoneNumber;
      dateOfBirth;
      previousSchool;
      gradeLevel;
      submissionTimestamp = Time.now();
    };
    applications.add(application);
  };

  public shared ({ caller }) func submitQuestion(
    name : Text,
    email : Text,
    phoneNumber : Text,
    question : Text,
  ) : async () {
    let studentQuestion : StudentQuestion = {
      name;
      email;
      phoneNumber;
      question;
      submissionTimestamp = Time.now();
    };
    questions.add(studentQuestion);
  };

  public query ({ caller }) func getApplications() : async [EnrollmentApplication] {
    applications.toArray();
  };

  public query ({ caller }) func getQuestions() : async [StudentQuestion] {
    questions.toArray();
  };
};
