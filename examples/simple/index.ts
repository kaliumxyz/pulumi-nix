import * as nix from "./nix"

const random = new nix.Random("my-random", { length: 24 });

export const output = random.result;
