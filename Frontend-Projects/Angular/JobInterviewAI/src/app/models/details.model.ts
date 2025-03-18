export enum Level {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Export = "Export"
}


export class DetailModel {
    public subject: string;
    public count = 5;
    public level = Level.Beginner;
}