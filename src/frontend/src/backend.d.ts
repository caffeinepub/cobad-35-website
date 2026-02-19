import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface EnrollmentApplication {
    previousSchool: string;
    dateOfBirth: string;
    submissionTimestamp: Time;
    fullName: string;
    email: string;
    gradeLevel: string;
    phoneNumber: string;
}
export interface StudentQuestion {
    question: string;
    submissionTimestamp: Time;
    name: string;
    email: string;
    phoneNumber: string;
}
export interface backendInterface {
    getApplications(): Promise<Array<EnrollmentApplication>>;
    getQuestions(): Promise<Array<StudentQuestion>>;
    submitApplication(fullName: string, email: string, phoneNumber: string, dateOfBirth: string, previousSchool: string, gradeLevel: string): Promise<void>;
    submitQuestion(name: string, email: string, phoneNumber: string, question: string): Promise<void>;
}
