export namespace TempNameSpace {
    export async function put(){
        console.log("Performing put method");
        let res = await TempNameSpace.method();
        return res;
    }

    export async function get(){
        console.log("Performing get method");
        let res = await exports.method2();
        return res;
    }


    export async function method() {
        return Promise.resolve("abc");
    }
}


export async function method2() {
    return Promise.resolve("Sync Method 2");
}