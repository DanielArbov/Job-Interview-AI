import { Component, EventEmitter, Output, output } from '@angular/core';
import { DetailModel } from '../../../models/details.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-input',
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css'
})
export class InputComponent {
    public details = new DetailModel();

    @Output()
    public selected = new EventEmitter<DetailModel>();

    public async send() {
        this.selected.emit(this.details)
    }
}
