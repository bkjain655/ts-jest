export namespace Event {
    export async function put(){
        console.log("Performing put method");
        let res = await Event.syncMethod();
        return res;
    }

    export async function get(){
        console.log("Performing get method");
        let res = await exports.syncMethod2();
        return res;
    }


    export async function syncMethod() {
        return Promise.resolve("abc");
    }
}


export async function syncMethod2() {
    return Promise.resolve("Sync Method 2");
}