import * as hangar from "../src/hangar";

describe("Event put", () => {
    it("Put test", async () => {
        const retVal = 'This is stubbed method';
        hangar.Event.syncMethod = jest.fn(() => {return Promise.resolve(retVal)});
        const val = await hangar.Event.put();
        expect(val).toBe(retVal);
    });

    it("Get test", async () => {
        const syncMethodSpy = jest.spyOn(hangar, "syncMethod2");
        syncMethodSpy.mockImplementation(() => {return Promise.resolve("This is stubbed method")});
        const val = await hangar.Event.get();
        expect(val).toBe("This is stubbed method");
    });
});