import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";
data.filter((element) => console.log(element.URL));

console.log(example, renderItems(data), data);
