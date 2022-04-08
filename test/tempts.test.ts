import * as tempts from "../src/tempts";

describe("Event put", () => {
    it("Put test", async () => {
        const retVal = 'This is stubbed method';
        tempts.TempNameSpace.method = jest.fn(() => {return Promise.resolve(retVal)});
        const val = await tempts.TempNameSpace.put();
        expect(val).toBe(retVal);
    });

    it("Get test", async () => {
        const methodSpy = jest.spyOn(tempts, "method2");
        methodSpy.mockImplementation(() => {return Promise.resolve("This is stubbed method")});
        const val = await tempts.TempNameSpace.get();
        expect(val).toBe("This is stubbed method");
    });
});