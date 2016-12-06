import {Component, Input} from "@angular/core";
import {StateService, exerciseComplete} from "../state.service";
import {ExerciseConfig} from "../exercise-config";


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {
<<<<<<< HEAD
  @Input()
  public config: ExerciseConfig;

  private currentAutorunState: AutorunControlInterface = {
    autorun:this.state.getAutorun(),
    running: false
  }; //momo


  private changedFiles:any[] = []; //momo
=======
  @Input() public config: ExerciseConfig;

>>>>>>> 6846a5bc02b62f44457239c8679022a269ac686a

  constructor(private state: StateService) {
  }

  onCodeChange(changedFile) {
    this.state.updateCode(changedFile);
  }
}
