import { describe, it, expect } from "vitest";
import {test} from "./index.js";
describe("index", () => {

    it("yams : should return 50", () => {
        const dices = [[1,1,1,1,1]]
        expect(test(dices)).toBe(50);
    })

    it("brelan : shoul return 28", () => {
        const dices = [[1,1,1,3,2]]
        expect(test(dices)).toBe(28);
    })

    it("carré : shoul return 35", () => {
        const dices = [[1,1,1,1,2]]
        expect(test(dices)).toBe(35);
    })
})