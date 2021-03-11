import {ProjectDefinition} from "./ProjectDefinition";
import {DatePoll} from "../../pages/projects/datepoll";
import {LocalSIF} from "../../pages/projects/sif";
import {WaterLevelMonitor} from "../../pages/projects/wlm";

const PROJECTS: ProjectDefinition[] = [
    DatePoll,
    LocalSIF,
    WaterLevelMonitor
]

export default PROJECTS;