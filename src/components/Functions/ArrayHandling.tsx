import { Post } from "../ObjectShapes/PageShapes";
import { Label } from "../ObjectShapes/Strings";

export function PageFilterByLabel(arr: Post[], label: Label): Post[] {
  return arr.filter(value => value.info.label === label)
}