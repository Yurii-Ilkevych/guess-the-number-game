import { getStartNumber } from "../../working-with-memory";
import { getIntendedNumber } from "../../working-with-memory";
export function generateNumber() {
  return (
    Math.floor(
      Math.random() * (getStartNumber().to - getStartNumber().from + 1)
    ) + getStartNumber().from
  );
}

export function auditIntendedNumber(number) {
  if (number === getIntendedNumber()) {
    return true;
  }
  return false;
}
