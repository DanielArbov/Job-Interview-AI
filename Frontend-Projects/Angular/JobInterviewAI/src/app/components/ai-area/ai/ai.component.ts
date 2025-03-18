import { Component } from '@angular/core';
import { AboutComponent } from "../../page-area/about/about.component";
import { InputComponent } from "../input/input.component";
import { OutputComponent } from "../output/output.component";
import { DetailModel } from '../../../models/details.model';
import { QNAModel } from '../../../models/qna.model';
import { PromptEngineeringService } from '../../../services/prompt-engineering.service';
import { GptService } from '../../../services/gpt.service';

@Component({
    selector: 'app-ai',
    imports: [InputComponent, OutputComponent],
    templateUrl: './ai.component.html',
    styleUrl: './ai.component.css'
})
export class AiComponent {
    public qnas: QNAModel[] = null;

    public constructor(private promptEngineeringService: PromptEngineeringService, private gptService: GptService) { }

    public async send(details: DetailModel) {

        try {

            this.qnas = [];
            const prompt = this.promptEngineeringService.createPrompt(details)


            const completions = await this.gptService.getCompletion(prompt);

            const json = this.extractJson(completions);
            this.qnas = JSON.parse(json);

        } catch (error: any) {
            alert(error.message)
        }

    }

    private extractJson(completion: string): string {
        const index1 = completion.indexOf("[");
        const index2 = completion.lastIndexOf("]");
        const json = completion.substring(index1, index2 + 1);
        return json;
    }

}
