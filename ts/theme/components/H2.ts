import { Platform } from "react-native";

import { makeFontStyleObject } from "../fonts";
import { Theme } from "../types";
import variables from "../variables";

export default (): Theme => {
  return {
    ...makeFontStyleObject(Platform.select, variables.h2FontWeight),
    color: variables.h2Color,
    fontSize: variables.h2FontSize,
    lineHeight: variables.h2LineHeight,
    ".inMessage": {
      marginTop: variables.fontSizeBase * 1.75,
      marginBottom: variables.fontSizeBase * 0.5,
      lineHeight: 32,
      fontSize: variables.fontSize5
    }
  };
};
