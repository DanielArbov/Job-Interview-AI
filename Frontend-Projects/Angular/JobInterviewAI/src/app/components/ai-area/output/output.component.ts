import { Component, Input } from '@angular/core';
import { QNAModel } from '../../../models/qna.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { SpinnerComponent } from "../../shared-area/spinner/spinner.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-output',
    imports: [MatExpansionModule, SpinnerComponent, CommonModule],
    templateUrl: './output.component.html',
    styleUrl: './output.component.css'
})
export class OutputComponent {
    @Input()
    public qnas: QNAModel[] = null;


}
