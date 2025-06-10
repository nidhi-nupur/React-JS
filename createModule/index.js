// import sumData from "./calculator.js"; /* Default Import -> for one function Importation only */

import { sumData, minData } from "./calculator.js"; /* Named Import -> for multiple Functions Importation */

import { myName } from "./calculator.js"; /* Named Import */
import { myName as mN} from "./calculator.js"; /* Adding module name's alias(Pet name) */


console.log(sumData(2, 7), minData(2, 7), myName , mN);