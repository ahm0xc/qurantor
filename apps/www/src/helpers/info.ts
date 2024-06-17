import InfoData from "~/data/info.json";

export function getInfo() {
  return {
    ...InfoData,
  };
}
