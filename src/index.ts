import AppFlags from "appflags";
import {useFlag} from "./hooks";

const pkg = require("../package.json");
AppFlags._setSdk("react", pkg.version);

export default AppFlags;
export {
    useFlag
}