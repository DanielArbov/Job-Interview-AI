import { Injectable } from '@angular/core';
import { PromptModel } from '../models/prompt.model';
import { DetailModel } from '../models/details.model';
import { sys } from 'typescript';

@Injectable({
    providedIn: 'root'
})
export class PromptEngineeringService {

    public createPrompt(details: DetailModel): PromptModel {
        const system = `You are an expert in ${details.subject} programming technology. your rule is to generate ${details.subject} job interview question`;


        const user = `Please write ${details.count} job interview questions and answers in the subject of ${details.subject} at a ${details.level} level.
        the questions and the answers should be in the following format JSON format
        [
            { "question" : "First Question...", "answer":"First Answer..."},
            { "question" : "Second Question...", "answer":"Second Answer..."},
            { "question" : "Third Question...", "answer":"Third Answer..."},
        ]
        Don't response with anything else, just the above JSON format containing the question and the answers.`;

        return { system: this.innerTrim(system), user: this.innerTrim(user) };
    }

    private innerTrim(text: string): string {
        if (!text.includes("\n") && !text.includes("  ")) return text;

        text = text.replaceAll("\n", " ");

        text = text.replaceAll("  ", " ");

        return this.innerTrim(text);

    }
}
