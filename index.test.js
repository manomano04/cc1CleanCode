import { describe, it, expect } from "vitest";
import {test} from "./index.js";
describe("index", () => {

    it("test chance", () => {
        const dices = [[1,1,4,6,3]]
        expect(test(dices)).toBe(15);
    })

    it("yams : should return 50", () => {
        const dices = [[1,1,1,1,1]]
        expect(test(dices)).toBe(50);
    })

    it("carré : shoul return 35", () => {
        const dices = [[1,1,1,1,2]]
        expect(test(dices)).toBe(35);
    })

    it("full : should return 30", () => {
        const dices = [[1,1,1,2,2]]
        expect(test(dices)).toBe(30);
    })

    it("brelan : shoul return 28", () => {
        const dices = [[1,1,1,3,2]]
        expect(test(dices)).toBe(28);
    })

    it("test few figures : brelan and carré should return 63 ", () => {
        const dices = [[1,1,1,1,2], [5,4,2,2,2]]
        expect(test(dices)).toBe(63);
    })




})