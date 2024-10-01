import {ProjectDefinition} from "./ProjectDefinition";
import {DatePoll} from "../../pages/projects/datepoll";
import {LocalSIF} from "../../pages/projects/sif";
import {WaterLevelMonitor} from "../../pages/projects/wlm";
import {WaiterRobot} from "../../pages/projects/waiterrobot";

const PROJECTS: ProjectDefinition[] = [
    WaiterRobot,
    DatePoll,
    LocalSIF,
    WaterLevelMonitor
]

export default PROJECTS;